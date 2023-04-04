import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectAuth } from "../../features/auth/authSlice";
import { Envelop, Logo, People, Person, ProfilePicture, Record } from "../common/SvgImages";
import { TextLg } from "../common/TextElements";

type SidebarProps = {
    className?: string,
}

function Sidebar({ className = "" }: SidebarProps) {
    const location = useLocation();
    const { user } = useAppSelector(selectAuth);

    return (
        <div className={`py-6 px-12 h-screen overflow-auto bg-background-white dark:bg-background-dark shadow-[4px_0_20px_rgba(39,127,242,0.5)] ${className}`}>
            <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col items-center gap-6">
                    <Link to={"/"} className={"text-blue-white dark:text-blue-dark text-xl font-medium underline underline-offset-8"}>
                        {"<< "}Вернуться на главную
                    </Link>
                    <Logo fill={"blue"} />
                    <ProfilePicture imageUrl={user?.profileImageUrl} className="w-[100px] h-[100px]" />
                    <h2 className="text-2xl text-primary-white dark:text-primary-dark font-bold">
                        {user?.fullName}
                    </h2>
                    {user?.roles?.includes("CLIENT") ?
                        <>
                            <Link to={"appointments/future"} className="w-full flex gap-5 items-center hover:cursor-pointer">
                                <People fill={location.pathname.includes("/profile-panel/appointments") ? "blue" : "primary"} />
                                <TextLg blue={location.pathname.includes("/profile-panel/appointments") ? true : false}>
                                    <p>Мои Записи</p>
                                </TextLg>
                            </Link>
                            <Link to={"health-info"} className="w-full flex gap-5 items-center hover:cursor-pointer">
                                <Record fill={location.pathname.includes("/profile-panel/health-info") ? "blue" : "primary"} />
                                <TextLg blue={location.pathname.includes("/profile-panel/health-info") ? true : false}>
                                    <p>Личная карточка</p>
                                </TextLg>
                            </Link>
                            <Link to={"consultation"} className="w-full flex gap-5 items-center hover:cursor-pointer">
                                <Envelop fill={location.pathname.includes("/profile-panel/consultation") ? "blue" : "primary"} />
                                <TextLg blue={location.pathname.includes("/profile-panel/consultation") ? true : false}>
                                    <p>Сообщения</p>
                                </TextLg>
                            </Link>
                        </>
                        :
                        <></>
                    }
                </div>
                <div>
                    <Link to={"profile"} className="w-full flex gap-5 items-center hover:cursor-pointer">
                        <Person fill={location.pathname.includes("/profile-panel/profile") ? "blue" : "primary"} />
                        <TextLg blue={location.pathname.includes("/profile-panel/profile") ? true : false}>
                            <p>Профиль</p>
                        </TextLg>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;