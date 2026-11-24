import { ApiRes } from "@/types/common.type";
import { BaseApi } from "../baseApi";
import { apiUrls } from "@/utils/apiUrls";

export const CartMutation = BaseApi.injectEndpoints({
  endpoints(build) {
    return {
      deleteCartItem: build.mutation<ApiRes, { courseId: number }>({
        query: (data) => ({
          method: "DELETE",
          url: apiUrls.cart.deleteItem + data?.courseId,
          data,
        }),
        invalidatesTags: ["cart"],
      }),
      addCartItem: build.mutation<ApiRes, { courseId: number }>({
        query: (data) => ({
          method: "POST",
          url: apiUrls.cart.addItem + data?.courseId,
          data,
        }),
        invalidatesTags: ["cart"],
      }),
    };
  },
});

export const { useDeleteCartItemMutation, useAddCartItemMutation } =
  CartMutation;
