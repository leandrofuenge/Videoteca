//MODULO DE CONEXÃO COM O BACKEND

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export default api;
 