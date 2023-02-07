import { useLocation } from "react-router-dom";
import NotFound from "../../common/NotFound";
import RequestedAppointments from "./RequestedAppointments";
import ApprovedAppointments from "./ApprovedAppointments";
import TabBar from "./TabBar";
import CompletedAppointments from "./CompletedAppointments";
import CanceledAppointments from "./CanceledAppointments";
import ConfirmAppointment from "./ConfirmAppointment";

function AppointmentsPage() {
    const location = useLocation();
    let selectedTab: JSX.Element;
    const appointmentRegex = new RegExp(/^\/admin\/appointments\/requested\/[0-9]+$/);

    if (location.pathname.includes("/appointments/requested")) {
        selectedTab = <RequestedAppointments />;
    } else if (location.pathname.includes("/appointments/approved")) {
        selectedTab = <ApprovedAppointments />;
    } else if (location.pathname.includes("/appointments/completed")) {
        selectedTab = <CompletedAppointments />;
    } else if (location.pathname.includes("/appointments/canceled")) {
        selectedTab = <CanceledAppointments />;
    } else {
        selectedTab = <NotFound />;
    }

    return (
        <div>
            {appointmentRegex.test(location.pathname) ?
                <ConfirmAppointment /> :
                <div>
                    <TabBar />

                    <div className="mt-5">
                        {selectedTab}
                    </div>
                </div>
            }
        </div>
    );
}

export default AppointmentsPage;