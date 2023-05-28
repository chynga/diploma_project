import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import DoctorCard from "../common/DoctorCard";
import LinkButton from "../common/LinkButton";
import { Text4Xl } from "../common/TextElements";
import { Doctor } from "../common/types";

function DoctorsPage() {
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
        <div className="p-20">
            <Text4Xl>
                <h2 className="text-center font-bold">
                    {t('doctor:ourDoctors')}
                </h2>
            </Text4Xl>

            <div className="mt-10 flex flex-wrap justify-center items-stretch gap-x-20 gap-y-6">
                {doctors.map(doctor => {
                    return (
                        <div key={doctor.id} className="flex flex-col justify-between gap-5">
                            <DoctorCard doctor={doctor} />
                            <div className="text-center">
                                <LinkButton to={`/doctors/${doctor.id}`} text={t('common:more')} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default DoctorsPage;