import { useLocation, useNavigate } from "react-router-dom";
import NotFound from "../../../common/NotFound";
import AddEmployee from "./AddEmployee";
import Employees from "./Employees";

function EmployeesPage() {
    const navigate = useNavigate();
    const location = useLocation();
    let page: JSX.Element;
    const employeeRegex = new RegExp(/^\/admin\/employee\/[0-9]+$/);

    if (employeeRegex.test(location.pathname)) {
        page = <div>asdf</div>;
    } else if (location.pathname.includes("/admin/employees/new")) {
        page = <AddEmployee />;
    } else if (location.pathname.includes("/admin/employees")) {
        page = <Employees />
    } else {
        page = <NotFound />
    }

    return (
        <div className="p-10 shadow-lg rounded-lg">
            {page}
        </div>
    );
}

export default EmployeesPage;