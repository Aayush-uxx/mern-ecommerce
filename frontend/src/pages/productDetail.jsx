import Layout from "../components/layout/layout";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
            <span className="text-gray-400">Product Image</span>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-2">Product Name</h1>
            <p className="text-gray-500 mb-2">Product ID: {id}</p>
            <p className="text-2xl font-bold text-blue-600 mb-4">₹0</p>

            <div className="mb-4">
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-gray-600">
                Product description will appear here.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Quantity</h3>
              <div className="flex items-center gap-2">
                <button className="border px-3 py-1 rounded">-</button>
                <span className="w-10 text-center">1</span>
                <button className="border px-3 py-1 rounded">+</button>
              </div>
            </div>

            <button className="bg-blue-600 text-white px-6 py-2 rounded w-full md:w-auto">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
