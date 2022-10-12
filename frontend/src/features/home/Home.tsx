import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { logout, reset, selectUser } from "../auth/authSlice";

const Home = () => {
    const dispatch = useDispatch<any>()
    const navigate = useNavigate()
    const user = useAppSelector(selectUser);

    const onLogoutClick = () => {
        dispatch(logout());
        dispatch(reset());
        navigate("/");
    };
    return (
        <>
            <h1>Home Page</h1>
            <div>
                {user ? 
                    <button onClick={onLogoutClick}>Log out</button> : 
                    <>
                        <Link to="/login">Login</Link><br/>
                        <Link to="/register">Register</Link>
                    </>}
            </div>
        </>
    );
};

export default Home;
