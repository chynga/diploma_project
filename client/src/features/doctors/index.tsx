import DoctorCard from "../common/DoctorCard";
import LinkButton from "../common/LinkButton";

function DoctorsPage() {
    return (
        <div className="p-20 flex flex-wrap justify-center items-center gap-x-20 gap-y-6">
            <div>
                <DoctorCard imageUrl={"real-doctor-1.png"} />
                <div className="mt-5 text-center">
                    <LinkButton to={"/doctors/1"} text={"Подробнее"} />
                </div>
            </div>
            <div>
                <DoctorCard imageUrl={"real-doctor-3.png"} />
                <div className="mt-5 text-center">
                    <LinkButton to={"/doctors/1"} text={"Подробнее"} />
                </div>
            </div>
            <div>
                <DoctorCard imageUrl={"real-doctor-2.png"} />
                <div className="mt-5 text-center">
                    <LinkButton to={"/doctors/1"} text={"Подробнее"} />
                </div>
            </div>
            <div>
                <DoctorCard imageUrl={"real-doctor-2.png"} />
                <div className="mt-5 text-center">
                    <LinkButton to={"/doctors/1"} text={"Подробнее"} />
                </div>
            </div>
            <div>
                <DoctorCard imageUrl={"real-doctor-1.png"} />
                <div className="mt-5 text-center">
                    <LinkButton to={"/doctors/1"} text={"Подробнее"} />
                </div>
            </div>
            <div>
                <DoctorCard imageUrl={"real-doctor-3.png"} />
                <div className="mt-5 text-center">
                    <LinkButton to={"/doctors/1"} text={"Подробнее"} />
                </div>
            </div>
            <div>
                <DoctorCard imageUrl={"real-doctor-3.png"} />
                <div className="mt-5 text-center">
                    <LinkButton to={"/doctors/1"} text={"Подробнее"} />
                </div>
            </div>
            <div>
                <DoctorCard imageUrl={"real-doctor-2.png"} />
                <div className="mt-5 text-center">
                    <LinkButton to={"/doctors/1"} text={"Подробнее"} />
                </div>
            </div>
        </div>
    );
}

export default DoctorsPage;