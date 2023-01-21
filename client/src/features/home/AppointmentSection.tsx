import AppointmentForm from "../common/AppointmentForm";
import Doctor1 from "../common/Doctor1";

function AppointmentSection() {
    return (
        <div className="py-16 px-20 flex justify-center xl:justify-between gap-10">
            <div className="hidden xl:block">
                <Doctor1 />
            </div>
            <div className="max-w-[400px] xl:max-w-none w-full xl:w-[736px]">
                <h2 className="text-xl text-center xl:text-start sm:text-4xl text-primary-white dark:text-primary-dark font-bold">
                    Записаться
                </h2>
                <AppointmentForm />
            </div>
        </div>
    );
}

export default AppointmentSection;