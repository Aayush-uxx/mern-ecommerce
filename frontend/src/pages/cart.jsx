import Layout from "../components/layout/layout";

const Cart = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
        <p className="text-gray-500">Your cart is empty.</p>
      </div>
    </Layout>
  );
};

export default Cart;
