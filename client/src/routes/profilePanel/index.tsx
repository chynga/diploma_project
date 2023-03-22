import Sidebar from "./Sidebar";
import { ThemeToggler } from "../common/SvgImages";
import { toggleTheme } from "../common/util";
import AppointmentsPage from "./appointmentsPage";
import ConsultationPage from "./consultationPage";
import ProfilePage from "./profilePage";
import { Route, Routes } from "react-router-dom";
import NotFound from "../common/NotFound";
import HealthInfoPage from "./healthInfoPage";

function ProfilePanel() {
    return (
        <div className="flex">
            <div >
                <Sidebar className="fixed w-[370px]" />
            </div>

            <div className="w-full ml-[370px] min-h-screen p-6">
                <button onClick={toggleTheme} id="theme-toggle" type="button" className="block ml-auto">
                    <ThemeToggler />
                </button>
                <div className="mt-5">
                    <Routes>
                        <Route path="/appointments/*" element={<AppointmentsPage />} />
                        <Route path="/health-info/*" element={<HealthInfoPage />} />
                        <Route path="/consultation/*" element={<ConsultationPage />} />
                        <Route path="/profile/*" element={<ProfilePage />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default ProfilePanel;