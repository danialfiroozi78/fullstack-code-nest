import axios from "axios";
import toast from "react-hot-toast";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,

  (error) => {
    const messages = error.response?.data?.message;

    if (typeof window !== "undefined" && messages) {
      if (Array.isArray(messages)) {
        messages.forEach((message: string) => {
          toast.error(message);
        });
      } else {
        toast.error(String(messages));
      }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
