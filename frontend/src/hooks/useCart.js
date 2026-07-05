import useCartStore from "@/stores/cartStore";
import useAuthStore from "@/stores/authStore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useCart = () => {
  const { items, addToCart, removeFromCart, updateQuantity, clearCart } = useCartStore();
  const { token } = useAuthStore();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    if (!token) {
      toast.error("Please login to add items to cart!");
      navigate("/login");
      return;
    }
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const handleRemove = (id) => {
    removeFromCart(id);
    toast.success("Item removed from cart!");
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }
    updateQuantity(id, quantity);
  };

  const totalPrice = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity, 0
  );

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return {
    items,
    totalPrice,
    totalItems,
    handleAddToCart,
    handleRemove,
    handleQuantityChange,
    clearCart,
  };
};

export default useCart;