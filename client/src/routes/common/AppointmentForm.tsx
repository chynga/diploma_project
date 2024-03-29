import { Textarea } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { DatePicker } from 'antd';
import dayjs, { Dayjs } from "dayjs";
import { Service, dateFormat, timeFormat, AppointmentSession, Doctor } from "./types";
import { useAppSelector } from "../../app/hooks";
import { selectAuth } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { RangePickerProps } from "antd/es/date-picker";
import { useTranslation } from "react-i18next";
import { TextBase } from "./TextElements";

type AppointmentFormProps = {
    doctorId?: string
}

function AppointmentForm({ doctorId = "" }: AppointmentFormProps) {
    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const [services, setServices] = useState<Service[]>([]);

    const [selectedDoctorId, setSelectedDoctorId] = useState<string>(doctorId);
    const [selectedService, setSelectedService] = useState<Service>();
    const [date, setDate] = useState<string>(dayjs().format(dateFormat));
    const [time, setTime] = useState<string>();
    const [clientMessage, setClientMessage] = useState<string>("");

    const [availableTimes, setAvailableTimes] = useState<Dayjs[]>([]);
    const { t } = useTranslation(["kz", "ru"]);

    const { user } = useAppSelector(selectAuth);
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState("");

    const disabledDate: RangePickerProps['disabledDate'] = (current) => {
        return current && current < dayjs().add(-1, 'day').endOf('day');
    };

    useEffect(() => {
        axios.get("/api/doctors").then((resp) => {
            const doctors: Doctor[] = resp.data;
            setDoctors(doctors);
            if (doctors[0] && !selectedDoctorId) {
                setSelectedDoctorId(doctors[0].id);
            }
        }).catch(err => {
            console.log(err)
        });
        if (selectedDoctorId) {
            axios.get(`/api/doctors/${selectedDoctorId}`).then((resp) => {
                const doctor: Doctor = resp.data;
                setServices(doctor.services);
                if (!doctor.services.find(service => service.id === selectedService?.id)) {
                    setSelectedService(doctor.services[0]);
                }
            });
        }
        if (selectedDoctorId && selectedService) {
            axios.get(`/api/doctors/${selectedDoctorId}/free-slots?serviceId=${selectedService.id}&date=${dayjs(date, dateFormat).unix() * 1000 + 6 * 60 * 60 * 1000}`).then(resp => {
                const freeSlots: Dayjs[] = resp.data.map((ts: number) => dayjs(ts))
                setAvailableTimes(freeSlots)
                setTime(dayjs(freeSlots[0]).format(timeFormat))
            }).catch(err => {
                console.log(err)
            })
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
        if (!user) {
            setErrorMsg("Записаться можно только после регистрации!");
            return;
        }
        let timeStr = date + ' ' + time;

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

        axios.post("/api/profile/appointments", appointment, config)
            .then((resp) => {
                axios.post("/api/notifications", { appointmentId: resp.data.id }, config)
                    .catch(error => {
                        console.log(error)
                    })

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
                    <select value={selectedDoctorId} onChange={onDoctorSelect} name="doctor" id="doctor" className="form-select appearance-none p-2 border-[1px] bg-background-white dark:bg-background-dark text-primary-white dark:text-primary-dark border-blue-gray-200 rounded-md w-full">
                        <option value={0} disabled hidden>Please Choose...</option>
                        {doctors?.map(doctor => {
                            return (
                                <option key={doctor.id} value={doctor.id}>{doctor.fullName}</option>
                            );
                        })}
                    </select>
                </div>
                <div className="mt-5 xl:mt-0 w-full">
                    <select value={selectedService?.id} onChange={onServiceSelect} name="service" id="service" className="form-select appearance-none p-2 border-[1px] bg-background-white dark:bg-background-dark text-primary-white dark:text-primary-dark border-blue-gray-200 rounded-md w-full">
                        <option value={0} disabled hidden>Please Choose...</option>
                        {services?.map(service => {
                            return (
                                <option key={service.id} value={service.id}>{service.title}</option>
                            );
                        })}
                    </select>
                </div>
            </div>
            <div className="mt-5 xl:flex gap-5">
                <DatePicker className="w-full py-2 bg-background-white dark:bg-background-dark text-primary-white dark:text-primary-dark" value={dayjs(date, dateFormat)} onChange={onDateChange} format={dateFormat} disabledDate={disabledDate} />
                <select value={time} onChange={onTimeChange} name="time" id="time" className="form-select appearance-none mt-5 xl:mt-0 p-2 border-[1px] bg-background-white dark:bg-background-dark text-primary-white dark:text-primary-dark border-blue-gray-200 rounded-md w-full">
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
            <div className="mt-5 flex flex-col items-center">
                <TextBase>
                    <span className="text-red-400">
                        {errorMsg}
                    </span>
                </TextBase>
                <button className="px-8 py-3 bg-background-white dark:bg-background-dark text-lg text-blue-white dark:text-blue-dark font-semibold drop-shadow-lg rounded-full">
                    {t('common:send')}
                </button>
            </div>
        </form>
    );
}

export default AppointmentForm;