import { z } from "zod";

export const sendOtpSchema = z.object({
  phoneNumber: z
    .string("وارد کردن شماره موبایل الزامی است")
    .regex(/^09\d{9}$/, "شماره موبایل معتبر نیست"),
});

export const verifyOtpSchema = z.object({
  phoneNumber: z
    .string("ارسال شماره موبایل الزامی است")
    .regex(/^09\d{9}$/, "شماره موبایل معتبر نیست"),

  code: z
    .string("وارد کردن کد یکبار مصرف الزامی است")
    .regex(/^\d{5}$/, "کد تأیید باید ۵ رقم باشد"),
});

export const completeRegistrationSchema = z.object({
  firstName: z.string("وارد کردن نام الزامی است").trim().min(2).max(100),
  lastName: z
    .string("وارد کردن نام خانوادگی الزامی است")
    .trim()
    .min(2)
    .max(100),
});
