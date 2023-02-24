import axios from "axios";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { DoctorsProps } from ".";
import { useAppSelector } from "../../../../app/hooks";
import { selectAuth } from "../../../../features/auth/authSlice";
import { storage } from "../../../../firebase";

function DoctorInfo({ selectedDoctor }: DoctorsProps) {
    const [available, setAvailable] = useState<boolean>();
    const [about, setAbout] = useState<string>();
    const { user } = useAppSelector(selectAuth);
    const [imageUrl, setImageUrl] = useState<string>();

    useEffect(() => {
        console.log(selectedDoctor)
        setAvailable(selectedDoctor?.available);
        setAbout(selectedDoctor?.about ? selectedDoctor?.about : undefined);
        setImageUrl(selectedDoctor?.imageUrl ? selectedDoctor?.imageUrl : undefined);
    }, [selectedDoctor])

    const onChange = (e: any) => {
        setAbout(e.target.value);
    }

    const uploadFile = (imageUpload: File) => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `doctors/${imageUpload.name + uuid()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageUrl(url);
            });
        });
    };

    const onSubmit = (e: any) => {
        e.preventDefault();

        const doctorInfo = {
            available,
            about,
            imageUrl,
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
            <div>
                {imageUrl ?
                    <img src={imageUrl} alt="" className="h-[300px]" />
                    :
                    <div className="h-[300px] w-[200px] flex justify-center items-center">
                        <p>
                            Загрузите фото
                        </p>
                    </div>
                }
            </div>
            <input
                type="file"
                onChange={(event: any) => {
                    uploadFile(event.target.files[0]);
                }}
            />

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