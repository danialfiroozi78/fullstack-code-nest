import { BaseApi } from "../baseApi";
import { apiUrls } from "@/utils/apiUrls";
import { ApiRes } from "@/types/common.type";
import { RoadmapResType } from "@/types/response.type";

export const RoadmapQuery = BaseApi.injectEndpoints({
  endpoints(build) {
    return {
      getProfile: build.query<ApiRes<RoadmapResType>, null>({
        query: () => ({
          url: apiUrls.roadmaps.index,
        }),
      }),
    };
  },
});

export const { useGetProfileQuery } = RoadmapQuery;
