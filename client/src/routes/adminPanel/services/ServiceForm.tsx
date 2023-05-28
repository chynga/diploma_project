import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import { storage } from "../../../firebase";
import { CloseButton, EditIcon } from "../../common/SvgImages";
import { Service, SubService } from "../../common/types";
import PictureUpload from "../../common/PictureUpload";

type ServiceFormProps = {
    onSubmit: (e: any) => void
    service?: Service
    setService: Dispatch<SetStateAction<Service | undefined>>
    buttonText: string
}

function ServiceForm({ onSubmit, service, setService, buttonText }: ServiceFormProps) {
    const inputMainPicture = useRef<HTMLInputElement | null>(null);
    const inputBeforePicture = useRef<HTMLInputElement | null>(null);
    const inputAfterPicture = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (!service?.subServices) {
            setService((prev: any) => {
                return {
                    ...prev,
                    subServices: []
                }
            });
        }
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

    const onSubServiceTitleChange = (e: any, index: number) => {
        const newSubServices = [...service?.subServices ?? []];
        newSubServices[index].title = e.target.value

        setService((prev: any) => {
            return {
                ...prev,
                subServices: newSubServices
            }
        });
    }

    const onSubServicePriceChange = (e: any, index: number) => {
        const newSubServices = [...service?.subServices ?? []];
        newSubServices[index].price = e.target.value

        setService((prev: any) => {
            return {
                ...prev,
                subServices: newSubServices
            }
        });
    }

    const onAddSubService = () => {
        setService((prev: any) => {
            return {
                ...prev,
                subServices: [
                    ...prev.subServices,
                    {
                        title: "",
                        price: ""
                    }
                ]
            }
        });
    }

    const onRemoveSubService = (index: number) => {
        const newSubServices = [...service?.subServices ?? []];
        newSubServices.splice(index, 1);
        console.log(newSubServices)
        setService((prev: any) => {
            return {
                ...prev,
                subServices: newSubServices
            }
        });
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
                <input value={service?.cost} id="price" type="text" className="block w-full p-2 border-[1px] border-blue-gray-200 rounded-md"
                    onChange={(e: any) => setField("cost", e.target.value)} />
            </div>
            <div>
                <label htmlFor="duration" className="text-sm text-blue-gray-200">Время (МИН)</label>
                <input value={service?.duration} id="duration" type="text" className="block w-full p-2 border-[1px] border-blue-gray-200 rounded-md"
                    onChange={(e: any) => setField("duration", e.target.value)} />
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
            <h2 className="font-medium text-primary-white dark:text-primary-dark">Подуслуги</h2>

            {service?.subServices ?
                <div className="mt-3">
                    {service?.subServices.map((subService, index) => {
                        return (
                            <div key={index} className="flex gap-3">
                                {/* <input value={subService.title} onChange={(e: any) => onSubServiceTitleChange(e, index)} type="text" className="block w-full p-2 border-[1px] border-blue-gray-200 rounded-md" /> */}

                                <div className="w-[400px]">
                                    <label className="text-sm text-blue-gray-200">Название под-услуги</label>
                                    <input value={subService.title} onChange={(e: any) => onSubServiceTitleChange(e, index)} type="text" className="block w-full p-2 border-[1px] border-blue-gray-200 rounded-md" />
                                </div>

                                {/* <input value={subService.price} onChange={(e: any) => onSubServicePriceChange(e, index)} type="text" className="block w-full p-2 border-[1px] border-blue-gray-200 rounded-md" /> */}

                                <div>
                                    <label className="text-sm text-blue-gray-200">Цена под-услуги</label>
                                    <input value={subService.price} onChange={(e: any) => onSubServicePriceChange(e, index)} type="text" className="block w-full p-2 border-[1px] border-blue-gray-200 rounded-md" />
                                </div>
                                <div className="mt-6"
                                    onClick={() => onRemoveSubService(index)}>
                                    <CloseButton />
                                </div>
                            </div>
                        )
                    })}
                </div>
                :
                <></>
            }
            <div className="mt-3 inline-block px-3 py-1 bg-blue-white dark:bg-blue-dark text-primary-dark font-semibold rounded-full hover:cursor-pointer"
                onClick={onAddSubService}>
                Добавить
            </div>

            <button className="px-8 py-3 bg-blue-white dark:bg-blue-dark text-lg text-primary-dark font-semibold drop-shadow-lg rounded-full hover:cursor-pointer">
                {buttonText}
            </button>
        </form>
    );
}

export default ServiceForm;