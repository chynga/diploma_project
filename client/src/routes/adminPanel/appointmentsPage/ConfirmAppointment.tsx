import { Select, Option, Input } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { TextBase } from "../../common/TextElements";
import { useState } from "react";
import DatePicker from "../../common/DatePicker";

function ConfirmAppointment() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate("/admin/appointments/requested")
    }

    return (
        <div>
            <div className="flex gap-3 hover:cursor-pointer hover:text-blue-white hover:dark:text-blue-dark"
                onClick={goBack}>
                <ArrowBack />
                Назад
            </div>
            <form>
                <div className="mt-3">
                    Пациент: Кумаргазы Бекзат, +7-707-810-90-27, camomilell@mail.ru <br />
                    Время: 10.01.2022 15:00 <br />
                    Услуга: Чистка зубов <br />
                    Врач: Нысанбаева Айым
                </div>
                <div className="mt-3 flex flex-col gap-6">
                    <div className="w-[200px]">
                        <Select label="Врач" className="bg-background-white dark:bg-background-dark text-primary-white dark:text-primary-dark">
                            <Option>Попова Оксана Дмитриевна</Option>
                            <Option>Вараданян Георгий Артурович</Option>
                            <Option>Деренский Алексей Викторович </Option>
                        </Select>
                    </div>
                    <div className="w-[200px]">
                        <Select label="Услуги" className="bg-background-white dark:bg-background-dark text-primary-white dark:text-primary-dark">
                            <Option>Попова Оксана Дмитриевна</Option>
                            <Option>Вараданян Георгий Артурович</Option>
                            <Option>Деренский Алексей Викторович </Option>
                        </Select>
                    </div>
                    <div className="w-[200px]">
                        <div className="text-sm text-blue-gray-200">Дата</div>
                        <DatePicker />
                    </div>
                    <div className="flex items-center gap-5">
                        <div>
                            <div className="text-sm text-blue-gray-200">Начало</div>
                            <div className="flex items-center">
                                <input type="text" className="w-[50px] p-2 border-[1px] border-blue-gray-200 rounded-md" />
                                :
                                <input type="text" className="w-[50px] p-2 border-[1px] border-blue-gray-200 rounded-md" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="duration" className="text-sm text-blue-gray-200">Продолжительность (МИН)</label>
                            <input id="duration" type="text" className="block w-full p-2 border-[1px] border-blue-gray-200 rounded-md" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button className="mt-6 px-8 py-3 inline-block bg-blue-white dark:bg-blue-dark text-lg text-primary-dark font-semibold drop-shadow-lg rounded-full">
                        Подтвердить
                    </button>
                </div>
            </form>
        </div>
    );
}

function ArrowBack() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5" stroke="#353535" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 19L5 12L12 5" stroke="#353535" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default ConfirmAppointment;