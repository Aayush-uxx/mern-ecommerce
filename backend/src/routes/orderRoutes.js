import express from "express";
import { createOrder,getUserOrders,getAllOrders } from "../controller/orderController.js";
import { authAdmin,adminCheck } from "../middleware/authMiddleware.js";
const router = express.Router();
router.post("/",authAdmin, createOrder);
router.get("/",authAdmin,adminCheck,getAllOrders);
router.get("/my-orders",authAdmin,getUserOrders);
export default router;
