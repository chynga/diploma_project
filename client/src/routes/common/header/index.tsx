import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { logout, selectAuth } from "../../../features/auth/authSlice";
import AuthModal, { AuthPage } from "../authModal";
import Hint, { HintContext, HintContextType, hints } from "../Hint";
import { ArrowDown, Burger, Close, Glasses, Instagram, Logo, Person, Phone2Svg, ProfilePicture, ThemeToggler } from "../SvgImages";
import { TextBase, TextLg, TextXl } from "../TextElements";
import { toggleTheme } from "../util";
import Notification from "./Notification";
import Navbar from "./Navbar";
import VisuallyImpairedSettingBar, { VisuallyImpairedContext, VisuallyImpairedContextType } from "./VisuallyImpairedSettingBar";

function Header() {
    const [showNav, setShowNav] = useState(false);
    const [authPage, setAuthPage] = useState<AuthPage>(null);
    const { i18n } = useTranslation(["kz", "ru"]);
    const location = useLocation();
    const dispatch = useDispatch<any>();
    const { step } = useContext(HintContext) as HintContextType;

    const { user } = useAppSelector(selectAuth);

    const { visuallyImpairedSettings, setVisuallyImpairedSettings } =
        useContext(VisuallyImpairedContext) as VisuallyImpairedContextType;
    const toggleImpaired = () => {
        setVisuallyImpairedSettings({
            ...visuallyImpairedSettings,
            isOn: !visuallyImpairedSettings.isOn
        })
    }

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

    const borderColor = !visuallyImpairedSettings.isOn ?
        "border-blue-white dark:border-blue-dark"
        :
        `border-b ${visuallyImpairedSettings.theme === "black" ? "border-white" : "border-[#353535]"}`;

    return (
        <header className={`${visuallyImpairedSettings.isOn ? "mt-[224px] sm:mt-[151px] md:mt-[174px] lg:mt-[249px]" : "mt-[64px] md:mt-[86px] lg:mt-[162px]"}`}>
            <div className={`shadow-lg fixed z-30 top-0 ${bgColor} w-full`}>
                <div className="lg:px-8 p-3 lg:pt-5 flex justify-between items-center">
                    <Link to={"/"}>
                        <Logo fill={visuallyImpairedSettings.isOn ? (visuallyImpairedSettings.theme !== "black" ? "black" : "white") : "blue"} className={"w-[100px] md:w-[220px]"} />
                    </Link>
                    <div className="hidden lg:flex items-center gap-5">
                        <TextLg>
                            <div className="font-medium">
                                {i18n.language === "ru" ?
                                    "г. Алматы Сатпаева 133/3"
                                    :
                                    "Алматы қ. Сатпаева 133/3"
                                }
                            </div>
                        </TextLg>
                    </div>
                    <div className="hidden lg:block">
                        <TextLg>
                            <div className="font-medium">
                                Пн - Пт: 9:00 - 23:00
                            </div>
                        </TextLg>
                        <TextLg>
                            <div className="font-medium">
                                Сб - Вс: 9:00 - 19:00
                            </div>
                        </TextLg>
                    </div>
                    <div className="hidden xl:flex items-center gap-3">
                        <Phone2Svg />
                        <div>
                            <TextLg>
                                <div className="font-medium">
                                    +7 701 188 5055
                                </div>
                            </TextLg>
                            <TextLg>
                                <div className="font-medium">
                                    +7 707 188 5055
                                </div>
                            </TextLg>
                        </div>
                    </div>
                    <div className="flex gap-3 lg:gap-5 items-center">
                        <div className="relative">
                            <div className="flex items-center gap-3 hover:cursor-pointer"
                                onClick={toggleImpaired}>
                                <Glasses />
                                <TextLg>
                                    <p className="hidden xl:block font-medium text-center">
                                        {visuallyImpairedSettings.isOn ?
                                            <>
                                                {i18n.language === "ru" ?
                                                    "Обычная версия"
                                                    :
                                                    <>
                                                        Көру қабылеті<br />нашарларға
                                                    </>
                                                }
                                            </>
                                            :
                                            <>
                                                {i18n.language === "ru" ?
                                                    "Слабовидящим"
                                                    :
                                                    <>
                                                        Көру қабылеті<br />нашарларға
                                                    </>
                                                }
                                            </>
                                        }
                                    </p>
                                </TextLg>
                            </div>
                        </div>
                        <a href="https://instagram.com/dentalplaza.kz?igshid=YmMyMTA2M2Y=">
                            <Instagram fill="blue" />
                        </a>
                        {visuallyImpairedSettings.isOn ?
                            <></>
                            :
                            <div className="relative">
                                <div className="hover:cursor-pointer" onClick={toggleTheme} id="theme-toggle">
                                    <ThemeToggler className="w-[20px] md:w-auto" />
                                </div>
                                {step === 2 ?
                                    <Hint hintPos={"bottom"} pointerPos={"end"} right={'-right-12'} content={hints[2]} />
                                    :
                                    <></>
                                }
                            </div>
                        }
                        {user && user.roles?.includes("CLIENT") ?
                            <Notification />
                            :
                            <></>
                        }
                        <div className="relative">
                            <div className="group relative min-h-[40px] hover:cursor-pointer flex items-center gap-3">
                                <TextBase blue>
                                    {i18n.language === "ru" ?
                                        "РУС" :
                                        "КАЗ"}
                                </TextBase>
                                <ArrowDown />
                                <div className={`hidden group-hover:block absolute ${bgColor} top-[100%] right-0 w-[90px] border-[1px] ${borderColor} rounded-2xl rounded-tr-none`}>
                                    <div className={`p-2 border-b-[1px] ${borderColor}`}>
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
                                            {i18n.language === "ru" ?
                                                "КАЗ" :
                                                "РУС"}
                                        </TextBase>
                                    </div>
                                </div>
                            </div>
                            {step === 3 ?
                                <Hint hintPos={"bottom"} pointerPos={"end"} right={"-right-8"} content={hints[3]} />
                                :
                                <></>
                            }
                        </div>
                        <div className="relative">
                            <div className="h-[50px] group relative hidden lg:flex hover:cursor-pointer items-center gap-3">
                                {user ?
                                    <ProfilePicture imageUrl={user.profileImageUrl} className="w-[50px] h-[50px]" />
                                    :
                                    <Person fill={"blue"} />
                                }
                                <ArrowDown />
                                {user ?
                                    <div className={`hidden group-hover:block py-5 w-[276px] flex flex-col items-center justify-around gap-3 group-hover:flex absolute ${bgColor} top-[100%] right-0 rounded-b-2xl drop-shadow-lg`}>
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
                                        <Link to={user.roles?.includes("CLIENT") ? "/profile-panel/appointments/future" : user.roles?.includes("DOCTOR") ? "/profile-panel/doctor-appointments/requested" : "/profile-panel/profile"}>
                                            <TextBase>Личный кабинет</TextBase>
                                        </Link>
                                        {user.roles?.includes("ADMIN") || user.roles?.includes("CONSULTANT") ?
                                            <Link className="hover:text-blue-white dark:hover:text-blue-dark"
                                                to={user.roles?.includes("ADMIN") ? "/admin/employees" : "/admin/appointments/requested"}>
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
                                    <div className={`hidden group-hover:block absolute ${bgColor} top-[100%] right-0 border-[1px] ${borderColor} rounded-2xl rounded-tr-none`}>
                                        <div className={`p-2 border-b-[1px] ${borderColor}`}
                                            onClick={() => setAuthPage("register")}>
                                            <TextBase>Регистрация</TextBase>
                                        </div>
                                        <div onClick={() => setAuthPage("login")} className="p-2">
                                            <TextBase>Войти</TextBase>
                                        </div>
                                    </div>
                                }
                            </div>
                            {step === 4 ?
                                <Hint hintPos={"bottom"} pointerPos={"end"} right={"-right-4"} content={hints[4]} />
                                :
                                <></>
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
                <VisuallyImpairedSettingBar />
                <Navbar showNav={showNav} setShowNav={setShowNav} setAuthPage={setAuthPage} />
            </div>
            {authPage ? <AuthModal authPage={authPage} setAuthPage={setAuthPage} /> : <></>}
        </header>
    );
}

export default Header;