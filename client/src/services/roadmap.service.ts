import axiosInstance from "@/utils/axios";
import { apiUrls } from "@/utils/apiUrls";
import { RoadmapResType, RoadmapStepsResType } from "@/types/response.type";
import { ApiRes } from "@/types/common.type";

export const getRoadmaps = async () => {
  const { data } = await axiosInstance.get<ApiRes<RoadmapResType>>(
    apiUrls.roadmaps.index,
  );

  return data;
};

export const getRoadmapBySlug = async (slug: string) => {
  const { data } = await axiosInstance.get<ApiRes<RoadmapStepsResType>>(
    apiUrls.roadmaps.index + slug,
  );

  return data;
};
