import { useEffect, useState } from "react";
import Layout from "@/components/layout/layout";
import useOrders from "@/hooks/useOrders";

const getStatusColor = (status) => {
  if (status === "Delivered") return "bg-green-100 text-green-700";
  if (status === "Pending") return "bg-yellow-100 text-yellow-700";
  if (status === "Cancelled") return "bg-red-100 text-red-700";
  if (status === "Shipped") return "bg-blue-100 text-blue-700";
  if (status === "Processing") return "bg-purple-100 text-purple-700";
  return "bg-gray-100 text-gray-600";
};

const OrderHistory = () => {
  const { orders, loading, fetchMyOrders, handleCancelOrder } = useOrders();
  const [cancellingId, setCancellingId] = useState(null);

  useEffect(() => {
    fetchMyOrders();
  }, []);

  const confirmCancel = async (id) => {
    setCancellingId(id);
    await handleCancelOrder(id);
    setCancellingId(null);
  };

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen py-10 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Order History</h1>
            <p className="text-gray-500 mt-1">All your past and current orders</p>
          </div>

          {loading ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">Loading your orders...</p>
            </div>
          ) : orders.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-md p-16 text-center">
              <p className="text-5xl mb-4">🛍️</p>
              <p className="text-xl font-semibold text-gray-700">No orders yet</p>
              <p className="text-gray-400 mt-2">Start shopping to see your orders here</p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {orders.map((order) => (
                <div key={order._id} className="bg-white rounded-2xl shadow-md p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="font-bold text-gray-800 text-lg">
                        Order #{order._id.slice(-6).toUpperCase()}
                      </p>
                      <p className="text-sm text-gray-400 mt-1">
                        Placed on {new Date(order.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-4 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                      {order.status === "Pending" && (
                        <button
                          onClick={() => confirmCancel(order._id)}
                          disabled={cancellingId === order._id}
                          className="px-3 py-1 bg-red-50 text-red-500 border border-red-200 rounded-full text-sm hover:bg-red-100 transition disabled:opacity-50"
                        >
                          {cancellingId === order._id ? "Cancelling..." : "Cancel"}
                        </button>
                      )}
                    </div>
                  </div>

                  <hr className="border-gray-100 mb-4" />

                  <div className="flex flex-col gap-2 mb-4">
                    {order.products.map((product, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <p className="text-gray-700">{product.name}</p>
                        <p className="text-gray-500">Rs. {product.price}</p>
                      </div>
                    ))}
                  </div>

                  <hr className="border-gray-100 mb-4" />

                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-400">
                      <p>📍 {order.shippingAddress?.city}{order.shippingAddress?.street ? `, ${order.shippingAddress.street}` : ""}</p>
                      <p>📞 {order.shippingAddress?.phone}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-400">Total</p>
                      <p className="text-xl font-bold text-blue-600">Rs. {order.totalAmount}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default OrderHistory;