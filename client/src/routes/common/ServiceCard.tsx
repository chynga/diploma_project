import { Link } from "react-router-dom";
import { ServiceSvg } from "./SvgImages";
import { TextBase } from "./TextElements";
import { Service } from "./types";

type ServiceCardProps = {
    service: Service
}

function ServiceCard({ service }: ServiceCardProps) {
    return (
        <Link to={`/services/${service.id}`} className="bg-background-white dark:bg-background-dark w-[180px] h-[188px] rounded-3xl flex flex-col justify-around items-center py-3 opacity-90 hover:opacity-100 hover:shadow-[#00000040] shadow-lg">
            <ServiceSvg />

            <TextBase>
                <p>{service.title}</p>
            </TextBase>
            <TextBase>
                <div className="px-3 py-1 font-bold bg-blue-white dark:bg-blue-dark text-primary-dark rounded-full">
                    Подробнее
                </div>
            </TextBase>
        </Link>
    );
}

export default ServiceCard;