import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: true, // ESSENCIAL
});

// Interceptor para CSRF Token
api.interceptors.request.use(async (config) => {
  if (!['get', 'head'].includes(config.method?.toLowerCase() || '')) {
    try {
     await axios.get('http://localhost:8000/sanctum/csrf-cookie', {
        withCredentials: true
      });
    } catch (error) {
      console.error('Erro ao obter CSRF token:', error);
    }
  }
  return config;
});

export default api;