import { Request, Response } from "express";
import { getDashboardService, getProfileService } from "./panel.service";
import { async } from "rxjs";

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
    data: result,
  });
};
