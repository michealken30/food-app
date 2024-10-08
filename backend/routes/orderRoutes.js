import express from "express";
import authMiddleware from "../midldewares/auth.js";
import {
  listOrders,
  placeOrder,
  userOrder,
  verifyOrder,
} from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/userorders", authMiddleware, userOrder);
orderRouter.get("/list", listOrders);

export default orderRouter;
