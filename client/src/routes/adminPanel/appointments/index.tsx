import { Route, Routes, useLocation } from "react-router-dom";
import NotFound from "../../common/NotFound";
import RequestedAppointments from "./RequestedAppointments";
import ApprovedAppointments from "./ApprovedAppointments";
import TabBar from "./TabBar";
import CompletedAppointments from "./CompletedAppointments";
import CanceledAppointments from "./CanceledAppointments";
import ConfirmAppointment from "./ConfirmAppointment";

function Appointments() {
    const location = useLocation();
    const appointmentRegex = new RegExp(/^\/admin\/appointments\/requested\/[0-9]+$/);

    return (
        <div className="p-10 shadow-lg rounded-lg">
            {appointmentRegex.test(location.pathname) ?
                <ConfirmAppointment /> :
                <div>
                    <TabBar />

                    <div className="mt-5">
                        <Routes>
                            <Route path="/requested" element={<RequestedAppointments />} />
                            <Route path="/approved" element={<ApprovedAppointments />} />
                            <Route path="/completed" element={<CompletedAppointments />} />
                            <Route path="/canceled" element={<CanceledAppointments />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                        {/* {selectedTab} */}
                    </div>
                </div>
            }
        </div>
    );
}

export default Appointments;