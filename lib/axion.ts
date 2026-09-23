import axios from "axios";

export const api = axios.create({
  baseURL : "http://localhost:3000/api/v1",
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