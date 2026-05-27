import Layout from "../components/layout/layout";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <form>
          <input
            type="email"
            placeholder="Email"
            className="border p-2 w-full mb-3 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 w-full mb-3 rounded"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
            Login
          </button>
        </form>
        <p className="text-center mt-4">
          Don't have account?{" "}
          <Link to="/register" className="text-blue-600">
            Register
          </Link>
        </p>
      </div>
    </Layout>
  );
};

export default Login;
