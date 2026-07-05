import { create } from "zustand";

const useCartStore = create((set) => ({
  items: JSON.parse(localStorage.getItem("cart")) || [],

  addToCart: (product) =>
    set((state) => {
      const existing = state.items.find((item) => item.product._id === product._id);
      let updatedItems;
      if (existing) {
        updatedItems = state.items.map((item) =>
          item.product._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedItems = [...state.items, { product, quantity: 1 }];
      }
      localStorage.setItem("cart", JSON.stringify(updatedItems));
      return { items: updatedItems };
    }),

  removeFromCart: (id) =>
    set((state) => {
      const updatedItems = state.items.filter((item) => item.product._id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedItems));
      return { items: updatedItems };
    }),

  updateQuantity: (id, quantity) =>
    set((state) => {
      const updatedItems = state.items.map((item) =>
        item.product._id === id ? { ...item, quantity } : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedItems));
      return { items: updatedItems };
    }),

  clearCart: () => {
    localStorage.removeItem("cart");
    set({ items: [] });
  },
}));

export default useCartStore;