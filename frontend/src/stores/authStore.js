import { create } from "zustand";

const getStoredUser = () => {
  try {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  } catch (error) {
    console.error("Error parsing stored user:", error);
    return null;
  }
};

const useAuthStore = create((set) => ({
  user: getStoredUser(),
  token: localStorage.getItem("token") || null,
  login: (user, token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    set({ user, token });
  },
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    set({ user: null, token: null });
  },
  // Keeps every open tab of the SAME browser in sync the moment
  // login()/logout() happens in another tab, instead of showing
  // stale user/isAdmin info until a manual refresh.
  syncFromStorage: () => {
    set({ user: getStoredUser(), token: localStorage.getItem("token") || null });
  },
}));

if (typeof window !== "undefined") {
  window.addEventListener("storage", (event) => {
    if (event.key === "user" || event.key === "token") {
      useAuthStore.getState().syncFromStorage();
    }
  });
}

export default useAuthStore;
