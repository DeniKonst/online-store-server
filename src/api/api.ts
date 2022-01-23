import axios from "axios";

const baseAxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_DEVELOPMENT_API_URL,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
});

export default baseAxiosInstance;
