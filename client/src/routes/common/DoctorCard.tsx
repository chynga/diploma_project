import DoctorProfile from "./DoctorProfile";
import { Doctor } from "./types";

type DoctorInfo = {
    doctor: Doctor,
}

function DoctorCard({ doctor }: DoctorInfo) {
    return (
        <div className="w-[292px] flex flex-col items-center gap-2">
            <DoctorProfile imageUrl={"real-doctor-2.png"} />
            <h3 className="mt-3 font-bold text-lg text-blue-white dark:text-blue-dark">{doctor.fullName}</h3>
            <div>
                <p className="text-primary-white dark:text-primary-dark text-center">Стоматолог-ортопед, стоматолог-хирург</p>
                {/* <p className="text-primary-white dark:text-primary-dark text-center">Общий стаж работы: 12 лет</p> */}
            </div>
        </div>
    );
}

export default DoctorCard;