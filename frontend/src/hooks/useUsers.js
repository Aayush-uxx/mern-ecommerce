import { getAllUsers, deleteUserById } from "@/services/authService";
import { useState } from "react";
import toast from "react-hot-toast";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const data = await getAllUsers();
      setUsers(data);
    } catch (err) {
      toast.error("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (id) => {
    setLoading(true);
    try {
      await deleteUserById(id);
      toast.success("User deleted successfully!");
      fetchUsers();
    } catch (err) {
      toast.error("Failed to delete user");
    } finally {
      setLoading(false);
    }
  };

  return { users, loading, fetchUsers, handleDeleteUser };
};

export default useUsers;
