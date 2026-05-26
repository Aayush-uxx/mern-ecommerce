import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="justify-between mx-auto flex px-4 h-16 items-center">
        <div className="text-xl font-bold">
          <Link to="/">LaliMart</Link>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
