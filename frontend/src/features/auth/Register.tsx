import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { register, reset, selectUser } from "../../features/auth/authSlice";
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap';
import { useTranslation } from "react-i18next";

const Register = () => {
    const user = useAppSelector(selectUser);
    const navigate = useNavigate();
    const dispatch = useDispatch<any>();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        password2: "",
    });
    const { firstName, lastName, email, phone, password } = formData;

    const { t, i18n } = useTranslation(["kz", "ru"]);

    useEffect(() => {
        if (user) {

            if (!user.emailVerified) {
                navigate("/");
            } 

            navigate("/confirm")
        }

    }, [user]);

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        setFormData(prevState => ({
            ...prevState,
            [(e.target as HTMLTextAreaElement).name]: (e.target as HTMLTextAreaElement).value,
        }));
    };

    const onSubmit = (e: any) => {
        e.preventDefault();

        const userData = {
            firstName,
            lastName,
            email,
            phone,
            password,
        };
        
        dispatch(register(userData));
    };

    return (
        <div className="auth">
            <Form className="form" onSubmit={onSubmit}>
                <h2>{t('user:register')}</h2>
                <FormGroup>
                    <Label for="firstName">{t('user:firstName')}</Label>
                    <Input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={firstName}
                        onChange={onChange}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="lastName">{t('user:lastName')}</Label>
                    <Input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={lastName}
                        onChange={onChange}
                        required
                    />
                </FormGroup>
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
                <FormGroup>
                    <Label for="phone">{t('user:phone')}</Label>
                    <Input
                        type="text"
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={onChange}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="password">{t('user:password')}</Label>
                    <Input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        required
                    />
                </FormGroup>
                <Button>{t('user:register')}</Button>
                <div>
                    <Link to="/login">{t('user:login')}</Link><br />
                    <Link to="/">{t('home:title')}</Link>
                </div>
            </Form>
        </div>
    );
};

export default Register;
