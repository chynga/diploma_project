import axios from "axios";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../app/hooks";
import { selectAuth } from "../../../features/auth/authSlice";
import { Appointment } from "../../common/types";
import AppointmentsTable from "./AppointmentsTable";

function CanceledAppointments() {
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const { user } = useAppSelector(selectAuth);

    useEffect(() => {
        const apiUrl = "/api/appointments/statuses/cancelled";
        const config = {
            headers: {
                Authorization: `Bearer ${user?.token}`,
            },
        };

        axios.get(apiUrl, config).then((resp) => {
            const appointments: Appointment[] = resp.data.data.appointments;
            const sortedAppointments = appointments.sort((first, second) => (second.time ?? 0) - (first.time ?? 0));
            setAppointments(sortedAppointments);
        });
    }, [])

    return (
        <AppointmentsTable appointments={appointments} />
    );
}

export default CanceledAppointments;