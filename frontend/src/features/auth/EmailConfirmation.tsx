import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useAppSelector } from "../../app/hooks";
import { verify, selectAuth, reset, sendVerificationCode } from "../../features/auth/authSlice";

const EmailConfirmation = () => {

    const { user, error, verificationCodeSent } = useAppSelector(selectAuth);
    const navigate = useNavigate();
    const dispatch = useDispatch<any>();
    const [formData, setFormData] = useState({
        email: "",
        code: "",
    });
    const { t, i18n } = useTranslation(["kz", "ru"]);

    const { code } = formData;

    useEffect(() => {
        dispatch(reset())
        if (!user) {
            navigate("/register")
        }
        
        if (user?.emailVerified) {
            // dispatch(reset())
            navigate("/");
        }
        
    }, [user]);

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        setFormData(prevState => ({
            ...prevState,
            [(e.target as HTMLTextAreaElement).name]: (e.target as HTMLTextAreaElement).value,
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
            code,
        };
        
        // console.log(userData)
        // dispatch(login(userData));
        dispatch(verify(verificationData))
    };

    return (
        <div className="auth">
            <Form className="form" onSubmit={verificationCodeSent ? onSubmit : onSendRecoveryCode}>
                <h2>Verify Email</h2>
                <h6 className="error-message">{error ? error.message : ""}</h6>
                <FormGroup>
                    <Label for="email">{t('user:email')}</Label>
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        value={user!.email}
                        required
                        disabled
                    />
                </FormGroup>
                {
                    verificationCodeSent ? 
                        <>
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
                            <Button>Verify Email</Button>
                        </> :
                        <>
                            <Button>Send Code</Button>
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
