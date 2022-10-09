import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import { register } from "../../features/auth/authSlice";
// import { Spinner } from "reactstrap";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        phone: "",
        password: "",
        password2: "",
    });

    const { name, surname, email, phone, password, password2 } = formData;

    // const navigate = useNavigate();
    const dispatch = useDispatch<any>();

    // const { user, isLoading, isError, isSuccess, message } = useSelector(
    //     state => state.auth
    // );

    // useEffect(() => {
    //     if (isError) {
    //         toast.error(message);
    //     }

    //     if (isSuccess || user) {
    //         navigate("/");
    //     }

    //     dispatch(reset());
    // }, [user, isError, isSuccess, message, navigate, dispatch]);

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        setFormData(prevState => ({
            ...prevState,
            [(e.target as HTMLTextAreaElement).name]: (e.target as HTMLTextAreaElement).value,
        }));
    };

    const onSubmit = (e: any) => {
        e.preventDefault();

        const userData = {
            name,
            surname,
            email,
            phone,
            password,
        };
        
        console.log(userData)
        dispatch(register(userData));
    };

    return (
        <form onSubmit={onSubmit}>
            <h2>sign up</h2>
            <div className="form-fullname">
                <input
                    className="first-name"
                    type="text"
                    placeholder="First name"
                    id="name"
                    name="name"
                    value={name}
                    onChange={onChange}
                    required
                />
                <input
                    className="last-name"
                    type="text"
                    placeholder="Last name"
                    id="surname"
                    name="surname"
                    value={surname}
                    onChange={onChange}
                    required
                />
            </div>
            <div className="form-email">
                <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    required
                />
            </div>
            <div className="form-email">
                <input
                    type="text"
                    placeholder="Phone"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={onChange}
                    required
                />
            </div>
            <div className="form-password">
                <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    required
                />
            </div>
            <button type="submit">Submin</button>
        </form>
    );
};

export default Register;
