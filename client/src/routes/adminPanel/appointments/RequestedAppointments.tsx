import axios from "axios";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../app/hooks";
import { selectAuth } from "../../../features/auth/authSlice";
import { Appointment } from "../../common/types";
import AppointmentsTable from "./AppointmentsTable";

function FutureAppointments() {
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const { user } = useAppSelector(selectAuth);

    useEffect(() => {
        const apiUrl = "/api/appointments/statuses/pending";
        const config = {
            headers: {
                Authorization: `Bearer ${user?.token}`,
            },
        };

        axios.get(apiUrl, config).then((resp) => {
            const appointments: Appointment[] = resp.data;
            setAppointments(appointments);
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <AppointmentsTable appointments={appointments} />
    );
}

export default FutureAppointments;