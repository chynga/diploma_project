import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ModalProps } from ".";
import { login } from "../../../features/auth/authSlice";
import { emailRegex, passwordRegex, state } from "../util";
import Button from "./Button";
import FormGroup from "./FormGroup";

function LoginForm({ setAuthPage }: ModalProps) {
    const [email, setEmail] = useState(state);
    const [password, setPassword] = useState(state);
    const dispatch = useDispatch<any>();

    const onSubmit = (e: any) => {
        e.preventDefault();

        const userData = {
            email: email.value,
            password: password.value,
        };

        console.log(userData);
        dispatch(login(userData));
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
            <Button />
            <div onClick={() => setAuthPage("forgotPassword")}
                className="mt-3 hover:cursor-pointer text-2xl text-blue-white">
                Забыли пароль?
            </div>
        </form>
    );
}

export default LoginForm;