import { ApiRes } from "@/types/common.type";
import { BaseApi } from "../baseApi";
import { apiUrls } from "@/utils/apiUrls";
import { SendOtpResType } from "@/types/response.type";
import { SignUpReqType, VerifyOtpReqType } from "@/types/request.type";

export const AuthMutation = BaseApi.injectEndpoints({
  endpoints(build) {
    return {
      sendOtp: build.mutation<ApiRes<SendOtpResType>, { phoneNumber: string }>({
        query: (data) => ({
          method: "POST",
          url: apiUrls.auth.sendOtp,
          data,
        }),
      }),
      verifyOtp: build.mutation<
        ApiRes<{ isNewUser: boolean }>,
        VerifyOtpReqType
      >({
        query: (data) => ({
          method: "POST",
          url: apiUrls.auth.verifyOtp,
          data,
        }),
      }),
      signUp: build.mutation<ApiRes, SignUpReqType>({
        query: (data) => ({
          method: "POST",
          url: apiUrls.auth.completeRegistration,
          data,
        }),
      }),
      logout: build.mutation<ApiRes, null>({
        query: () => ({
          method: "POST",
          url: apiUrls.auth.logout,
        }),
      }),
    };
  },
});

export const {
  useSendOtpMutation,
  useVerifyOtpMutation,
  useSignUpMutation,
  useLogoutMutation,
} = AuthMutation;
