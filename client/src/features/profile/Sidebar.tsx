import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { Page } from ".";
import { Envelop, Logo, People, Person, ProfileNoPicture } from "../common/SvgImages";
import { TextLg } from "../common/TextElements";

type SidebarProps = {
    className?: string,
    pageName: Page,
    setPageName: Dispatch<SetStateAction<Page>>
}

function Sidebar({ className = "", pageName, setPageName }: SidebarProps) {
    return (
        <div className={`py-6 px-12 h-screen bg-background-white dark:bg-background-dark shadow-[4px_0_20px_rgba(39,127,242,0.5)] ${className}`}>
            <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col items-center gap-6">
                    <Link to={"/"} className={"text-blue-white dark:text-blue-dark text-xl font-medium underline underline-offset-8"}>
                        {"<< "}Вернуться на главную
                    </Link>
                    <Logo fill={"blue"} />
                    <ProfileNoPicture />
                    <h2 className="text-2xl text-primary-white dark:text-primary-dark font-bold">
                        Айдар Зейнеп
                    </h2>
                    <div className="w-full flex gap-5 items-center hover:cursor-pointer"
                        onClick={() => { setPageName("appointments") }}>
                        <People fill={pageName === "appointments" ? "blue" : "primary"} />
                        <TextLg blue={pageName === "appointments" ? true : false}>
                            <p>Мои Записи</p>
                        </TextLg>
                    </div>
                    <div className="w-full flex gap-5 items-center hover:cursor-pointer"
                        onClick={() => {
                            setPageName("consultation")
                        }}>
                        <Envelop fill={pageName === "consultation" ? "blue" : "primary"} />
                        <TextLg blue={pageName === "consultation" ? true : false}>
                            <p>Сообщения</p>
                        </TextLg>
                    </div>
                </div>
                <div>
                    <div className="w-full flex gap-5 items-center hover:cursor-pointer"
                        onClick={() => {
                            setPageName("profile")
                        }}>
                        <Person fill={pageName === "profile" ? "blue" : "primary"} />
                        <TextLg blue={pageName === "profile" ? true : false}>
                            <p>Профиль</p>
                        </TextLg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;