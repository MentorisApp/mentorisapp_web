import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
  timeout: 60000,
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
