import axios from "axios";

const API_BASE_URL = "http://localhost:7007/";

const api = axios.create({
    baseURL: "http://localhost:7007/" || API_BASE_URL,
    withCredentials: true,
    
})

export default api;
