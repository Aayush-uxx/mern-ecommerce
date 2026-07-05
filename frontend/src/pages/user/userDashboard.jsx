import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/layout";
import useAuth from "@/hooks/useAuth";
import useOrders from "@/hooks/useOrders";

const UserDashboard = () => {
  const { user } = useAuth();
  const { orders, loading, fetchMyOrders } = useOrders();
  useEffect(() => {
    fetchMyOrders();
  }, []);
  const totalOrders = orders.length;
  const pending = orders.filter((o) => o.status === "Pending").length;
  const delivered = orders.filter((o) => o.status === "Delivered").length;
  const getStatusColor = (status) => {
    if (status === "Delivered") return "bg-green-100 text-green-700";
    if (status === "Pending") return "bg-yellow-100 text-yellow-700";
    if (status === "Cancelled") return "bg-red-100 text-red-700";
    return "bg-gray-100 text-gray-600";
  };

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen py-10 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
              Welcome back, {user?.name}! 👋
            </h1>
            <p className="text-gray-500 mt-1">{user?.email}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <p className="text-4xl font-bold text-blue-600">{totalOrders}</p>
              <p className="text-gray-500 mt-1">Total Orders</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <p className="text-4xl font-bold text-yellow-500">{pending}</p>
              <p className="text-gray-500 mt-1">Pending</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <p className="text-4xl font-bold text-green-500">{delivered}</p>
              <p className="text-gray-500 mt-1">Delivered</p>
            </div>

          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Recent Orders</h2>
              <Link to="/orders" className="text-blue-600 text-sm hover:underline">
                View All →
              </Link>
            </div>
            {loading ? (
              <p className="text-gray-400 text-center py-6">Loading orders...</p>

            ) : orders.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-gray-400 text-lg">No orders yet</p>
                <Link to="/products" className="text-blue-600 hover:underline text-sm mt-2 block">
                  Start Shopping →
                </Link>
              </div>

            ) : (
              <div className="flex flex-col gap-4">
                {orders.slice(0, 3).map((order) => (
                  <div key={order._id} className="flex justify-between items-center border border-gray-100 rounded-xl p-4 hover:bg-gray-50 transition">
                    <div>
                      <p className="font-medium text-gray-800">
                        Order #{order._id.slice(-6).toUpperCase()}
                      </p>
                      <p className="text-sm text-gray-400">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-800">Rs. {order.totalAmount}</p>
                      <span className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <Link to="/orders"
              className="bg-white rounded-xl shadow-md p-5 flex items-center gap-4 hover:shadow-lg hover:bg-blue-50 transition duration-300"
            >
              <span className="text-3xl">🛍️</span>
              <div>
                <p className="font-semibold text-gray-800">My Orders</p>
                <p className="text-sm text-gray-400">View full order history</p>
              </div>
            </Link>

            <Link to="/settings"
              className="bg-white rounded-xl shadow-md p-5 flex items-center gap-4 hover:shadow-lg hover:bg-blue-50 transition duration-300"
            >
              <span className="text-3xl">⚙️</span>
              <div>
                <p className="font-semibold text-gray-800">Settings</p>
                <p className="text-sm text-gray-400">Update your profile</p>
              </div>
            </Link>

            <Link to="/products"
              className="bg-white rounded-xl shadow-md p-5 flex items-center gap-4 hover:shadow-lg hover:bg-blue-50 transition duration-300"
            >
              <span className="text-3xl">🛒</span>
              <div>
                <p className="font-semibold text-gray-800">Shop Now</p>
                <p className="text-sm text-gray-400">Browse our products</p>
              </div>
            </Link>

          </div>

        </div>
      </div>
    </Layout>
  );
};

export default UserDashboard;