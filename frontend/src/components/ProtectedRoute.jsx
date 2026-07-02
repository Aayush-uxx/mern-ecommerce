import { Navigate } from "react-router-dom";
import useAuthStore from "@/stores/authStore";
const ProtectedRoute = ({ children, requiredRole }) => {
  const { user, token } = useAuthStore();
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  if (requiredRole === "admin" && !user?.isAdmin) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;