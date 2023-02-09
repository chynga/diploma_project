import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import NotFound from "../../../common/NotFound";
import AddEmployee from "./AddEmployee";
import Employees from "./Employees";
import UpdateEmployee from "./UpdateEmployee";

function EmployeesPage() {
    return (
        <div className="p-10 shadow-lg rounded-lg">
            <Routes>
                <Route path="/" element={<Employees />} />
                <Route path="/new" element={<AddEmployee />} />
                <Route path="/:id" element={<UpdateEmployee />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default EmployeesPage;