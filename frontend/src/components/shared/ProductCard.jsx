import { Link } from "react-router-dom";
import useCart from "@/hooks/useCart";

const ProductCard = ({ product }) => {
  const { handleAddToCart } = useCart();

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group">
      <div className="relative overflow-hidden h-48 bg-gray-100">
        <img
          src={
            product.image?.startsWith("http")
              ? product.image
              : `http://localhost:5000/${product.image}`
          }
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          onError={(e) => { e.target.src = "https://via.placeholder.com/300x200?text=No+Image"; }}
        />
        <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
          {product.category}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-1 truncate">{product.name}</h3>
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">{product.description}</p>

        <div className="flex justify-between items-center">
          <p className="text-xl font-bold text-blue-600">Rs. {product.price}</p>
          <span className={`text-xs px-2 py-1 rounded-full ${product.stock > 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"}`}>
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        <div className="flex gap-2 mt-3">
          <Link
            to={`/products/${product._id}`}
            className="flex-1 text-center border border-blue-600 text-blue-600 py-2 rounded-lg text-sm hover:bg-blue-50 transition"
          >
            View
          </Link>
          <button
            onClick={() => handleAddToCart(product)}
            disabled={product.stock === 0}
            className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;