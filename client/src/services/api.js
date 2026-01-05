import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Courses API
export const coursesAPI = {
  getAll: async (params = {}) => {
    const response = await api.get('/courses', { params });
    return response.data;
  },
  
  search: async (query) => {
    const response = await api.get('/courses/search', { params: { q: query } });
    return response.data;
  },
  
  filter: async (filters) => {
    const response = await api.get('/courses/filter', { params: filters });
    return response.data;
  },
  
  getById: async (id) => {
    const response = await api.get(`/courses/${id}`);
    return response.data;
  }
};

// Payment Verification API
export const paymentAPI = {
  submitVerification: async (data) => {
    const response = await api.post('/payment-verification', data);
    return response.data;
  },
  
  uploadScreenshot: async (file) => {
    const formData = new FormData();
    formData.append('screenshot', file);
    
    const response = await api.post('/payment-verification/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  }
};

export default api;
