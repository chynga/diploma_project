import { Dispatch, SetStateAction } from "react";
import { Tab } from ".";
import { TextLg } from "../../common/TextElements";

type TabBarProps = {
    className?: string,
    tabName: Tab,
    setTabName: Dispatch<SetStateAction<Tab>>
}

function TabBar({ className = "", tabName, setTabName }: TabBarProps) {
    return (
        <div className={`flex ${className}`}>
            <div className={`px-3 hover:cursor-pointer
                ${tabName === "futureAppointments" ? 'border-b-2 border-blue-white dark:border-blue-dark' : ''}`}
                onClick={() => setTabName('futureAppointments')}>
                <TextLg blue={tabName === "futureAppointments" ? true : false}>
                    Мои записи
                </TextLg>
            </div>
            <div className={`px-3 hover:cursor-pointer
                ${tabName === "oldAppointments" ? 'border-b-2 border-blue-white dark:border-blue-dark' : ''}`}
                onClick={() => setTabName('oldAppointments')}>
                <TextLg blue={tabName === "oldAppointments" ? true : false}>
                    Прошлые записи
                </TextLg>
            </div>
        </div>
    );
}

export default TabBar;