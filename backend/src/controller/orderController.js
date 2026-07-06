import Order from "../models/order.js";
import users from "../models/user.js";
const createOrder = async (req, res) => {
  const { user, products, totalAmount, shippingAddress } = req.body;
  try {
    const Ordered = await Order.create({
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
    const orders = await Order.find({ user: req.user._id })
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("user", "name email");
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const cancelOrder = async (req, res) => {
  try {
    const found = await Order.findById(req.params.id); 
    if (!found) return res.status(404).json({ message: "Order not found" });
    if (found.status !== "Pending")
      return res.status(400).json({ message: "Only pending orders can be cancelled" });
    found.status = "Cancelled";
    await found.save();
    res.status(200).json({ message: "Order cancelled" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const updated = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "Order not found" });
    res.status(200).json({ message: "Status updated", order: updated });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  createOrder,
  getUserOrders,
  getAllOrders,
  cancelOrder,
  updateOrderStatus,
};
