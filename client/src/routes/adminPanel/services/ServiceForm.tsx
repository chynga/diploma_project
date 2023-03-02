import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import { storage } from "../../../firebase";
import { EditIcon } from "../../common/SvgImages";
import { Service } from "../../common/types";
import PictureUpload from "../../common/PictureUpload";

type ServiceFormProps = {
    onSubmit: (e: any) => void
    service?: Service
    setService: Dispatch<SetStateAction<Service | undefined>>
}

function ServiceForm({ onSubmit, service, setService }: ServiceFormProps) {
    // const [title, setTitle] = useState<string>();
    // const [description, setDescription] = useState<string>();
    // const [approxDurationMin, setApproxDurationMin] = useState<string>();
    // const [approxCost, setApproxCost] = useState<string>();
    // const [mainPicture, setMainPicture] = useState<string>();
    // const [beforePicture, setBeforePicture] = useState<string>();
    // const [afterPicture, setAfterPicture] = useState<string>();

    const inputMainPicture = useRef<HTMLInputElement | null>(null);
    const inputBeforePicture = useRef<HTMLInputElement | null>(null);
    const inputAfterPicture = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        console.log(service)
    }, [service])

    const uploadFile = (imageUpload: File, field: string) => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `services/main/${imageUpload.name + uuid()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setField(field, url);
            });
        });
    };

    const setField = (field: string, value: string) => {
        setService((prev: any) => ({
            ...prev,
            [field]: value
        }))
    }

    return (
        <form onSubmit={onSubmit} className="flex flex-col items-center gap-4">
            <div>
                <label htmlFor="title" className="text-sm text-blue-gray-200">Название услуги</label>
                <input value={service?.title} id="title" type="text" className="block w-full p-2 border-[1px] border-blue-gray-200 rounded-md"
                    onChange={(e: any) => setField("title", e.target.value)} />
            </div>

            <div className="flex justify-center">
                <div className="group relative w-[220px] h-[200px] flex justify-center items-center hover:cursor-pointer"
                    onClick={() => inputMainPicture.current?.click()}>
                    <PictureUpload imageUrl={service?.imgMainUrl} className="absolute w-[220px] h-[200px]" editing />
                    <EditIcon className="absolute hidden group-hover:block" />
                </div>

                <input type='file' id='file' ref={inputMainPicture} style={{ display: 'none' }}
                    onChange={(event: any) => {
                        uploadFile(event.target.files[0], "imgMainUrl");
                    }} />
            </div>

            <div className="w-full">
                <label htmlFor="description" className="text-sm text-blue-gray-200">Описание услуги</label>
                <textarea value={service?.description} id="description" className="block w-full p-2 border-[1px] border-blue-gray-200 rounded-md"
                    onChange={(e: any) => setField("description", e.target.value)} />
            </div>
            <div>
                <label htmlFor="price" className="text-sm text-blue-gray-200">Цена</label>
                <input value={service?.approxCost} id="price" type="text" className="block w-full p-2 border-[1px] border-blue-gray-200 rounded-md"
                    onChange={(e: any) => setField("approxCost", e.target.value)} />
            </div>
            <div>
                <label htmlFor="duration" className="text-sm text-blue-gray-200">Время (МИН)</label>
                <input value={service?.approxDurationMin} id="duration" type="text" className="block w-full p-2 border-[1px] border-blue-gray-200 rounded-md"
                    onChange={(e: any) => setField("approxDurationMin", e.target.value)} />
            </div>
            <h2 className="font-medium text-primary-white dark:text-primary-dark">До и после</h2>
            <div className="flex justify-center gap-10">
                <div className="flex justify-center">
                    <div className="group relative w-[200px] h-[160px] flex justify-center items-center hover:cursor-pointer"
                        onClick={() => inputBeforePicture.current?.click()}>
                        <PictureUpload imageUrl={service?.imgBeforeUrl} className="absolute w-[200px] h-[160px]" editing />
                        <EditIcon className="absolute hidden group-hover:block" />
                    </div>

                    <input type='file' id='file' ref={inputBeforePicture} style={{ display: 'none' }}
                        onChange={(event: any) => {
                            uploadFile(event.target.files[0], "imgBeforeUrl");
                        }} />
                </div>
                <div className="flex justify-center">
                    <div className="group relative w-[200px] h-[160px] flex justify-center items-center hover:cursor-pointer"
                        onClick={() => inputAfterPicture.current?.click()}>
                        <PictureUpload imageUrl={service?.imgAfterUrl} className="absolute w-[200px] h-[160px]" editing />
                        <EditIcon className="absolute hidden group-hover:block" />
                    </div>

                    <input type='file' id='file' ref={inputAfterPicture} style={{ display: 'none' }}
                        onChange={(event: any) => {
                            uploadFile(event.target.files[0], "imgAfterUrl");
                        }} />
                </div>
            </div>
            <button className="px-8 py-3 bg-blue-white dark:bg-blue-dark text-lg text-primary-dark font-semibold drop-shadow-lg rounded-full hover:cursor-pointer">
                Редактировать
            </button>
        </form>
    );
}

export default ServiceForm;