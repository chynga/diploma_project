import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { login, reset, selectAuth } from "../../features/auth/authSlice";
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap';
import { useTranslation } from "react-i18next";

const Login = () => {
    const { user, error } = useAppSelector(selectAuth);
    const navigate = useNavigate();
    const dispatch = useDispatch<any>();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const { t, i18n } = useTranslation(["kz", "ru"]);

    const { email, password } = formData;

    useEffect(() => {
        dispatch(reset())
        if (user) {
            navigate("/");
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
            email,
            password,
        };
        
        console.log(userData)
        dispatch(login(userData));
    };

    return (
        <div className="auth">
            <Form className="form" onSubmit={onSubmit}>
                <h2>{t('user:login')}</h2>
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
                <Button>{t('user:login')}</Button>
                <div>
                    <Link to="/register">{t('user:register')}</Link><br />
                    <Link to="/recover">Forgot Password</Link><br />
                    <Link to="/">{t('home:title')}</Link>
                </div>
            </Form>
        </div>
    );
};

export default Login;
