import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout/layout";
import ProductCard from "../components/shared/ProductCard";
import useProducts from "@/hooks/useProducts";

const CategoryPage = () => {
  const { category } = useParams();
  const { products, loading, fetchProducts } = useProducts();

  useEffect(() => {
    fetchProducts();
  }, []);
  const filtered = useMemo(() => {
    return products.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
  }, [products, category]);

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        <div className="bg-blue-600 text-white py-12 px-4 text-center">
          <h1 className="text-4xl font-bold mb-2 capitalize">{category}</h1>
          <p className="text-blue-100">Browse our {category} collection</p>
        </div>

        <div className="container mx-auto px-4 py-8">
          {loading ? (
            <div className="text-center py-20">
              <p className="text-gray-400">Loading...</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-5xl mb-4">📦</p>
              <p className="text-gray-500">No products in {category} yet</p>
            </div>
          ) : (
            <>
              <p className="text-gray-500 text-sm mb-6">{filtered.length} products in {category}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filtered.map((product) => (
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

export default CategoryPage;