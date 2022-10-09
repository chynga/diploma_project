import axios from "axios";
import { User } from "./authSlice";

const API_URL = "/api/user/";

// Register user
const register = async (userData: User) => {
    const response = await axios.post(API_URL + "register", userData);

    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response;
    // return response.data;
};

// Login user
const login = async (userData: User) => {
    const response = await axios.post(API_URL + "login", userData);

    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response;
    // return response.data;
};

// Logout user
const logout = () => {
    localStorage.removeItem("user");
};

const authAPI = {
    register,
    logout,
    login,
};

export default authAPI;
