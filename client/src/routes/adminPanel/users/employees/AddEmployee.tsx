import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../../app/hooks";
import { Role, selectAuth } from "../../../../features/auth/authSlice";
import { ArrowBack } from "../../../common/SvgImages";

function AddEmployee() {
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isRoleAdminChecked, setRoleAdminChecked] = useState(false);
    const [isRoleManagerChecked, setRoleManagerChecked] = useState(false);
    const [isRoleDoctorChecked, setRoleDoctorChecked] = useState(false);
    const [isRoleReceptionChecked, setRoleReceptionChecked] = useState(false);
    const [isRoleConsultantChecked, setRoleConsultantChecked] = useState(false);

    const navigate = useNavigate();
    const { user } = useAppSelector(selectAuth);

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
            fullName,
            email,
            phone,
            password,
            roles,
        };

        const config = {
            headers: {
                Authorization: `Bearer ${user?.token}`,
            },
        };
        axios.post("/api/users/employees", userData, config)
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
                        <input id="name" type="text" className="block w-full p-2 border-[1px] border-blue-gray-200 rounded-md"
                            onChange={(e: any) => setFullName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm text-blue-gray-200">Email</label>
                        <input id="email" type="text" className="block w-full p-2 border-[1px] border-blue-gray-200 rounded-md"
                            onChange={(e: any) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="phone" className="text-sm text-blue-gray-200">Номер телефона</label>
                        <input id="phone" type="text" className="block w-full p-2 border-[1px] border-blue-gray-200 rounded-md"
                            onChange={(e: any) => setPhone(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="password" className="text-sm text-blue-gray-200">Пароль</label>
                        <input id="password" type="password" className="block w-full p-2 border-[1px] border-blue-gray-200 rounded-md"
                            onChange={(e: any) => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <div className="text-sm text-blue-gray-200">Роли</div>
                        <div className="mt-1 flex flex-wrap gap-3">
                            <div className="flex items-center">
                                <input name="role" id="admin" type="checkbox" checked={isRoleAdminChecked} onChange={() => setRoleAdminChecked(!isRoleAdminChecked)} className="w-4 h-4  border-blue-gray-200 rounded" />
                                <label htmlFor="admin" className="ml-1 text-sm text-blue-gray-200">Админ</label>
                            </div>
                            <div className="flex items-center">
                                <input name="role" id="manager" type="checkbox" checked={isRoleManagerChecked} onChange={() => setRoleManagerChecked(!isRoleManagerChecked)} className="w-4 h-4  border-blue-gray-200 rounded" />
                                <label htmlFor="manager" className="ml-1 text-sm text-blue-gray-200">Менеджер</label>
                            </div>
                            <div className="flex items-center">
                                <input name="role" id="doctor" type="checkbox" checked={isRoleDoctorChecked} onChange={() => setRoleDoctorChecked(!isRoleDoctorChecked)} className="w-4 h-4  border-blue-gray-200 rounded" />
                                <label htmlFor="doctor" className="ml-1 text-sm text-blue-gray-200">Врач</label>
                            </div>
                            <div className="flex items-center">
                                <input name="role" id="reception" type="checkbox" checked={isRoleReceptionChecked} onChange={() => setRoleReceptionChecked(!isRoleReceptionChecked)} className="w-4 h-4  border-blue-gray-200 rounded" />
                                <label htmlFor="reception" className="ml-1 text-sm text-blue-gray-200">Регистратор</label>
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

export default AddEmployee;