import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { logout, selectAuth } from "../../features/auth/authSlice";
import { Close, Envelop, Logo, Logout, People, Person, ProfilePicture, Record } from "../common/SvgImages";
import { TextLg } from "../common/TextElements";
import { useDispatch } from "react-redux";
import { Dispatch, SetStateAction, useContext } from "react";
import { VisuallyImpairedContext, VisuallyImpairedContextType } from "../common/header/VisuallyImpairedSettingBar";

type SidebarProps = {
    className?: string,
    showSidebar: boolean
    setShowSidebar: Dispatch<SetStateAction<boolean>>
}

function Sidebar({ className = "", showSidebar, setShowSidebar }: SidebarProps) {
    const location = useLocation();
    const { user } = useAppSelector(selectAuth);

    const dispatch = useDispatch<any>();
    const navigate = useNavigate();

    const { visuallyImpairedSettings } =
        useContext(VisuallyImpairedContext) as VisuallyImpairedContextType;
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
    const textColor = !visuallyImpairedSettings.isOn ?
        `text-blue-white dark:text-blue-dark`
        :
        visuallyImpairedSettings.theme === "black" ?
            "text-primary-dark"
            :
            "text-primary-white";

    const onLogout = (e: any) => {
        e.preventDefault()
        dispatch(logout());
        navigate("/");
    };

    const navigateTo = (to: string) => {
        navigate(to);
        setShowSidebar(false);
    }

    return (
        <div className={`py-6 px-6 md:px-12 ${showSidebar ? "fixed z-10 right-0 top-0" : "hidden"} lg:block h-screen overflow-auto ${bgColor} shadow-[4px_0_20px_rgba(39,127,242,0.5)] ${className}`}>
            <div className="lg:hidden flex justify-end" onClick={() => setShowSidebar(false)}>
                <Close />
            </div>
            <div className="flex flex-col justify-between h-full gap-6">
                <div className="flex flex-col items-center gap-6">
                    <div className={`${textColor} text-xl font-medium underline underline-offset-8 hover:cursor-pointer`}
                        onClick={() => navigateTo("/")}>
                        {"<< "}Вернуться на главную
                    </div>
                    <Logo fill={!visuallyImpairedSettings.isOn ? "blue" : visuallyImpairedSettings.theme === "black" ? "white" : "black"} />
                    <ProfilePicture imageUrl={user?.profileImageUrl} className="w-[100px] h-[100px]" />
                    <h2 className="text-2xl text-center text-primary-white dark:text-primary-dark font-bold">
                        {user?.fullName}
                    </h2>
                    {user?.roles?.includes("CLIENT") ?
                        <>
                            <div className="w-full flex gap-5 items-center hover:cursor-pointer"
                                onClick={() => navigateTo("appointments/future")}>
                                <People fill={location.pathname.includes("/profile-panel/appointments") ? "blue" : "primary"} />
                                <TextLg blue={location.pathname.includes("/profile-panel/appointments") ? true : false}>
                                    <p>Мои Записи</p>
                                </TextLg>
                            </div>
                            <div className="w-full flex gap-5 items-center hover:cursor-pointer"
                                onClick={() => navigateTo("health-info")}>
                                <Record fill={location.pathname.includes("/profile-panel/health-info") ? "blue" : "primary"} />
                                <TextLg blue={location.pathname.includes("/profile-panel/health-info") ? true : false}>
                                    <p>Личная карточка</p>
                                </TextLg>
                            </div>
                            <div className="w-full flex gap-5 items-center hover:cursor-pointer"
                                onClick={() => navigateTo("consultation")}>
                                <Envelop fill={location.pathname.includes("/profile-panel/consultation") ? "blue" : "primary"} />
                                <TextLg blue={location.pathname.includes("/profile-panel/consultation") ? true : false}>
                                    <p>Сообщения</p>
                                </TextLg>
                            </div>
                        </>
                        :
                        <></>
                    }
                    {user?.roles?.includes("DOCTOR") ?
                        <div className="w-full">
                            <div className="w-full flex gap-5 items-center hover:cursor-pointer"
                                onClick={() => navigateTo("doctor-appointments/requested")}>
                                <People fill={location.pathname.includes("/profile-panel/doctor-appointments") ? "blue" : "primary"} />
                                <TextLg className="font-medium" blue={location.pathname.includes("/profile-panel/doctor-appointments") ? true : false}>
                                    Мои записи
                                </TextLg>
                            </div>
                        </div>
                        :
                        <></>
                    }
                </div>
                <div className="pb-6 flex flex-col items-center gap-6">
                    <div className="w-full flex gap-5 items-center hover:cursor-pointer"
                        onClick={() => navigateTo("profile")}>
                        <Person fill={location.pathname.includes("/profile-panel/profile") ? "blue" : "primary"} />
                        <TextLg blue={location.pathname.includes("/profile-panel/profile") ? true : false}>
                            <p>Профиль</p>
                        </TextLg>
                    </div>
                    <div className="w-full flex gap-5 items-center hover:cursor-pointer"
                        onClick={onLogout}>
                        <Logout />
                        <TextLg>
                            <p className="text-red-400">Выйти</p>
                        </TextLg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;