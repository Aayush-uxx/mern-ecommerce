import { useEffect, useState, useMemo } from "react";
import Layout from "../components/layout/layout";
import ProductCard from "../components/shared/ProductCard";
import useProducts from "@/hooks/useProducts";

const CATEGORIES = ["All", "Electronics", "Fashion", "Food", "Sports", "Home"];

const Products = () => {
  const { products, loading, fetchProducts } = useProducts();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    fetchProducts();
  }, []);
  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== "All") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (search.trim()) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sortBy === "price-low") result.sort((a, b) => a.price - b.price);
    if (sortBy === "price-high") result.sort((a, b) => b.price - a.price);
    if (sortBy === "name") result.sort((a, b) => a.name.localeCompare(b.name));

    return result;
  }, [products, search, selectedCategory, sortBy]);

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        <div className="bg-blue-600 text-white py-12 px-4 text-center">
          <h1 className="text-4xl font-bold mb-2">All Products</h1>
          <p className="text-blue-100">Discover our wide range of products</p>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="default">Sort By</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name A-Z</option>
            </select>
          </div>
          <div className="flex gap-2 flex-wrap mb-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-600 border hover:bg-blue-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          {loading ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">Loading products...</p>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-5xl mb-4">🔍</p>
              <p className="text-gray-500 text-lg">No products found</p>
            </div>
          ) : (
            <>
              <p className="text-gray-500 text-sm mb-4">{filteredProducts.length} products found</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Products;