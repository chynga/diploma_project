import axios from "axios";
import { UserCredentials, EmailCodeCredentials } from "./authSlice";

const API_URL = "/api/auth/";

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

// verify email
const verify = async (credentials: EmailCodeCredentials) => {
    const response = await axios.post(API_URL + "email/verify", credentials);

    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response;
};

// Send code for password reset
const sendRecoveryCode = async (email: string) => {
    console.log("2");
    
    const response = await axios.post(API_URL + "password/recover", {email});

    return response;
};

const recoverPassword = async (recoveryData: EmailCodeCredentials) => {
    await axios.post(API_URL + "password/recover", recoveryData);

    return {
        email: recoveryData.email, 
        password: recoveryData.password!
    };
};

// Logout user
const logout = () => {
    localStorage.removeItem("user");
};

const authAPI = {
    register,
    logout,
    verify,
    sendRecoveryCode,
    recoverPassword,
    login,
};

export default authAPI;
