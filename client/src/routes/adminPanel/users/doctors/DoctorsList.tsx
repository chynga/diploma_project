import axios from "axios";
import { useEffect, useState } from "react";
import { DoctorsProps } from ".";
import { useAppSelector } from "../../../../app/hooks";
import { selectAuth } from "../../../../features/auth/authSlice";
import { Doctor } from "../../../common/types";
import { Search } from "../../../common/SvgImages";

function DoctorsList({ selectedDoctor, setSelectedDoctor }: DoctorsProps) {
    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const { user } = useAppSelector(selectAuth);
    const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>([]);
    const [searchText, setSearchText] = useState<string>("");

    useEffect(() => {
        setFilteredDoctors(doctors.filter(doctor => doctor.fullName.toLowerCase().includes(searchText)));

        if (doctors.length === 0) {
            const apiUrl = "/api/doctors";
            const config = {
                headers: {
                    Authorization: `Bearer ${user?.token}`,
                },
            };

            axios.get(apiUrl, config).then((resp) => {
                const doctors: Doctor[] = resp.data.data.doctors;
                setDoctors(doctors);
                setFilteredDoctors(doctors);
                if (!selectedDoctor) {
                    setSelectedDoctor(doctors[0])
                }
            });
        }
    }, [searchText])

    const onType = (e: any) => {
        setSearchText(e.target.value)
    }

    return (
        <div>
            <div className="relative">
                <input value={searchText} onChange={onType} className="pl-8 pr-5 py-2 w-full text-primary-white dark:text-primary-dark bg-[#F2F3F3] dark:bg-[#4F4F4F] border border-[#B9B9B9] rounded-full" placeholder="Пойск" />
                <div className="absolute top-2/4 -translate-y-2/4 left-2">
                    <Search />
                </div>
            </div>

            {filteredDoctors.map(doctor => {
                return (
                    <div key={doctor.id} className="py-3 hover:cursor-pointer"
                        onClick={() => setSelectedDoctor(doctor)}>
                        <p className={`text-center ${selectedDoctor?.id === doctor.id ? "text-blue-white dark:text-blue-dark" : "text-primary-white dark:text-primary-dark"}`}>
                            {doctor.fullName}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}

export default DoctorsList;