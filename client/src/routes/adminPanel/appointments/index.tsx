import { Route, Routes } from "react-router-dom";
import NotFound from "../../common/NotFound";
import RequestedAppointments from "./RequestedAppointments";
import TabBar from "./TabBar";
import CompletedAppointments from "./CompletedAppointments";
import AppointmentPage from "./AppointmentPage";

function AppointmentsPage() {
    return (
        <div className="p-10 shadow-lg rounded-lg">
            <div>
                <TabBar />
                <div className="mt-5">
                    <Routes>
                        <Route path="/requested" element={<RequestedAppointments />} />
                        <Route path="/requested/:id" element={<AppointmentPage changeStatusTo={"success"} />} />
                        <Route path="/completed" element={<CompletedAppointments />} />
                        <Route path="/completed/:id" element={<AppointmentPage />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default AppointmentsPage;