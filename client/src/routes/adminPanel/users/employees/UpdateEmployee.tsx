import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../../../app/hooks";
import { Role, selectAuth, User } from "../../../../features/auth/authSlice";
import { ArrowBack } from "../../../common/SvgImages";

function UpdateEmployee() {
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [isRoleAdminChecked, setRoleAdminChecked] = useState(false);
    const [isRoleDoctorChecked, setRoleDoctorChecked] = useState(false);
    const [isRoleConsultantChecked, setRoleConsultantChecked] = useState(false);

    const navigate = useNavigate();
    const { user: loggedInUser } = useAppSelector(selectAuth);
    const { id } = useParams();

    useEffect(() => {
        const apiUrl = `/api/users/employees/${id}`;
        const config = {
            headers: {
                Authorization: `Bearer ${loggedInUser?.token}`,
            },
        };
        axios.get(apiUrl, config).then((resp) => {
            const employee: User = resp.data;
            setFullName(employee.fullName ? employee.fullName : "");
            setPhone(employee.phone ? employee.phone : "");
            setEmail(employee.email ? employee.email : "");
            if (employee.roles?.includes("ADMIN")) {
                setRoleAdminChecked(true);
            }
            if (employee.roles?.includes("DOCTOR")) {
                setRoleDoctorChecked(true);
            }
            if (employee.roles?.includes("CONSULTANT")) {
                setRoleConsultantChecked(true);
            }
        });
    }, []);

    const goBack = () => {
        navigate("/admin/employees");
    }

    const onSubmit = (e: any) => {
        e.preventDefault();

        let roles: Role[] = [];
        if (isRoleAdminChecked) {
            roles.push("ADMIN");
        }
        if (isRoleDoctorChecked) {
            roles.push("DOCTOR");
        }
        if (isRoleConsultantChecked) {
            roles.push("CONSULTANT");
        }

        const userData = {
            id,
            fullName,
            email,
            phone,
            roles,
        };

        const config = {
            headers: {
                Authorization: `Bearer ${loggedInUser?.token}`,
            },
        };
        axios.patch("/api/users/employees", userData, config)
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                navigate("/admin/employees");
            });
    };

    return (
        <div>
            <div className="flex gap-3 hover:cursor-pointer hover:text-blue-white hover:dark:text-blue-dark"
                onClick={goBack}>
                <ArrowBack />
                Назад
            </div>
            <form onSubmit={onSubmit}>
                <div className="w-[200px]">
                    <div>
                        <label htmlFor="name" className="text-sm text-blue-gray-200">ФИО</label>
                        <input value={fullName} id="name" type="text" className="block w-full p-2 border-[1px] border-blue-gray-200 rounded-md"
                            onChange={(e: any) => setFullName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm text-blue-gray-200">Email</label>
                        <input value={email} id="email" type="text" className="block w-full p-2 border-[1px] border-blue-gray-200 rounded-md"
                            onChange={(e: any) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="phone" className="text-sm text-blue-gray-200">Номер телефона</label>
                        <input value={phone} id="phone" type="text" className="block w-full p-2 border-[1px] border-blue-gray-200 rounded-md"
                            onChange={(e: any) => setPhone(e.target.value)} />
                    </div>
                    <div>
                        <div className="text-sm text-blue-gray-200">Роли</div>
                        <div className="mt-1 flex flex-col gap-3">
                            <div className="flex items-center">
                                <input name="role" id="admin" type="checkbox" checked={isRoleAdminChecked} onChange={() => setRoleAdminChecked(!isRoleAdminChecked)} className="w-4 h-4  border-blue-gray-200 rounded" />
                                <label htmlFor="admin" className="ml-1 text-sm text-blue-gray-200">Админ</label>
                            </div>
                            <div className="flex items-center">
                                <input name="role" id="doctor" type="checkbox" checked={isRoleDoctorChecked} onChange={() => setRoleDoctorChecked(!isRoleDoctorChecked)} className="w-4 h-4  border-blue-gray-200 rounded" />
                                <label htmlFor="doctor" className="ml-1 text-sm text-blue-gray-200">Врач</label>
                            </div>
                            <div className="flex items-center">
                                <input name="role" id="consultant" type="checkbox" checked={isRoleConsultantChecked} onChange={() => setRoleConsultantChecked(!isRoleConsultantChecked)} className="w-4 h-4  border-blue-gray-200 rounded" />
                                <label htmlFor="consultant" className="ml-1 text-sm text-blue-gray-200">Консультант</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button className="mt-6 px-8 py-3 inline-block bg-blue-white dark:bg-blue-dark text-lg text-primary-dark font-semibold drop-shadow-lg rounded-full">
                        Подтвердить
                    </button>
                </div>
            </form >
        </div >
    );
}

export default UpdateEmployee;