import axios from "axios";
import { useEffect, useState } from "react";
import { DoctorsProps } from ".";
import { useAppSelector } from "../../../app/hooks";
import { selectAuth } from "../../../features/auth/authSlice";

function DoctorInfo({ selectedDoctor }: DoctorsProps) {
    const [available, setAvailable] = useState(selectedDoctor?.available);
    const [about, setAbout] = useState(selectedDoctor?.about);
    const { user } = useAppSelector(selectAuth);

    const onChange = (e: any) => {
        setAbout(e.target.value);
    }

    const onSubmit = (e: any) => {
        e.preventDefault();

        const doctorInfo = {
            available,
            about,
        }

        const apiUrl = "/api/users/doctors/" + selectedDoctor?.id;
        const config = {
            headers: {
                Authorization: `Bearer ${user?.token}`,
            },
        };

        axios.patch(apiUrl, doctorInfo, config).catch(error => {
            console.log(error)
        });
    }

    if (!selectedDoctor) {
        return <div></div>
    }

    return (
        <form onSubmit={onSubmit}>
            <h1 className="font-semibold">{selectedDoctor?.fullName}</h1>
            {/* <input type="checkbox" checked={available} onChange={() => setAvailable(!available)} /> */}
            <div className="flex items-center">
                <input id="available" type="checkbox" checked={available} onChange={() => setAvailable(!available)}
                    className="w-4 h-4  border-blue-gray-200 rounded" />
                <label htmlFor="available" className="ml-1 text-sm text-blue-gray-200">Показать клиентам</label>
            </div>
            <textarea value={about} onChange={onChange} placeholder="О враче" cols={30} rows={7} className="mt-5 px-6 py-2 bg:background-white dark:bg-[#797979] text-primary-white dark:text-primary-dark border-[1px] border-[#353535] dark:border-none rounded-md w-full">
            </textarea>

            <button className="mt-6 px-8 py-3 inline-block bg-blue-white dark:bg-blue-dark text-lg text-primary-dark font-semibold drop-shadow-lg rounded-full">
                Сохранить
            </button>
        </form>
    )
}

export default DoctorInfo;