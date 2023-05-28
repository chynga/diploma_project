import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { selectAuth } from "../../../features/auth/authSlice";
import NotFound from "../../common/NotFound";
import { Appointment } from "../../common/types";
import FutureAppointments from "./FutureAppointments";
import PastAppointments from "./PastAppointments";
import TabBar from "./TabBar";

export type AppointmentsPageProps = {
    appointments: Appointment[]
}

function AppointmentsPage() {
    const [pastAppointments, setPastAppointments] = useState<Appointment[]>([]);
    const [futureAppointments, setFutureAppointments] = useState<Appointment[]>([]);
    const { user } = useAppSelector(selectAuth);

    useEffect(() => {
        const apiUrl = "/api/profile/appointments";
        const config = {
            headers: {
                Authorization: `Bearer ${user?.token}`,
            },
        };

        axios.get(apiUrl, config).then((resp) => {
            const appointments: Appointment[] = resp.data;
            const pastAppointments = appointments.filter(appointment => appointment.status === "success");
            const futureAppointments = appointments.filter(appointment => appointment.status === "pending");
            setPastAppointments(pastAppointments);
            setFutureAppointments(futureAppointments);
        });
    }, []);

    return (
        <div>
            <TabBar />
            <div className="mt-5">
                <Routes>
                    <Route path="/future" element={<FutureAppointments appointments={futureAppointments} />} />
                    <Route path="/past" element={<PastAppointments appointments={pastAppointments} />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </div>
    );
}

export default AppointmentsPage;