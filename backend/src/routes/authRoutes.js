import express from "express";
import { registerUser, loginUser, getUsers, deleteUser } from "../controller/authController.js";
import { authAdmin, adminCheck } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/users", authAdmin, adminCheck, getUsers);
router.delete("/users/:id", authAdmin, adminCheck, deleteUser);

export default router;
