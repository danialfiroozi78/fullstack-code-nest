import { BaseApi } from "../baseApi";
import { ApiRes } from "@/types/common.type";
import { apiUrls } from "@/utils/apiUrls";
import { CartResType } from "@/types/response.type";

export const CartQuery = BaseApi.injectEndpoints({
  endpoints(build) {
    return {
      getCart: build.query<ApiRes<CartResType>, null>({
        query: () => ({
          url: apiUrls.cart.index,
        }),
        providesTags: ["cart"],
      }),
    };
  },
});

export const { useGetCartQuery } = CartQuery;
