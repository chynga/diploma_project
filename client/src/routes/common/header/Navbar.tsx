import { Link, useLocation, useNavigate } from "react-router-dom";
import Hint, { HintContext, HintContextType, hints } from "../Hint";
import { TextBase, TextXl } from "../TextElements";
import { Dispatch, SetStateAction, useContext } from "react";
import { useTranslation } from "react-i18next";
import { VisuallyImpairedContext, VisuallyImpairedContextType } from "./VisuallyImpairedSettingBar";
import { ProfilePicture } from "../SvgImages";
import { useAppSelector } from "../../../app/hooks";
import { logout, selectAuth } from "../../../features/auth/authSlice";
import { AuthPage } from "../authModal";
import { useDispatch } from "react-redux";

type NavbarProps = {
    showNav: boolean,
    setShowNav: Dispatch<SetStateAction<boolean>>,
    setAuthPage: Dispatch<SetStateAction<AuthPage>>
}

function Navbar({ showNav, setShowNav, setAuthPage }: NavbarProps) {
    const { step } = useContext(HintContext) as HintContextType;
    const { t } = useTranslation(["kz", "ru"]);
    const navigate = useNavigate();
    const { user } = useAppSelector(selectAuth);
    const dispatch = useDispatch<any>();
    const { visuallyImpairedSettings } =
        useContext(VisuallyImpairedContext) as VisuallyImpairedContextType;

    const onLogout = (e: any) => {
        e.preventDefault();

        dispatch(logout());
        setShowNav(false);
    };

    const selectedTextColor = !visuallyImpairedSettings.isOn ?
        "text-[rgba(39,127,242,0.7)] drop-shadow-[0_0_5px_rgba(39,127,242,0.7)] dark:text-primary-dark dark:drop-shadow-[0_0_5px_#FFFFFF]"
        :
        "drop-shadow-[0_0_5px_rgba(0,0,0,0.7)]";

    const borderColor = !visuallyImpairedSettings.isOn ?
        ""
        :
        `border-b ${visuallyImpairedSettings.theme === "black" ? "border-white" : "border-[#353535]"}`;

    const bgColor = !visuallyImpairedSettings.isOn ?
        "bg-background-white dark:bg-background-dark"
        :
        visuallyImpairedSettings.theme === "white" ?
            "bg-background-white"
            :
            visuallyImpairedSettings.theme === "black" ?
                "bg-[#353535]"
                :
                "bg-[#9DD1FF]";

    const navigateTo = (to: string) => {
        navigate(to);
        setShowNav(false);
    }

    return (
        <div className={`lg:py-2.5 ${borderColor}`}>
            <div className={`${showNav ? "fixed" : "hidden"} ${bgColor} lg:static lg:block shadow-lg lg:shadow-none px-5 pt-5 pb-20 lg:py-2.5 max-w-[400px] lg:max-w-none overflow-auto w-full right-0 bottom-0 h-[calc(100vh_-_64px)] md:h-[calc(100vh_-_87px)] lg:h-auto`}>
                <ul className="flex flex-col lg:flex-row justify-center gap-3 lg:gap-16 font-medium">
                    {user ?
                        <>
                            <li onClick={() => navigateTo(user.roles?.includes("CLIENT") ? "/profile-panel/appointments/future" : user.roles?.includes("DOCTOR") ? "/profile-panel/doctor-appointments/requested" : "/profile-panel/profile")} className="lg:hidden hover:cursor-pointer">
                                <TextXl>
                                    <span>
                                        Личный кабинет
                                    </span>
                                </TextXl>
                            </li>
                        </>
                        :
                        <>
                            <li onClick={() => setAuthPage("register")} className="lg:hidden hover:cursor-pointer">
                                <TextXl>
                                    <span>
                                        Регистрация
                                    </span>
                                </TextXl>
                            </li>
                            <li onClick={() => setAuthPage("login")} className="lg:hidden hover:cursor-pointer">
                                <TextXl>
                                    <span>
                                        Войти
                                    </span>
                                </TextXl>
                            </li>
                        </>
                    }
                    {user?.roles?.includes("ADMIN") || user?.roles?.includes("CONSULTANT") ?
                        <li onClick={() => navigateTo(user.roles?.includes("ADMIN") ? "/admin/employees" : "/admin/appointments/requested")} className="lg:hidden hover:cursor-pointer">
                            <TextXl>
                                <span>
                                    Панель Администрирования
                                </span>
                            </TextXl>
                        </li>
                        :
                        <></>
                    }

                    <li onClick={() => navigateTo("/")} className="hover:cursor-pointer">
                        <TextXl>
                            <span className={`${useLocation().pathname === "/" ? selectedTextColor : ""}`}>
                                {t('home:title')}
                            </span>
                        </TextXl>
                    </li>
                    <li onClick={() => navigateTo("/about")} className="hover:cursor-pointer">
                        <TextXl>
                            <span className={`${useLocation().pathname === "/about" ? selectedTextColor : ""}`}>
                                {t('about:title')}
                            </span>
                        </TextXl>
                    </li>
                    <li onClick={() => navigateTo("/services")} className="hover:cursor-pointer">
                        <TextXl>
                            <span className={`${useLocation().pathname.includes("/services") ? selectedTextColor : ""}`}>
                                {t('service:title')}
                            </span>
                        </TextXl>
                    </li>
                    <li onClick={() => navigateTo("/doctors")} className="hover:cursor-pointer">
                        <TextXl>
                            <span className={`${useLocation().pathname.includes("/doctors") ? selectedTextColor : ""}`}>
                                {t('doctor:title')}
                            </span>
                        </TextXl>
                    </li>
                    <li onClick={() => navigateTo("/reviews")} className="hover:cursor-pointer">
                        <TextXl>
                            <span className={`${useLocation().pathname === "/reviews" ? selectedTextColor : ""}`}>
                                {t('review:title')}
                            </span>
                        </TextXl>
                    </li>
                    <li onClick={() => navigateTo("/advices")} className="hover:cursor-pointer">
                        <TextXl>
                            <span className={`${useLocation().pathname === "/advices" ? selectedTextColor : ""}`}>
                                {t('advice:title')}
                            </span>
                        </TextXl>
                    </li>
                    {user ?
                        <li onClick={onLogout} className="lg:hidden hover:cursor-pointer">
                            <TextXl>
                                <span className={"text-red-400"}>
                                    Выйти
                                </span>
                            </TextXl>
                        </li>
                        :
                        <></>
                    }
                </ul>
                {step === 1 ?
                    <Hint hintPos={"bottom"} pointerPos={"center"} content={hints[0]} />
                    :
                    <></>
                }
            </div>
        </div >
    );
}

export default Navbar;