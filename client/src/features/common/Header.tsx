import { t } from "i18next";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { ArrowDown, Bell, Burger, Close, Logo, Person, ThemeToggler } from "./SvgImages";
import { TextBase, TextLg } from "./TextElements";
import { toggleTheme } from "./util";

type NavbarProps = {
    showNav: boolean,
}

function Header() {
    const [showNav, setShowNav] = useState(false);
    const { t, i18n } = useTranslation(["kz", "ru"]);
    const location = useLocation();

    const changeLanguage = (e: any) => {
        i18n.changeLanguage(e.target.value);
    };

    if (location.pathname.includes("/profile-panel")) {
        return <div></div>
    }

    return (
        <header className="mb-[64px] lg:mb-[136px]">
            <div className="shadow-lg fixed z-20 top-0 bg-background-white dark:bg-background-dark w-full">
                <div className="lg:px-8 p-3 lg:pt-5 flex justify-between items-center">
                    <Link to={"/"}>
                        <Logo fill={"blue"} className={"w-[100px] md:w-auto"} />
                    </Link>
                    <div className="hidden lg:block">
                        <TextBase className="font-light">Пн - Пт: 9:00 - 19:00</TextBase>
                        <TextBase className="font-light">Сб - Вс: 9:00 - 15:00</TextBase>
                    </div>
                    <div className="hidden lg:block">
                        <TextBase className="font-light">+7-707-81090-27</TextBase>
                        <TextBase className="font-light">+7-707-81090-27</TextBase>
                    </div>
                    <div className="flex gap-3 lg:gap-5 items-center">
                        <div className="hover:cursor-pointer" onClick={toggleTheme} id="theme-toggle">
                            <ThemeToggler className="w-[20px] md:w-auto" />
                        </div>
                        <div className="hover:cursor-pointer">
                            <Bell className="w-[20px] md:w-auto" />
                        </div>
                        <div className="hover:cursor-pointer flex items-center gap-3">
                            <TextBase blue>РУС</TextBase>
                            <ArrowDown />
                        </div>
                        <div className="hidden md:flex hover:cursor-pointer items-center gap-3">
                            <Person fill={"blue"} />
                            <ArrowDown />
                        </div>
                        <div className="lg:hidden hover:cursor-pointer" onClick={() => { setShowNav(!showNav) }}>
                            <Burger className="w-[20px] md:w-[40px] h-[20px] md:h-[40px]" fill={"blue"} />
                        </div>
                    </div>
                </div>
                <Navbar showNav={showNav} />
            </div>
        </header>
    );
}

function Navbar({ showNav }: NavbarProps) {
    return (
        <div className="lg:py-2.5">
            <div className={`${showNav ? "fixed" : "hidden"} lg:static lg:block shadow-lg lg:shadow-none px-5 pt-5 pb-20 lg:py-2.5 max-w-[400px] lg:max-w-none overflow-auto w-full right-0 bottom-0 h-[calc(100vh_-_61px)] lg:h-auto bg-background-white dark:bg-background-dark`}>
                <ul className="flex flex-col lg:flex-row justify-center gap-3 lg:gap-16">
                    <li>
                        <Link to="/" className="block">
                            <TextLg className="text-[#353535]">
                                {t('home:title')}
                            </TextLg>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="block">
                            <TextLg className="text-[#353535]">
                                {t('about:title')}
                            </TextLg>
                        </Link>
                    </li>
                    <li>
                        <Link to="/services" className="block">
                            <TextLg className="text-[#353535]">
                                {t('service:title')}
                            </TextLg>
                        </Link>
                    </li>
                    <li>
                        <Link to="/doctors" className="block">
                            <TextLg className="text-[#353535]">
                                {t('doctor:title')}
                            </TextLg>
                        </Link>
                    </li>
                    <li>
                        <Link to="/reviews" className="block">
                            <TextLg className="text-[#353535]">
                                {t('review:title')}
                            </TextLg>
                        </Link>
                    </li>
                    <li>
                        <Link to="/advices" className="block">
                            <TextLg className="text-[#353535]">
                                {t('advice:title')}
                            </TextLg>
                        </Link>
                    </li>
                    <li>
                        <Link to="/vacancy" className="block">
                            <TextLg className="text-[#353535]">
                                {t('vacancy:title')}
                            </TextLg>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;