import { BaseApi } from "../baseApi";
import { apiUrls } from "@/utils/apiUrls";
import { ApiRes } from "@/types/common.type";
import {
  GetDashboardResType,
  GetMyCourseResType,
  GetMyOrdersResType,
  ProfileResType,
} from "@/types/response.type";

export const PanelQuery = BaseApi.injectEndpoints({
  endpoints(build) {
    return {
      getProfile: build.query<ApiRes<ProfileResType>, null>({
        query: () => ({
          url: apiUrls.panel.profile,
        }),
      }),
      getDashboard: build.query<ApiRes<GetDashboardResType>, null>({
        query: () => ({
          url: apiUrls.panel.dashboard,
        }),
      }),
      getMyCourses: build.query<ApiRes<GetMyCourseResType>, null>({
        query: () => ({
          url: apiUrls.panel.myCourse,
        }),
      }),
      getMyOrders: build.query<ApiRes<GetMyOrdersResType>, null>({
        query: () => ({
          url: apiUrls.panel.myOrder,
        }),
      }),
    };
  },
});

export const {
  useGetDashboardQuery,
  useGetMyCoursesQuery,
  useGetMyOrdersQuery,
  useGetProfileQuery,
} = PanelQuery;
