import { DatePicker, TimePicker } from "antd";
import axios from "axios";
import dayjs, { Dayjs } from "dayjs";
import { SetStateAction, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { selectAuth } from "../../../features/auth/authSlice";
import { ArrowBack, TrashBin } from "../../common/SvgImages";
import { AppNotification, Appointment, dateFormat, Service, Status, timeFormat, User } from "../../common/types";
import { DeleteButton, DeleteForm } from "../../common/DeleteConfirmation";

type AppointmentProps = {
    changeStatusTo?: Status
}

function AppointmentPage({ changeStatusTo = undefined }: AppointmentProps) {
    const navigate = useNavigate();
    const { id } = useParams();
    const [appointment, setAppointment] = useState<Appointment>();
    const [client, setClient] = useState<User>();
    const [doctors, setDoctors] = useState<User[]>();
    const [selectedDoctorId, setSelectedDoctorId] = useState<number>(0);
    const [services, setServices] = useState<Service[]>();
    const [selectedServiceId, setSelectedServiceId] = useState<number>(0);
    const [date, setDate] = useState<string>();
    const [time, setTime] = useState<string>();
    const [cost, setCost] = useState<number>();

    const [showDeleteForm, setShowDeleteForm] = useState(false);
    const { user } = useAppSelector(selectAuth);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${user?.token}`,
            },
        };

        axios.get("/api/appointments/" + id, config).then((resp) => {
            const appointment: Appointment = resp.data.data.appointment;
            setAppointment(appointment);
            setClient(appointment.client);
            setSelectedDoctorId(appointment.doctorId);
            setSelectedServiceId(appointment.serviceId);
            setDate(dayjs(appointment.time).format(dateFormat));
            setTime(dayjs(appointment.time).format(timeFormat));
            if (appointment.cost) {
                setCost(appointment.cost);
            }
        });

        axios.get("/api/doctors", config).then((resp) => {
            const doctors: User[] = resp.data.data.doctors;
            setDoctors(doctors);
        });

        axios.get("/api/services", config).then((resp) => {
            const services: Service[] = resp.data.data.services;
            setServices(services);
        });
    }, [])

    const goBack = () => {
        navigate(-1)
    }

    const onDoctorSelect = (e: any) => {
        setSelectedDoctorId(e.target.value)
    }

    const onServiceSelect = (e: any) => {
        setSelectedServiceId(e.target.value)
    }

    const onDateChange = (date: any, dateString: any) => {
        setDate(dateString);
    }

    const onTimeChange = (value: Dayjs) => {
        setTime(value.format("HH:mm"));
    }

    const onCostChange = (e: any) => {
        setCost(e.target.value)
    }

    const onSubmit = (e: any) => {
        e.preventDefault();
        let timeStr = date + ' ' + time + ":00";
        const format = dateFormat + " " + timeFormat;
        const appointmentTime = dayjs(timeStr, format);

        const appointmentData = {
            id: appointment?.id,
            client: client?.id !== "" ? client?.id : null,
            doctor: selectedDoctorId !== 0 ? selectedDoctorId : null,
            service: selectedServiceId !== 0 ? selectedServiceId : null,
            status: changeStatusTo === undefined ? appointment?.status : changeStatusTo,
            time: appointmentTime,
            cost,
        }

        const config = {
            headers: {
                Authorization: `Bearer ${user?.token}`,
            },
        };
        axios.patch("/api/appointments/" + appointment?.id, appointmentData, config)
            .then(_ => {
                navigate(-1);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const deleteAppointment = () => {
        const config = {
            headers: {
                Authorization: `Bearer ${user?.token}`,
            },
        };

        axios.delete(`/api/appointments/${id}`, config)
            .then(_ => {
                navigate(-1);
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <div className="flex gap-3 hover:cursor-pointer hover:text-blue-white hover:dark:text-blue-dark"
                onClick={goBack}>
                Назад
            </div>
            <form onSubmit={onSubmit}>
                <div className="mt-3">
                    {`Пациент: ${client?.fullName}, ${client?.phone}, ${client?.email}`} <br />
                    {`Сообщение от пациента: ${appointment?.clientMessage}`}
                </div>
                <div className="mt-3 flex flex-col gap-6">
                    <div className="w-[200px]">
                        <label htmlFor="doctor" className="text-sm text-blue-gray-200">Doctor:</label>
                        <select value={selectedDoctorId} onChange={onDoctorSelect} name="doctor" id="doctor" className="p-2 border-[1px] border-blue-gray-200 rounded-md">
                            <option value={0} disabled hidden>Please Choose...</option>
                            {doctors?.map(doctor => {
                                return (
                                    <option key={doctor.id} value={doctor.id}>{doctor.fullName}</option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="w-[200px]">
                        <label htmlFor="service" className="text-sm text-blue-gray-200">service:</label>
                        <select value={selectedServiceId} onChange={onServiceSelect} name="service" id="service" className="p-2 border-[1px] border-blue-gray-200 rounded-md">
                            <option value={0} disabled hidden>Please Choose...</option>
                            {services?.map(service => {
                                return (
                                    <option key={service.id} value={service.id}>{service.title}</option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="w-[200px]">
                        <label htmlFor="date" className="text-sm text-blue-gray-200">День</label>
                        <DatePicker id="date" className="w-full py-2" value={dayjs(date, dateFormat)} onChange={onDateChange} format={dateFormat} />
                        <label htmlFor="time" className="text-sm text-blue-gray-200">Время</label>
                        <TimePicker id="time" className="w-full py-2" value={dayjs(time, timeFormat)} format={timeFormat} minuteStep={30} showNow={false}
                            onSelect={onTimeChange} />
                    </div>
                    <div className="w-[300px]">
                        <label htmlFor="cost" className="text-sm text-blue-gray-200">Цена</label>
                        <input defaultValue={cost} onChange={onCostChange} id="cost" type="text" className="block w-full p-2 border-[1px] border-blue-gray-200 rounded-md" />
                    </div>
                </div>
                <div className="flex justify-end gap-5">
                    <DeleteButton setShow={setShowDeleteForm} />
                    <button className="px-8 py-3 inline-block bg-blue-white dark:bg-blue-dark text-lg text-primary-dark font-semibold drop-shadow-lg rounded-full">
                        Подтвердить
                    </button>
                </div>
            </form>
            <DeleteForm title={"Вы действительно хотите удалить запись?"} setShow={setShowDeleteForm} show={showDeleteForm} onDelete={deleteAppointment} />
        </div>
    );
}

export default AppointmentPage;