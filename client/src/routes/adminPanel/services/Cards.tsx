import { MouseEventHandler } from "react";
import { Service } from ".";
import { PlusCircle, ServiceSvg } from "../../common/SvgImages";

type CardProps = {
    service?: Service
}

export function ServiceCard({ service }: CardProps) {
    return (
        <div className="px-9 py-4 flex flex-col items-center justify-between gap-3 shadow-lg rounded-3xl bg-background-white dark:bg-background-dark">
            <ServiceSvg />
            <p className="text-primary-white dark:text-primary-dark">{service?.title}</p>
        </div>
    );
}

export function AddServiceCard() {
    return (
        <div className="px-9 pb-4 pt-8 flex flex-col items-center justify-between gap-3 shadow-lg rounded-3xl bg-background-white dark:bg-background-dark">
            <PlusCircle />
            <p className="text-primary-white dark:text-primary-dark">Добавить</p>
        </div>
    );
}