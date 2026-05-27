import Layout from "../components/layout/layout";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Register</h1>
        <form>
          <input
            type="text"
            placeholder="Full Name"
            className="border p-2 w-full mb-3 rounded"
          />
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
            Register
          </button>
        </form>
        <p className="text-center mt-4">
          Already have account?{" "}
          <Link to="/login" className="text-blue-600">
            Login
          </Link>
        </p>
      </div>
    </Layout>
  );
};

export default Register;
