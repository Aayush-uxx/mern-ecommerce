import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/layout";
import useCart from "@/hooks/useCart";
import useAuth from "@/hooks/useAuth";
import useOrders from "@/hooks/useOrders";
import toast from "react-hot-toast";

const Cart = () => {
  const { items, totalPrice, handleRemove, handleQuantityChange, clearCart } = useCart();
  const { user } = useAuth();
  const { handleCreateOrder } = useOrders();

  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [shippingAddress, setShippingAddress] = useState({
    street: "",
    city: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    if (!shippingAddress.city || !shippingAddress.phone) {
      toast.error("Please fill city and phone number!");
      return;
    }

    if (paymentMethod === "khalti") {
      toast.error("Khalti integration coming soon!");
      return;
    }

    setLoading(true);
    try {
      await handleCreateOrder({
        user: user?.id,
        products: items.map((item) => ({
          productId: item.product._id,
          name: item.product.name,
          price: item.product.price,
        })),
        totalAmount: totalPrice,
        shippingAddress,
      });
      clearCart();
    } catch (err) {
      toast.error("Order failed. Try again!");
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <Layout>
        <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center gap-4">
          <p className="text-6xl">🛒</p>
          <h2 className="text-2xl font-bold text-gray-700">Your cart is empty</h2>
          <p className="text-gray-400">Add some products to get started</p>
          <Link
            to="/products"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Browse Products
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen py-10 px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 flex flex-col gap-4">
              {items.map((item) => (
                <div key={item.product._id} className="bg-white rounded-2xl shadow-md p-4 flex gap-4 items-center">
                  <img
                    src={
                      item.product.image?.startsWith("http")
                        ? item.product.image
                        : `http://localhost:5000/${item.product.image}`
                    }
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-xl bg-gray-100"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/80?text=No+Image"; }}
                  />

                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">{item.product.name}</p>
                    <p className="text-blue-600 font-bold">Rs. {item.product.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleQuantityChange(item.product._id, item.quantity - 1)}
                      className="w-8 h-8 border rounded-lg flex items-center justify-center hover:bg-gray-100 font-bold"
                    >
                      −
                    </button>
                    <span className="w-8 text-center font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.product._id, item.quantity + 1)}
                      className="w-8 h-8 border rounded-lg flex items-center justify-center hover:bg-gray-100 font-bold"
                    >
                      +
                    </button>
                  </div>

                  <p className="font-bold text-gray-800 w-24 text-right">
                    Rs. {item.product.price * item.quantity}
                  </p>

                  <button
                    onClick={() => handleRemove(item.product._id)}
                    className="text-red-400 hover:text-red-600 transition text-xl ml-2"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-2xl shadow-md p-5">
                <h3 className="font-bold text-gray-800 mb-4">Shipping Address</h3>
                <div className="flex flex-col gap-3">
                  <input
                    type="text"
                    placeholder="Street (optional)"
                    value={shippingAddress.street}
                    onChange={(e) => setShippingAddress({ ...shippingAddress, street: e.target.value })}
                    className="border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="City *"
                    value={shippingAddress.city}
                    onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
                    className="border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Phone *"
                    value={shippingAddress.phone}
                    onChange={(e) => setShippingAddress({ ...shippingAddress, phone: e.target.value })}
                    className="border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-md p-5">
                <h3 className="font-bold text-gray-800 mb-4">Payment Method</h3>
                <div className="flex flex-col gap-3">
                  <label className={`flex items-center gap-3 p-3 border rounded-xl cursor-pointer transition ${paymentMethod === "cod" ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}>
                    <input
                      type="radio"
                      value="cod"
                      checked={paymentMethod === "cod"}
                      onChange={() => setPaymentMethod("cod")}
                      className="accent-blue-600"
                    />
                    <span className="text-2xl">💵</span>
                    <div>
                      <p className="font-medium text-gray-800">Cash on Delivery</p>
                      <p className="text-xs text-gray-400">Pay when you receive</p>
                    </div>
                  </label>

                  <label className={`flex items-center gap-3 p-3 border rounded-xl cursor-pointer transition ${paymentMethod === "khalti" ? "border-purple-500 bg-purple-50" : "border-gray-200"}`}>
                    <input
                      type="radio"
                      value="khalti"
                      checked={paymentMethod === "khalti"}
                      onChange={() => setPaymentMethod("khalti")}
                      className="accent-purple-600"
                    />
                    <span className="text-2xl">💜</span>
                    <div>
                      <p className="font-medium text-gray-800">Khalti</p>
                      <p className="text-xs text-gray-400">Coming soon</p>
                    </div>
                  </label>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-md p-5">
                <h3 className="font-bold text-gray-800 mb-4">Order Summary</h3>
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>Subtotal</span>
                  <span>Rs. {totalPrice}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>Delivery</span>
                  <span className="text-green-600">Free</span>
                </div>
                <hr className="my-3 border-gray-100" />
                <div className="flex justify-between font-bold text-gray-800 text-lg">
                  <span>Total</span>
                  <span className="text-blue-600">Rs. {totalPrice}</span>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl mt-4 font-medium transition disabled:opacity-50"
                >
                  {loading ? "Placing Order..." : "Place Order"}
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;