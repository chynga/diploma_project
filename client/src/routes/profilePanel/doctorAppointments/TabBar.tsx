import { Link, useLocation } from "react-router-dom";
import { TextLg } from "../../common/TextElements";

type TabBarProps = {
    className?: string,
}

function TabBar({ className = "" }: TabBarProps) {
    const location = useLocation();

    return (
        <div className={`flex ${className}`}>
            <Link to={"/profile-panel/doctor-appointments/requested"} className={`px-3 hover:cursor-pointer
                ${location.pathname.includes("requested") ? 'border-b-2 border-blue-white dark:border-blue-dark' : ''}`}>
                <TextLg blue={location.pathname.includes("requested") ? true : false}>
                    Входящие
                </TextLg>
            </Link>
            <Link to={"/profile-panel/doctor-appointments/success"} className={`px-3 hover:cursor-pointer
                ${location.pathname.includes("success") ? 'border-b-2 border-blue-white dark:border-blue-dark' : ''}`}>
                <TextLg blue={location.pathname.includes("success") ? true : false}>
                    Прошедшие
                </TextLg>
            </Link>
        </div>
    );
}

export default TabBar;