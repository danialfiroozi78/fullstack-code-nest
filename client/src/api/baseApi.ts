import axiosBaseQuery from "@/lib/redux/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

export const BaseApi = createApi({
  reducerPath: "BaseApi",
  baseQuery: axiosBaseQuery({
    transformResponse: (response) => response,
  }),
  tagTypes: ["cart"],
  endpoints() {
    return {};
  },
});
