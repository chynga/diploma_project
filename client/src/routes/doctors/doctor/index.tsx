import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppointmentModal from "../../common/AppointmentModal";
import DoctorProfile from "../../common/DoctorProfile";
import ServiceCard from "../../common/ServiceCard";
import { Text3Xl, TextBase, TextXl } from "../../common/TextElements";
import { Doctor, Service } from "../../common/types";

function DoctorPage() {
    const [showAppointmentForm, setShowAppointmentForm] = useState(false);

    const [doctor, setDoctor] = useState<Doctor>();
    const [services, setServices] = useState<Service[]>([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`/api/doctors/${id}`).then((resp) => {
            const doctor: Doctor = resp.data;
            setDoctor(doctor);
            setServices(doctor.services);
        });
    }, [])

    return (
        <>
            <div className="p-20">
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-20 items-start">
                    <div>
                        <DoctorProfile imageUrl={doctor?.imageUrl} />
                    </div>
                    <div>
                        <TextXl>
                            <h1 className="text-center lg:text-left font-semibold">
                                {doctor?.fullName}
                            </h1>
                        </TextXl>
                        <TextBase>
                            <p className="mt-6 max-w-[550px] text-center lg:text-left font-light">
                                {doctor?.about}
                            </p>
                        </TextBase>
                        <TextBase>
                            <div className="flex justify-center lg:justify-start">
                                <div className="mt-20 px-8 py-3 inline-block bg-blue-white dark:bg-blue-dark text-primary-dark font-bold drop-shadow-lg rounded-full hover:cursor-pointer"
                                    onClick={() => setShowAppointmentForm(true)}>
                                    Записаться
                                </div>
                            </div>
                        </TextBase>
                    </div>
                </div>
                <div className="mt-12">
                    <Text3Xl>
                        <h2 className="text-center font-bold">
                            Услуги
                        </h2>
                    </Text3Xl>
                    <div className="mt-12">
                        <div className="max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-x-14 gap-y-6">
                            {services.map(service => {
                                return (
                                    <ServiceCard key={service.id} service={service} />
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="mt-20">
                    <Text3Xl>
                        <h2 className="text-center font-semibold">
                            Образование
                        </h2>
                    </Text3Xl>
                    <div className="mt-12">
                        {doctor?.institutions.map(institution => {
                            return (
                                <TextBase key={institution}>
                                    <p className="text-left">
                                        {institution}
                                    </p>
                                </TextBase>
                            )
                        })}
                    </div>
                </div>
                {doctor?.certificates.length != 0 ?
                    <div className="mt-20">
                        <Text3Xl>
                            <h2 className="text-center font-semibold">
                                Сертификаты
                            </h2>
                        </Text3Xl>
                        <div className="mt-12 flex flex-col items-center lg:flex-row flex-wrap justify-center gap-6">
                            {doctor?.certificates.map(url => {
                                return (
                                    <div key={url}>
                                        <img src={url} alt="" className="max-h-[211px]" />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    :
                    <></>
                }
            </div>
            {showAppointmentForm ?
                <AppointmentModal setShowAppointmentForm={setShowAppointmentForm} doctorId={parseInt(id ? id : "")} />
                :
                <></>
            }
        </>
    );
}

export default DoctorPage;