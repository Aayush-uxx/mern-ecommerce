import mongoose from "mongoose";
const orderSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId },
      name: { type: String, required: true },
      price: { type: Number, required: true },
    },
  ],
  totalAmount: { type: Number, required: true },
  shippingAddress: {
    street: { type: String },
    city: { type: String, required: true },
    phone: { type: String, required: true },
  },
  status: { type: String, default: "Pending" },
});
export default mongoose.model("order", orderSchema);
