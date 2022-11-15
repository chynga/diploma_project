import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
    Button, Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink, UncontrolledDropdown,
} from 'reactstrap';
import { logout, reset, selectAuth } from "../features/auth/authSlice";
import { useAppSelector } from "../app/hooks";
import "../localization"
import { useTranslation } from "react-i18next";

const AppNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch<any>()
    const navigate = useNavigate()
    const { user } = useAppSelector(selectAuth);
    const { t, i18n } = useTranslation(["kz", "ru"]);

    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate("/");
    };
    
    useEffect(() => {
    }, [user, navigate, dispatch]);

    const changeLanguage = (e: any) => {
        i18n.changeLanguage(e.target.value);
    };

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar expand="lg" light={true}>
                <NavbarBrand tag={Link} to="/">DentalCare</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar> 
                    <Nav className="mr-auto" navbar>
                        {user ? 
                            <><NavItem> 
                                <NavLink tag={Link} to="/profile">Profile page</NavLink>
                            </NavItem></> : 
                            null}
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <Button value="kz" color="link" onClick={changeLanguage}>kz</Button>
                        <Button value="ru" color="link" onClick={changeLanguage}>ru</Button>
                        {user ? 
                            <><NavItem> 
                                <NavLink onClick={onLogout}>{t('user:logout')}</NavLink>
                            </NavItem></> : 
                            <>
                                <NavItem>
                                    <NavLink tag={Link} to="/login">{t('user:login')}</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/register">{t('user:register')}</NavLink>
                                </NavItem>
                            </>}
                    </Nav>
                </Collapse>
            </Navbar>
            {/* <Link to="/">{t('home:title')}</Link><br/>
            {user ? <><Link to="/profile">Profile page</Link><br /></> : null}
            {user ? 
                <>
                    <button onClick={onLogoutClick}>{t('user:logout')}</button>
                </> : 
                <>
                    <Link to="/login">{t('user:login')}</Link><br/>
                    <Link to="/register">{t('user:register')}</Link>
                </>}

            <Button value="kz" onClick={changeLanguage}>kz</Button>
            <Button value="ru" onClick={changeLanguage}>ru</Button> */}
        </div>
    );
};

export default AppNavbar;
