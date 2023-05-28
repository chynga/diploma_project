import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { TextBase } from "../../common/TextElements";
import { Appointment, dateFormat, timeFormat } from "../../common/types";

type AppointmentTableProps = {
    appointments: Appointment[]
    includeCost?: boolean
}

function AppointmentsTable({ appointments, includeCost = false }: AppointmentTableProps) {
    const navigate = useNavigate();

    return (
        <table className="table-auto w-full">
            <thead>
                <tr className="bg-blue-white dark:bg-blue-dark">
                    <th className="p-3"><TextBase><span className="text-primary-dark">ФИО</span></TextBase></th>
                    <th className="p-3"><TextBase><span className="text-primary-dark">Врач</span></TextBase></th>
                    <th className="p-3"><TextBase><span className="text-primary-dark">Услуга</span></TextBase></th>
                    <th className="p-3"><TextBase><span className="text-primary-dark">Время</span></TextBase></th>
                    {includeCost ?
                        <th className="p-3"><TextBase><span className="text-primary-dark">Оплачено</span></TextBase></th>
                        :
                        <></>
                    }
                </tr>
            </thead>
            <tbody className="text-center border-[1px]">
                {appointments.map(appointment => {
                    let displayedTime = dayjs(appointment.time);
                    return (
                        <tr onClick={() => { navigate(`${appointment.id}`) }} key={appointment.id} className="hover:cursor-pointer">
                            <td className="p-3"><TextBase>{appointment.client?.fullName}</TextBase></td>
                            <td className="p-3"><TextBase>{appointment.doctor?.fullName}</TextBase></td>
                            <td className="p-3"><TextBase>{appointment.service?.title}</TextBase></td>
                            <td className="p-3"><TextBase>{displayedTime.format(dateFormat + " " + timeFormat)}</TextBase></td>
                            {includeCost ?
                                <td className="p-3"><TextBase>{appointment.cost}тг</TextBase></td>
                                :
                                <></>
                            }
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}

export default AppointmentsTable;