import Layout from "../components/layout/layout";

const AdminPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white border rounded-lg p-4 shadow-sm">
            <h3 className="text-gray-500 text-sm">Total Products</h3>
            <p className="text-2xl font-bold">0</p>
          </div>
          <div className="bg-white border rounded-lg p-4 shadow-sm">
            <h3 className="text-gray-500 text-sm">Total Orders</h3>
            <p className="text-2xl font-bold">0</p>
          </div>
          <div className="bg-white border rounded-lg p-4 shadow-sm">
            <h3 className="text-gray-500 text-sm">Total Users</h3>
            <p className="text-2xl font-bold">0</p>
          </div>
        </div>

        {/* Tabs or Sections */}
        <div className="bg-white border rounded-lg p-4">
          <div className="flex gap-4 border-b mb-4">
            <button className="pb-2 px-2 text-blue-600 border-b-2 border-blue-600">
              Products
            </button>
            <button className="pb-2 px-2 text-gray-500">Orders</button>
            <button className="pb-2 px-2 text-gray-500">Users</button>
          </div>

          <div className="text-center py-8 text-gray-500">
            Admin panel coming soon...
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminPage;
