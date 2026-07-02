import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "@/stores/authStore";
import AdminProducts from "./adminProducts";
import AdminUsers from "./adminUsers";
import useProducts from "@/hooks/useProducts";
import useUsers from "@/hooks/useUsers";
import { LayoutDashboard, Package, Users, LogOut, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "products", label: "Products", icon: Package },
  { id: "users", label: "Users", icon: Users },
];

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const { products, fetchProducts } = useProducts();
  const { users, fetchUsers } = useUsers();

  useEffect(() => {
    fetchProducts();
    fetchUsers();
  }, []);

  const handleLogout = () => {
    logout();
    toast.success("Logged out!");
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
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
                activeTab === id
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-gray-800"
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

      {/* Main content */}
      <div className="flex-1 flex flex-col ml-60">
        <header className="bg-white border-b px-6 py-4 sticky top-0 z-10">
          <h1 className="text-xl font-semibold text-gray-800 capitalize">{activeTab}</h1>
        </header>

        <main className="flex-1 p-6">
          {activeTab === "dashboard" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl shadow-sm border p-6">
                  <p className="text-sm text-gray-500 mb-1">Total Products</p>
                  <p className="text-3xl font-bold text-blue-600">{products.length}</p>
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
                    <Package className="h-4 w-4 mr-2" />
                    Manage Products
                  </Button>
                  <Button variant="outline" onClick={() => setActiveTab("users")}>
                    <Users className="h-4 w-4 mr-2" />
                    Manage Users
                  </Button>
                </div>
              </div>

              {/* Recent products summary */}
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <h3 className="font-semibold text-gray-800 mb-3">Recent Products</h3>
                {products.length === 0 ? (
                  <p className="text-sm text-gray-400">No products added yet.</p>
                ) : (
                  <div className="space-y-2">
                    {products.slice(0, 5).map((p) => (
                      <div key={p._id} className="flex items-center justify-between text-sm py-1 border-b last:border-0">
                        <span className="font-medium text-gray-700">{p.name}</span>
                        <span className="text-gray-500">₹{p.price} · {p.category}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === "products" && <AdminProducts />}
          {activeTab === "users" && <AdminUsers />}
        </main>
      </div>
    </div>
  );
};

export default AdminPage;
