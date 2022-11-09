import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { login, reset, sendRecoveryCode, recoverPassword, selectAuth } from "../../features/auth/authSlice";
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap';
import { useTranslation } from "react-i18next";
import ValidatedInput from "../../components/ValidatedInput";

const ForgotPassword = () => {
    const { user, error, recoveryCodeSent, passwordRecovered } = useAppSelector(selectAuth);
    const navigate = useNavigate();
    const dispatch = useDispatch<any>();
    const [formData, setFormData] = useState({
        email: "",
        code: "",
        password: "",
    });
    const emailRegex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,15}$/;
    const codeRegex = /^[0-9]{6}$/;
    const { t, i18n } = useTranslation(["kz", "ru"]);

    const { email, code, password } = formData;

    useEffect(() => {
        dispatch(reset())
        if (user) {
            navigate("/");
        }

        if (passwordRecovered) {
            dispatch(reset())
            dispatch(login({email, password}))
        }
    }, [user, passwordRecovered]);

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        setFormData(prevState => ({
            ...prevState,
            [(e.target as HTMLTextAreaElement).name]: (e.target as HTMLTextAreaElement).value,
        }));
    };

    const onSendRecoveryCode = (e: any) => {
        e.preventDefault();
        
        dispatch(sendRecoveryCode(email));
    };


    const onSubmit = (e: any) => {
        e.preventDefault();

        const recoveryData = {
            email,
            code,
            password,
        };
        
        console.log(recoveryData)
        dispatch(recoverPassword(recoveryData));
    };

    return (
        <div className="auth">
            <Form className="form" onSubmit={recoveryCodeSent ? onSubmit : onSendRecoveryCode}>
                <h2>Forgot Password</h2>
                <h6 className="error-message">{error ? error.message : ""}</h6>
                <FormGroup>
                    <Label for="email">{t('user:email')}</Label>
                </FormGroup>
                {
                    recoveryCodeSent ? 
                        <>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                disabled />
                            <FormGroup>
                                <Label for="password">{t('user:password')}</Label>
                                <ValidatedInput 
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={onChange}
                                    regex={passwordRegex}
                                    validationMessage="1 UPPERCASE letter, 1 lowercase letter, 1 number"
                                    required />
                            </FormGroup>
                            <FormGroup>
                                <Label for="code">Code</Label>
                                <ValidatedInput 
                                    type="text"
                                    id="code"
                                    name="code"
                                    value={code}
                                    onChange={onChange}
                                    regex={codeRegex}
                                    validationMessage="Enter 6 numbers"
                                    required />
                            </FormGroup>
                            <Button>Reset password</Button>
                        </> :
                        <>
                            <ValidatedInput 
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={onChange}
                                regex={emailRegex}
                                validationMessage="Enter valid email"
                                required />
                            <Button>Send Code</Button>
                        </>
                }
                <div>
                    <Link to="/login">{t('user:login')}</Link><br />
                    <Link to="/">{t('home:title')}</Link>
                </div>
            </Form>
        </div>
    );
};

export default ForgotPassword;
