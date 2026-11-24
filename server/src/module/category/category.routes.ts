import { Router } from "express";
import { getCategoriesController } from "./category.controller";

const router = Router();

router.get("/", getCategoriesController);

export default router;
