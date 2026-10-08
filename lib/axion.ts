import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const api = axios.create({
  baseURL : API_URL,
  withCredentials: true,
})


api.interceptors.response.use(
  (response) => response,

  (error) => {
    const message = error.response?.data.message

    if (message) {
      return Promise.reject(new Error(message));
    }

    return Promise.reject(error);
  }
);