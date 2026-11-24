import { Router } from "express";
import {
  addItemToCartController,
  getCartController,
  removeItemFromCartController,
} from "./cart.controller";

const router = Router();

// router.delete("/delete/:id"); // make cart empty

router.get("/", getCartController); // get cart
router.post("/add-item/:courseId", addItemToCartController); // add new item

router.delete("/delete-item/:courseId", removeItemFromCartController); // remove item from cart

export default router;
