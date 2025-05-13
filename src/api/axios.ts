import axios from "axios";


const axiosInstance = axios.create({
    baseURL: 'https://localhost:44395/',
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 10000,
    withCredentials: true,
})


export default axiosInstance;