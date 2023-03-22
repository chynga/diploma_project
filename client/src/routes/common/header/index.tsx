import { t } from "i18next";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { logout, selectAuth } from "../../../features/auth/authSlice";
import AuthModal, { AuthPage } from "../authModal";
import { ArrowDown, Bell, Burger, Close, Glasses, Logo, Person, Phone2Svg, ProfilePicture, ThemeToggler } from "../SvgImages";
import { TextBase, TextLg, TextXl } from "../TextElements";
import { toggleTheme } from "../util";
import Notification from "./Notification";

type NavbarProps = {
    showNav: boolean,
}

function Header() {
    const [showNav, setShowNav] = useState(false);
    const [authPage, setAuthPage] = useState<AuthPage>(null);
    const { t, i18n } = useTranslation(["kz", "ru"]);
    const location = useLocation();
    const dispatch = useDispatch<any>();

    const { user } = useAppSelector(selectAuth);

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    if (location.pathname.includes("/profile-panel") ||
        location.pathname.includes("/admin")) {
        return <div></div>
    }

    const onLogout = (e: any) => {
        e.preventDefault();

        dispatch(logout());
    };

    return (
        <header className="mt-[64px] lg:mt-[162px]">
            <div className="shadow-lg fixed z-30 top-0 bg-background-white dark:bg-background-dark w-full">
                <div className="lg:px-8 p-3 lg:pt-5 flex justify-between items-center">
                    <Link to={"/"}>
                        <Logo fill={"blue"} className={"w-[100px] md:w-[220px]"} />
                    </Link>
                    <div className="hidden lg:block">
                        <TextXl>
                            <div className="font-medium">
                                Пн - Пт: 9:00 - 23:00
                            </div>
                        </TextXl>
                        <TextXl>
                            <div className="font-medium">
                                Сб - Вс: 9:00 - 19:00
                            </div>
                        </TextXl>
                    </div>
                    <div className="hidden xl:flex items-center gap-3">
                        <Phone2Svg />
                        <div>
                            <TextXl>
                                <div className="font-medium">
                                    +7 701 188 5055
                                </div>
                            </TextXl>
                            <TextXl>
                                <div className="font-medium">
                                    +7 707 188 5055
                                </div>
                            </TextXl>
                        </div>
                    </div>
                    <div className="flex gap-3 lg:gap-5 items-center">
                        <div className="flex items-center gap-3 hover:cursor-pointer">
                            <Glasses />
                            <TextLg>
                                <p className="hidden md:block font-medium">
                                    Слабовидящим
                                </p>
                            </TextLg>
                        </div>
                        <div className="hover:cursor-pointer" onClick={toggleTheme} id="theme-toggle">
                            <ThemeToggler className="w-[20px] md:w-auto" />
                        </div>
                        {user && user.roles?.includes("CLIENT") ?
                            <Notification />
                            :
                            <></>
                        }
                        <div className="group relative min-h-[40px] hover:cursor-pointer flex items-center gap-3">
                            <TextBase blue>
                                {i18n.language === "ru" ?
                                    "РУС" :
                                    "КАЗ"}
                            </TextBase>
                            <ArrowDown />
                            <div className="hidden group-hover:block absolute bg-background-white dark:bg-background-dark top-[100%] right-0 w-[90px] border-[1px] border-blue-white dark:border-blue-dark rounded-2xl rounded-tr-none">
                                <div className="p-2 border-b-[1px] border-blue-white dark:border-blue-dark">
                                    <TextBase blue>
                                        {i18n.language === "ru" ?
                                            "РУС" :
                                            "КАЗ"}
                                    </TextBase>
                                </div>
                                <div className="p-2" onClick={() => {
                                    i18n.language === "ru" ?
                                        changeLanguage("kz") :
                                        changeLanguage("ru")
                                }}>
                                    <TextBase>
                                        {i18n.language === "kz" ?
                                            "РУС" :
                                            "КАЗ"}
                                    </TextBase>
                                </div>
                            </div>
                        </div>
                        <div className="h-[50px] group relative hidden lg:flex hover:cursor-pointer items-center gap-3">
                            {user ?
                                <ProfilePicture imageUrl={user.profileImageUrl} className="w-[50px] h-[50px]" />
                                :
                                <Person fill={"blue"} />
                            }
                            <ArrowDown />
                            {user ?
                                <div className="hidden group-hover:block py-5 w-[276px] flex flex-col items-center justify-around gap-3 group-hover:flex absolute bg-background-white dark:bg-background-dark top-[100%] right-0 rounded-b-2xl drop-shadow-lg">
                                    <ProfilePicture imageUrl={user.profileImageUrl} className="w-[100px] h-[100px]" />
                                    <div>
                                        <TextBase>{user.fullName}</TextBase>
                                    </div>
                                    <div>
                                        <TextBase>{user.email}</TextBase>
                                    </div>
                                    <div>
                                        <TextBase>{user.phone}</TextBase>
                                    </div>
                                    <Link to={"profile-panel/appointments/future"}>
                                        <TextBase>Личный кабинет</TextBase>
                                    </Link>
                                    {!user.roles?.includes("CLIENT") ?
                                        <Link className="hover:text-blue-white dark:hover:text-blue-dark"
                                            to={"/admin/employees"}>
                                            <TextBase>Панель Администрирования</TextBase>
                                        </Link> :
                                        <></>
                                    }
                                    <div onClick={onLogout}>
                                        <TextBase>
                                            <div className="text-red-400">Выйти</div>
                                        </TextBase>
                                    </div>
                                </div>
                                :
                                <div className="hidden group-hover:block absolute bg-background-white dark:bg-background-dark top-[100%] right-0 border-[1px] border-blue-white dark:border-blue-dark rounded-2xl rounded-tr-none">
                                    <div className="p-2 border-b-[1px] border-blue-white dark:border-blue-dark"
                                        onClick={() => setAuthPage("register")}>
                                        <TextBase>Регистрация</TextBase>
                                    </div>
                                    <div onClick={() => setAuthPage("login")} className="p-2">
                                        <TextBase>Войти</TextBase>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="lg:hidden hover:cursor-pointer" onClick={() => { setShowNav(!showNav) }}>
                            {showNav ?
                                <Close />
                                :
                                <Burger className="w-[20px] md:w-[40px] h-[20px] md:h-[40px]" fill={"blue"} />
                            }
                        </div>
                    </div>
                </div>
                <Navbar showNav={showNav} />
            </div>
            {authPage ? <AuthModal authPage={authPage} setAuthPage={setAuthPage} /> : <></>}
        </header>
    );
}

function Navbar({ showNav }: NavbarProps) {
    return (
        <div className="lg:py-2.5">
            <div className={`${showNav ? "fixed" : "hidden"} lg:static lg:block shadow-lg lg:shadow-none px-5 pt-5 pb-20 lg:py-2.5 max-w-[400px] lg:max-w-none overflow-auto w-full right-0 bottom-0 h-[calc(100vh_-_61px)] lg:h-auto bg-background-white dark:bg-background-dark`}>
                <ul className="flex flex-col lg:flex-row justify-center gap-3 lg:gap-16 font-medium">
                    <li>
                        <Link to="/">
                            <TextXl>
                                <span className={`${useLocation().pathname === "/" ? "text-[rgba(39,127,242,0.7)] drop-shadow-[0_0_5px_rgba(39,127,242,0.7)] dark:text-primary-dark dark:drop-shadow-[0_0_5px_#FFFFFF]" : ""}`}>
                                    {t('home:title')}
                                </span>
                            </TextXl>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            <TextXl>
                                <span className={`${useLocation().pathname === "/about" ? "text-[rgba(39,127,242,0.7)] drop-shadow-[0_0_5px_rgba(39,127,242,0.7)] dark:text-primary-dark dark:drop-shadow-[0_0_5px_#FFFFFF]" : ""}`}>
                                    {t('about:title')}
                                </span>
                            </TextXl>
                        </Link>
                    </li>
                    <li>
                        <Link to="/services">
                            <TextXl>
                                <span className={`${useLocation().pathname.includes("/services") ? "text-[rgba(39,127,242,0.7)] drop-shadow-[0_0_5px_rgba(39,127,242,0.7)] dark:text-primary-dark dark:drop-shadow-[0_0_5px_#FFFFFF]" : ""}`}>
                                    {t('service:title')}
                                </span>
                            </TextXl>
                        </Link>
                    </li>
                    <li>
                        <Link to="/doctors">
                            <TextXl>
                                <span className={`${useLocation().pathname.includes("/doctors") ? "text-[rgba(39,127,242,0.7)] drop-shadow-[0_0_5px_rgba(39,127,242,0.7)] dark:text-primary-dark dark:drop-shadow-[0_0_5px_#FFFFFF]" : ""}`}>
                                    {t('doctor:title')}
                                </span>
                            </TextXl>
                        </Link>
                    </li>
                    <li>
                        <Link to="/reviews">
                            <TextXl>
                                <span className={`${useLocation().pathname === "/reviews" ? "text-[rgba(39,127,242,0.7)] drop-shadow-[0_0_5px_rgba(39,127,242,0.7)] dark:text-primary-dark dark:drop-shadow-[0_0_5px_#FFFFFF]" : ""}`}>
                                    {t('review:title')}
                                </span>
                            </TextXl>
                        </Link>
                    </li>
                    <li>
                        <Link to="/advices">
                            <TextXl>
                                <span className={`${useLocation().pathname === "/advices" ? "text-[rgba(39,127,242,0.7)] drop-shadow-[0_0_5px_rgba(39,127,242,0.7)] dark:text-primary-dark dark:drop-shadow-[0_0_5px_#FFFFFF]" : ""}`}>
                                    {t('advice:title')}
                                </span>
                            </TextXl>
                        </Link>
                    </li>
                    {/* <li>
                        <Link to="/vacancy">
                            <TextXl>
                                <span className={`${useLocation().pathname === "/vacancy" ? "text-[rgba(39,127,242,0.7)] drop-shadow-[0_0_5px_rgba(39,127,242,0.7)] dark:text-primary-dark dark:drop-shadow-[0_0_5px_#FFFFFF]" : ""}`}>
                                    {t('vacancy:title')}
                                </span>
                            </TextXl>
                        </Link>
                    </li> */}
                </ul>
            </div>
        </div >
    );
}

export default Header;