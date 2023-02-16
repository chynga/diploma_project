import { Dispatch, SetStateAction, useState } from "react";
import { Doctor } from "../../common/types";
import DoctorInfo from "./DoctorInfo";
import DoctorsList from "./DoctorsList";

export type DoctorsProps = {
    selectedDoctor: Doctor | undefined
    setSelectedDoctor: Dispatch<SetStateAction<Doctor | undefined>>
}

function DoctorsPage() {
    const [selectedDoctor, setSelectedDoctor] = useState<Doctor>();

    return (
        <div className="grid h-[70vh] grid-cols-3 gap-4">
            <div className="p-10 shadow-lg rounded-lg">
                <DoctorsList selectedDoctor={selectedDoctor} setSelectedDoctor={setSelectedDoctor} />
            </div>
            <div className="p-10 shadow-lg rounded-lg col-span-2">
                <DoctorInfo selectedDoctor={selectedDoctor} setSelectedDoctor={setSelectedDoctor} />
            </div>
        </div>
    );
}

export default DoctorsPage;