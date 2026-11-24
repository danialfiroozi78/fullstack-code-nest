import { Request, Response } from "express";
import { getRoadmapsService, getRoadmapStepsService } from "./roadmap.service";

export const getRoadmapsController = async (req: Request, res: Response) => {
  const result = await getRoadmapsService();

  return res.status(200).json({
    success: true,
    statusCode: 200,
    message: "مسیر های یادگیری با موفقیت دریافت شدند",
    data: result,
  });
};

export const getRoadmapStepsController = async (
  req: Request,
  res: Response,
) => {
  const slug = req.params.slug as string;

  const result = await getRoadmapStepsService(slug);

  return res.status(200).json({
    success: true,
    statusCode: 200,
    message: "مسیر های یادگیری با موفقیت دریافت شدند",
    data: result,
  });
};
