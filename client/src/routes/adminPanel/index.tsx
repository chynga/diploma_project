import Sidebar from "./Sidebar";
import { ThemeToggler } from "../common/SvgImages";
import { toggleTheme } from "../common/util";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import NotFound from "../common/NotFound";
import AppointmentsPage from "./appointments";
import EmployeesPage from "./users/employees";
import { useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectAuth } from "../../features/auth/authSlice";
import ClientsPage from "./users/clients";

function AdminPanel() {
    const { user } = useAppSelector(selectAuth);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!user || user.roles.includes("CLIENT")) {
            navigate("/");
        }
        console.log(location.pathname)
    }, [])

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
                    <Routes>
                        <Route path="/appointments/*" element={<AppointmentsPage />} />
                        <Route path="/employees/*" element={<EmployeesPage />} />
                        <Route path="/clients/*" element={<ClientsPage />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default AdminPanel;