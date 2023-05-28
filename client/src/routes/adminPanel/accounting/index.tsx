import { useEffect, useState } from "react";
import { TextBase } from "../../common/TextElements";
import { Appointment, Doctor, Service, User, dateFormat } from "../../common/types";
import axios from "axios";
import { useAppSelector } from "../../../app/hooks";
import { selectAuth } from "../../../features/auth/authSlice";
import dayjs from "dayjs";

function AccountingPage() {
    const [doctors, setDoctors] = useState<User[]>([]);
    const [selectedDoctorId, setSelectedDoctorId] = useState<string>("all");
    const [services, setServices] = useState<Service[]>([]);
    const [selectedServiceId, setSelectedServiceId] = useState<string>("all");
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [year, setYear] = useState<string>("all");
    const [month, setMonth] = useState<string>("all");

    const { user } = useAppSelector(selectAuth);

    const months: string[] = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
    ]
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const years = [...Array(currentYear - 2015 + 1)].map((_, i) => {
        return currentYear - i;
    });

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${user?.token}`,
            },
        };

        axios.get(`/api/accounting?doctor=${selectedDoctorId}&service=${selectedServiceId}&year=${year}&month=${month}`, config).then((resp) => {
            const appointments: Appointment[] = resp.data;
            setAppointments(appointments);
        }).catch(err => {
            console.log(err)
        });

        if (doctors.length === 0 || services.length === 0) {
            axios.get("/api/doctors", config).then((resp) => {
                const doctors: Doctor[] = resp.data.data.doctors;
                setDoctors(doctors);
            });

            axios.get("/api/services", config).then((resp) => {
                const services: Service[] = resp.data.data.services;
                setServices(services);
            });
        }
    }, [selectedDoctorId, selectedServiceId, year, month]);

    const onDoctorSelect = (e: any) => {
        setSelectedDoctorId(e.target.value);
    }

    const onServiceSelect = (e: any) => {
        setSelectedServiceId(e.target.value);
    }

    const onYearSelect = (e: any) => {
        setYear(e.target.value);
    }

    const onMonthSelect = (e: any) => {
        setMonth(e.target.value);
    }

    return (
        <div className="p-10 h-[70vh] overflow-auto shadow-lg rounded-lg">
            <div className="flex flex-wrap gap-5">
                <div>
                    <label htmlFor="doctor">Врач:</label>
                    <select id="doctor" onChange={onDoctorSelect} className="form-select appearance-none ml-3 bg-[#F2F3F3] dark:bg-[#4F4F4F]">
                        <option value="all">Все</option>
                        {doctors?.map(doctor => {
                            return <option key={doctor.id} value={doctor.id}>{doctor.fullName}</option>
                        })}
                    </select>
                </div>
                <div>
                    <label htmlFor="service">Услуга:</label>
                    <select id="service" onChange={onServiceSelect} className="form-select appearance-none ml-3 bg-[#F2F3F3] dark:bg-[#4F4F4F]">
                        <option value="all">Все</option>
                        {services?.map(service => {
                            return <option key={service.id} value={service.id}>{service.title}</option>
                        })}
                    </select>
                </div>
                <div>
                    <label htmlFor="year">Год:</label>
                    <select id="year" onChange={onYearSelect} className="form-select appearance-none ml-3 bg-[#F2F3F3] dark:bg-[#4F4F4F]">
                        <option value="all">Все</option>
                        {years?.map(year => {
                            return <option key={year} value={year}>{year}</option>
                        })}
                    </select>
                </div>
                {year !== "all" ?
                    <div>
                        <label htmlFor="month">Месяц:</label>
                        <select id="month" onChange={onMonthSelect} className="form-select appearance-none ml-3 bg-[#F2F3F3] dark:bg-[#4F4F4F]">
                            <option value="all">Все</option>
                            {months.filter((_, index) => currentYear !== parseInt(year) || index <= currentMonth).map((month, index) => {
                                return <option key={month} value={index}>{month}</option>
                            })}
                        </select>
                    </div>
                    :
                    <></>
                }
                <div>
                    <label htmlFor="doctor">Итого:</label>
                    <span className="ml-3">{appointments.reduce((total, appointment) => {
                        return total + (appointment.cost || 0)
                    }, 0)}тг</span>
                </div>
            </div>
            <table className="mt-5 table-auto w-full">
                <thead>
                    <tr className="bg-blue-white dark:bg-blue-dark">
                        <th className="p-3"><TextBase><span className="text-primary-dark">Врач</span></TextBase></th>
                        <th className="p-3"><TextBase><span className="text-primary-dark">Услуга</span></TextBase></th>
                        <th className="p-3"><TextBase><span className="text-primary-dark">Дата</span></TextBase></th>
                        <th className="p-3"><TextBase><span className="text-primary-dark">Цена</span></TextBase></th>
                    </tr>
                </thead>
                <tbody className="text-center border-[1px]">
                    {appointments.map(appointment => {
                        return (
                            <tr key={appointment.id}>
                                <td className="p-3"><TextBase>{appointment.doctor?.fullName}</TextBase></td>
                                <td className="p-3"><TextBase>{appointment.service?.title}</TextBase></td>
                                <td className="p-3"><TextBase>{dayjs(appointment.time).format(dateFormat)}</TextBase></td>
                                <td className="p-3"><TextBase>{appointment.cost}тг</TextBase></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default AccountingPage;