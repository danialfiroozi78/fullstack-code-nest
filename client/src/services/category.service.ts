import axiosInstance from "@/utils/axios";
import { apiUrls } from "@/utils/apiUrls";

export const getCategories = async () => {
  const { data } = await axiosInstance.get<{
    data: { id: number; name: string; slug: string }[];
  }>(apiUrls.categories.index);

  return data;
};
