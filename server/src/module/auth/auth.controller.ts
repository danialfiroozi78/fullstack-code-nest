import type { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";

import {
  sendOtpService,
  verifyOtpService,
  completeRegistrationService,
} from "./auth.service";

import {
  completeRegistrationSchema,
  sendOtpSchema,
  verifyOtpSchema,
} from "./auth.schema";

import {
  clearRegistrationCookie,
  setAuthCookie,
  setRegistrationCookie,
} from "../../utils/auth-cookie";

const isProduction = process.env.NODE_ENV === "production";

// SEND OTP
export const sendOtpController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { phoneNumber } = sendOtpSchema.parse(req.body);

    const result = await sendOtpService(phoneNumber);

    res.status(200).json({
      success: true,
      message: "کد تأیید ارسال شد",
      statusCode: 200,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// VERIFY OTP
export const verifyOtpController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = verifyOtpSchema.parse(req.body);
    const result = await verifyOtpService(data);

    if (result.isNewUser) {
      setRegistrationCookie(res, result.registrationToken);

      res.status(200).json({
        success: true,
        message: "شماره موبایل تأیید شد",
        data: {
          isNewUser: true,
          expiresIn: result.expiresIn,
        },
      });

      return;
    }

    clearRegistrationCookie(res);
    setAuthCookie(res, result.accessToken);

    res.status(200).json({
      success: true,
      message: "ورود با موفقیت انجام شد",
      data: {
        isNewUser: false,
        user: result.user,
      },
    });
  } catch (error) {
    next(error);
  }
};

// COMPLETE REGISTRATION
export const completeRegistrationController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = completeRegistrationSchema.parse(req.body);

    const registrationToken = req.cookies?.registration_token;

    if (
      typeof registrationToken !== "string" ||
      !/^[a-f0-9]{64}$/.test(registrationToken)
    ) {
      throw createHttpError(401, "ابتدا شماره موبایل خود را تأیید کنید");
    }

    const result = await completeRegistrationService({
      ...data,
      registrationToken,
    });

    clearRegistrationCookie(res);
    setAuthCookie(res, result.accessToken);

    res.status(201).json({
      success: true,
      message: "ثبت‌ نام با موفقیت انجام شد",
      data: {
        user: result.user,
      },
    });
  } catch (error) {
    next(error);
  }
};

// LOGOUT
export const logoutController = async (req: Request, res: Response) => {
  res.clearCookie("access_token", {
    httpOnly: true,
    secure: process.env.COOKIE_SECURE === "true",
    sameSite: "lax",
    path: "/",
    domain: process.env.COOKIE_DOMAIN || undefined,
  });

  return res.status(200).json({
    success: true,
    statusCode: 200,
    message: "با موفقیت از حساب کاربری خارج شدید",
  });
};
