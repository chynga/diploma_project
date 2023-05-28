import axios from "axios";
import { UserCredentials, EmailCodeCredentials } from "./authTypes";
import jwt_decode from "jwt-decode";
import { User } from "./authSlice";

// Register user
const register = async (userData: UserCredentials) => {
    await axios.post("/api/authentication/register", userData);
    return await login(userData);
};

// Login user
const login = async (userData: UserCredentials) => {
    console.log(userData)
    const response = await axios.post("/api/authentication/login", userData);
    console.log(1)
    const token = response.data;

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    var user: User = await axios.get("/api/profile", config)
    localStorage.setItem("user", JSON.stringify({...user, token}));
    return {...user, token};
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
