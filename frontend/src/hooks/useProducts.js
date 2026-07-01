import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "@/services/productService";
import { useState } from "react";
import toast from "react-hot-toast";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const data = await getAllProducts();
      setProducts(data);
    } catch (err) {
      toast.error("No products !");
    } finally {
      setLoading(false);
    }
  };
  const handleCreate = async (productDetail) => {
    setLoading(true);
    try {
      const data = await createProduct(productDetail);
      toast.success("Product created successfully !");
      fetchProducts();
    } catch (err) {
      toast.error("Failed to create Product");
    } finally {
      setLoading(false);
    }
  };
  const handleUpdate = async (id, ProductDetail) => {
    setLoading(true);
    try {
      const data = await updateProduct(id, ProductDetail);
      toast.success("Product updated successfully !");
      fetchProducts();
    } catch (err) {
      toast.error("Failed to update product");
    } finally {
      setLoading(false);
    }
  };
  const handleDelete = async (id) => {
    setLoading(true);
    try {
      const data = await deleteProduct(id);
      fetchProducts();
    } catch (err) {
      toast.error("Failed to delete the product !");
    } finally {
      setLoading(false);
    }
  };
  return {
    fetchProducts,
    products,
    loading,
    handleCreate,
    handleUpdate,
    handleDelete,
  };
};
export default useProducts;
