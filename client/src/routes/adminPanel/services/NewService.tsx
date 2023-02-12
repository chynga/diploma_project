import axios from "axios";
import { Dispatch, SetStateAction, useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { selectAuth } from "../../../features/auth/authSlice";

function NewService() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [approxDurationMin, setApproxDurationMin] = useState("");
    const [approxCost, setApproxCost] = useState("");
    const { user } = useAppSelector(selectAuth);
    const navigate = useNavigate();

    const onSubmit = (e: any) => {
        e.preventDefault();

        const serviceData = {
            title,
            description,
            approxDurationMin,
            approxCost,
        };

        const config = {
            headers: {
                Authorization: `Bearer ${user?.token}`,
            },
        };
        axios.post("/api/services", serviceData, config)
            .then(() => {
                navigate("/admin/services");
                navigate(0);
            })
            .catch(error => {
                console.log(error);
            })
    };

    return (
        <form onSubmit={onSubmit} className="flex flex-col items-center gap-4">
            <div>
                <label htmlFor="title" className="text-sm text-blue-gray-200">Название услуги</label>
                <input value={title} id="title" type="text" className="block w-full p-2 border-[1px] border-blue-gray-200 rounded-md"
                    onChange={(e: any) => setTitle(e.target.value)} />
            </div>
            <img src="/service-image.png" className="max-w-[220px]" />
            <div className="w-full">
                <label htmlFor="description" className="text-sm text-blue-gray-200">Описание услуги</label>
                <textarea value={description} id="description" className="block w-full p-2 border-[1px] border-blue-gray-200 rounded-md"
                    onChange={(e: any) => setDescription(e.target.value)} />
            </div>
            <div>
                <label htmlFor="price" className="text-sm text-blue-gray-200">Цена</label>
                <input value={approxCost} id="price" type="text" className="block w-full p-2 border-[1px] border-blue-gray-200 rounded-md"
                    onChange={(e: any) => setApproxCost(e.target.value)} />
            </div>
            <div>
                <label htmlFor="duration" className="text-sm text-blue-gray-200">Время (МИН)</label>
                <input value={approxDurationMin} id="duration" type="text" className="block w-full p-2 border-[1px] border-blue-gray-200 rounded-md"
                    onChange={(e: any) => setApproxDurationMin(e.target.value)} />
            </div>
            <h2 className="font-medium text-primary-white dark:text-primary-dark">До и после</h2>
            <div className="flex justify-center gap-10">
                <img src="/service-before.png" className="max-w-[220px]" />
                <img src="/service-after.png" className="max-w-[220px]" />
            </div>
            <button className="px-8 py-3 bg-blue-white dark:bg-blue-dark text-lg text-primary-dark font-semibold drop-shadow-lg rounded-full hover:cursor-pointer">
                Добавить
            </button>
        </form>
    );
}

export default NewService;