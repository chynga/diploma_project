import dayjs from "dayjs";
import DoctorProfile from "./DoctorProfile";
import { TextBase, TextXl } from "./TextElements";
import { Doctor } from "./types";

type DoctorInfo = {
    doctor: Doctor,
}

function DoctorCard({ doctor }: DoctorInfo) {
    const workExperience = Math.ceil((new Date().getTime() - dayjs(doctor.startedWorkingFrom).unix() * 1000) / (1000 * 60 * 60 * 24 * 365));
    return (
        <div className="w-[292px] flex flex-col items-center gap-2">
            <DoctorProfile imageUrl={doctor.imageUrl} />
            <TextXl blue>
                <h3 className="mt-3 font-semibold">{doctor.fullName}</h3>
            </TextXl>
            <div>
                <TextBase>
                    <p className="text-center">
                        {doctor.specialties.map((specialty, index, specialties) => {
                            return specialty + (index === specialties.length - 1 ? "" : ", ");
                        })}
                    </p>
                </TextBase>
                <TextBase>
                    {
                        doctor.startedWorkingFrom ?
                            <p className="text-center">Общий стаж работы: {workExperience} лет</p>
                            :
                            <></>
                    }
                </TextBase>
            </div>
        </div>
    );
}

export default DoctorCard;