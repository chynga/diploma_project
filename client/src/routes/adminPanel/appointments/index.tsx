import { Route, Routes } from "react-router-dom";
import NotFound from "../../common/NotFound";
import RequestedAppointments from "./RequestedAppointments";
import ApprovedAppointments from "./ApprovedAppointments";
import TabBar from "./TabBar";
import CompletedAppointments from "./CompletedAppointments";
import CanceledAppointments from "./CanceledAppointments";
import RequestedAppointment from "./RequestedAppointment";
import ApprovedAppointment from "./AppointmentPage";
import AppointmentPage from "./AppointmentPage";

function AppointmentsPage() {
    return (
        <div className="p-10 shadow-lg rounded-lg">
            <div>
                <TabBar />
                <div className="mt-5">
                    <Routes>
                        <Route path="/requested" element={<RequestedAppointments />} />
                        <Route path="/requested/:id" element={<AppointmentPage changeStatusTo={"approved"} />} />
                        <Route path="/approved" element={<ApprovedAppointments />} />
                        <Route path="/approved/:id" element={<AppointmentPage changeStatusTo={"success"} />} />
                        <Route path="/completed" element={<CompletedAppointments />} />
                        <Route path="/completed/:id" element={<AppointmentPage />} />
                        <Route path="/canceled" element={<CanceledAppointments />} />
                        <Route path="/canceled/:id" element={<AppointmentPage />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default AppointmentsPage;