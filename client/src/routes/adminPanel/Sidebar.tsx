import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowDown, ArrowRight, Logo } from "../common/SvgImages";
import { TextLg } from "../common/TextElements";
import { useAppSelector } from "../../app/hooks";
import { selectAuth } from "../../features/auth/authSlice";

type SidebarProps = {
    className?: string,
}

function Sidebar({ className = "" }: SidebarProps) {
    const [isContentTabParentOpen, setIsContentTabParentOpen] = useState(true);
    const [isUserTabParentOpen, setIsUserTabParentOpen] = useState(true);
    const location = useLocation();

    const { user } = useAppSelector(selectAuth);

    return (
        <div className={`py-6 px-12 h-screen bg-background-white dark:bg-background-dark shadow-[4px_0_20px_rgba(39,127,242,0.5)] ${className}`}>
            <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col items-center gap-6">
                    <Link to={"/"} className={"text-blue-white dark:text-blue-dark text-xl font-medium underline underline-offset-8"}>
                        {"<< "}Вернуться на главную
                    </Link>
                    <Logo fill={"blue"} />
                    <div className="mt-10 w-full flex flex-col gap-3">
                        {user?.roles?.includes("ADMIN") ?
                            <>
                                <div className="w-full flex flex-col gap-3">
                                    <div className="flex justify-between items-center hover:cursor-pointer"
                                        onClick={() => setIsContentTabParentOpen(!isContentTabParentOpen)}>
                                        <TextLg className="font-medium">
                                            Контент
                                        </TextLg>
                                        {isContentTabParentOpen ?
                                            <ArrowDown fill="primary" /> :
                                            <ArrowRight fill="primary" />
                                        }
                                    </div>
                                    {isContentTabParentOpen ?
                                        <div className="ml-5 flex flex-col gap-3">
                                            <Link to={"reviews"} className="hover:cursor-pointer">
                                                <TextLg className="font-light" blue={location.pathname.includes("/admin/reviews") ? true : false}>
                                                    Отзывы
                                                </TextLg>
                                            </Link>
                                            <Link to={"services"} className="hover:cursor-pointer">
                                                <TextLg className="font-light" blue={location.pathname.includes("/admin/services") ? true : false}>
                                                    Услуги
                                                </TextLg>
                                            </Link>
                                        </div> :
                                        <></>
                                    }
                                </div>

                                <div className="w-full flex flex-col gap-3">
                                    <div className="flex justify-between items-center hover:cursor-pointer"
                                        onClick={() => setIsUserTabParentOpen(!isUserTabParentOpen)}>
                                        <TextLg className="font-medium">
                                            Пользователи
                                        </TextLg>
                                        {isUserTabParentOpen ?
                                            <ArrowDown fill="primary" /> :
                                            <ArrowRight fill="primary" />
                                        }
                                    </div>
                                    {isUserTabParentOpen ?
                                        <div className="ml-5 flex flex-col gap-3">
                                            <Link to={"employees"} className="hover:cursor-pointer">
                                                <TextLg className="font-light" blue={location.pathname.includes("/admin/employees") ? true : false}>
                                                    Работники клиники
                                                </TextLg>
                                            </Link>
                                            <Link to={"doctors"} className="hover:cursor-pointer">
                                                <TextLg className="font-light" blue={location.pathname.includes("/admin/doctors") ? true : false}>
                                                    Врачи
                                                </TextLg>
                                            </Link>
                                            <Link to={"clients"} className="hover:cursor-pointer">
                                                <TextLg className="font-light" blue={location.pathname.includes("/admin/clients") ? true : false}>
                                                    Пациенты
                                                </TextLg>
                                            </Link>
                                        </div> :
                                        <></>
                                    }
                                </div>
                            </>
                            :
                            <></>
                        }
                        {user?.roles?.includes("CONSULTANT") ?
                            <>
                                <div className="w-full">
                                    <Link to={"messages"} className="hover:cursor-pointer">
                                        <TextLg className="font-medium" blue={location.pathname.includes("/admin/messages") ? true : false}>
                                            Сообщения
                                        </TextLg>
                                    </Link>
                                </div>
                                <div className="w-full">
                                    <Link to={"appointments/requested"} className="hover:cursor-pointer">
                                        <TextLg className="font-medium" blue={location.pathname.includes("/admin/appointments") ? true : false}>
                                            Записи
                                        </TextLg>
                                    </Link>
                                </div>
                                <div className="w-full">
                                    <Link to={"ordered-calls"} className="hover:cursor-pointer">
                                        <TextLg className="font-medium" blue={location.pathname.includes("/admin/ordered-calls") ? true : false}>
                                            Запросы
                                        </TextLg>
                                    </Link>
                                </div>
                                <div className="w-full">
                                    <Link to={"accounting"} className="hover:cursor-pointer">
                                        <TextLg className="font-medium" blue={location.pathname.includes("/admin/accounting") ? true : false}>
                                            Бухгалтерия (Отчет)
                                        </TextLg>
                                    </Link>
                                </div>
                            </>
                            :
                            <></>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;