import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add any auth tokens if needed
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle common errors
    if (error.response) {
      console.error('API Error:', error.response.data);
    } else if (error.request) {
      console.error('Network Error:', error.request);
    } else {
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

// Contact API
export const contactAPI = {
  submitContact: (data) => api.post('/contact', data),
  getAllContacts: () => api.get('/contact'),
};

// Clients API
export const clientsAPI = {
  getAllClients: () => api.get('/clients'),
  getClientById: (id) => api.get(`/clients/${id}`),
};

// Services API
export const servicesAPI = {
  getAllServices: () => api.get('/services'),
  getServiceById: (id) => api.get(`/services/${id}`),
};

// Products API
export const productsAPI = {
  getAllProducts: () => api.get('/products'),
  getProductById: (id) => api.get(`/products/${id}`),
  getProductsByCategory: (category) => api.get(`/products?category=${category}`),
};

// Equipments API
export const equipmentsAPI = {
  getAllEquipments: () => api.get('/equipments'),
  getEquipmentById: (id) => api.get(`/equipments/${id}`),
};

export default api;
