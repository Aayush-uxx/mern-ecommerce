import { createOrder, getAllOrders, getUserOrder, cancelOrder, updateOrderStatus } from "@/services/orderService";
import { useState } from "react";
import toast from "react-hot-toast";

const useOrders = () => {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);

  const fetchMyOrders = async () => {
    setLoading(true);
    try {
      const data = await getUserOrder();
      setOrders(data);
    } catch (err) {
      toast.error("Failed to fetch orders!");
    } finally {
      setLoading(false);
    }
  };

  const fetchAllOrders = async () => {
    setLoading(true);
    try {
      const data = await getAllOrders();
      setOrders(data);
    } catch (err) {
      toast.error("Failed to fetch orders!");
    } finally {
      setLoading(false);
    }
  };

  const handleCreateOrder = async (orderData) => {
    setLoading(true);
    try {
      const data = await createOrder(orderData);
      toast.success("Order placed successfully!");
      return data;
    } catch (err) {
      toast.error("Failed to place order!");
    } finally {
      setLoading(false);
    }
  };

  const handleCancelOrder = async (id) => {
    setLoading(true);
    try {
      await cancelOrder(id);
      toast.success("Order cancelled!");
      fetchMyOrders();
    } catch (err) {
      toast.error("Cannot cancel this order!");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateStatus = async (id, status) => {
    setLoading(true);
    try {
      await updateOrderStatus(id, status);
      toast.success(`Order marked as ${status}!`);
      fetchAllOrders();
    } catch (err) {
      toast.error("Failed to update status!");
    } finally {
      setLoading(false);
    }
  };

  return { fetchMyOrders, fetchAllOrders, handleCreateOrder, handleCancelOrder, handleUpdateStatus, loading, orders };
};

export default useOrders;