import axios from 'axios';

// Use with credntials in order to store cookies from server
const api = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true,
});

export default api;
