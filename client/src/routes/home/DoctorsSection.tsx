import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import DoctorCard from "../common/DoctorCard";
import LinkButton from "../common/LinkButton";
import { Text4Xl } from "../common/TextElements";
import { Doctor } from "../common/types";
import { useNavigate } from "react-router-dom";

function DoctorsSection() {
    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const { t } = useTranslation(["kz", "ru"]);

    const navigate = useNavigate();

    useEffect(() => {
        const apiUrl = `/api/doctors`;

        axios.get(apiUrl).then((resp) => {
            const doctors: Doctor[] = resp.data;
            setDoctors(doctors);
        });
    }, [])

    return (
        <div className="py-20 px-5 md:p-20">
            <Text4Xl blue>
                <h2 className="text-center font-bold">
                    {t('home:doctor:title')}
                </h2>
            </Text4Xl>
            <div className="mt-5 flex items-start gap-x-10 overflow-x-auto">
                {doctors.map(doctor => {
                    return (
                        <div className="hover:cursor-pointer" key={doctor.id} onClick={() => navigate(`/doctors/${doctor.id}`)}>
                            <DoctorCard doctor={doctor} />
                        </div>
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