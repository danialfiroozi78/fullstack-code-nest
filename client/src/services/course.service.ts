import axiosInstance from "@/utils/axios";
import { apiUrls } from "@/utils/apiUrls";
import { ApiRes } from "@/types/common.type";
import { CourseDetailsResType, CoursesResType } from "@/types/response.type";

type GetCoursesParams = {
  categories?: string;
  search?: string;
  sort?: string;
};

export const getCourses = async (params: GetCoursesParams = {}) => {
  const { data } = await axiosInstance.get<ApiRes<CoursesResType>>(
    apiUrls.courses.index,
    {
      params,
    },
  );

  return data;
};

export const getCourseDetails = async (slug: string) => {
  const { data } = await axiosInstance.get<ApiRes<CourseDetailsResType>>(
    apiUrls.courses.details + slug,
  );

  return data;
};
