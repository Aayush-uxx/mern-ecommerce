import order from "../models/order.js";
import users from "../models/user.js";
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
const getUserOrders = async (req, res) => {
  try {
    const orders = await order.find({ user: req.user._id });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await order.find().populate("user", "name email");
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export { createOrder,getUserOrders,getAllOrders };
