import { Dispatch, SetStateAction, useState } from "react";
import AppointmentForm from "../common/AppointmentForm";
import { CloseButton } from "../common/SvgImages";

function BannerSection() {
    const [showAppointmentForm, setShowAppointmentForm] = useState(false);

    return (
        <>
            <div className="w-full h-[35rem] bg-[url('images/banner.jpg')]
                         bg-cover bg-center flex justify-center items-center
                         bg-black">
                <div className="flex flex-col max-w-2xl justify-center items-center">
                    <h1 className="text-center text-xl md:text-4xl text-primary-white dark:text-primary-dark font-bold">Все виды
                        <span className="text-blue-white dark:text-blue-dark"> стамотологических услуг </span><br />
                        с фиксированной ценой<br />
                        и гарантией на 1 год
                    </h1>
                    <p className="mt-5 text-center text-lg text-white">Первое посещение <span className="text-blue-white dark:text-blue-dark">15%</span> скидка</p>
                    <div className="mt-8 px-8 py-3 bg-blue-white dark:bg-blue-dark text-xl text-primary-dark font-semibold drop-shadow-lg rounded-full hover:cursor-pointer"
                        onClick={() => setShowAppointmentForm(true)}>
                        Записаться
                    </div>
                </div>
            </div>
            {showAppointmentForm ?
                <AppointmentModal setShowAppointmentForm={setShowAppointmentForm} />
                :
                <></>
            }
        </>
    );
}

type AppointmentModalProps = {
    setShowAppointmentForm: Dispatch<SetStateAction<boolean>>
}

function AppointmentModal({ setShowAppointmentForm }: AppointmentModalProps) {
    return (
        <div className="z-30 fixed left-0 top-0 right-0 bottom-0 bg-[rgb(0,0,0)] bg-[rgba(0,0,0,0.4)] flex justify-center items-center">
            <div className="modal p-5 bg-backgroundSecondary-white dark:bg-background-dark rounded-xl">
                <div className="flex justify-end">
                    <div onClick={() => setShowAppointmentForm(false)}>
                        <CloseButton />
                    </div>
                </div>
                <AppointmentForm />
            </div>
        </div>
    );
}

export default BannerSection;