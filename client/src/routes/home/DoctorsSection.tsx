import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import DoctorCard from "../common/DoctorCard";
import LinkButton from "../common/LinkButton";
import { Text4Xl } from "../common/TextElements";
import { Doctor } from "../common/types";

function DoctorsSection() {
    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const { t } = useTranslation(["kz", "ru"]);

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
                    {t('home:doctor:title')}
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
                <LinkButton to="/doctors" text={t('home:doctor:seeAll')} />
            </div>
        </div>
    );
}

export default DoctorsSection;