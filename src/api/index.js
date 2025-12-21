import axios from "axios"

const api = axios.create({
    baseURL: "https://your-api-base-url.com/api",
    headers: {
        "Content-Type": "application/json",
    },
});

// request interceptor
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) config.headers.Authorization = `${token}`;
        return config;
    },
    (error) => Promise.reject(error)
);

// ========================== APi Calls ================================
const authServices = () => {
    registration: async (email, password) => {
        const res = await api.post('/auth/registration', { fullname, email, password })
        return res.data
    }

    login: async (email, password) => {
        const res = await api.post('/auth/login', { email, password })
        return res.data
    }

    getProfile: async () => {
        const res = await api.get('/auth/getProfile')
        return res.data
    }
}

const urlServices = () => {
    createUrl: async (longUrl) => {
        const res = await api.post('/url/create', { longUrl })
        return res.data
    }

    allUrls: async () => {
        const res = await api.get('/url/allUrls')
        return res.data
    }
}




export default { authServices, urlServices };