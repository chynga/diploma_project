import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Service } from "../../common/types";
import WhyUsSection from "./WhyUsSection";

function ServicePage() {
    const [service, setService] = useState<Service>();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`/api/services/${id}`).then((resp) => {
            const service: Service = resp.data;
            setService(service);
        });
    }, [])
    return (
        <div className="py-12 px-20">
            <div className="flex justify-around items-center gap-6">
                <img src="/service-image.png" alt="" className="w-[300px]" />
                <div>
                    <h2 className="text-xl sm:text-4xl text-primary-white dark:text-primary-dark font-bold">
                        {service?.title}
                    </h2>
                    <p className="mt-6 font-light text-center lg:text-start text-primary-white dark:text-primary-dark">
                        {service?.description}
                    </p>
                    <p className="mt-6 font-medium text-center lg:text-start text-primary-white dark:text-primary-dark">
                        Цена: {service?.approxCost} тг
                    </p>
                    <div className="mt-6 px-8 py-3 inline-block bg-blue-white dark:bg-blue-dark text-lg text-primary-dark font-semibold drop-shadow-lg rounded-full">
                        Записаться
                    </div>
                </div>
            </div>

            <div className="py-12">
                <h2 className="text-xl text-center sm:text-4xl text-primary-white dark:text-primary-dark font-bold">
                    До и После
                </h2>
                <div className="mt-5 flex justify-center items-center gap-6">
                    <img src="/service-before.png" alt="" className="w-[217px]" />
                    <img src="/service-after.png" alt="" className="w-[217px]" />
                </div>
            </div>
            <WhyUsSection />
        </div>
    );
}

export default ServicePage;