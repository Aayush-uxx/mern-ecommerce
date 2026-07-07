import API from "@/lib/axios";
import useAuthStore from "@/stores/authStore";

const getToken = () => useAuthStore.getState().token;

export const getAllProducts = async (limit) => {
  const url = limit ? `/api/products/?limit=${limit}` : `/api/products/`;
  const { data } = await API.get(url);
  return data;
};
export const createProduct = async ({
  name,
  price,  
  description,
  category,
  stock,
  imageFile,
}) => {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("price", price);
  formData.append("description", description);
  formData.append("category", category);
  formData.append("stock", stock);
  formData.append("image", imageFile);
  const { data } = await API.post(`/api/products/`, formData, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  return data;
};
export const updateProduct = async (id, productDetail) => {
  const { data } = await API.put(`/api/products/${id}`, productDetail, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  return data;
};
export const deleteProduct = async (id) => {
  const { data } = await API.delete(`/api/products/${id}`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  return data;
};
