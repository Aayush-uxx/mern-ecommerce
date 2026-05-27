import Layout from "../components/layout/layout";
import ProductFilters from "../components/shared/productFilter";

const Products = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">All Products</h1>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/4">
            <ProductFilters />
          </div>
          <div className="md:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <p className="text-gray-500">Products will appear here</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
