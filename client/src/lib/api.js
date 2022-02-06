import axios from 'axios';

// Use with credntials in order to store cookies from server
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});

export default api;
