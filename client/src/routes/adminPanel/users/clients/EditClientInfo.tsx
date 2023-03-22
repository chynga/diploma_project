import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../../../app/hooks";
import { selectAuth } from "../../../../features/auth/authSlice";
import { ProfilePicture } from "../../../common/SvgImages";
import { TextBase, TextLg } from "../../../common/TextElements";
import { Client } from "../../../common/types";

function EditClientInfo() {
    const [client, setClient] = useState<Client>();
    const { user } = useAppSelector(selectAuth);
    const { id } = useParams();
    const [allergy, setAllergy] = useState<string>('');
    const [prescribedMedications, setPrescribedMedications] = useState<string>('');

    const navigate = useNavigate();

    const onAllergyChange = (e: any) => {
        setAllergy(e.target.value);
    }

    const onPrescribedMedicationsChange = (e: any) => {
        setPrescribedMedications(e.target.value);
    }

    useEffect(() => {
        if (id) {
            const apiUrl = `/api/users/clients/${id}`;
            const config = {
                headers: {
                    Authorization: `Bearer ${user?.token}`,
                },
            };

            axios.get(apiUrl, config).then((resp) => {
                const client: Client = resp.data;
                setAllergy(client.allergy);
                setPrescribedMedications(client.prescribedMedications);
                setClient(client);
            }).catch(error => {
                console.log(error)
            });
        }
    }, [id])

    const onSubmit = (e: any) => {
        e.preventDefault();

        const userData = {
            allergy,
            prescribedMedications,
        };

        const config = {
            headers: {
                Authorization: `Bearer ${user?.token}`,
            },
        };
        axios.patch(`/api/users/clients/${client?.id}/healthInfo`, userData, config)
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                navigate(-1);
            });
    }

    return (
        <div>
            {client ?
                <>
                    <div className="pl-8 py-3 shadow-[0px_2px_5px_0_rgba(0,0,0,0.25)] rounded-t-lg">
                        <div className="p-1 flex items-center gap-1">
                            <ProfilePicture imageUrl={client?.profileImageUrl} className="w-[50px] h-[50px]" />
                            <TextLg className="font-medium">{client?.fullName}</TextLg>
                        </div>
                    </div>
                    <form className="pl-8 py-5 flex flex-col gap-3"
                        onSubmit={onSubmit}>
                        <div>
                            <TextBase>{client?.phone}</TextBase>
                        </div>
                        <div>
                            <TextBase>{client?.email}</TextBase>
                        </div>
                        <div>
                            <TextBase className="font-bold">Медикаменты на которые есть аллергия</TextBase>
                        </div>
                        <div>
                            <textarea value={allergy} onChange={onAllergyChange} rows={4} className="mt-5 px-6 py-2 bg:background-white dark:bg-[#797979] text-primary-white dark:text-primary-dark border-[1px] border-[#353535] dark:border-none rounded-md w-full">

                            </textarea>
                        </div>
                        <div>
                            <TextBase className="font-bold">Прописанные медикаменты</TextBase>
                        </div>
                        <div>
                            <textarea value={prescribedMedications} onChange={onPrescribedMedicationsChange} rows={4} className="mt-5 px-6 py-2 bg:background-white dark:bg-[#797979] text-primary-white dark:text-primary-dark border-[1px] border-[#353535] dark:border-none rounded-md w-full">

                            </textarea>
                        </div>

                        <div>
                            <button className="inline-block px-8 py-3 bg-blue-white dark:bg-blue-dark text-lg text-primary-dark font-semibold drop-shadow-lg rounded-full">
                                Изменить
                            </button>
                        </div>
                    </form>
                </>
                :
                <></>
            }
        </div>
    );
}

export default EditClientInfo;