import axios from "axios";
import { UserCredentials, EmailCodeCredentials, ProfileInfo, PasswordInfo } from "./authSlice";

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

// Send code for password reset
const sendVerificationCode = async (email: string) => {    
    const response = await axios.post(API_URL + "email/verification", {email});

    return response;
};

// verify email
const verify = async (credentials: EmailCodeCredentials) => {
    const response = await axios.post(API_URL + "email/verification", credentials);

    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response;
};

// Send code for password reset
const sendRecoveryCode = async (email: string) => {    
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

const updateUserProfile = async (profileInfo: ProfileInfo, token: string) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.put(API_URL + "update-info", profileInfo, config);

    let user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!) : null
    user = {
        ...user,
        ...response.data
    }

    if (response.data) {
        localStorage.setItem("user", JSON.stringify(user));
    }

    return user;
};

const updateUserPassword = async (passwordInfo: PasswordInfo, token: string) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.put(API_URL + "password/update", passwordInfo, config);

    return response;
};

// Logout user
const logout = () => {
    localStorage.removeItem("user");
};

const authAPI = {
    register,
    logout,
    sendVerificationCode,
    verify,
    sendRecoveryCode,
    recoverPassword,
    updateUserProfile,
    updateUserPassword,
    login,
};

export default authAPI;
