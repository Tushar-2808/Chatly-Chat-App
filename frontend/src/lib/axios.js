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
