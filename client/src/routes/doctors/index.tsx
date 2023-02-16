import axios from "axios";
import { useEffect, useState } from "react";
import DoctorCard from "../common/DoctorCard";
import LinkButton from "../common/LinkButton";
import { Doctor } from "../common/types";

function DoctorsPage() {
    const [doctors, setDoctors] = useState<Doctor[]>([]);

    useEffect(() => {
        const apiUrl = `/api/doctors`;

        axios.get(apiUrl).then((resp) => {
            const doctors: Doctor[] = resp.data;
            setDoctors(doctors);
        });
    }, [])

    return (
        <div className="p-20">
            <h2 className="text-xl sm:text-4xl text-center text-primary-white dark:text-primary-dark font-bold">
                Наши специалисты
            </h2>

            <div className="mt-10 flex flex-wrap justify-center items-center gap-x-20 gap-y-6">
                {doctors.map(doctor => {
                    return (
                        <div key={doctor.id}>
                            <DoctorCard doctor={doctor} />
                            <div className="mt-5 text-center">
                                <LinkButton to={`/doctors/${doctor.id}`} text={"Подробнее"} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default DoctorsPage;