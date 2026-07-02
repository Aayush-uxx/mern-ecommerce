import { useNavigate } from "react-router-dom";
import { loginUser, register } from "@/services/authService";
import useAuthStore from "@/stores/authStore";
import toast from "react-hot-toast";
import { useState } from "react";

const useAuth = () => {
  const { login, logout, user, token } = useAuthStore();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (email, password) => {
    setLoading(true);
    try {
      const data = await loginUser(email, password);
      login(data.user, data.token);
      toast.success("Logged in successfully!");
      if (data.user.isAdmin) {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (err) {
      toast.error("Invalid email or password!");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (name, email, password) => {
    setLoading(true);
    try {
      const data = await register(name, email, password);
      toast.success("Account created successfully!");
      navigate("/login");
    } catch (err) {
      toast.error("Registration failed. Try again!");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    toast.success("Logged out!");
    navigate("/login");
  };

  return { handleLogin, handleRegister, handleLogout, user, token, loading };
};

export default useAuth;