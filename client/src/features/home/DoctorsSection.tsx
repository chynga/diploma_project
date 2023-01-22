import DoctorCard from "../common/DoctorCard";
import LinkButton from "../common/LinkButton";

function DoctorsSection() {
    return (
        <div className="py-20 px-20">
            <h2 className="text-center text-xl sm:text-4xl text-blue-white dark:text-blue-dark font-bold">
                Врачи
            </h2>
            <div className="mt-5 flex flex-col items-center xl:flex-row justify-around">
                <DoctorCard imageUrl={"real-doctor-1.png"} />
                <DoctorCard imageUrl={"real-doctor-2.png"} />
                <DoctorCard imageUrl={"real-doctor-3.png"} />
            </div>
            <div className="my-16 flex justify-center">
                <LinkButton to="/doctors" text="Просмотр всех врачей" />
            </div>
        </div>
    );
}

export default DoctorsSection;