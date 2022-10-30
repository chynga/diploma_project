import axios from "axios";
import { UserCredentials, VerificationCredentials } from "./authSlice";

const API_URL = "/api/users/";

// Register user
const register = async (userData: UserCredentials) => {
    const response = await axios.post(API_URL + "register", userData);

    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data))
    }

    return response
};

// Login user
const login = async (userData: UserCredentials) => {
    const response = await axios.post(API_URL + "login", userData);

    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response;
};

// Login user
const verify = async (credentials: VerificationCredentials) => {
    const response = await axios.post(API_URL + credentials.id + "/verify", credentials);

    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    
    return response;
};

// Logout user
const logout = () => {
    localStorage.removeItem("user");
};

const authAPI = {
    register,
    logout,
    verify,
    login,
};

export default authAPI;
