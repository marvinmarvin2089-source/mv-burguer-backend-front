import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3001',
});

api.interceptors.request.use((config) => {
  const storedUserData = localStorage.getItem('devburger:userData');

  if (storedUserData) {
    const userData = JSON.parse(storedUserData);

    if (userData.token) {
      config.headers.Authorization = `Bearer ${userData.token}`;
    }
  }

  return config;
});