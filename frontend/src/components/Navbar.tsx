import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap';
import { logout, reset, selectUser } from "../features/auth/authSlice";
import { useAppSelector } from "../app/hooks";
import "../localization"
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const dispatch = useDispatch<any>()
    const navigate = useNavigate()
    const user = useAppSelector(selectUser);
    const { t, i18n } = useTranslation(["kz", "ru"]);

    const onLogoutClick = () => {
        dispatch(logout());
        dispatch(reset());
        navigate("/");
    };
    
    useEffect(() => {
    }, [user, navigate, dispatch]);

    const changeLanguage = (e: any) => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <div>
            {user ? 
                <button onClick={onLogoutClick}>Log out</button> : 
                <>
                    <Link to="/login">{t('user:login')}</Link><br/>
                    <Link to="/register">{t('user:register')}</Link>
                </>}

            <Button value="kz" onClick={changeLanguage}>kz</Button>
            <Button value="ru" onClick={changeLanguage}>ru</Button>
        </div>
    );
};

export default Navbar;
