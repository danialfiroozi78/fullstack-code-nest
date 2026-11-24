import type { Request, Response } from "express";
import {
  getCourseDetailsService,
  getCourseService,
  getNewestCourseService,
} from "./course.service";
import { async } from "rxjs";

export const getCourseController = async (req: Request, res: Response) => {
  const { query } = req;

  const categories =
    typeof query.categories === "string" ? query.categories.split(",") : [];

  const search =
    typeof query.search === "string" ? query.search.toLowerCase() : [];

  const sort = typeof query.sort === "string" ? Number(query.sort) : 1;

  const result = await getCourseService(categories, search.toString(), sort);

  return res.status(200).json({
    success: true,
    statusCode: 200,
    message: "دوره ها با موفقیت دریافت شد",
    data: result,
  });
};

export const getCourseDetailsController = async (
  req: Request,
  res: Response,
) => {
  const params = req.params;
  const result = await getCourseDetailsService(params?.slug as string);

  return res.status(200).json({
    success: true,
    statusCode: 200,
    message: "جزئیات دوره با موفقیت دریافت شد",
    data: result,
  });
};

export const getNewestCourseController = async (
  req: Request,
  res: Response,
) => {
  const result = await getNewestCourseService();

  return res.status(200).json({
    success: true,
    statusCode: 200,
    data: result,
  });
};
