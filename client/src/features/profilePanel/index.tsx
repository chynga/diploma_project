import Sidebar from "./Sidebar";
import { ModeToggler } from "../common/SvgImages";
import { toggleTheme } from "../common/util";
import AppointmentsPage from "./appointmentsPage";
import ConsultationPage from "./consultationPage";
import ProfilePage from "./profilePage";
import { useLocation } from "react-router-dom";
import NotFound from "../common/NotFound";

function ProfilePanel() {
    const location = useLocation();
    let selectedPage: JSX.Element;

    if (location.pathname.includes("/profile-panel/appointments")) {
        selectedPage = <AppointmentsPage />;
    } else if (location.pathname.includes("/profile-panel/consultation")) {
        selectedPage = <ConsultationPage />;
    } else if (location.pathname.includes("/profile-panel/profile")) {
        selectedPage = <ProfilePage />;
    } else {
        selectedPage = <NotFound />;
    }

    return (
        <div className="flex">
            <div >
                <Sidebar className="w-[370px]" />
            </div>

            <div className="w-full p-6">
                <button onClick={toggleTheme} id="theme-toggle" type="button" className="block ml-auto">
                    <ModeToggler />
                </button>
                <div className="mt-5 h-[500px] overflow-auto">
                    {selectedPage}
                </div>
            </div>
        </div>
    );
}

export default ProfilePanel;