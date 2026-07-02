import API from "../lib/axios";
import useAuthStore from "@/stores/authStore";

const getToken = () => useAuthStore.getState().token;

export const loginUser = async (email, password) => {
  const { data } = await API.post("/api/auth/login", { email, password });
  return data;
};

export const register = async (name, email, password) => {
  const { data } = await API.post("/api/auth/register", { name, email, password });
  return data;
};

export const getAllUsers = async () => {
  const { data } = await API.get("/api/auth/users", {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  return data;
};

export const deleteUserById = async (id) => {
  const { data } = await API.delete(`/api/auth/users/${id}`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  return data;
};
