import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppointmentModal from "../../common/AppointmentModal";
import { Text2Xl, TextBase, TextLg, TextXl } from "../../common/TextElements";
import { Service } from "../../common/types";
import WhyUsSection from "./WhyUsSection";

function ServicePage() {
    const [showAppointmentForm, setShowAppointmentForm] = useState(false);
    const [service, setService] = useState<Service>();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`/api/services/${id}`).then((resp) => {
            const service: Service = resp.data;
            setService(service);
        });
    }, [])
    return (
        <>
            <div className="py-12 px-20">
                <div className="flex justify-around items-start gap-6">
                    <img src={service?.imgMainUrl} alt="" className="w-[400px]" />
                    <div>
                        <Text2Xl>
                            <h1 className="font-bold">
                                {service?.title}
                            </h1>
                        </Text2Xl>
                        <TextLg>
                            <p className="mt-6 font-light text-center lg:text-start">
                                {service?.description}
                            </p>
                        </TextLg>
                        <TextBase>
                            <p className="mt-6 font-medium text-center lg:text-start">
                                Цена: {service?.cost}
                            </p>
                        </TextBase>
                        <TextBase>
                            <div className="mt-6 px-8 py-3 inline-block bg-blue-white dark:bg-blue-dark text-primary-dark font-bold drop-shadow-lg rounded-full hover:cursor-pointer"
                                onClick={() => setShowAppointmentForm(true)}>
                                Записаться
                            </div>
                        </TextBase>
                    </div>
                </div>

                <div className="py-12">
                    <Text2Xl>
                        <h2 className="text-center font-bold">
                            До и После
                        </h2>
                    </Text2Xl>
                    <div className="mt-5 flex justify-center items-center gap-6">
                        <img src={service?.imgBeforeUrl} alt="" className="w-[300px]" />
                        <img src={service?.imgAfterUrl} alt="" className="w-[300px]" />
                    </div>
                </div>
                <WhyUsSection service={service} />
            </div>
            {
                showAppointmentForm ?
                    <AppointmentModal setShowAppointmentForm={setShowAppointmentForm} />
                    :
                    <></>
            }
        </>
    );
}

export default ServicePage;