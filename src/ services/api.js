// services/api.js

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://poruwa-back.onrender.com', // Replace with your actual backend API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
