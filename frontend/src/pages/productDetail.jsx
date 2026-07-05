import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../components/layout/layout";
import useProducts from "@/hooks/useProducts";
import useCart from "@/hooks/useCart";

const ProductDetail = () => {
  const { id } = useParams();
  const { products, fetchProducts, loading } = useProducts();
  const { handleAddToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetchProducts();
  }, []);
  const product = products.find((p) => p._id === id);

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-gray-400 text-lg">Loading product...</p>
        </div>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <div className="min-h-screen flex flex-col items-center justify-center gap-4">
          <p className="text-5xl">😕</p>
          <p className="text-gray-500 text-lg">Product not found</p>
          <Link to="/products" className="text-blue-600 hover:underline">
            Back to Products
          </Link>
        </div>
      </Layout>
    );
  }

  const handleAddWithQuantity = () => {
    for (let i = 0; i < quantity; i++) {
      handleAddToCart(product);
    }
  };

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen py-10 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-sm text-gray-400 mb-6 flex gap-2">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-blue-600">Products</Link>
            <span>/</span>
            <span className="text-gray-600">{product.name}</span>
          </div>

          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="bg-gray-100 h-96 md:h-auto flex items-center justify-center p-8">
                <img
                  src={
                    product.image?.startsWith("http")
                      ? product.image
                      : `http://localhost:5000/${product.image}`
                  }
                  alt={product.name}
                  className="max-h-80 object-contain"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/400x300?text=No+Image"; }}
                />
              </div>
              <div className="p-8">
                <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">
                  {product.category}
                </span>

                <h1 className="text-3xl font-bold text-gray-800 mt-3 mb-2">{product.name}</h1>
                <p className="text-gray-500 mb-4 leading-relaxed">{product.description}</p>

                <p className="text-3xl font-bold text-blue-600 mb-2">Rs. {product.price}</p>

                <div className="flex items-center gap-2 mb-6">
                  <span className={`text-sm px-3 py-1 rounded-full ${product.stock > 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"}`}>
                    {product.stock > 0 ? `${product.stock} in stock` : "Out of Stock"}
                  </span>
                </div>
                <div className="mb-6">
                  <p className="text-sm font-medium text-gray-700 mb-2">Quantity</p>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-9 h-9 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100 transition text-lg font-bold"
                    >
                      −
                    </button>
                    <span className="w-10 text-center font-semibold text-lg">{quantity}</span>
                    <button
                      onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                      className="w-9 h-9 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100 transition text-lg font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={handleAddWithQuantity}
                    disabled={product.stock === 0}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Add to Cart
                  </button>
                  <Link
                    to="/cart"
                    className="flex-1 text-center border border-blue-600 text-blue-600 py-3 rounded-lg font-medium hover:bg-blue-50 transition"
                  >
                    View Cart
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;