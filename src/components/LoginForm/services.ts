import axios from "axios";
import type { LoginUser } from "../../typings/User";
import {
  isResponseError,
  type ResponseError,
} from "../../typings/ResponseError.type";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

interface SuccessResponse {
  status: number;
  message: string;
};

export const loginService = async (
  user: LoginUser
): Promise<ResponseError | SuccessResponse> => {
  try {
    await axios.request({
      method: "post",
      url: `/login`,
      data: JSON.stringify(user),
      withCredentials: true,
      baseURL: BACKEND_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return { message: "Login successful", status: 201 };
  } catch (error) {
    if (!axios.isAxiosError(error)) {
      return {
        message: "Unknown error",
        status: 500,
        className: "Error",
      };
    }
    if (!error.response || !isResponseError(error.response?.data)) {
      return {
        message: "Unknown error",
        status: 500,
        className: "Error",
      };
    }
    return error.response?.data as ResponseError;
  }
};
