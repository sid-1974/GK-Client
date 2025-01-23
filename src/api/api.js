import axios from "axios";
import TokenService from "./TokenService";

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = TokenService.getToken();

  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
  return config;
});

export const post = async (path, data) => {
  try {
    const response = await api.post(path, data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
export const get = async (path, params = {}) => {
    try {
      const response = await api.get(path, { params }); 
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  };

export default api;
