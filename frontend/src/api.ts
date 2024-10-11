import axios from 'axios';
// import { ACCESS_TOKEN } from './constants';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

// Add request interceptor
api.interceptors.request.use(
  (config) => {
    // Modify the request config here (e.g., add headers, authentication tokens, etc.)
    // const token = localStorage.getItem(ACCESS_TOKEN);

    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }

    return config;
  },
  (error) => {
    // Handle request error here
    return Promise.reject(error);
  }
);

export default api;
