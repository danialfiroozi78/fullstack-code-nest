import { Request, Response } from "express";
import {
  getDashboardService,
  getMyCourseService,
  getMyOrdersService,
  getProfileService,
} from "./panel.service";

export const getProfileController = async (
  req: Request & {
    user?: {
      id: number;
    };
  },
  res: Response,
) => {
  const userId = Number(req.user?.id);

  const result = await getProfileService(userId);

  return res.status(200).json({
    success: true,
    statusCode: 200,
    data: result,
  });
};

export const getDashboardController = async (
  req: Request & {
    user?: {
      id: number;
    };
  },
  res: Response,
) => {
  const userId = Number(req.user?.id);

  const result = await getDashboardService(userId);

  return res.status(200).json({
    success: true,
    statusCode: 200,
    message: "",
    data: result,
  });
};

export const getMyCourseController = async (
  req: Request & {
    user?: {
      id: number;
    };
  },
  res: Response,
) => {
  const userId = Number(req.user?.id);
  const result = await getMyCourseService(userId);

  return res.status(200).json({
    success: true,
    statusCode: 200,
    message: "",
    data: result,
  });
};

export const getMyOrdersController = async (
  req: Request & {
    user?: {
      id: number;
    };
  },
  res: Response,
) => {
  const userId = Number(req.user?.id);
  const result = await getMyOrdersService(userId);

  return res.status(200).json({
    success: true,
    statusCode: 200,
    message: "",
    data: result,
  });
};
