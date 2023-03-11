import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppointmentForm from "../../common/AppointmentForm";
import DoctorProfile from "../../common/DoctorProfile";
import ServiceCard from "../../common/ServiceCard";
import { CloseButton } from "../../common/SvgImages";
import { Doctor, Service } from "../../common/types";

function DoctorPage() {
    const [showAppointmentForm, setShowAppointmentForm] = useState(false);

    const [doctor, setDoctor] = useState<Doctor>();
    const [services, setServices] = useState<Service[]>([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`/api/services`).then((resp) => {
            const services: Service[] = resp.data;
            setServices(services);
        });
        axios.get(`/api/doctors/${id}`).then((resp) => {
            const doctor: Doctor = resp.data;
            setDoctor(doctor);
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
                        <h2 className="text-xl sm:text-4xl text-center lg:text-left text-primary-white dark:text-primary-dark font-bold">
                            {doctor?.fullName}
                        </h2>
                        <p className="mt-6 max-w-[550px] text-center lg:text-left font-light text-primary-white dark:text-primary-dark">
                            {doctor?.about}
                        </p>
                        <div className="flex justify-center lg:justify-start">
                            <div className="mt-20 px-8 py-3 inline-block bg-blue-white dark:bg-blue-dark text-lg text-primary-dark font-semibold drop-shadow-lg rounded-full hover:cursor-pointer"
                                onClick={() => setShowAppointmentForm(true)}>
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
                                    <ServiceCard key={service.id} service={service} />
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
                        {doctor?.institutions.map(institution => {
                            return (
                                <p key={institution} className="text-center font-light text-primary-white dark:text-primary-dark">
                                    {institution}
                                </p>
                            )
                        })}
                    </div>
                </div>
                {doctor?.certificates.length != 0 ?
                    <div className="mt-20">
                        <h2 className="text-center text-xl sm:text-4xl text-primary-white dark:text-primary-dark font-bold">
                            Сертификаты
                        </h2>
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
                <AppointmentModal setShowAppointmentForm={setShowAppointmentForm} />
                :
                <></>
            }
        </>
    );
}

type AppointmentModalProps = {
    setShowAppointmentForm: Dispatch<SetStateAction<boolean>>
}

function AppointmentModal({ setShowAppointmentForm }: AppointmentModalProps) {
    return (
        <div className="z-30 fixed left-0 top-0 right-0 bottom-0 bg-[rgb(0,0,0)] bg-[rgba(0,0,0,0.4)] flex justify-center items-center">
            <div className="modal p-5 bg-backgroundSecondary-white dark:bg-background-dark rounded-xl">
                <div className="flex justify-end">
                    <div onClick={() => setShowAppointmentForm(false)}>
                        <CloseButton />
                    </div>
                </div>
                <AppointmentForm />
            </div>
        </div>
    );
}

export default DoctorPage;