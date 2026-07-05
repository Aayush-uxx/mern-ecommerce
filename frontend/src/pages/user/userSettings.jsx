import { useState } from "react";
import Layout from "@/components/layout/layout";
import useAuth from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";


const Settings = () => {
  const { user } = useAuth();
  const [profileData, setProfileData] = useState({
    name: user?.name || "",
    email: user?.email || "",
  });
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const handleProfileUpdate = (e) => {
    e.preventDefault(); 
    toast.success("Profile updated! (Demo)");
  };
  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error("Passwords do not match!");
      return; 
    }
    if (passwordData.newPassword.length < 6) {
      toast.error("Password must be at least 6 characters!");
      return;
    }
    toast.success("Password changed! (Demo)");
    setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" });
  };

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen py-10 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
            <p className="text-gray-500 mt-1">Manage your account preferences</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
                {user?.name?.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="font-bold text-gray-800 text-lg">{user?.name}</p>
                <p className="text-gray-400 text-sm">{user?.email}</p>
              </div>
            </div>

            <h2 className="text-lg font-semibold text-gray-800 mb-4">Profile Information</h2>

            <form onSubmit={handleProfileUpdate} className="flex flex-col gap-4">

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  value={profileData.name}
                  onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                  className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={profileData.email}
                  onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                  className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>

              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition duration-300"
              >
                Save Changes
              </Button>

            </form>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Change Password</h2>

            <form onSubmit={handlePasswordUpdate} className="flex flex-col gap-4">

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Current Password</label>
                <input
                  type="password"
                  value={passwordData.currentPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                  placeholder="Enter current password"
                  className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">New Password</label>
                <input
                  type="password"
                  value={passwordData.newPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                  placeholder="Min. 6 characters"
                  className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Confirm New Password</label>
                <input
                  type="password"
                  value={passwordData.confirmPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                  placeholder="Repeat new password"
                  className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>

              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition duration-300"
              >
                Change Password
              </Button>

            </form>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 border border-red-200">
            <h2 className="text-lg font-semibold text-red-600 mb-2">Danger Zone</h2>
            <p className="text-gray-400 text-sm mb-4">
              Once you delete your account, there is no going back.
            </p>
            <Button
              onClick={() => toast.error("Account deletion coming soon!")}
              className="bg-red-500 hover:bg-red-600 text-white rounded-lg transition duration-300"
            >
              Delete Account
            </Button>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default Settings;