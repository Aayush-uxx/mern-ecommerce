import express from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controller/productController.js";
import { authAdmin, adminCheck } from "../middleware/authMiddleware.js";
import upload from "../middleware/upload.js";
const router = express.Router();
router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", authAdmin, adminCheck,upload.single("image"), createProduct);
router.put("/:id", authAdmin, adminCheck, updateProduct);
router.delete("/:id", authAdmin, adminCheck, deleteProduct);
export default router;
