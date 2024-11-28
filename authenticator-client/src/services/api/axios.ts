import axios from "axios";

const BASE_URL = `${process.env.REACT_APP_BASE_ENDPOINT}/api/v1`;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${JSON.parse(token)}`;
      console.log( `Bearer ${token}`)
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
