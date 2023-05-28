import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { selectAuth } from "../../../features/auth/authSlice";
import NotFound from "../../common/NotFound";
import { CloseButton } from "../../common/SvgImages";
import { Service } from "../../common/types";
import { AddServiceCard, ServiceCard } from "./Cards";
import EditService from "./EditService";
import NewService from "./NewService";
import ViewService from "./ViewService";

function ServicesPage() {
    const location = useLocation();
    const [services, setServices] = useState<Service[]>();
    const { user } = useAppSelector(selectAuth);

    useEffect(() => {
        const apiUrl = "/api/services";
        const config = {
            headers: {
                Authorization: `Bearer ${user?.token}`,
            },
        };

        axios.get(apiUrl, config).then((resp) => {
            const services: Service[] = resp.data;
            setServices(services);
        });
    }, []);

    const navigate = useNavigate();

    return (
        <div className="px-10">
            <div className="flex flex-wrap justify-center gap-9">
                {services?.map(service => {
                    return <div key={service.id} onClick={() => {
                        navigate(`${service.id}`);
                        navigate(0);
                    }}>
                        <ServiceCard service={service} />
                    </div>
                })}
                <div onClick={() => navigate("new")}>
                    <AddServiceCard />
                </div>
            </div>

            {location.pathname !== "/admin/services" ?
                <div className="mt-10 bg-background-white dark:bg-background-dark p-10 shadow-lg rounded-lg">
                    <div className="flex justify-end">
                        <div onClick={() => navigate("")}>
                            <CloseButton />
                        </div>
                    </div>

                    <Routes>
                        <Route path="/:id" element={<ViewService />} />
                        <Route path="/:id/edit" element={<EditService />} />
                        <Route path="/new" element={<NewService />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
                :
                <></>
            }
        </div>
    );
}

export default ServicesPage;