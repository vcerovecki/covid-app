import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://164.90.223.110:43210",
});

export default axiosInstance;
