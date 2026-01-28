import axios from "axios"
import { getCookie } from "../utils/Services";

const api = axios.create({
    baseURL: "https://rexurl.vercel.app",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

// request interceptor
api.interceptors.request.use(
    (config) => {
        const token = getCookie('acc_token')
        if (token) config.headers.Authorization = `${token}`;
        return config;
    },
    (error) => {
        console.log(error)
    }
);

// ========================== APi Calls ================================
const authServices = {
    registration: async (registrationData) => {
        const res = await api.post('/auth/register', registrationData)
        return res.data
    },

    login: async (loginData) => {
        const res = await api.post('/auth/login', loginData)
        return res.data
    },

    getProfile: async () => {
        const res = await api.get('/auth/profile')
        return res.data
    }
}

const urlServices = {
    createUrl: async (longUrl) => {
        const res = await api.post('/url/shortener', { longUrl })
        return res.data
    },

    urlHistory: async () => {
        const res = await api.get('/url/url-history')
        return res.data
    }
}


export { authServices, urlServices };