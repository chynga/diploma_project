import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useAppSelector } from "../../app/hooks";
import LoadingButton from "../../components/LoadingButton";
import ValidatedInput from "../../components/ValidatedInput";
import { verify, selectAuth, reset, sendVerificationCode } from "../../features/auth/authSlice";
import { state } from "./Login";

const EmailConfirmation = () => {

    const { user, error, isLoading, verificationCodeSent } = useAppSelector(selectAuth);
    const navigate = useNavigate();
    const dispatch = useDispatch<any>();
    const [code, setCode] = useState(state);

    const codeRegex = /^[0-9]{6}$/;
    const { t, i18n } = useTranslation(["kz", "ru"]);

    useEffect(() => {
        dispatch(reset())
        if (!user) {
            navigate("/register")
        }
        
        if (user?.emailVerified) {
            navigate("/");
        }
        
    }, [user]);

    const onChange = (e: React.FormEvent<HTMLInputElement>, setValue: any) => {
        let value = (e.target as HTMLTextAreaElement).value
        setValue((prevState: any) => ({
            ...prevState,
            value,
        }));
    };

    const onSendRecoveryCode = (e: any) => {
        e.preventDefault();
        
        dispatch(sendVerificationCode(user!.email));
    };

    const onSubmit = (e: any) => {
        e.preventDefault();

        const verificationData = {
            email: user!.email,
            code: code.value,
        };
        
        dispatch(verify(verificationData))
    };

    return (
        <div className="auth">
            <Form className="form" onSubmit={verificationCodeSent ? onSubmit : onSendRecoveryCode}>
                <h2>{t('user:verifyEmail')}</h2>
                <h6 className="error-message">{error ? error.message : ""}</h6>
                <FormGroup>
                    <Label for="email">{t('user:email')}</Label>
                    <Input
                        type="email"
                        id="email"
                        name="value"
                        value={user!.email}
                        required
                        disabled
                    />
                </FormGroup>
                {
                    verificationCodeSent ? 
                        <>
                            <FormGroup>
                                <Label for="code">{t('user:code')}</Label>
                                <ValidatedInput 
                                    type="text"
                                    id="code"
                                    name="code"
                                    field={code}
                                    setField={setCode}
                                    onChange={(event: any) => onChange(event, setCode)}
                                    regex={codeRegex}
                                    validationMessage="Enter 6 numbers"
                                    required />
                            </FormGroup>
                            <LoadingButton isLoading={isLoading} isDisabled={!code.isValid}>{t('user:verifyEmail')}</LoadingButton>
                        </> :
                        <>
                            <LoadingButton isLoading={isLoading}>{t('user:sendCode')}</LoadingButton>
                        </>
                }
                <div>
                    <Link to="/">{t('home:title')}</Link>
                </div>
            </Form>
        </div>
    );
};

export default EmailConfirmation;
