import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { selectAuth } from "../../../features/auth/authSlice";
import ServiceForm from "./ServiceForm";
import { Service } from "../../common/types";

function NewService() {
    const [service, setService] = useState<Service>();
    const { user } = useAppSelector(selectAuth);
    const navigate = useNavigate();

    const onSubmit = (e: any) => {
        e.preventDefault();

        const serviceData = {
            title: service?.title,
            description: service?.description,
            duration: Number(service?.duration),
            cost: service?.cost,
            imgMainUrl: service?.imgMainUrl,
            imgBeforeUrl: service?.imgBeforeUrl,
            imgAfterUrl: service?.imgAfterUrl,
        };

        const config = {
            headers: {
                Authorization: `Bearer ${user?.token}`,
            },
        };
        axios.post(`/api/services/`, serviceData, config)
            .then(() => {
                navigate("/admin/services");
                navigate(0);
            })
            .catch(error => {
                console.log(error);
            })
    };

    return (
        <ServiceForm onSubmit={onSubmit} service={service} setService={setService} />
    );
}

export default NewService;