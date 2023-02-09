import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "../../../../app/hooks";
import { Role, selectAuth, User } from "../../../../features/auth/authSlice";
import { TrashBin } from "../../../common/SvgImages"
import { TextBase } from "../../../common/TextElements"

function Clients() {
    const navigate = useNavigate();
    const [clients, setClients] = useState<User[]>();
    const { user } = useAppSelector(selectAuth);

    useEffect(() => {
        const apiUrl = "/api/users/clients";
        const config = {
            headers: {
                Authorization: `Bearer ${user?.token}`,
            },
        };
        axios.get(apiUrl, config).then((resp) => {
            const clients = resp.data;
            setClients(clients);
        });
    }, []);


    return (
        <table className="table-auto w-full">
            <thead>
                <tr className="bg-blue-white dark:bg-blue-dark">
                    <th className="p-3"><TextBase>ФИО</TextBase></th>
                    <th className="p-3"><TextBase>Email</TextBase></th>
                    <th className="p-3"><TextBase>Номер телефона</TextBase></th>
                </tr>
            </thead>
            <tbody className="text-center border-[1px]">
                {
                    clients?.map(client => {
                        return (
                            <tr key={client.id}>
                                <td className="p-3"><TextBase>{client.fullName}</TextBase></td>
                                <td className="p-3"><TextBase>{client.email}</TextBase></td>
                                <td className="p-3"><TextBase>{client.phone}</TextBase></td>
                            </tr>
                        )
                    })
                }

            </tbody>
        </table>
    )
}

export default Clients;