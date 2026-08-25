import axios from 'axios';

export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const storedUserData = localStorage.getItem('devburger:userData');

  if (storedUserData) {
    let userData;

    try {
      userData = JSON.parse(storedUserData);
    } catch {
      localStorage.removeItem('devburger:userData');
    }

    if (userData?.token) {
      config.headers.Authorization = `Bearer ${userData.token}`;
    }
  }

  return config;
});
