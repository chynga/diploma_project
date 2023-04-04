import dayjs from "dayjs";
import locale from 'dayjs/locale/ru';
import { Appointment, dateFormat, timeFormat } from "../../common/types";
import { TextBase, TextXl } from "../../common/TextElements";
import { useNavigate } from "react-router-dom";

type AppointmentsTableProps = {
    distributedAppointments: Appointment[][]
}

function AppointmentsTable({ distributedAppointments }: AppointmentsTableProps) {
    const navigate = useNavigate();

    return (
        <div>
            {distributedAppointments.map((appointments, index) => {
                return (
                    <div key={index}>
                        <TextXl className="text-center font-semibold" blue>
                            <h2>
                                {dayjs(appointments[0].time).locale(locale).format("DD MMMM")}
                            </h2>
                        </TextXl>
                        <table className="mt-3 table-fixed w-full">
                            <thead>
                                <tr className="bg-blue-white dark:bg-blue-dark">
                                    <th className="p-2"><TextBase><span className="text-primary-dark">ФИО</span></TextBase></th>
                                    <th className="p-2"><TextBase><span className="text-primary-dark">Услуга</span></TextBase></th>
                                    <th className="p-2"><TextBase><span className="text-primary-dark">Время</span></TextBase></th>
                                </tr>
                            </thead>
                            <tbody className="text-center border-[1px]">
                                {appointments.map(appointment => {
                                    let displayedTime = dayjs(appointment.time);
                                    return (
                                        <tr onClick={() => { navigate(`/admin/doctor-appointments/clients/${appointment.client?.id}`) }} key={appointment.id} className="hover:cursor-pointer">
                                            <td className="p-3"><TextBase>{appointment.client?.fullName}</TextBase></td>
                                            <td className="p-3"><TextBase>{appointment.service?.title}</TextBase></td>
                                            <td className="p-3"><TextBase>{displayedTime.format(timeFormat)}</TextBase></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                )
            })}
        </div>
    )
}

export default AppointmentsTable;