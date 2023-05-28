import { Dispatch, SetStateAction } from "react";
import AppointmentForm from "./AppointmentForm";
import { CloseButton } from "./SvgImages";

type AppointmentModalProps = {
    setShowAppointmentForm: Dispatch<SetStateAction<boolean>>
    doctorId?: string
}

function AppointmentModal({ setShowAppointmentForm, doctorId = "" }: AppointmentModalProps) {
    return (
        <div className="z-30 fixed left-0 top-0 right-0 bottom-0 bg-[rgb(0,0,0)] bg-[rgba(0,0,0,0.4)] flex justify-center items-center">
            <div className="modal p-5 bg-backgroundSecondary-white dark:bg-background-dark rounded-xl">
                <div className="flex justify-end">
                    <div onClick={() => setShowAppointmentForm(false)}>
                        <CloseButton />
                    </div>
                </div>
                <AppointmentForm doctorId={doctorId} />
            </div>
        </div>
    );
}

export default AppointmentModal;