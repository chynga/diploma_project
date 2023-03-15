import axios from "axios";
import { useEffect, useState } from "react";
import DoctorCard from "../common/DoctorCard";
import LinkButton from "../common/LinkButton";
import { Text4Xl } from "../common/TextElements";
import { Doctor } from "../common/types";

function DoctorsSection() {
    const [doctors, setDoctors] = useState<Doctor[]>([]);

    useEffect(() => {
        const apiUrl = `/api/doctors`;

        axios.get(apiUrl).then((resp) => {
            const doctors: Doctor[] = resp.data;
            setDoctors(doctors);
        });
    }, [])

    return (
        <div className="py-20 px-20">
            <Text4Xl blue>
                <h2 className="text-center font-bold">
                    Врачи
                </h2>
            </Text4Xl>
            <div className="mt-5 flex flex-col items-center xl:flex-row justify-around">
                {doctors.map(doctor => {
                    return (
                        <DoctorCard key={doctor.id} doctor={doctor} />
                    );
                })}
            </div>
            <div className="my-16 flex justify-center">
                <LinkButton to="/doctors" text="Просмотр всех врачей" />
            </div>
        </div>
    );
}

export default DoctorsSection;