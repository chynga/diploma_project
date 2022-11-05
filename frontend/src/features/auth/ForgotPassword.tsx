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

const ForgotPassword = () => {
    const { user, error, recoveryCodeSent, passwordRecovered } = useAppSelector(selectAuth);
    const navigate = useNavigate();
    const dispatch = useDispatch<any>();
    const [formData, setFormData] = useState({
        email: "",
        code: "",
        password: "",
    });
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
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        required
                    />
                </FormGroup>
                {
                    recoveryCodeSent ? 
                        <>
                            <FormGroup>
                                <Label for="password">{t('user:password')}</Label>
                                <Input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={onChange}
                                    required />
                            </FormGroup>
                            <FormGroup>
                                <Label for="code">Code</Label>
                                <Input
                                    type="text"
                                    id="code"
                                    name="code"
                                    value={code}
                                    onChange={onChange}
                                    required />
                            </FormGroup>
                            <Button>Reset password</Button>
                        </> :
                        <>
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
