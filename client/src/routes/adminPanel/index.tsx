import Sidebar from "./Sidebar";
import { ThemeToggler } from "../common/SvgImages";
import { toggleTheme } from "../common/util";
import { useLocation } from "react-router-dom";
import NotFound from "../common/NotFound";
import Appointments from "./appointments";
import Employees from "./users/employees";

function AdminPanel() {
    const location = useLocation();
    let selectedPage: JSX.Element = <NotFound />;

    if (location.pathname.includes("/admin/appointments")) {
        selectedPage = <Appointments />;
    } else if (location.pathname.includes("/admin/employees")) {
        selectedPage = <Employees />;
    } else if (location.pathname.includes("/admin/profile")) {
        // selectedPage = <ProfilePage />;
    } else {
        selectedPage = <NotFound />;
    }

    return (
        <div className="flex">
            <div >
                <Sidebar className="fixed w-[370px]" />
            </div>

            <div className="w-full ml-[370px] p-6">
                <button onClick={toggleTheme} id="theme-toggle" type="button" className="block ml-auto">
                    <ThemeToggler />
                </button>
                <div className="mt-5">
                    {selectedPage}
                </div>
            </div>
        </div>
    );
}

export default AdminPanel;