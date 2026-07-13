import axios from "axios";


export const axiosInstance = axios.create({
    baseURL: "https://nodeclass-batch8.vercel.app",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
})