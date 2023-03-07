import { DatePicker } from "antd";
import axios from "axios";
import dayjs from "dayjs";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { DoctorsProps } from ".";
import { useAppSelector } from "../../../../app/hooks";
import { selectAuth } from "../../../../features/auth/authSlice";
import { storage } from "../../../../firebase";
import { CloseButton } from "../../../common/SvgImages";
import { dateFormat } from "../../../common/types";

function DoctorInfo({ selectedDoctor }: DoctorsProps) {
    const [available, setAvailable] = useState<boolean>();
    const [about, setAbout] = useState<string>();
    const [imageUrl, setImageUrl] = useState<string>();
    const [startedWorkingFrom, setStartedWorkingFrom] = useState<string>();
    const [institutions, setInstitutions] = useState<string[]>([]);
    const [certificates, setCertificates] = useState<string[]>([]);
    const [specialties, setSpecialties] = useState<string[]>([]);

    const navigate = useNavigate();
    const { user } = useAppSelector(selectAuth);

    useEffect(() => {
        setAvailable(selectedDoctor?.available);
        setAbout(selectedDoctor?.about ? selectedDoctor?.about : undefined);
        setImageUrl(selectedDoctor?.imageUrl ? selectedDoctor?.imageUrl : undefined);
        setStartedWorkingFrom(selectedDoctor?.startedWorkingFrom ? dayjs(selectedDoctor.startedWorkingFrom).format(dateFormat) : dayjs().format(dateFormat));
        setInstitutions(selectedDoctor?.institutions ? selectedDoctor?.institutions : []);
        setCertificates(selectedDoctor?.certificates ? selectedDoctor?.certificates : []);
        setSpecialties(selectedDoctor?.specialties ? selectedDoctor?.specialties : []);
    }, [selectedDoctor])

    const onChange = (e: any) => {
        setAbout(e.target.value);
    }

    const onDateChange = (date: any, dateString: any) => {
        setStartedWorkingFrom(dateString);
    }

    const uploadDoctorImage = (imageUpload: File) => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `doctors/${imageUpload.name + uuid()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageUrl(url);
            });
        });
    };

    const uploadCertificate = (imageUpload: File) => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `certificates/${imageUpload.name + uuid()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setCertificates((prev: any) => ([
                    ...prev,
                    url,
                ]));
            });
        });
    };

    const onSubmit = (e: any) => {
        e.preventDefault();

        const doctorInfo = {
            available,
            about,
            imageUrl,
            startedWorkingFrom: dayjs(startedWorkingFrom, dateFormat),
            certificates,
            institutions,
            specialties,
        }

        const apiUrl = "/api/users/doctors/" + selectedDoctor?.id;
        const config = {
            headers: {
                Authorization: `Bearer ${user?.token}`,
            },
        };

        axios.patch(apiUrl, doctorInfo, config)
            .then(_ => {
                navigate(0)
            })
            .catch(error => {
                console.log(error)
            });
    }

    if (!selectedDoctor) {
        return <div></div>
    }

    const onInstitutionChange = (e: any, index: number) => {
        const newInstitutions = [...institutions];
        newInstitutions[index] = e.target.value;
        setInstitutions(newInstitutions);
    }

    const onAddInstituion = () => {
        setInstitutions([...institutions, ""]);
    }

    const onRemoveInstitution = (index: number) => {
        const newInstitutions = [...institutions];
        newInstitutions.splice(index, 1);
        console.log(newInstitutions)
        setInstitutions(newInstitutions);
    }

    const onChangeSpecialty = (e: any, index: number) => {
        const newSpecialties = [...specialties];
        newSpecialties[index] = e.target.value;
        setSpecialties(newSpecialties);
    }

    const onAddSpecialty = () => {
        setSpecialties([...specialties, ""]);
    }

    const onRemoveSpecialty = (index: number) => {
        const newSpecialties = [...specialties];
        newSpecialties.splice(index, 1);
        console.log(newSpecialties)
        setSpecialties(newSpecialties);
    }

    const removeCertificate = (url: string) => {
        const updatedCertificates = certificates.filter(certificate => certificate !== url);
        setCertificates(updatedCertificates);
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
                    uploadDoctorImage(event.target.files[0]);
                }}
            />

            <div className="flex items-center">
                <input id="available" type="checkbox" checked={available} onChange={() => setAvailable(!available)}
                    className="w-4 h-4  border-blue-gray-200 rounded" />
                <label htmlFor="available" className="ml-1 text-sm text-blue-gray-200">Показать клиентам</label>
            </div>
            <textarea value={about} onChange={onChange} placeholder="О враче" cols={30} rows={7} className="mt-5 px-6 py-2 bg:background-white dark:bg-[#797979] text-primary-white dark:text-primary-dark border-[1px] border-[#353535] dark:border-none rounded-md w-full">
            </textarea>

            <label htmlFor="date" className="text-sm text-blue-gray-200">Работает с:</label>
            <DatePicker id="date" className="w-full py-2" value={dayjs(startedWorkingFrom, dateFormat)} onChange={onDateChange} format={dateFormat} />
            <div>
                Образование
            </div>
            {institutions ?
                <div className="mt-3">
                    {institutions.map((institution, index) => {
                        return (
                            <div key={index} className="w-[300px] flex gap-3">
                                <input value={institution} onChange={(e: any) => onInstitutionChange(e, index)} id="institution" type="text" className="block w-full p-2 border-[1px] border-blue-gray-200 rounded-md" />
                                <div onClick={() => onRemoveInstitution(index)}>
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
                onClick={onAddInstituion}>
                Добавить
            </div>
            <div>
                Специальности
            </div>
            {specialties ?
                <div className="mt-3">
                    {specialties.map((specialty, index) => {
                        return (
                            <div key={index} className="w-[300px] flex gap-3">
                                <input value={specialty} onChange={(e: any) => onChangeSpecialty(e, index)} id="specialty" type="text" className="block w-full p-2 border-[1px] border-blue-gray-200 rounded-md" />
                                <div onClick={() => onRemoveSpecialty(index)}>
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
                onClick={onAddSpecialty}>
                Добавить
            </div>
            <div>
                Сертификаты
            </div>
            <div className="flex flex-col gap-5">
                {certificates.map(url => {
                    return (
                        <div key={url} className="relative w-[300px]">
                            <img src={url} alt="" className="w-[300px] h-[211px]" />
                            <div className="z-50 absolute right-0 top-0" onClick={() => removeCertificate(url)}>
                                <CloseButton />
                            </div>
                        </div>
                    )
                })}
            </div>

            <input
                type="file"
                onChange={(event: any) => {
                    uploadCertificate(event.target.files[0]);
                }}
            />

            <button className="mt-6 px-8 py-3 inline-block bg-blue-white dark:bg-blue-dark text-lg text-primary-dark font-semibold drop-shadow-lg rounded-full">
                Сохранить
            </button>
        </form>
    )
}

export default DoctorInfo;