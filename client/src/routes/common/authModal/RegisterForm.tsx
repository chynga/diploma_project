import { useState } from "react";
import { emailRegex, nameRegex, passwordRegex, phoneRegex, state } from "../util";
import Button from "./Button";
import FormGroup from "./FormGroup";

function RegisterForm() {

    const [name, setName] = useState(state);
    const [phone, setPhone] = useState(state);
    const [email, setEmail] = useState(state);
    const [password, setPassword] = useState(state);

    return (
        <form action="">
            <FormGroup
                labelText="ФИО"
                type="name"
                id="name"
                name="name"
                field={name}
                setField={setName}
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