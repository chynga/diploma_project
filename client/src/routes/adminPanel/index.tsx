import Sidebar from "./Sidebar";
import { ThemeToggler } from "../common/SvgImages";
import { toggleTheme } from "../common/util";
import { Route, Routes, useNavigate } from "react-router-dom";
import NotFound from "../common/NotFound";
import AppointmentsPage from "./appointments";
import EmployeesPage from "./users/employees";
import { useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectAuth } from "../../features/auth/authSlice";
import ClientsPage from "./users/clients";
import ServicesPage from "./services";
import MessagesPage from "./messages";
import ReviewsPage from "./reviews";
import OrderedCallsPage from "./orderedCalls";
import DoctorsPage from "./users/doctors";

function AdminPanel() {
    const { user } = useAppSelector(selectAuth);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user || user.roles?.includes("CLIENT")) {
            navigate("/");
        }
    }, [])

    return (
        <div className="flex min-h-screen bg-[#F2F3F3] dark:bg-[#4F4F4F]">
            <div >
                <Sidebar className="fixed w-[370px]" />
            </div>

            <div className="w-full ml-[370px] p-6">
                <button onClick={toggleTheme} id="theme-toggle" type="button" className="block ml-auto">
                    <ThemeToggler />
                </button>
                <div className="mt-5">
                    <Routes>
                        <Route path="/services/*" element={<ServicesPage />} />
                        <Route path="/appointments/*" element={<AppointmentsPage />} />
                        <Route path="/employees/*" element={<EmployeesPage />} />
                        <Route path="/doctors/*" element={<DoctorsPage />} />
                        <Route path="/clients/*" element={<ClientsPage />} />
                        <Route path="/messages/*" element={<MessagesPage />} />
                        <Route path="/reviews/*" element={<ReviewsPage />} />
                        <Route path="/ordered-calls/*" element={<OrderedCallsPage />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default AdminPanel;