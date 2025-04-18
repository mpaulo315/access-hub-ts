import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


export const checkAuth = async () => {
    try{
        const response = await axios.request({
            method: "get",
            url: "/check-auth",
            withCredentials: true,
            baseURL: BACKEND_URL,
        })
        
        return response.status === 200;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log(error.response?.data);
        }
        return false;
    }
}