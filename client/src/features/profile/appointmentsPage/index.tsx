import { useState } from "react";
import FutureAppointments from "./FutureAppointments";
import OldAppointments from "./OldAppointments";
import TabBar from "./TabBar";

export type Tab = 'futureAppointments' | 'oldAppointments'

function AppointmentsPage() {
    const [tabName, setTabName] = useState<Tab>('futureAppointments');

    let selectedTab: JSX.Element;
    switch (tabName) {
        case 'futureAppointments':
            selectedTab = <FutureAppointments />;
            break;
        case 'oldAppointments':
            selectedTab = <OldAppointments />;
            break;
    }

    return (
        <div>
            <TabBar tabName={tabName} setTabName={setTabName} />
            <div className="mt-5 h-[600px] overflow-auto">
                {selectedTab}
            </div>
        </div>
    );
}

export default AppointmentsPage;