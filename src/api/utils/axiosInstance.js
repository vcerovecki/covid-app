import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:43210",
});

export default axiosInstance;
