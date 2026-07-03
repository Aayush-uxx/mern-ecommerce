import API from "@/lib/axios";
import useAuthStore from "@/stores/authStore";

const getToken = () => useAuthStore.getState().token;
export const createOrder = async ({
    user,
    products,
    totalAmount,
    shippingAddress,
  }) => {
  const { data } = await API.post(
    "/api/orders",
    {
      user,
      products,
      totalAmount,
      shippingAddress,
    },
    {
      headers: { Authorization: `Bearer ${getToken()}` },
    }
  );
  return data;
};
export const getUserOrder = async () => {
  const { data } = await API.get("/api/orders/my-orders", {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  return data;
};
export const getAllOrders = async () => {
  const { data } = await API.get("/api/orders/", {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  return data;
};
