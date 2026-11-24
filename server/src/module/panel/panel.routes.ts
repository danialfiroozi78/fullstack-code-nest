import { Router } from "express";
import {
  getDashboardController,
  getProfileController,
} from "./panel.controller";

const router = Router();

router.get("/profile", getProfileController);
router.get("/dashboard", getDashboardController);

export default router;
