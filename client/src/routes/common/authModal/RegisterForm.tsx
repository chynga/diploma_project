import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { FormProps } from ".";
import { setUser, User } from "../../../features/auth/authSlice";
import { emailRegex, nameRegex, passwordRegex, phoneRegex, state } from "../util";
import Button from "./Button";
import FormGroup from "./FormGroup";
import { useNavigate } from "react-router-dom";
import PasswordFormGroup from "./PasswordFormGroup";

function RegisterForm({ setAuthPage, setErrorMsg }: FormProps) {
    const [fullName, setFullName] = useState(state);
    const [phone, setPhone] = useState(state);
    const [email, setEmail] = useState(state);
    const [password, setPassword] = useState(state);
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch<any>();
    const navigate = useNavigate();

    const onSubmit = (e: any) => {
        e.preventDefault();

        const userData = {
            fullName: fullName.value,
            phone: phone.value,
            email: email.value,
            password: password.value,
        };

        axios.post("/api/authentication/register", userData)
            .then(async _ => {
                const response = await axios.post("/api/authentication/login", userData);

                const token = response.data.accessToken;
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                };
                const user: User = (await axios.get("/api/profile", config)).data
                localStorage.setItem("user", JSON.stringify({ ...user, token }));

                setErrorMsg("");
                dispatch(setUser(user));
                navigate(0);
            }).catch((error) => {
                setErrorMsg(error.response.data.message);
            });
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-3">
                <FormGroup
                    labelText="ФИО"
                    type="name"
                    id="name"
                    name="name"
                    field={fullName}
                    setField={setFullName}
                    regex={nameRegex}
                    validationMessage="Имя не правильный!" />
                <FormGroup
                    labelText="Номер телефона"
                    type="phone"
                    id="phone"
                    name="phone"
                    placeholder="+77..."
                    field={phone}
                    setField={setPhone}
                    regex={phoneRegex}
                    validationMessage="Номер не правильный!" />
                <FormGroup
                    labelText="E-mail"
                    type="email"
                    id="email"
                    name="email"
                    field={email}
                    setField={setEmail}
                    regex={emailRegex}
                    validationMessage="Почта не правильная!" />
                <PasswordFormGroup
                    show={showPassword}
                    setShow={setShowPassword}
                    labelText="Пароль"
                    id="password"
                    name="password"
                    field={password}
                    setField={setPassword}
                    regex={passwordRegex}
                    validationMessage="Пароль не правильный!" />
            </div>
            <Button text={"Зарегестрироваться"} />
            <div onClick={() => setAuthPage("login")}
                className="mt-3 hover:cursor-pointer text-xl text-blue-white dark:text-blue-dark">
                Уже есть аккаунт?
            </div>
        </form>
    );
}

export default RegisterForm;