import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useAppSelector } from "../../../app/hooks";
import { selectAuth } from "../../../features/auth/authSlice";
import { ProfileNoPicture } from "../../common/SvgImages";
import { TextLg } from "../../common/TextElements";
import { User } from "../../common/types";

type ClientsProps = {
    selectedClient: User | undefined
    setSelectedClient: Dispatch<SetStateAction<User | undefined>>
}

function Clients({ selectedClient, setSelectedClient }: ClientsProps) {
    const [clients, setClients] = useState<User[]>([]);
    const { user } = useAppSelector(selectAuth);

    useEffect(() => {
        const apiUrl = "/api/consultation/clients";
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
                        onClick={() => setSelectedClient(client)}>
                        <ProfileNoPicture className="w-[50px] h-[50px]" />
                        <TextLg className="font-medium">{client.fullName}</TextLg>
                    </div>
                )
            })}
        </div>
    );
}

export default Clients;