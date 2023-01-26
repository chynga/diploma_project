import { Link, useLocation } from "react-router-dom";
import { TextLg } from "../../common/TextElements";

type TabBarProps = {
    className?: string,
}

function TabBar({ className = "" }: TabBarProps) {
    const location = useLocation();

    return (
        <div className={`flex ${className}`}>
            <Link to={"appointments/future"} className={`px-3 hover:cursor-pointer
                ${location.pathname.includes("future") ? 'border-b-2 border-blue-white dark:border-blue-dark' : ''}`}>
                <TextLg blue={location.pathname.includes("future") ? true : false}>
                    Мои записи
                </TextLg>
            </Link>
            <Link to={"appointments/past"} className={`px-3 hover:cursor-pointer
                ${location.pathname.includes("past") ? 'border-b-2 border-blue-white dark:border-blue-dark' : ''}`}>
                <TextLg blue={location.pathname.includes("past") ? true : false}>
                    Прошлые записи
                </TextLg>
            </Link>
        </div>
    );
}

export default TabBar;