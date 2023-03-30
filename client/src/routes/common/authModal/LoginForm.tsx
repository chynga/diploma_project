import axios from "axios";
import jwt_decode from "jwt-decode";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { FormProps } from ".";
import { setUser, User } from "../../../features/auth/authSlice";
import { emailRegex, passwordRegex, state } from "../util";
import Button from "./Button";
import FormGroup from "./FormGroup";

function LoginForm({ setAuthPage, setErrorMsg }: FormProps) {
    const [email, setEmail] = useState(state);
    const [password, setPassword] = useState(state);
    const dispatch = useDispatch<any>();

    const onSubmit = (e: any) => {
        e.preventDefault();

        const userData = {
            email: email.value,
            password: password.value,
        };

        axios.post("/api/authentication/login", userData)
            .then((resp) => {
                const token = resp.data.accessToken;
                var user: User = jwt_decode(token);
                localStorage.setItem("user", JSON.stringify({ ...user, token }));
                console.log(user)
                setErrorMsg("");
                dispatch(setUser(user));
                setAuthPage(null);
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
            <div onClick={() => setAuthPage("forgotPassword")}
                className="mt-3 hover:cursor-pointer text-xl text-blue-white">
                Забыли пароль?
            </div>
        </form>
    );
}

export default LoginForm;