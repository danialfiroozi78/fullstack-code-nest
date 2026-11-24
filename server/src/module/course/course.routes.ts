import { Router } from "express";
import {
  getCourseController,
  getCourseDetailsController,
} from "./course.controller";

const router = Router();

router.get("/", getCourseController);
router.get("/:slug", getCourseDetailsController);

export default router;
