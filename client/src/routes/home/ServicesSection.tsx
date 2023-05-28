import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ServiceCard from "../common/ServiceCard";
import { Text4Xl } from "../common/TextElements";
import { Service } from "../common/types";

function ServicesSection() {
    const [services, setServices] = useState<Service[]>([]);
    const { t } = useTranslation(["kz", "ru"]);

    useEffect(() => {
        const apiUrl = `/api/services`;

        axios.get(apiUrl).then((resp) => {
            const services: Service[] = resp.data;
            setServices(services);
        });
    }, [])

    return (
        <div className="pt-12 bg-[#277ff280] px-5 md:px-20">
            <Text4Xl>
                <h2 className="text-center font-bold">
                    {t('home:service:title')}
                </h2>
            </Text4Xl>
            <div className="py-12">
                <div className="max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-x-14 gap-y-6">
                    {services.map(service => {
                        return (
                            <ServiceCard key={service.id} service={service} />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default ServicesSection;