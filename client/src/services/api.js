import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor for adding auth token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("authToken");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

// Task APIs
export const taskAPI = {
  getTasks: (filters) => apiClient.get("/api/tasks", { params: filters }),
  createTask: (data) => apiClient.post("/api/tasks", data),
  updateTask: (id, data) => apiClient.put(`/api/tasks/${id}`, data),
  deleteTask: (id) => apiClient.delete(`/api/tasks/${id}`),
};

// Auth APIs
export const authAPI = {
  login: (email, password) => apiClient.post("/auth/login", { email, password }),
  register: (data) => apiClient.post("/auth/register", data),
  logout: () => apiClient.post("/auth/logout"),
};

export default apiClient;
