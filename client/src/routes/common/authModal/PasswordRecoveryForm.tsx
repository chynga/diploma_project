import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { redirect } from "react-router-dom";
import { ModalProps } from ".";
import { useAppSelector } from "../../../app/hooks";
import { recoverPassword, reset, selectAuth } from "../../../features/auth/authSlice";
import { codeRegex, emailRegex, passwordRegex, state } from "../util";
import Button from "./Button";
import FormGroup from "./FormGroup";

function PasswordRecoveryForm({ setAuthPage }: ModalProps) {
    const [email, setEmail] = useState(state);
    const [code, setCode] = useState(state);
    const [password, setPassword] = useState(state);
    const dispatch = useDispatch<any>();
    var isEmailSent = false;
    const { recoveryCodeSent } = useAppSelector(selectAuth);

    useEffect(() => {
        return () => {
            reset();
        }
    }, [recoveryCodeSent]);

    const onSubmit = (e: any) => {
        e.preventDefault();
        const userCredentials = isEmailSent ? {
            email: email.value,
            code: code.value,
            password: password.value,
        } : {
            email: email.value,
        }

        dispatch(recoverPassword(userCredentials));
        if (isEmailSent) {
            redirect("/");
        } else {
            console.log(isEmailSent)
            isEmailSent = true;
            console.log(isEmailSent)
        }
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
            {isEmailSent ?
                <>
                    <FormGroup
                        labelText="Код"
                        type="code"
                        id="code"
                        name="code"
                        field={code}
                        setField={setCode}
                        regex={codeRegex}
                        validationMessage="Enter valid code" />
                    <FormGroup
                        labelText="Пароль"
                        type="password"
                        id="password"
                        name="password"
                        field={password}
                        setField={setPassword}
                        regex={passwordRegex}
                        validationMessage="1 UPPERCASE letter, 1 lowercase letter, 1 number" />
                </> :
                <></>
            }
            <Button />
        </form>
    );
}

export default PasswordRecoveryForm;