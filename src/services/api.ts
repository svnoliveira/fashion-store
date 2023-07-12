import axios from "axios";

export const API_BASE_URL = "https://fashion-store-api.onrender.com";

export const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 8000,
})