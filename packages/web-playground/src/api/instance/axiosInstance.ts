import axios from 'axios';
import { setupInterceptors } from './interceptors';

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

setupInterceptors(axiosInstance);

export default axiosInstance;
