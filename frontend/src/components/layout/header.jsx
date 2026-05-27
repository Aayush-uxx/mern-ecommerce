import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">
          <Link to="/">LaliMart</Link>
        </div>
        <div className="hidden md:flex gap-6">
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link to="/products" className="hover:text-blue-600 transition">
            Products
          </Link>
          <Link to="/about" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
          <Link to="/login" className="hover:text-blue-600 transition">
            Login
          </Link>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};
export default Header;
