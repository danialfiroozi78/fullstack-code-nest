import "./association/roadmap.association";
import "./association/course.association";
import "./association/cart.associtation";
import "./association/order.association";
import "./association/profile.association";

import cors from "cors";
import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./module/auth/auth.routes";
import { errorHandler, notFoundHandler } from "./middleware/error.middleware";
import categoryRoutes from "./module/category/category.routes";
import roadmapRoutes from "./module/roadmap/roadmap.routes";
import courseRoutes from "./module/course/course.routes";
import * as path from "node:path";
import cartRoutes from "./module/cart/cart.routes";
import { authMiddleware } from "./middleware/auth.middleware";
import orderRoutes from "./module/order/order.routes";
import panelRoutes from "./module/panel/panel.routes";

config();
const app = express();

// Cors
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);

app.use(
  ["/uploads", "/public/uploads"],
  express.static(path.join(process.cwd(), "public", "uploads")),
);
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/roadmap", roadmapRoutes);
app.use("/api/course", courseRoutes);
app.use("/api/cart", authMiddleware, cartRoutes);
app.use("/api/order", authMiddleware, orderRoutes);
app.use("/api/panel", authMiddleware, panelRoutes);

// error handlers
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
