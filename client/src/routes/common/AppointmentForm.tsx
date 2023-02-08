import { Select, Option, Textarea } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";

function AppointmentForm() {

    const [doctors, setDoctors] = useState();

    useEffect(() => {
        const apiUrl = "api/doctors";
        axios.get(apiUrl).then((resp) => {
            const doctors = resp.data;
            console.log(doctors)
            setDoctors(doctors);
        });
    }, []);

    return (
        <form className="mt-10 p-12 bg-[#277ff280] rounded-3xl w-full">
            <div className="xl:flex gap-5">
                <div className="xl:mt-0 w-full">
                    <Select label="Врач" className="bg-background-white dark:bg-background-dark text-primary-white dark:text-primary-dark">
                        <Option>Попова Оксана Дмитриевна</Option>
                        <Option>Вараданян Георгий Артурович</Option>
                        <Option>Деренский Алексей Викторович </Option>
                    </Select>
                </div>
                <div className="mt-5 xl:mt-0 w-full">
                    <Select label="Услуга" className="bg-background-white dark:bg-background-dark text-primary-white dark:text-primary-dark">
                        <Option>Попова Оксана Дмитриевна</Option>
                        <Option>Вараданян Георгий Артурович</Option>
                        <Option>Деренский Алексей Викторович </Option>
                    </Select>
                </div>
            </div>
            <div className="xl:mt-5 xl:flex gap-5">
                <div className="mt-5 xl:mt-0 w-full">
                    <Select label="Месяц" className="bg-background-white dark:bg-background-dark text-primary-white dark:text-primary-dark">
                        <Option>Попова Оксана Дмитриевна</Option>
                        <Option>Вараданян Георгий Артурович</Option>
                        <Option>Деренский Алексей Викторович </Option>
                    </Select>
                </div>
                <div className="mt-5 xl:mt-0 w-full">
                    <Select label="День" className="bg-background-white dark:bg-background-dark text-primary-white dark:text-primary-dark">
                        <Option>Попова Оксана Дмитриевна</Option>
                        <Option>Вараданян Георгий Артурович</Option>
                        <Option>Деренский Алексей Викторович </Option>
                    </Select>
                </div>
                <div className="mt-5 xl:mt-0 w-full">
                    <Select label="Время" className="bg-background-white dark:bg-background-dark text-primary-white dark:text-primary-dark">
                        <Option>Попова Оксана Дмитриевна</Option>
                        <Option>Вараданян Георгий Артурович</Option>
                        <Option>Деренский Алексей Викторович </Option>
                    </Select>
                </div>
            </div>
            <div className="mt-6">
                <Textarea label="Message" className="bg-background-white dark:bg-background-dark text-primary-white dark:text-primary-dark" />
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