import axios from "axios";

const api = axios.create({
  // baseURL: "https://final-gama-g04-back-production.up.railway.app/",
  baseURL: 'https://http://localhost:3000'
});

export default api;