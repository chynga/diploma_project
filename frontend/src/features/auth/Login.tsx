import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { login, reset, selectUser } from "../../features/auth/authSlice";
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap';

const Login = () => {
    const user = useAppSelector(selectUser);
    const navigate = useNavigate();
    const dispatch = useDispatch<any>();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { email, password } = formData;

    useEffect(() => {
        if (user) {
            navigate("/");
        }

        dispatch(reset());
    }, [user, navigate, dispatch]);

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
                <h2>Login</h2>
                <FormGroup>
                    <Label for="email">Email</Label>
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
                    <Label for="password">Password</Label>
                    <Input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        required
                    />
                </FormGroup>
                <Button>Submin</Button>
                <div>
                    <Link to="/register">Register</Link><br />
                    <Link to="/">Home Page</Link>
                </div>
            </Form>
        </div>
    );
};

export default Login;
