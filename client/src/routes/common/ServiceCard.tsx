import { Link } from "react-router-dom";
import { ServiceSvg } from "./SvgImages";
import { Service } from "./types";

type ServiceCardProps = {
    service: Service
}

function ServiceCard({ service }: ServiceCardProps) {
    return (
        <Link to={`/services/${service.id}`} className="bg-background-white dark:bg-background-dark w-[180px] h-[188px] rounded-3xl flex flex-col justify-around items-center py-3 opacity-90 hover:opacity-100 hover:shadow-[#00000040] shadow-lg">
            <ServiceSvg />

            <p className="text-primary-white dark:text-primary-dark">{service.title}</p>
            <div className="px-3 py-1 bg-blue-white dark:bg-blue-dark text-primary-dark font-semibold rounded-full">
                Подробнее
            </div>
        </Link>
    );
}

export default ServiceCard;