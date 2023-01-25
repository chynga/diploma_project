import { useState } from "react";
import TabBar from "./TabBar";

export type Tab = 'futureAppointments' | 'oldAppointments'

function AppointmentsPage() {
    const [tabName, setTabName] = useState<Tab>('futureAppointments');

    return (
        <div>
            <TabBar tabName={tabName} setTabName={setTabName} />
            <div>Appointments</div>
        </div>
    );
}

export default AppointmentsPage;