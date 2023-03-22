import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../../app/hooks";
import { selectAuth } from "../../../../features/auth/authSlice";
import { ProfilePicture } from "../../../common/SvgImages";
import { TextLg } from "../../../common/TextElements";
import { User } from "../../../common/types";

function ClientList() {
    const [clients, setClients] = useState<User[]>([]);
    const { user } = useAppSelector(selectAuth);
    const navigate = useNavigate();

    useEffect(() => {
        const apiUrl = "/api/users/clients";
        const config = {
            headers: {
                Authorization: `Bearer ${user?.token}`,
            },
        };

        axios.get(apiUrl, config).then((resp) => {
            const clients: User[] = resp.data;
            setClients(clients);
        });
    }, []);

    return (
        <div>
            {clients?.map(client => {
                return (
                    <div key={client.id} className="p-1 flex items-center gap-1 border-b border-[#B9B9B9] hover:cursor-pointer"
                        onClick={() => navigate(`${client.id}`)}>
                        <ProfilePicture imageUrl={client.profileImageUrl} className="w-[50px] h-[50px]" />
                        <TextLg className="font-medium">{client.fullName}</TextLg>
                    </div>
                )
            })}
        </div>
    );
}

export default ClientList;