import { Textarea } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { DatePicker } from 'antd';
import dayjs, { Dayjs } from "dayjs";
import { Service, dateFormat, timeFormat, AppointmentSession, Doctor } from "./types";
import { useAppSelector } from "../../app/hooks";
import { selectAuth } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

function AppointmentForm() {
    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const [services, setServices] = useState<Service[]>([]);

    const [selectedDoctorId, setSelectedDoctorId] = useState<number>();
    const [selectedService, setSelectedService] = useState<Service>();
    const [date, setDate] = useState<string>(dayjs().format(dateFormat));
    const [time, setTime] = useState<string>();
    const [clientMessage, setClientMessage] = useState<string>("");

    const [availableTimes, setAvailableTimes] = useState<Dayjs[]>([]);
    const dayStart = dayjs(date, dateFormat).set('hour', 7).set('minute', 0).set('second', 0);
    const dayEnd = dayjs(date, dateFormat).set('hour', 18).set('minute', 0).set('second', 0);

    const { user } = useAppSelector(selectAuth);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("api/doctors").then((resp) => {
            const doctors: Doctor[] = resp.data;
            setDoctors(doctors);
            if (doctors[0] && !selectedDoctorId) {
                setSelectedDoctorId(doctors[0].id);
            }
        });
        if (selectedDoctorId) {
            axios.get(`api/doctors/${selectedDoctorId}`).then((resp) => {
                const doctor: Doctor = resp.data;
                setServices(doctor.services);
                setSelectedService(doctor.services[0]);
            });
        }
        if (selectedDoctorId) {
            axios.get(`api/doctors/${selectedDoctorId}/schedule`).then((resp) => {
                let sessions: AppointmentSession[] = resp.data;
                sessions = sessions.filter(session => dayjs(session.time).format(dateFormat) === date);
                sessions.unshift({ time: dayStart.valueOf(), durationMin: 0 });
                sessions.push({ time: dayEnd.valueOf(), durationMin: 0 });

                let minutesBetweenSessions;
                let sessionsCount;
                let prevTime;
                const availableTimes = [];
                if (selectedService) {
                    for (let i = 0; i < sessions.length - 1; i++) {
                        prevTime = sessions[i].time + sessions[i].durationMin * 60 * 1000;
                        minutesBetweenSessions = new Date(sessions[i + 1].time - prevTime).getTime() / (1000 * 60);
                        sessionsCount = minutesBetweenSessions / (selectedService.approxDurationMin ?? 0) | 0; // | 0 -> gets int value: 1.333 -> 1, 3.666 -> 3

                        for (let j = 0; j < sessionsCount; j++) {
                            availableTimes.push(dayjs(prevTime));
                            prevTime += (selectedService.approxDurationMin ?? 0) * 60 * 1000;
                        }
                    }

                    setAvailableTimes(availableTimes);
                    setTime(availableTimes[0].format(timeFormat));
                }
            });

        }
    }, [selectedDoctorId, selectedService, date]);

    const onDateChange = (date: any, dateString: any) => {
        setDate(dateString);
    }

    const onTimeChange = (e: any) => {
        setTime(e.target.value);
    }

    const onDoctorSelect = (e: any) => {
        setSelectedDoctorId(e.target.value);
    }

    const onServiceSelect = (e: any) => {
        const id = e.target.value;
        services.forEach(service => {
            if (service.id == id) {
                setSelectedService(service);
            }
        })
    }

    const onMessageChange = (e: any) => {
        setClientMessage(e.target.value)
    }

    const onSubmit = (e: any) => {
        e.preventDefault();
        let timeStr = date + ' ' + time + ":00";
        console.log(timeStr)
        const format = dateFormat + " " + timeFormat;
        const appointmentTime = dayjs(timeStr, format);
        const appointment = {
            doctorId: selectedDoctorId,
            serviceId: selectedService?.id,
            clientMessage,
            time: appointmentTime,
        }

        const config = {
            headers: {
                Authorization: `Bearer ${user?.token}`,
            },
        };
        console.log(appointment)
        axios.post("/api/profile/appointments", appointment, config)
            .then(() => {
                navigate(0);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <form onSubmit={onSubmit} className="mt-10 p-12 bg-[#277ff280] rounded-3xl w-full">
            <div className="xl:flex gap-5">
                <div className="xl:mt-0 w-full">
                    <select value={selectedDoctorId} onChange={onDoctorSelect} name="doctor" id="doctor" className="p-2 border-[1px] border-blue-gray-200 rounded-md w-full">
                        <option value={0} disabled hidden>Please Choose...</option>
                        {doctors?.map(doctor => {
                            return (
                                <option key={doctor.id} value={doctor.id}>{doctor.fullName}</option>
                            );
                        })}
                    </select>
                </div>
                <div className="mt-5 xl:mt-0 w-full">
                    <select value={selectedService?.id} onChange={onServiceSelect} name="service" id="service" className="p-2 border-[1px] border-blue-gray-200 rounded-md w-full">
                        <option value={0} disabled hidden>Please Choose...</option>
                        {services?.map(service => {
                            return (
                                <option key={service.id} value={service.id}>{service.title}</option>
                            );
                        })}
                    </select>
                </div>
            </div>
            <div className="xl:mt-5 xl:flex gap-5">
                <DatePicker className="w-full py-2" value={dayjs(date, dateFormat)} onChange={onDateChange} format={dateFormat} />
                <select value={time} onChange={onTimeChange} name="time" id="time" className="p-2 border-[1px] border-blue-gray-200 rounded-md w-full">
                    <option value={0} disabled hidden>Please Choose...</option>
                    {availableTimes?.map(time => {
                        return (
                            <option key={time.toString()} value={time.format(timeFormat)}>{time.format(timeFormat)}</option>
                        );
                    })}
                </select>
            </div>
            <div className="mt-6">
                <Textarea label="Message" value={clientMessage} onChange={onMessageChange} className="bg-background-white dark:bg-background-dark text-primary-white dark:text-primary-dark" />
            </div>
            <div className="mt-5 flex justify-center">
                <button className="px-8 py-3 bg-background-white dark:bg-background-dark text-lg text-blue-white dark:text-blue-dark font-semibold drop-shadow-lg rounded-full">
                    Отправить
                </button>
            </div>
        </form>
    );
}

export default AppointmentForm;