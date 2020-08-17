import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://ecorona.tk/eCoronaRestApi",
});

export default axiosInstance;
