"use client";

import {
  useSendOtpMutation,
  useSignUpMutation,
  useVerifyOtpMutation,
} from "@/api/mutation/auth.mutation";
import {
  SendOtpFormType,
  SignUpFormType,
  VerifyOtpFormType,
} from "@/types/form.type";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function useAuth() {
  type AuthStep = "phone" | "otp" | "profile";

  const { replace, refresh } = useRouter();

  const steps = [
    { id: "phone", title: "شماره موبایل" },
    { id: "otp", title: "تأیید شماره" },
    { id: "profile", title: "تکمیل اطلاعات" },
  ] as const;

  const sendOtpForm = useForm<SendOtpFormType>();
  const verifyOtpForm = useForm<VerifyOtpFormType>();
  const profileForm = useForm<SignUpFormType>();

  const [step, setStep] = useState<AuthStep>("phone");

  const currentStep = steps.findIndex((item) => item.id === step);

  const [sendOtpMutation, { data: sendOtpData, isLoading: sendOtpLoading }] =
    useSendOtpMutation();

  const [verifyOtpMutation, { isLoading: verifyOtpLoading }] =
    useVerifyOtpMutation();

  const [signUpMutation, { isLoading: signUpLoading }] = useSignUpMutation();

  const [timer, setTimer] = useState(sendOtpData?.data?.resendAfter || 60);

  useEffect(() => {
    if (timer <= 0) return;

    const timeout = setTimeout(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [timer]);

  const sendOtpFn: SubmitHandler<SendOtpFormType> = (data) => {
    sendOtpMutation(data)
      .unwrap()
      .then((data) => {
        if (data?.success) {
          setStep("otp");
          toast.success(data?.message);
        }
      });
  };

  const verifyOtpFn: SubmitHandler<VerifyOtpFormType> = (data) => {
    verifyOtpMutation({
      code: data?.otp,
      phoneNumber: sendOtpForm?.getValues("phoneNumber"),
    })
      .unwrap()
      .then((data) => {
        if (data?.success) {
          if (data?.data?.isNewUser) {
            setStep("profile");
            toast.success(data?.message);
          } else {
            replace("/panel");
            refresh();
            setStep("phone");
            profileForm.setValues({
              firstName: "",
              lastName: "",
            });
            toast.success(data?.message);
          }
        }
      });
  };

  const signUpFn: SubmitHandler<SignUpFormType> = (data) => {
    signUpMutation(data)
      .unwrap()
      .then((data) => {
        if (data?.success) {
          toast.success(data?.message);
          replace("/panel");
          refresh();
          setStep("phone");
          profileForm.setValues({
            firstName: "",
            lastName: "",
          });
        }
      });
  };

  return {
    verifyOtpForm,
    sendOtpForm,
    profileForm,
    step,
    setStep,
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
  };
}
