import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { register, reset, selectAuth } from "../../features/auth/authSlice";
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap';
import { useTranslation } from "react-i18next";
import ValidatedInput from "../../components/ValidatedInput";
import LoadingButton from "../../components/LoadingButton";

const Register = () => {
    const { user, error, isLoading } = useAppSelector(selectAuth);
    const navigate = useNavigate();
    const dispatch = useDispatch<any>();
    const [firstName, setFirstName] = useState({
        value: "",
        isValid: false
    });
    const [lastName, setLastName] = useState({
        value: "",
        isValid: false
    });
    const [email, setEmail] = useState({
        value: "",
        isValid: false
    });
    const [phone, setPhone] = useState({
        value: "",
        isValid: false
    });
    const [password, setPassword] = useState({
        value: "",
        isValid: false
    });

    const nameRegex = /[^\s0-9]{3,15}/;
    const emailRegex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    const phoneRegex = /^(\+\d{1,3}( )?)?((\(\d{1,3}\))|\d{1,3})[- .]?\d{3,4}[- .]?\d{4}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,15}$/;
    const { t, i18n } = useTranslation(["kz", "ru"]);

    useEffect(() => {
        dispatch(reset())
        if (user) {

            if (user.emailVerified) {
                navigate("/");
            } 

            navigate("/confirm")
        }

    }, [user]);

    const onChange = (e: React.FormEvent<HTMLInputElement>, setValue: any) => {
        let value = (e.target as HTMLTextAreaElement).value
        setValue((prevState: any) => ({
            ...prevState,
            value,
        }));
    };

    const onSubmit = (e: any) => {
        e.preventDefault();

        const userData = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            phone: phone.value,
            password: password.value,
        };
        
        dispatch(register(userData));
    };

    return (
        <div className="auth">
            <Form className="form" onSubmit={onSubmit}>
                <h2>{t('user:register')}</h2>
                <h6 className="error-message">{error ? error.message : ""}</h6>
                <FormGroup>
                    <Label for="firstName">{t('user:firstName')}</Label>
                    <ValidatedInput 
                        type="text"
                        id="firstName"
                        name="firstName"
                        field={firstName}
                        setField={setFirstName}
                        onChange={(event: any) => onChange(event, setFirstName)}
                        regex={nameRegex}
                        validationMessage="Enter valid name"
                        required />
                </FormGroup>
                <FormGroup>
                    <Label for="lastName">{t('user:lastName')}</Label>
                    <ValidatedInput 
                        type="text"
                        id="lastName"
                        name="lastName"
                        field={lastName}
                        setField={setLastName}
                        onChange={(event: any) => onChange(event, setLastName)}
                        regex={nameRegex}
                        validationMessage="Enter valid name"
                        required />
                </FormGroup>
                <FormGroup>
                    <Label for="email">{t('user:email')}</Label>
                    <ValidatedInput 
                        type="email"
                        id="email"
                        name="email"
                        field={email}
                        setField={setEmail}
                        onChange={(event: any) => onChange(event, setEmail)}
                        regex={emailRegex}
                        validationMessage="Enter valid email"
                        required />
                </FormGroup>
                <FormGroup>
                    <Label for="phone">{t('user:phone')}</Label>
                    <ValidatedInput 
                        type="text"
                        id="phone"
                        name="phone"
                        field={phone}
                        setField={setPhone}
                        onChange={(event: any) => onChange(event, setPhone)}
                        regex={phoneRegex}
                        validationMessage="Enter phone number"
                        required />
                </FormGroup>
                <FormGroup>
                    <Label for="password">{t('user:password')}</Label>
                    <ValidatedInput 
                        type="password"
                        id="password"
                        name="password"
                        field={password}
                        setField={setPassword}
                        onChange={(event: any) => onChange(event, setPassword)}
                        regex={passwordRegex}
                        validationMessage="1 UPPERCASE letter, 1 lowercase letter, 1 number"
                        required />
                </FormGroup>
                <LoadingButton 
                    isLoading={isLoading} 
                    isDisabled={
                        !(firstName.isValid &&
                        lastName.isValid &&
                        email.isValid &&
                        phone.isValid &&
                        password.isValid)
                        }>
                    {t('user:register')}
                </LoadingButton>
                <div>
                    <Link to="/login">{t('user:login')}</Link><br />
                    <Link to="/">{t('home:title')}</Link>
                </div>
            </Form>
        </div>
    );
};

export default Register;
