import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-3">LaliMart</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Your trusted online shopping destination in the Kathmandu Valley.
            Quality products, fast delivery.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            <li><Link to="/" className="text-gray-400 hover:text-white transition duration-200">Home</Link></li>
            <li><Link to="/about" className="text-gray-400 hover:text-white transition duration-200">About</Link></li>
            <li><Link to="/products" className="text-gray-400 hover:text-white transition duration-200">Products</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-white transition duration-200">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="flex flex-col gap-2 text-gray-400 text-sm">
            <li>📍 Kathmandu, Nepal</li>
            <li>📞 +977 9812345678</li>
            <li>✉️ support@lalimart.com</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
          <p className="text-gray-400 text-sm mb-3">
            Subscribe to get deals and updates.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-gray-800 text-white text-sm px-3 py-2 rounded-l-lg focus:outline-none placeholder-gray-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 transition duration-300 px-4 py-2 rounded-r-lg text-sm font-medium">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-gray-500">
          <p>© 2026 LaliMart. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-white transition duration-200">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition duration-200">Terms of Service</Link>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;