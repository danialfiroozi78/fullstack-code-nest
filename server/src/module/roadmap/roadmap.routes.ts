import { Router } from "express";
import {
  getRoadmapsController,
  getRoadmapStepsController,
} from "./roadmap.controller";

const router = Router();

router.get("/", getRoadmapsController);
router.get("/:slug", getRoadmapStepsController);

export default router;
