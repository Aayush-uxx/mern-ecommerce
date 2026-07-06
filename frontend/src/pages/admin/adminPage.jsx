import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "@/stores/authStore";
import AdminProducts from "./adminProducts";
import AdminUsers from "./adminUsers";
import AdminOrders from "./adminOrders";
import useProducts from "@/hooks/useProducts";
import useUsers from "@/hooks/useUsers";
import useOrders from "@/hooks/useOrders";
import { LayoutDashboard, Package, Users, LogOut, ShoppingBag, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "products", label: "Products", icon: Package },
  { id: "orders", label: "Orders", icon: ShoppingCart },
  { id: "users", label: "Users", icon: Users },
];

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const { products, fetchProducts } = useProducts();
  const { users, fetchUsers } = useUsers();
  const { orders, fetchAllOrders } = useOrders();

  useEffect(() => {
    fetchProducts();
    fetchUsers();
    fetchAllOrders();
  }, []);

  const handleLogout = () => {
    logout();
    toast.success("Logged out!");
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-60 bg-gray-900 text-white flex flex-col fixed h-full z-10">
        <div className="p-5 border-b border-gray-700">
          <div className="flex items-center gap-2 mb-1">
            <ShoppingBag className="h-5 w-5 text-blue-400" />
            <span className="text-lg font-bold">LaliMart Admin</span>
          </div>
          <p className="text-xs text-gray-400 truncate">{user?.email}</p>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeTab === id ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-800"
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </nav>

        <div className="p-3 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-400 hover:bg-gray-800 transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col ml-60">
        <header className="bg-white border-b px-6 py-4 sticky top-0 z-10">
          <h1 className="text-xl font-semibold text-gray-800 capitalize">{activeTab}</h1>
        </header>

        <main className="flex-1 p-6">
          {activeTab === "dashboard" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl shadow-sm border p-6">
                  <p className="text-sm text-gray-500 mb-1">Total Products</p>
                  <p className="text-3xl font-bold text-blue-600">{products.length}</p>
                </div>
                <div className="bg-white rounded-xl shadow-sm border p-6">
                  <p className="text-sm text-gray-500 mb-1">Total Orders</p>
                  <p className="text-3xl font-bold text-blue-600">{orders.length}</p>
                </div>
                <div className="bg-white rounded-xl shadow-sm border p-6">
                  <p className="text-sm text-gray-500 mb-1">Total Users</p>
                  <p className="text-3xl font-bold text-blue-600">{users.length}</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border p-6">
                <h3 className="font-semibold text-gray-800 mb-4">Quick Actions</h3>
                <div className="flex flex-wrap gap-3">
                  <Button onClick={() => setActiveTab("products")}>
                    <Package className="h-4 w-4 mr-2" /> Manage Products
                  </Button>
                  <Button variant="outline" onClick={() => setActiveTab("orders")}>
                    <ShoppingCart className="h-4 w-4 mr-2" /> Manage Orders
                  </Button>
                  <Button variant="outline" onClick={() => setActiveTab("users")}>
                    <Users className="h-4 w-4 mr-2" /> Manage Users
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border p-6">
                <h3 className="font-semibold text-gray-800 mb-3">Recent Orders</h3>
                {orders.length === 0 ? (
                  <p className="text-sm text-gray-400">No orders yet.</p>
                ) : (
                  <div className="space-y-2">
                    {orders.slice(0, 5).map((o) => (
                      <div key={o._id} className="flex items-center justify-between text-sm py-1 border-b last:border-0">
                        <span className="font-mono text-gray-500">#{o._id.slice(-6).toUpperCase()}</span>
                        <span className="text-gray-700">{o.user?.name || "Unknown"}</span>
                        <span className="text-blue-600 font-medium">Rs. {o.totalAmount}</span>
                        <span className={`px-2 py-0.5 rounded-full text-xs ${
                          o.status === "Delivered" ? "bg-green-100 text-green-700" :
                          o.status === "Pending" ? "bg-yellow-100 text-yellow-700" :
                          "bg-gray-100 text-gray-600"
                        }`}>{o.status}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === "products" && <AdminProducts />}
          {activeTab === "orders" && <AdminOrders />}
          {activeTab === "users" && <AdminUsers />}
        </main>
      </div>
    </div>
  );
};

export default AdminPage;