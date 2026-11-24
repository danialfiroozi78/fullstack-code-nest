import { BaseApi } from "../baseApi";
import { ApiRes } from "@/types/common.type";
import { apiUrls } from "@/utils/apiUrls";

export const CategoryQuery = BaseApi.injectEndpoints({
  endpoints(build) {
    return {
      getCategories: build.query<
        ApiRes<{ id: number; name: string; slug: string }[]>,
        null
      >({
        query: () => ({
          url: apiUrls.categories.index,
        }),
      }),
    };
  },
});

export const { useGetCategoriesQuery } = CategoryQuery;
