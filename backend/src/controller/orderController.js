import order from "../models/order.js";

const createOrder = async (req, res) => {
  const { user, products, totalAmount, shippingAddress } = req.body;
  try {
    const Ordered = await order.create({
      user,
      products,
      totalAmount,
      shippingAddress,
    });
    if (!Ordered) {
      res.status(400).json({ message: "Order failed to create" });
    }
    res.status(201).json({ message: "Order created successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export { createOrder };
