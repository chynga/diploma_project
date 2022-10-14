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
            firstName,
            lastName,
            email,
            phone,
            password,
        };
        
        console.log("Register Component: ", userData)
        dispatch(register(userData));
    };

    return (
        <div className="auth">
            <Form className="form" onSubmit={onSubmit}>
                <h2>Register</h2>
                <FormGroup>
                    <Label for="firstName">First Name</Label>
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
                    <Label for="lastName">Last Name</Label>
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
                    <Label for="phone">Phone Number</Label>
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
                    <Link to="/login">Login</Link><br />
                    <Link to="/">Home Page</Link>
                </div>
            </Form>
        </div>
    );
};

export default Register;
