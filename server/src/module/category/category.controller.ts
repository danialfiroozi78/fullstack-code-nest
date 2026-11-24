import { Response, Request } from "express";
import { getCategoriesService } from "./category.service";

export const getCategoriesController = async (req: Request, res: Response) => {
  const result = await getCategoriesService();

  return res.status(200).json({
    success: true,
    statusCode: 200,
    message: "دسته بندی ها با موفقیت دریافت شدند",
    data: result,
  });
};
