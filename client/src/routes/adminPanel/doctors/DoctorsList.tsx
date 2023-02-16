import axios from "axios";
import { useEffect, useState } from "react";
import { DoctorsProps } from ".";
import { useAppSelector } from "../../../app/hooks";
import { selectAuth } from "../../../features/auth/authSlice";
import { Doctor } from "../../common/types";

function DoctorsList({ selectedDoctor, setSelectedDoctor }: DoctorsProps) {
    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const { user } = useAppSelector(selectAuth);

    useEffect(() => {
        const apiUrl = "/api/users/doctors";
        const config = {
            headers: {
                Authorization: `Bearer ${user?.token}`,
            },
        };

        axios.get(apiUrl, config).then((resp) => {
            const doctors: Doctor[] = resp.data;
            setDoctors(doctors);
        });
    }, [])

    return (
        <div>
            {doctors.map(doctor => {
                return (
                    <div key={doctor.id} className="py-3 hover:cursor-pointer"
                        onClick={() => setSelectedDoctor(doctor)}>
                        <p className="text-center">
                            {doctor.fullName}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}

export default DoctorsList;