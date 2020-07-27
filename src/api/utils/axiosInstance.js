import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://kjavorek:8090",
});

export default axiosInstance;