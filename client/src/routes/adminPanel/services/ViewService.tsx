import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { selectAuth } from "../../../features/auth/authSlice";
import NotFound from "../../common/NotFound";
import { TrashBin } from "../../common/SvgImages";
import { Service } from "../../common/types";
import PictureUpload from "../../common/PictureUpload";
import { DeleteButton, DeleteForm } from "../../common/DeleteConfirmation";

function ViewService() {
    const [service, setService] = useState<Service>();
    const { id } = useParams();
    const { user } = useAppSelector(selectAuth);
    const navigate = useNavigate();

    const [showDeleteForm, setShowDeleteForm] = useState(false);

    useEffect(() => {
        const apiUrl = `/api/services/${id}`;
        const config = {
            headers: {
                Authorization: `Bearer ${user?.token}`,
            },
        };
        axios.get(apiUrl, config).then((resp) => {
            const service: Service = resp.data;
            setService(service);
        });
    }, []);

    const deleteService = () => {
        const apiUrl = `/api/services/${id}`;
        const config = {
            headers: {
                Authorization: `Bearer ${user?.token}`,
            },
        };
        axios.delete(apiUrl, config).then(() => {
            navigate("/admin/services");
            navigate(0);
        });
    }

    if (service?.id === null) {
        return <NotFound />
    }

    return (
        <>
            <div className="flex flex-col items-center gap-4">
                <h2 className="font-medium text-primary-white dark:text-primary-dark">{service?.title}</h2>
                <PictureUpload imageUrl={service?.imgMainUrl} className={"w-[220px] h-[200px]"} />
                <h2 className="font-medium text-primary-white dark:text-primary-dark">Описание услуги</h2>
                <p className="text-sm text-primary-white dark:text-primary-dark">
                    {service?.description}
                </p>
                <h2 className="font-medium text-primary-white dark:text-primary-dark">Цена</h2>
                <p className="text-sm font-medium text-primary-white dark:text-primary-dark">{service?.cost}</p>
                <h2 className="font-medium text-primary-white dark:text-primary-dark">Время</h2>
                <p className="text-sm font-medium text-primary-white dark:text-primary-dark">{service?.duration?.toString()} МИН</p>
                <h2 className="font-medium text-primary-white dark:text-primary-dark">До и после</h2>
                <div className="flex justify-center gap-10">
                    <PictureUpload imageUrl={service?.imgBeforeUrl} className={"w-[200px] h-[160px]"} />
                    <PictureUpload imageUrl={service?.imgAfterUrl} className={"w-[200px] h-[160px]"} />
                </div>

                {service ?
                    <h2 className="font-medium text-primary-white dark:text-primary-dark">Под-услуги</h2>
                    :
                    <></>
                }
                <div className="flex flex-col items-start gap-4">
                    {service?.subServices?.map(subService => {
                        return (
                            <div>
                                <p className="text-sm font-medium text-primary-white dark:text-primary-dark">Название: {subService.title}</p>
                                <p className="text-sm font-medium text-primary-white dark:text-primary-dark">Цена: {subService.price}</p>
                            </div>
                        )
                    })}
                </div>

                <DeleteButton setShow={setShowDeleteForm} />
                <Link to={"edit"} className="px-8 py-3 bg-blue-white dark:bg-blue-dark text-lg text-primary-dark font-semibold drop-shadow-lg rounded-full hover:cursor-pointer">
                    Редактировать
                </Link>
            </div>
            <DeleteForm setShow={setShowDeleteForm} title={"Вы действительно хотите удалить услугу?"} show={showDeleteForm} onDelete={deleteService} />
        </>
    );
}

export default ViewService;