import dayjs from "dayjs";
import DoctorProfile from "./DoctorProfile";
import { Doctor } from "./types";

type DoctorInfo = {
    doctor: Doctor,
}

function DoctorCard({ doctor }: DoctorInfo) {
    const workExperience = Math.ceil((new Date().getTime() - doctor.startedWorkingFrom) / (1000 * 60 * 60 * 24 * 365));
    return (
        <div className="w-[292px] flex flex-col items-center gap-2">
            <DoctorProfile imageUrl={doctor.imageUrl} />
            <h3 className="mt-3 font-bold text-lg text-blue-white dark:text-blue-dark">{doctor.fullName}</h3>
            <div>
                <p className="text-primary-white dark:text-primary-dark text-center">Стоматолог-ортопед, стоматолог-хирург</p>
                {
                    doctor.startedWorkingFrom ?
                        <p className="text-primary-white dark:text-primary-dark text-center">Общий стаж работы: {workExperience} лет</p>
                        :
                        <></>
                }
            </div>
        </div>
    );
}

export default DoctorCard;