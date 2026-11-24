import { ApiRes } from "@/types/common.type";
import { BaseApi } from "../baseApi";
import { apiUrls } from "@/utils/apiUrls";

export const OrderMutation = BaseApi.injectEndpoints({
  endpoints(build) {
    return {
      checkout: build.mutation<ApiRes, null>({
        query: () => ({
          method: "POST",
          url: apiUrls.order.checkout,
        }),
      }),
    };
  },
});

export const { useCheckoutMutation } = OrderMutation;
