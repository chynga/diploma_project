import { Link, useLocation } from "react-router-dom";
import { TextLg } from "../../common/TextElements";
import { VisuallyImpairedContext, VisuallyImpairedContextType } from "../../common/header/VisuallyImpairedSettingBar";
import { useContext } from "react";

type TabBarProps = {
    className?: string,
}

function TabBar({ className = "" }: TabBarProps) {
    const location = useLocation();

    const { visuallyImpairedSettings } =
        useContext(VisuallyImpairedContext) as VisuallyImpairedContextType;

    const borderColor = !visuallyImpairedSettings.isOn ?
        "border-blue-white dark:border-blue-dark"
        :
        `border-b ${visuallyImpairedSettings.theme === "black" ? "border-white" : "border-[#353535]"}`;

    return (
        <div className={`flex ${className}`}>
            <Link to={"future"} className={`px-3 hover:cursor-pointer
                ${location.pathname.includes("future") ? `border-b-2 ${borderColor}` : ''}`}>
                <TextLg blue={location.pathname.includes("future") ? true : false}>
                    Мои записи
                </TextLg>
            </Link>
            <Link to={"past"} className={`px-3 hover:cursor-pointer
                ${location.pathname.includes("past") ? `border-b-2 ${borderColor}` : ''}`}>
                <TextLg blue={location.pathname.includes("past") ? true : false}>
                    Прошлые записи
                </TextLg>
            </Link>
        </div>
    );
}

export default TabBar;