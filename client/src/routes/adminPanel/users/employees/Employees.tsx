import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "../../../../app/hooks";
import { Role, selectAuth, User } from "../../../../features/auth/authSlice";
import { TrashBin } from "../../../common/SvgImages"
import { TextBase } from "../../../common/TextElements"

function Employees() {
    const navigate = useNavigate();
    const [employees, setEmployees] = useState<User[]>();
    const { user } = useAppSelector(selectAuth);

    useEffect(() => {
        const apiUrl = "/api/users/employees";
        const config = {
            headers: {
                Authorization: `Bearer ${user?.token}`,
            },
        };
        axios.get(apiUrl, config).then((resp) => {
            const employees = resp.data;
            setEmployees(employees);
        });
    }, []);

    const getRolesString = (roles: Role[]) => {
        let separator: string;
        const rolesString = roles.map((role, i, roles) => {
            separator = (i === roles.length - 1 ? "" : ", ");
            switch (role) {
                case "ADMIN":
                    return "admin" + separator;
                case "MANAGER":
                    return "manager" + separator;
                case "DOCTOR":
                    return "doctor" + separator;
                case "RECEPTION":
                    return "reception" + separator;
                case "CONSULTANT":
                    return "consultant" + separator;
            }
            // return role + (i === roles.length - 1 ? ", " : "");
        })
        return rolesString
    }

    return (
        <>
            <table className="table-auto w-full">
                <thead>
                    <tr className="bg-blue-white dark:bg-blue-dark">
                        <th className="p-3"><TextBase>ФИО</TextBase></th>
                        <th className="p-3"><TextBase>Email</TextBase></th>
                        <th className="p-3"><TextBase>Номер телефона</TextBase></th>
                        <th className="p-3"><TextBase>Роли</TextBase></th>
                    </tr>
                </thead>
                <tbody className="text-center border-[1px]">
                    {
                        employees?.map(employee => {
                            return (
                                <tr key={employee.id}
                                    onClick={() => navigate(`/admin/employees/${employee.id}`)}
                                    className="hover:cursor-pointer">
                                    <td className="p-3"><TextBase>{employee.fullName}</TextBase></td>
                                    <td className="p-3"><TextBase>{employee.email}</TextBase></td>
                                    <td className="p-3"><TextBase>{employee.phone}</TextBase></td>
                                    <td className="p-3"><TextBase>{getRolesString(employee.roles)}</TextBase></td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>

            <div className="mt-10 flex justify-center">
                <button onClick={() => navigate("/admin/employees/new")} className="px-8 py-3 bg-blue-white dark:bg-blue-dark text-lg text-primary-dark font-semibold drop-shadow-lg rounded-full">
                    Добавить работника
                </button>
            </div>
        </>
    )
}

export default Employees;