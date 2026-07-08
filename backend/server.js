import express from "express";
import dbConnect from "./src/config/db.js";
import authRoutes from "./src/routes/authRoutes.js";
import productRoutes from "./src/routes/productRoutes.js";
import orderRoutes from "./src/routes/orderRoutes.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Ensure the Mongo connection is established (or reused from a previous
// warm invocation) before any route handler runs. This avoids requests
// hitting the DB before Mongoose has finished connecting on a cold start,
// which was surfacing as random 400/500 errors on Vercel.
app.use(async (req, res, next) => {
  try {
    await dbConnect();
    next();
  } catch (error) {
    res.status(500).json({ message: "Database connection failed" });
  }
});

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

// Vercel invokes `app` as a serverless function directly, so app.listen()
// must only run for local/traditional server environments.
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`your server is running on port http://localhost:${PORT}`);
  });
}
export default app;
