import { useEffect, useState } from "react";
import AppointmentsTable from "./AppointmentsTable";
import TabBar from "./TabBar";
import { Route, Routes, useLocation } from "react-router-dom";
import { Appointment } from "../../common/types";
import axios from "axios";
import { useAppSelector } from "../../../app/hooks";
import { selectAuth } from "../../../features/auth/authSlice";
import dayjs from "dayjs";
import NotFound from "../../common/NotFound";
import UserDetails from "./UserDetails";

function DoctorAppointmentsPage() {
    const location = useLocation();
    const [distributedAppointments, setDistributedAppointments] = useState<Appointment[][]>([]);

    const { user } = useAppSelector(selectAuth);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${user?.token}`,
            },
        };

        const status = location.pathname.includes("requested") ? "pending" : "success";

        axios.get(`/api/doctors/${user?.id}/appointments/${status}`, config)
            .then(res => {
                const appointments: Appointment[] = res.data;
                const sortedAppointments = appointments.sort((first, second) => dayjs(first.time ?? 0).unix() - dayjs(second.time ?? 1).unix());
                const distributedAppointments: Appointment[][] = []
                let day: string = "";

                sortedAppointments.map(appointment => {
                    if (day !== dayjs(appointment.time).format("DD/MM/YYYY")) {
                        day = dayjs(appointment.time).format("DD/MM/YYYY");
                        distributedAppointments.push([]);
                    }
                    distributedAppointments[distributedAppointments.length - 1].push(appointment);
                });

                setDistributedAppointments(distributedAppointments);
            })
            .catch(err => {
                console.log(err)
            })
    }, [location])

    return (
        <div className="p-10 shadow-lg rounded-lg">
            <div>
                <Routes>
                    <Route path="/clients/:id" element={<UserDetails />} />
                    <Route path="/requested" element={<>
                        <TabBar />
                        <div className="mt-5">
                            <AppointmentsTable distributedAppointments={distributedAppointments} />
                        </div>
                    </>} />
                    <Route path="/success" element={<>
                        <TabBar />
                        <div className="mt-5">
                            <AppointmentsTable distributedAppointments={distributedAppointments} />
                        </div>
                    </>} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </div>
    )
}

export default DoctorAppointmentsPage;