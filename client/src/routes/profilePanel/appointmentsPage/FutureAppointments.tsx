import dayjs from "dayjs";
import { AppointmentsPageProps } from ".";
import { TextBase } from "../../common/TextElements";
import { dateFormat, timeFormat } from "../../common/types";
import { useContext } from "react";
import { VisuallyImpairedContext, VisuallyImpairedContextType } from "../../common/header/VisuallyImpairedSettingBar";

function FutureAppointments({ appointments }: AppointmentsPageProps) {
    const { visuallyImpairedSettings } =
        useContext(VisuallyImpairedContext) as VisuallyImpairedContextType;
    const bgColor = !visuallyImpairedSettings.isOn ?
        "bg-blue-white dark:bg-blue-dark"
        :
        visuallyImpairedSettings.theme === "white" ?
            "bg-background-white"
            :
            visuallyImpairedSettings.theme === "black" ?
                "bg-[#9DD1FF]"
                :
                "bg-[#353535]";

    return (
        <div>
            <table className="table-auto w-full">
                <thead>
                    <tr className={bgColor}>
                        <th className="p-3"><TextBase><span className="text-primary-dark">Врач</span></TextBase></th>
                        <th className="p-3"><TextBase><span className="text-primary-dark">Услуга</span></TextBase></th>
                        <th className="p-3"><TextBase><span className="text-primary-dark">Время</span></TextBase></th>
                    </tr>
                </thead>
                <tbody className="text-center border-[1px]">
                    {appointments.map(appointment => {
                        const time = appointment.time;
                        return (
                            <tr key={appointment.id}>
                                <td className="p-3"><TextBase>{appointment.doctor?.fullName}</TextBase></td>
                                <td className="p-3"><TextBase>{appointment.service?.title}</TextBase></td>
                                <td className="p-3"><TextBase>{dayjs(time).format(dateFormat + " " + timeFormat)}</TextBase></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default FutureAppointments;