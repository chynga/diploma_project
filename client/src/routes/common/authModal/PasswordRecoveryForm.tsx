import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { FormProps } from ".";
import { codeRegex, emailRegex, passwordRegex, state } from "../util";
import Button from "./Button";
import FormGroup from "./FormGroup";

function PasswordRecoveryForm({ setAuthPage, setErrorMsg }: FormProps) {
    const [email, setEmail] = useState(state);
    const [code, setCode] = useState(state);
    const [password, setPassword] = useState(state);
    const dispatch = useDispatch<any>();
    const [isEmailSent, setEmailSent] = useState(false);
    const [isCodeCorrect, setCodeCorrect] = useState(false);
    const [isLoading, setLoading] = useState(false);

    const onSubmit = (e: any) => {
        e.preventDefault();

        if (isLoading) {
            return;
        }

        if (!isEmailSent) {
            const credentials = {
                email: email.value,
            }

            setLoading(true);
            axios.post("/api/password/recover", credentials)
                .then(() => {
                    setErrorMsg("");
                    setEmailSent(true);
                }).catch((error) => {
                    setErrorMsg("Не удалось отправить код!");
                }).finally(() => {
                    setLoading(false);
                });
        } else if (isEmailSent && !isCodeCorrect) {
            const credentials = {
                email: email.value,
                code: code.value,
            }

            setLoading(true);
            axios.post("/api/password/check-recovery-code", credentials)
                .then(() => {
                    setErrorMsg("");
                    setCodeCorrect(true);
                }).catch((error) => {
                    setErrorMsg("Код не совпадает!");
                }).finally(() => {
                    setLoading(false);
                });
        } else {
            const credentials = {
                email: email.value,
                code: code.value,
                password: password.value,
            }

            setLoading(true);
            axios.post("/api/password/recover", credentials)
                .then(() => {
                    setErrorMsg("");
                    setAuthPage("login");
                }).catch((error) => {
                    setErrorMsg("Возникла ошибка!");
                }).finally(() => {
                    setLoading(false);
                });
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <div className={`${isEmailSent ? "hidden" : ""}`}>
                <FormGroup
                    labelText="E-mail"
                    type="email"
                    id="email"
                    name="email"
                    field={email}
                    setField={setEmail}
                    regex={emailRegex}
                    validationMessage="Почта не правильная!" />
            </div>
            <div className={`${isEmailSent && !isCodeCorrect ? "" : "hidden"}`}>
                <FormGroup
                    labelText="Код"
                    type="code"
                    id="code"
                    name="code"
                    field={code}
                    setField={setCode}
                    regex={codeRegex}
                    validationMessage="Код не правильный!" />
            </div>
            <div className={`${isEmailSent && isCodeCorrect ? "" : "hidden"}`}>
                <FormGroup
                    labelText="Пароль"
                    type="password"
                    id="password"
                    name="password"
                    field={password}
                    setField={setPassword}
                    regex={passwordRegex}
                    validationMessage="Пароль не правильный!" />
            </div>
            <Button isLoading={isLoading} />
        </form>
    );
}

export default PasswordRecoveryForm;