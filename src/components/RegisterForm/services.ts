import axios from "axios";
import type { RegisterUser } from "../../typings/User";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const registerService = async (user: RegisterUser) => {
  const response = await axios.post(`${BACKEND_URL}/register`, user);
  return response.data;
};
