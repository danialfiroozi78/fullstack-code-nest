import { Router } from "express";
import {
  getDashboardController,
  getMyCourseController,
  getMyOrdersController,
  getProfileController,
} from "./panel.controller";

const router = Router();

router.get("/profile", getProfileController);
router.get("/dashboard", getDashboardController);
router.get("/my-course", getMyCourseController);
router.get("/my-order", getMyOrdersController);

export default router;
