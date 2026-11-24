import { Router } from "express";
import { orderCheckoutController } from "./order.controller";

const router = Router();

router.post("/checkout", orderCheckoutController);

export default router;
