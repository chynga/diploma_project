import axios from "axios";
import { useEffect, useState } from "react";
import DoctorProfile from "../../common/DoctorProfile";
import ServiceCard from "../../common/ServiceCard";
import { Service } from "../../common/types";

function DoctorPage() {
    const [services, setServices] = useState<Service[]>([]);

    useEffect(() => {
        const apiUrl = `/api/services`;

        axios.get(apiUrl).then((resp) => {
            const services: Service[] = resp.data;
            setServices(services);
        });
    }, [])

    return (
        <div className="p-20">
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-20 items-start">
                <div>
                    <DoctorProfile imageUrl={"/real-doctor-2.png"} />
                </div>
                <div>
                    <h2 className="text-xl sm:text-4xl text-center lg:text-left text-primary-white dark:text-primary-dark font-bold">
                        Сунтаева Карлыгаш Усеновна
                    </h2>
                    <p className="mt-6 max-w-[550px] text-center lg:text-left font-light text-primary-white dark:text-primary-dark">
                        Директор и ведущий ортопед стоматологической клиники «DentalCare», врач стоматолог-ортопед высшей категории. <br /><br />

                        Член ассоциации стоматологов Казахстана, входит в 10-ку лучших стоматологов Казахстана. В июле 2017г. на конгрессе в г.Астане была награждена почетной грамотой «Лучший врач-стоматолог Республики Казахстан», за огромный вклад в стоматологическую службу и процветание Республики Казахстан.
                    </p>
                    <div className="flex justify-center lg:justify-start">
                        <div className="mt-20 px-8 py-3 inline-block bg-blue-white dark:bg-blue-dark text-lg text-primary-dark font-semibold drop-shadow-lg rounded-full hover:cursor-pointer">
                            Записаться
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12">
                <h2 className="text-center text-xl sm:text-4xl text-primary-white dark:text-primary-dark font-bold">
                    Услуги
                </h2>
                <div className="mt-12">
                    <div className="max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-x-14 gap-y-6">
                        {services.map(service => {
                            return (
                                <ServiceCard service={service} />
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="mt-20">
                <h2 className="text-center text-xl sm:text-4xl text-primary-white dark:text-primary-dark font-bold">
                    Образование
                </h2>
                <div className="mt-12">
                    <p className="text-center font-light text-primary-white dark:text-primary-dark">
                        Республиканский Медицинский Колледж (специальность зубной техник);
                    </p>
                    <p className="mt-4 text-center font-light text-primary-white dark:text-primary-dark">
                        Республиканский Медицинский Колледж (специальность зубной техник);
                    </p>
                </div>
            </div>
            <div className="mt-20">
                <h2 className="text-center text-xl sm:text-4xl text-primary-white dark:text-primary-dark font-bold">
                    Сертификаты
                </h2>
                <div className="mt-12 flex flex-col items-center lg:flex-row flex-wrap justify-center gap-6">
                    <div>
                        <img src="/sertificate.png" alt="" className="max-h-[211px]" />
                    </div>
                    <div>
                        <img src="/sertificate.png" alt="" className="max-h-[211px]" />
                    </div>
                    <div>
                        <img src="/sertificate.png" alt="" className="max-h-[211px]" />
                    </div>
                    <div>
                        <img src="/sertificate.png" alt="" className="max-h-[211px]" />
                    </div>
                    <div>
                        <img src="/sertificate.png" alt="" className="max-h-[211px]" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DoctorPage;