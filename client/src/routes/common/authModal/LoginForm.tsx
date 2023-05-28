import axios from "axios";
import jwt_decode from "jwt-decode";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { FormProps } from ".";
import { setUser, User } from "../../../features/auth/authSlice";
import { emailRegex, passwordRegex, state } from "../util";
import Button from "./Button";
import FormGroup from "./FormGroup";
import { useNavigate } from "react-router-dom";

function LoginForm({ setAuthPage, setErrorMsg }: FormProps) {
    const [email, setEmail] = useState(state);
    const [password, setPassword] = useState(state);
    const dispatch = useDispatch<any>();
    const navigate = useNavigate();

    const onSubmit = (e: any) => {
        e.preventDefault();

        const userData = {
            email: email.value,
            password: password.value,
        };

        axios.post("/api/authentication/login", userData)
            .then(async (resp) => {
                const token = resp.data.data.accessToken;
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                };
                const user: User = (await axios.get("/api/profile", config)).data.data
                localStorage.setItem("user", JSON.stringify({ ...user, token }));

                setErrorMsg("");
                dispatch(setUser(user));
                navigate(0);
            }).catch((error) => {
                setErrorMsg("Почта или пароль не правильный!");
            });
    };

    return (
        <form onSubmit={onSubmit}>
            <FormGroup
                labelText="E-mail"
                type="email"
                id="email"
                name="email"
                field={email}
                setField={setEmail}
                regex={emailRegex}
                validationMessage="Enter valid email" />
            <FormGroup
                labelText="Пароль"
                type="password"
                id="password"
                name="password"
                field={password}
                setField={setPassword}
                regex={passwordRegex}
                validationMessage="1 UPPERCASE letter, 1 lowercase letter, 1 number" />
            <Button text="Войти" />
            <div onClick={() => setAuthPage("register")}
                className="mt-3 hover:cursor-pointer text-xl text-blue-white dark:text-blue-dark">
                Создать аккаунт
            </div>
            <div onClick={() => setAuthPage("forgotPassword")}
                className="mt-1 hover:cursor-pointer text-xl text-blue-white dark:text-blue-dark">
                Забыли пароль?
            </div>
        </form>
    );
}

export default LoginForm;