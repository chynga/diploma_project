import { Select, Option, Textarea } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { DatePicker, TimePicker } from 'antd';
import dayjs, { Dayjs } from "dayjs";
import { User, Service, dateFormat, timeFormat } from "./types";
import { useAppSelector } from "../../app/hooks";
import { selectAuth } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

function AppointmentForm() {
    const [doctors, setDoctors] = useState<User[]>([]);
    const [services, setServices] = useState<Service[]>([]);
    const [doctorId, setDoctorId] = useState();
    const [serviceId, setServiceId] = useState();
    const [date, setDate] = useState<string>(dayjs().format(dateFormat));
    const [time, setTime] = useState<string>("13:00");
    const [clientMessage, setClientMessage] = useState<string>("");

    const { user } = useAppSelector(selectAuth);
    const navigate = useNavigate();

    useEffect(() => {
        console.log()
        axios.get("api/doctors").then((resp) => {
            const doctors = resp.data;
            setDoctors(doctors);
        });
        axios.get("api/services").then((resp) => {
            const services = resp.data;
            setServices(services);
        });
    }, []);

    const onDateChange = (date: any, dateString: any) => {
        setDate(dateString);
    }

    const onTimeChange = (value: Dayjs) => {
        setTime(value.format("HH:mm"));
    }

    const onDoctorSelect = (value: any) => {
        setDoctorId(value)
    }

    const onServiceSelect = (value: any) => {
        setServiceId(value)
    }

    const onMessageChange = (e: any) => {
        setClientMessage(e.target.value)
    }

    const onSubmit = (e: any) => {
        e.preventDefault();
        let timeStr = date + ' ' + time + ":00";
        const format = dateFormat + " " + timeFormat;
        const requestedTime = dayjs(timeStr, format);
        console.log(requestedTime)
        const appointment = {
            doctorId,
            serviceId,
            clientMessage,
            requestedTime,
        }

        const config = {
            headers: {
                Authorization: `Bearer ${user?.token}`,
            },
        };
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
                    <Select value={doctorId} onChange={onDoctorSelect} label="Врач" className="bg-background-white dark:bg-background-dark text-primary-white dark:text-primary-dark">
                        {doctors.map(doctor => {
                            return (
                                <Option value={`${doctor.id}`} key={doctor.id}>{doctor.fullName}</Option>
                            )
                        })}
                    </Select>
                </div>
                <div className="mt-5 xl:mt-0 w-full">
                    <Select value={serviceId} onChange={onServiceSelect} label="Услуга" className="bg-background-white dark:bg-background-dark text-primary-white dark:text-primary-dark">
                        {services.map(service => {
                            return (
                                <Option value={`${service.id}`} key={service.id}>{service.title}</Option>
                            )
                        })}
                    </Select>
                </div>
            </div>
            <div className="xl:mt-5 xl:flex gap-5">
                <DatePicker className="w-full py-2" value={dayjs(date, dateFormat)} onChange={onDateChange} format={dateFormat} />
                <TimePicker className="w-full py-2" value={dayjs(time, timeFormat)} format={timeFormat} minuteStep={30} showNow={false}
                    onSelect={onTimeChange} />
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