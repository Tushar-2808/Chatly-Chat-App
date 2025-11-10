// frontend/src/lib/axios.js
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.VITE_API_BASE_URL ||
    (import.meta.env.MODE === "development"
      ? "http://localhost:5001/api"
      : "https://chatly-chat-app-7epe.onrender.com/api"),
  withCredentials: true,
});

// Intercept responses to handle 401 errors gracefully for auth check
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // For /auth/check endpoint, 401 is expected for unauthenticated users
    // Don't treat it as an error
    if (error.config?.url?.includes("/auth/check") && error.response?.status === 401) {
      // Return a rejected promise but don't log it
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);
