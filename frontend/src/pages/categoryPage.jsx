import Layout from "../components/layout/layout";
import { useParams } from "react-router-dom";
import ProductFilters from "../components/shared/productFilter";

const CategoryPage = () => {
  const { category } = useParams();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2 capitalize">{category}</h1>
        <p className="text-gray-600 mb-6">Browse our {category} collection</p>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className="md:w-1/4">
            <ProductFilters />
          </div>

          {/* Products Grid */}
          <div className="md:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <p className="text-gray-500 col-span-full text-center py-8">
                Products in {category} will appear here
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryPage;
