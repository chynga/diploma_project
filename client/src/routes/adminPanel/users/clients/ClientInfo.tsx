import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../../../app/hooks";
import { selectAuth } from "../../../../features/auth/authSlice";
import { ProfilePicture, TrashBin } from "../../../common/SvgImages";
import { TextBase, TextLg } from "../../../common/TextElements";
import { Client } from "../../../common/types";
import { DeleteButton, DeleteForm } from "../../../common/DeleteConfirmation";

function ClientInfo() {
    const [client, setClient] = useState<Client>();
    const { user } = useAppSelector(selectAuth);
    const { id } = useParams();

    const [showDeleteForm, setShowDeleteForm] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            const apiUrl = `/api/clients/${id}`;
            const config = {
                headers: {
                    Authorization: `Bearer ${user?.token}`,
                },
            };

            axios.get(apiUrl, config).then((resp) => {
                const client: Client = resp.data;
                setClient(client);
            }).catch(error => {
                console.log(error)
            });
        }
    }, [id])

    const deleteClient = () => {
        const config = {
            headers: {
                Authorization: `Bearer ${user?.token}`,
            },
        };

        axios.delete(`/api/clients/${id}`, config)
            .then(_ => {
                navigate("/admin/clients");
                navigate(0);
            })
            .catch(err => {
                console.log(err)
            })
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
                    <div className="pl-8 py-5 flex flex-col gap-3">
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
                            <TextBase>{client?.allergy}</TextBase>
                        </div>
                        <div>
                            <TextBase className="font-bold">Прописанные медикаменты</TextBase>
                        </div>
                        <div>
                            <TextBase>{client?.prescribedMedications}</TextBase>
                        </div>

                        <div className="flex gap-5">
                            {/* <div onClick={deleteClient} className="px-8 py-3 flex items-center gap-3 bg-[#FF4646] dark:bg-[#B67474] text-lg text-primary-dark font-semibold drop-shadow-lg rounded-full hover:cursor-pointer">
                                <TrashBin className="stroke-white" />
                                Удалить
                            </div> */}
                            <DeleteButton setShow={setShowDeleteForm} />
                            <Link to={"edit"} className="inline-block px-8 py-3 bg-blue-white dark:bg-blue-dark text-lg text-primary-dark font-semibold drop-shadow-lg rounded-full hover:cursor-pointer">
                                Изменить
                            </Link>
                        </div>
                    </div>
                    <DeleteForm setShow={setShowDeleteForm} title={"Вы действительно хотите удалить сотрудника?"} show={showDeleteForm} onDelete={deleteClient} />
                </>
                :
                <></>
            }
        </div>
    );
}

export default ClientInfo;