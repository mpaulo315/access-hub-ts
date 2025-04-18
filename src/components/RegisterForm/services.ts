import axios from "axios";
import type { RegisterUser } from "../../typings/User";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const registerService = async (user: RegisterUser) => {
  const response = await axios.request({
    method: "post",
    url: `/register`,
    data: JSON.stringify(user),
    baseURL: BACKEND_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  
  return response.data;
};
