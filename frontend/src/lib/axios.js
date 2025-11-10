import axios from "axios";

const API_BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5001/api" // local backend
    : "https://chatly-chat-app-7epe.onrender.com/api"; // Render backend

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // important for cookie-based auth
});
