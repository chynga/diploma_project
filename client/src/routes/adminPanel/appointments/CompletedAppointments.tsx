import axios from "axios";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../app/hooks";
import { selectAuth } from "../../../features/auth/authSlice";
import { Appointment } from "../../common/types";
import AppointmentsTable from "./AppointmentsTable";

function CompletedAppointments() {
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const { user } = useAppSelector(selectAuth);

    useEffect(() => {
        const apiUrl = "http://localhost:8080/api/appointments/statuses/success";
        const config = {
            headers: {
                Authorization: `Bearer ${user?.token}`,
            },
        };

        axios.get(apiUrl, config).then((resp) => {
            const appointments: Appointment[] = resp.data;
            setAppointments(appointments);
        }).catch(error => {
            console.log(error)
        });
    }, [])

    return (
        <AppointmentsTable appointments={appointments} includeCost />
    );
}

export default CompletedAppointments;