import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../../features/auth/authSlice";
import { emailRegex, nameRegex, passwordRegex, phoneRegex, state } from "../util";
import Button from "./Button";
import FormGroup from "./FormGroup";

function RegisterForm() {
    const [fullName, setFullName] = useState(state);
    const [phone, setPhone] = useState(state);
    const [email, setEmail] = useState(state);
    const [password, setPassword] = useState(state);
    const dispatch = useDispatch<any>();

    const onSubmit = (e: any) => {
        e.preventDefault();

        const userData = {
            fullName: fullName.value,
            phone: phone.value,
            email: email.value,
            password: password.value,
        };

        console.log(userData);
        dispatch(register(userData));
    };

    return (
        <form onSubmit={onSubmit}>
            <FormGroup
                labelText="ФИО"
                type="name"
                id="name"
                name="name"
                field={fullName}
                setField={setFullName}
                regex={nameRegex}
                validationMessage="Enter valid name" />
            <FormGroup
                labelText="Номер телефона"
                type="phone"
                id="phone"
                name="phone"
                field={phone}
                setField={setPhone}
                regex={phoneRegex}
                validationMessage="Enter valid phone number" />
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
        </form>
    );
}

export default RegisterForm;