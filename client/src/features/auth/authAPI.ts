import axios from "axios";
import { UserCredentials, EmailCodeCredentials } from "./authTypes";
import jwt_decode from "jwt-decode";
import { User } from "./authSlice";

// Register user
const register = async (userData: UserCredentials) => {
    const response = await axios.post("/api/authentication/register", userData);
    if (response.data) {
        const token = response.data.accessToken;
        var user: User = jwt_decode(token);
        localStorage.setItem("user", JSON.stringify({...user, token}));
        response.data = {...user, token};
    }

    return response
};

// Login user
const login = async (userData: UserCredentials) => {
    const response = await axios.post("/api/authentication/login", userData);
    if (response.data) {
        const token = response.data.accessToken;
        var user: User = jwt_decode(token);
        localStorage.setItem("user", JSON.stringify({...user, token}));
        response.data = {...user, token};
    }

    return response;
};

const updateUserInfo = async (userData: User, token: string) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    await axios.patch("/api/profile", userData, config);
    const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!) : null;
    localStorage.setItem("user", JSON.stringify({...user, ...userData}));

    return localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!) : null;
};

// Logout user
const logout = () => {
    localStorage.removeItem("user");
};

const authAPI = {
    register,
    logout,
    updateUserInfo,
    login,
};

export default authAPI;
