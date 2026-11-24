import { config } from "dotenv";
import { createHash, createHmac, randomBytes, randomInt } from "node:crypto";
import createHttpError from "http-errors";
import { UniqueConstraintError } from "@sequelize/core";
import { UserModel } from "../user/user.model";
import { generateAccessToken } from "../../utils/jwt";
import { redisClient } from "../../config/redis.config";

config();

const isDev = process.env.NODE_ENV === "development";

const OTP_TTL = isDev ? 3600 : 120;
const OTP_COOLDOWN = isDev ? 1 : 60;

const MAX_REQUESTS = isDev ? 1000 : 3;
const REQUEST_WINDOW = isDev ? 3600 : 600;

const MAX_ATTEMPTS = isDev ? 1000 : 5;
const ATTEMPTS_WINDOW = isDev ? 3600 : 600;

const REGISTRATION_TTL = isDev ? 86400 : 600;

const hashOtp = (phoneNumber: string, code: string) => {
  const secret = process.env.OTP_SECRET;

  if (!secret) {
    throw new Error("OTP_SECRET is missing");
  }

  return createHmac("sha256", secret)
    .update(`${phoneNumber}:${code}`)
    .digest("hex");
};

const hashToken = (token: string) => {
  return createHash("sha256").update(token).digest("hex");
};

// --------------------------------------------------
// 1. SEND OTP
// --------------------------------------------------

export const sendOtpService = async (phoneNumber: string) => {
  const otpKey = `otp:${phoneNumber}`;
  const cooldownKey = `otp:cooldown:${phoneNumber}`;
  const requestsKey = `otp:requests:${phoneNumber}`;
  const attemptsKey = `otp:attempts:${phoneNumber}`;

  const result = (await redisClient.eval(
    `
    local count = tonumber(redis.call("GET", KEYS[1]) or "0")
    local maxRequests = tonumber(ARGV[1])
    local window = tonumber(ARGV[2])
    local cooldown = tonumber(ARGV[3])

    if count >= maxRequests then
      return {0, redis.call("TTL", KEYS[1])}
    end

    if redis.call("EXISTS", KEYS[2]) == 1 then
      return {1, redis.call("TTL", KEYS[2])}
    end

    count = redis.call("INCR", KEYS[1])

    if count == 1 then
      redis.call("EXPIRE", KEYS[1], window)
    end

    redis.call("SET", KEYS[2], "1", "EX", cooldown)

    return {2, count}
    `,
    {
      keys: [requestsKey, cooldownKey],
      arguments: [
        String(MAX_REQUESTS),
        String(REQUEST_WINDOW),
        String(OTP_COOLDOWN),
      ],
    },
  )) as number[];

  const [status, value] = result;

  if (status === 0) {
    throw createHttpError(
      429,
      `سقف درخواست‌ها تکمیل شده؛ ${Math.max(0, value)} ثانیه دیگر تلاش کنید`,
    );
  }

  if (status === 1) {
    throw createHttpError(
      429,
      `لطفاً ${Math.max(0, value)} ثانیه دیگر تلاش کنید`,
    );
  }

  const code = randomInt(0, 100000).toString().padStart(5, "0");
  const codeHash = hashOtp(phoneNumber, code);

  await redisClient
    .multi()
    .set(otpKey, codeHash, { EX: OTP_TTL })
    .del(attemptsKey)
    .exec();

  if (process.env.NODE_ENV === "development") {
    console.log(`DEV OTP for ${phoneNumber}: ${code}`);
  }

  return {
    expiresIn: OTP_TTL,
    resendAfter: OTP_COOLDOWN,
    requestsRemaining: MAX_REQUESTS - value,
    code,
  };
};

// --------------------------------------------------
// 2. VERIFY OTP
// --------------------------------------------------

export const verifyOtpService = async (data: {
  phoneNumber: string;
  code: string;
}) => {
  const { phoneNumber, code } = data;

  const otpKey = `otp:${phoneNumber}`;
  const attemptsKey = `otp:attempts:${phoneNumber}`;

  const codeHash = hashOtp(phoneNumber, code);

  const result = await redisClient.eval(
    `
    local attempts = tonumber(redis.call("GET", KEYS[2]) or "0")

    if attempts >= tonumber(ARGV[2]) then
      return -2
    end

    local storedCode = redis.call("GET", KEYS[1])

    if not storedCode then
      return -1
    end

    if storedCode ~= ARGV[1] then
      local count = redis.call("INCR", KEYS[2])

      if count == 1 then
        redis.call("EXPIRE", KEYS[2], ARGV[3])
      end

      return 0
    end

    redis.call("DEL", KEYS[1], KEYS[2])

    return 1
    `,
    {
      keys: [otpKey, attemptsKey],
      arguments: [codeHash, String(MAX_ATTEMPTS), String(ATTEMPTS_WINDOW)],
    },
  );

  if (result === -2) {
    throw createHttpError(429, "تعداد تلاش‌های مجاز به پایان رسیده است");
  }

  if (result === -1) {
    throw createHttpError(400, "کد تأیید منقضی شده یا وجود ندارد");
  }

  if (result === 0) {
    throw createHttpError(400, "کد تأیید اشتباه است");
  }

  if (result !== 1) {
    throw createHttpError(500, "خطا در اعتبارسنجی OTP");
  }

  const user = await UserModel.findOne({
    where: { phoneNumber },
  });

  if (user) {
    const accessToken = generateAccessToken(Number(user.get("id")));

    return {
      isNewUser: false as const,
      accessToken,
      user: {
        id: user.get("id"),
        firstName: user.get("firstName"),
        lastName: user.get("lastName"),
        phoneNumber: user.get("phoneNumber"),
      },
    };
  }

  const registrationToken = randomBytes(32).toString("hex");
  const tokenHash = hashToken(registrationToken);
  const registrationKey = `auth:registration:${tokenHash}`;

  await redisClient.set(registrationKey, phoneNumber, {
    EX: REGISTRATION_TTL,
  });

  return {
    isNewUser: true as const,
    registrationToken,
    expiresIn: REGISTRATION_TTL,
  };
};

// --------------------------------------------------
// 3. COMPLETE REGISTRATION
// --------------------------------------------------

export const completeRegistrationService = async (data: {
  firstName: string;
  lastName: string;
  registrationToken: string;
}) => {
  const { firstName, lastName, registrationToken } = data;

  const tokenHash = hashToken(registrationToken);
  const registrationKey = `auth:registration:${tokenHash}`;

  const phoneNumber = await redisClient.get(registrationKey);

  if (!phoneNumber) {
    throw createHttpError(401, "مجوز ثبت‌ نام معتبر نیست یا منقضی شده است");
  }

  try {
    const user = await UserModel.create({
      firstName,
      lastName,
      phoneNumber,
    });

    const accessToken = generateAccessToken(Number(user.get("id")));

    return {
      accessToken,
      user: {
        id: user.get("id"),
        firstName: user.get("firstName"),
        lastName: user.get("lastName"),
        phoneNumber: user.get("phoneNumber"),
      },
    };
  } catch (error) {
    if (error instanceof UniqueConstraintError) {
      throw createHttpError(409, "این شماره موبایل قبلاً ثبت شده است");
    }

    throw error;
  }
};
