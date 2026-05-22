import express from "express";
import dbConnect from "./src/config/db.js";
import authRoutes from "./src/routes/authRoutes.js";
import productRoutes from "./src/routes/productRoutes.js";
import orderRoutes from "./src/routes/orderRoutes.js";

dbConnect();

const app = express();
const PORT = 5000;

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

app.listen(PORT, () => {
  console.log(`your server is running on port http://localhost:${PORT}`);
});
export default app;
