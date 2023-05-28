import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { selectAuth } from "../../../features/auth/authSlice";
import { Service } from "../../common/types";
import ServiceForm from "./ServiceForm";

function EditService() {
    const [service, setService] = useState<Service>();
    const { user } = useAppSelector(selectAuth);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const apiUrl = `/api/services/${id}`;
        const config = {
            headers: {
                Authorization: `Bearer ${user?.token}`,
            },
        };
        axios.get(apiUrl, config).then((resp) => {
            const service: Service = resp.data.data.service;
            setService(service);
        });
    }, []);

    const onSubmit = (e: any) => {
        e.preventDefault();

        const serviceData = {
            title: service?.title,
            description: service?.description,
            duration: service?.duration,
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
        axios.patch(`/api/services/${id}`, serviceData, config)
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

export default EditService;