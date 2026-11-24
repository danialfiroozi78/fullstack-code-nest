"use client";

import {
  ArrowLeft,
  RefreshCcw,
  ShieldCheck,
  Smartphone,
  UserRound,
} from "lucide-react";
import { Input } from "@/components/common/Input";
import { Button } from "@/components/common/Button";
import useAuth from "@/hooks/useAuth";
import { replaceCharWithDigit } from "@/utils/functions";
import OTPInput from "@/components/common/Otp";

export default function AuthForm() {
  const {
    sendOtpForm,
    verifyOtpForm,
    profileForm,
    step,
    currentStep,
    sendOtpFn,
    steps,
    verifyOtpFn,
    timer,
    sendOtpData,
    sendOtpLoading,
    verifyOtpLoading,
    signUpLoading,
    signUpFn,
  } = useAuth();

  return (
    <div className="w-fit mt-20 mx-auto rounded-3xl border border-border bg-card px-9 pt-9 shadow-[0_20px_70px_rgba(24,36,59,0.07)]">
      <div className="mb-9 flex items-center gap-2">
        {steps.map((item, index) => (
          <div key={item.id} className="flex flex-1 flex-col gap-2">
            <div
              className={`h-1.5 rounded-full transition-colors ${
                index <= currentStep ? "bg-primary" : "bg-border"
              }`}
            />

            <span
              className={`text-[10px] ${
                index <= currentStep
                  ? "font-semibold text-primary"
                  : "text-text-muted"
              }`}
            >
              {item.title}
            </span>
          </div>
        ))}
      </div>

      <div className="mb-10">
        <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-box text-primary">
          {step === "phone" && <Smartphone size={27} />}
          {step === "otp" && <ShieldCheck size={27} />}
          {step === "profile" && <UserRound size={27} />}
        </div>

        <h1 className="text-xl font-extrabold text-text-primary -mb-2">
          {step === "phone" && "ورود یا ثبت‌ نام"}
          {step === "otp" && "تأیید شماره موبایل"}
          {step === "profile" && "تکمیل حساب کاربری"}
        </h1>

        <p className="mt-3 text-sm text-text-secondary font-light">
          {step === "phone" && "برای شروع یادگیری، شماره موبایلت رو وارد کن."}

          {step === "otp" &&
            `کد تأیید ۵ رقمی ارسال‌شده به ${sendOtpForm.getValues("phoneNumber") || "شماره شما"} رو وارد کن.`}

          {step === "profile" &&
            "اطلاعاتت رو تکمیل کن تا وارد دنیای برنامه‌نویسی بشی!"}
        </p>
      </div>

      {step === "phone" && (
        <form className="space-y-3">
          <Input
            label="شماره موبایل:"
            placeholder="09123456789"
            {...sendOtpForm.register("phoneNumber", {
              required: "این فیلد نمی تواند خالی بماند!",
              pattern: {
                value: /(\+98|0)?9\d{9}/,
                message: "فرمت شماره موبایل درست نمی باشد!",
              },
            })}
            error={sendOtpForm.formState.errors?.phoneNumber?.message}
            maxLength={11}
            inputMode="numeric"
            onInput={(e) => replaceCharWithDigit(e.currentTarget)}
          />

          <Button
            fullWidth
            onClick={sendOtpForm.handleSubmit(sendOtpFn)}
            loading={sendOtpLoading}
          >
            دریافت کد تأیید
            <ArrowLeft size={18} />
          </Button>
        </form>
      )}

      {step === "otp" && (
        <form className="space-y-3">
          <OTPInput
            name="otp"
            control={verifyOtpForm.control}
            rules={{
              required: "کد تأیید الزامی است!",
              pattern: {
                value: /^\d{5}$/,
                message: "کد تأیید باید ۵ رقم باشد!",
              },
            }}
          />
          <div className="flex justify-center mt-2">
            {timer > 0 ? (
              <small className="text-text-secondary">
                <strong className="text-base text-text-primary">{timer}</strong>{" "}
                ثانیه تا ارسال مجدد کد
              </small>
            ) : (
              <Button
                variant="ghost"
                onClick={sendOtpForm.handleSubmit(sendOtpFn)}
              >
                <RefreshCcw className="size-4" />
                ارسال مجدد کد
              </Button>
            )}
          </div>

          <Button
            fullWidth
            onClick={verifyOtpForm.handleSubmit(verifyOtpFn)}
            loading={verifyOtpLoading}
          >
            اعتبار سنجی کد ورود
            <ArrowLeft size={18} />
          </Button>
          <small className="text-center block font-bold">
            {sendOtpData?.data?.code}
          </small>
        </form>
      )}

      {step === "profile" && (
        <form className="space-y-3">
          <Input
            label="نام:"
            {...profileForm.register("firstName", {
              required: "این فیلد نمی تواند خالی بماند!",
            })}
          />
          <Input
            label="نام خانوادگی:"
            {...profileForm.register("lastName", {
              required: "این فیلد نمی تواند خالی بماند!",
            })}
          />

          <Button
            fullWidth
            onClick={profileForm.handleSubmit(signUpFn)}
            loading={signUpLoading}
          >
            ثبت نام
          </Button>
        </form>
      )}

      <p className="mt-8 border-t border-border text-center text-xs text-text-muted py-6">
        با ورود به CodeNest، قوانین و شرایط استفاده از خدمات را می‌پذیرید.
      </p>
    </div>
  );
}
