import { BaseApi } from "../baseApi";
import { apiUrls } from "@/utils/apiUrls";
import { ApiRes } from "@/types/common.type";
import { GetDashboardResType } from "@/types/response.type";

export const PanelQuery = BaseApi.injectEndpoints({
  endpoints(build) {
    return {
      getDashboard: build.query<ApiRes<GetDashboardResType>, null>({
        query: () => ({
          url: apiUrls.panel.dashboard,
        }),
      }),
    };
  },
});

export const { useGetDashboardQuery } = PanelQuery;
