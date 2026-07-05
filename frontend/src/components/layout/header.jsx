import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import useAuth from "@/hooks/useAuth";
import useCart from "@/hooks/useCart";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

const Header = () => {
  const { handleLogout, user, token } = useAuth();
  const { totalItems } = useCart();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginPromptOpen, setLoginPromptOpen] = useState(false);
  const navigate = useNavigate();

  const handleCartClick = (e) => {
    if (!token) {
      e.preventDefault();
      setLoginPromptOpen(true);
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">
          <Link to="/">LaliMart</Link>
        </div>
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <Link to="/products" className="hover:text-blue-600 transition">Products</Link>
          <Link to="/about" className="hover:text-blue-600 transition">About</Link>
          <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
          <Link to="/cart" onClick={handleCartClick} className="hover:text-blue-600 transition relative">
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </Link>

          {token ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="bg-blue-600 text-white rounded-full w-9 h-9 font-bold flex items-center justify-center hover:bg-blue-700 transition"
              >
                {user?.name?.charAt(0).toUpperCase() || "U"}
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-xl py-2 z-50 border border-gray-100">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-semibold text-gray-800">{user?.name}</p>
                    <p className="text-xs text-gray-400">{user?.email}</p>
                  </div>
                  {user?.isAdmin && (
                    <Link to="/admin" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-sm hover:bg-gray-50 transition">
                      🛠 Admin Panel
                    </Link>
                  )}
                  <Link to="/dashboard" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-sm hover:bg-gray-50 transition">
                    📊 Dashboard
                  </Link>
                  <Link to="/orders" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-sm hover:bg-gray-50 transition">
                    🛍️ Purchase History
                  </Link>
                  <Link to="/settings" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-sm hover:bg-gray-50 transition">
                    ⚙️ Settings
                  </Link>
                  <hr className="my-1 border-gray-100" />
                  <button
                    onClick={() => { handleLogout(); setDropdownOpen(false); }}
                    className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-50 transition"
                  >
                    🚪 Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm">
              Login
            </Link>
          )}
        </div>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
          <Menu className="h-5 w-5" />
        </Button>
      </div>
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setMobileMenuOpen(false)} />
      )}
      <div className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-50 md:hidden transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-lg font-bold text-blue-600">Menu</span>
          <button onClick={() => setMobileMenuOpen(false)}>
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex flex-col p-4 gap-4">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-600">Home</Link>
          <Link to="/products" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-600">Products</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-600">About</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-600">Contact</Link>
          <Link
            to="/cart"
            onClick={(e) => { setMobileMenuOpen(false); handleCartClick(e); }}
            className="hover:text-blue-600 flex items-center gap-2"
          >
            <ShoppingCart className="h-4 w-4" />
            Cart
            {totalItems > 0 && (
              <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">
                {totalItems}
              </span>
            )}
          </Link>

          <hr className="my-1" />

          {token ? (
            <div className="flex flex-col gap-3">
              <div>
                <p className="text-sm font-semibold text-gray-800">{user?.name}</p>
                <p className="text-xs text-gray-400">{user?.email}</p>
              </div>
              {user?.isAdmin && (
                <Link to="/admin" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-600">🛠 Admin Panel</Link>
              )}
              <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-600">📊 Dashboard</Link>
              <Link to="/orders" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-600">🛍️ Purchase History</Link>
              <Link to="/settings" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-600">⚙️ Settings</Link>
              <button
                onClick={() => { handleLogout(); setMobileMenuOpen(false); }}
                className="text-left text-red-500 hover:text-red-700"
              >
                🚪 Logout
              </button>
            </div>
          ) : (
            <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="bg-blue-600 text-white text-center py-2 rounded-lg">
              Login
            </Link>
          )}
        </div>
      </div>
      <Dialog open={loginPromptOpen} onOpenChange={setLoginPromptOpen}>
        <DialogContent className="max-w-sm" showCloseButton={false}>
          <DialogHeader>
            <DialogTitle>Login Required</DialogTitle>
            <DialogDescription>
              You need to be logged in to access your cart.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setLoginPromptOpen(false)}>Cancel</Button>
            <Button onClick={() => { setLoginPromptOpen(false); navigate("/login"); }}>
              Go to Login
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Header;