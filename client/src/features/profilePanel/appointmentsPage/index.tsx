import { useState } from "react";
import { useLocation } from "react-router-dom";
import NotFound from "../../common/NotFound";
import FutureAppointments from "./FutureAppointments";
import PastAppointments from "./PastAppointments";
import TabBar from "./TabBar";

function AppointmentsPage() {
    const location = useLocation();
    let selectedTab: JSX.Element;

    if (location.pathname.includes("/appointments/future")) {
        selectedTab = <FutureAppointments />;
    } else if (location.pathname.includes("/appointments/past")) {
        selectedTab = <PastAppointments />;
    } else {
        selectedTab = <NotFound />;
    }

    return (
        <div>
            <TabBar />

            <div className="mt-5">
                {selectedTab}
            </div>
        </div>
    );
}

export default AppointmentsPage;