import { MouseEventHandler } from "react";
import { PlusCircle, ServiceSvg } from "../../common/SvgImages";
import { Service } from "../../common/types";

type CardProps = {
    service?: Service
}

export function ServiceCard({ service }: CardProps) {
    return (
        <div className="bg-background-white dark:bg-background-dark w-[180px] h-[188px] rounded-3xl flex flex-col justify-around items-center py-3 opacity-90 hover:opacity-100 hover:shadow-[#00000040] shadow-lg hover:cursor-pointer">
            <ServiceSvg />
            <p className="text-center text-primary-white dark:text-primary-dark">{service?.title}</p>
        </div>
    );
}

export function AddServiceCard() {
    return (
        <div className="bg-background-white dark:bg-background-dark w-[180px] h-[188px] rounded-3xl flex flex-col justify-around items-center py-3 opacity-90 hover:opacity-100 hover:shadow-[#00000040] shadow-lg hover:cursor-pointer">
            <PlusCircle />
            <p className="text-primary-white dark:text-primary-dark">Добавить</p>
        </div>
    );
}