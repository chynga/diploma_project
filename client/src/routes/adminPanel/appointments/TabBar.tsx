import { Link, useLocation } from "react-router-dom";
import { TextLg } from "../../common/TextElements";

type TabBarProps = {
    className?: string,
}

function TabBar({ className = "" }: TabBarProps) {
    const location = useLocation();

    return (
        <div className={`flex ${className}`}>
            <Link to={"appointments/requested"} className={`px-3 hover:cursor-pointer
                ${location.pathname.includes("requested") ? 'border-b-2 border-blue-white dark:border-blue-dark' : ''}`}>
                <TextLg blue={location.pathname.includes("requested") ? true : false}>
                    Входящие
                </TextLg>
            </Link>
            <Link to={"appointments/approved"} className={`px-3 hover:cursor-pointer
                ${location.pathname.includes("approved") ? 'border-b-2 border-blue-white dark:border-blue-dark' : ''}`}>
                <TextLg blue={location.pathname.includes("approved") ? true : false}>
                    Подтвержденнные
                </TextLg>
            </Link>
            <Link to={"appointments/completed"} className={`px-3 hover:cursor-pointer
                ${location.pathname.includes("completed") ? 'border-b-2 border-blue-white dark:border-blue-dark' : ''}`}>
                <TextLg blue={location.pathname.includes("completed") ? true : false}>
                    Успешно
                </TextLg>
            </Link>
            <Link to={"appointments/canceled"} className={`px-3 hover:cursor-pointer
                ${location.pathname.includes("canceled") ? 'border-b-2 border-blue-white dark:border-blue-dark' : ''}`}>
                <TextLg blue={location.pathname.includes("canceled") ? true : false}>
                    Отменено
                </TextLg>
            </Link>
        </div>
    );
}

export default TabBar;