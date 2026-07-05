import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/layout";
import ProductCard from "../components/shared/ProductCard";
import useProducts from "@/hooks/useProducts";

const CATEGORIES = [
  { name: "Electronics", emoji: "📱", color: "bg-blue-100 text-blue-600" },
  { name: "Fashion", emoji: "👕", color: "bg-pink-100 text-pink-600" },
  { name: "Food", emoji: "🍎", color: "bg-green-100 text-green-600" },
  { name: "Sports", emoji: "⚽", color: "bg-orange-100 text-orange-600" },
  { name: "Home", emoji: "🏠", color: "bg-purple-100 text-purple-600" },
];

const Home = () => {
  const { products, loading, fetchProducts } = useProducts();

  useEffect(() => {
    fetchProducts();
  }, []);

  // show latest 8 products on home page
  const latestProducts = products.slice(0, 8);

  return (
    <Layout>
      <main>

        {/* HERO BANNER */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to LaliMart
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Your one-stop shop for everything in the Kathmandu Valley
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                to="/products"
                className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition"
              >
                Shop Now →
              </Link>
              <Link
                to="/about"
                className="border border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* PROMO BANNER */}
        <div className="bg-yellow-400 py-4 px-4 text-center">
          <p className="font-semibold text-gray-900">
            ☀️ Summer Sale — Up to 30% Off! Free delivery inside Kathmandu Valley 🚗
          </p>
        </div>

        {/* CATEGORIES */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.name}
                to={`/category/${cat.name}`}
                className="bg-white rounded-2xl shadow-md p-5 text-center hover:shadow-lg hover:scale-105 transition duration-300"
              >
                <div className={`w-14 h-14 ${cat.color} rounded-full flex items-center justify-center text-2xl mx-auto mb-3`}>
                  {cat.emoji}
                </div>
                <p className="font-semibold text-gray-700">{cat.name}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* LATEST PRODUCTS */}
        <div className="bg-gray-50 py-12 px-4">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Latest Products</h2>
              <Link to="/products" className="text-blue-600 hover:underline text-sm">
                View All →
              </Link>
            </div>

            {loading ? (
              <div className="text-center py-10">
                <p className="text-gray-400">Loading products...</p>
              </div>
            ) : latestProducts.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-gray-400">No products yet — check back soon!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {latestProducts.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* FEATURES STRIP */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { emoji: "🚗", title: "Free Delivery", desc: "Inside KTM Valley" },
              { emoji: "✅", title: "ISO Certified", desc: "Trusted quality" },
              { emoji: "🔄", title: "Easy Returns", desc: "Hassle-free returns" },
              { emoji: "🔒", title: "Secure Payment", desc: "COD & Khalti" },
            ].map((feature) => (
              <div key={feature.title} className="text-center">
                <span className="text-4xl">{feature.emoji}</span>
                <p className="font-semibold text-gray-800 mt-2">{feature.title}</p>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </main>
    </Layout>
  );
};

export default Home;