import { Router } from "express";
import {
  getCourseController,
  getCourseDetailsController,
  getNewestCourseController,
} from "./course.controller";

const router = Router();

router.get("/", getCourseController);
router.get("/newest", getNewestCourseController);
router.get("/:slug", getCourseDetailsController);

export default router;
