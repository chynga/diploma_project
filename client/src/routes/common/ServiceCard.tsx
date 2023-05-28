import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ServiceSvg } from "./SvgImages";
import { TextBase } from "./TextElements";
import { Service } from "./types";
import { useContext } from "react";
import { VisuallyImpairedContext, VisuallyImpairedContextType } from "./header/VisuallyImpairedSettingBar";

type ServiceCardProps = {
    service: Service
}

function ServiceCard({ service }: ServiceCardProps) {
    const { t } = useTranslation(["kz", "ru"]);
    const { visuallyImpairedSettings } =
        useContext(VisuallyImpairedContext) as VisuallyImpairedContextType;

    const bgColor = !visuallyImpairedSettings.isOn ?
        "bg-background-white dark:bg-background-dark"
        :
        "bg-white";

    const textColor = !visuallyImpairedSettings.isOn ?
        ""
        :
        "text-primary-white";

    return (
        <Link to={`/services/${service.id}`} className={`${bgColor} w-[180px] h-[188px] rounded-3xl flex flex-col justify-around items-center py-3 opacity-90 hover:opacity-100 hover:shadow-[#00000040] shadow-lg`}>
            {visuallyImpairedSettings.isOn ?
                <></>
                :
                <ServiceSvg />
            }

            <TextBase>
                <p className={`text-center ${textColor}`}>{service.title}</p>
            </TextBase>
            <TextBase>
                <div className="px-3 py-1 font-bold bg-blue-white dark:bg-blue-dark text-primary-dark rounded-full">
                    {t('common:more')}
                </div>
            </TextBase>
        </Link>
    );
}

export default ServiceCard;