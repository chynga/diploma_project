import { Dispatch, SetStateAction, useState } from "react";
import AppointmentForm from "../common/AppointmentForm";
import { CloseButton } from "../common/SvgImages";
import { Text4Xl, TextBase, TextLg, TextXl } from "../common/TextElements";

function BannerSection() {
    const [showAppointmentForm, setShowAppointmentForm] = useState(false);

    return (
        <>
            <div className="relative w-full h-[574px] bg-[url('images/banner.jpg')]
                         bg-cover bg-center flex justify-center items-center
                         bg-black">
                <div className="absolute z-10 top-0 right-0 bottom-0 left-0 dark:bg-[rgba(77,77,77,0.5)]"></div>
                <div className="z-20 flex flex-col max-w-2xl justify-center items-center">
                    <Text4Xl>
                        <h1 className="text-center font-bold">Все виды
                            <Text4Xl blue> стамотологических услуг </Text4Xl><br />
                            с фиксированной ценой<br />
                            и гарантией на 1 год
                        </h1>
                    </Text4Xl>
                    <TextLg className="mt-5 text-center">Первое посещение <TextLg blue>15%</TextLg> скидка</TextLg>
                    <div className="mt-8 px-8 py-3 bg-blue-white dark:bg-blue-dark drop-shadow-lg rounded-full hover:cursor-pointer"
                        onClick={() => setShowAppointmentForm(true)}>
                        <TextBase>
                            <span className="font-bold text-primary-dark">
                                Записаться
                            </span>
                        </TextBase>
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