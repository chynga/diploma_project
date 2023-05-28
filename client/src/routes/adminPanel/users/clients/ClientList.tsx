import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../../app/hooks";
import { selectAuth } from "../../../../features/auth/authSlice";
import { ProfilePicture, Search } from "../../../common/SvgImages";
import { TextLg } from "../../../common/TextElements";
import { User } from "../../../common/types";

function ClientList() {
    const [clients, setClients] = useState<User[]>([]);
    const [filteredClients, setFilteredClients] = useState<User[]>([]);
    const { user } = useAppSelector(selectAuth);
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState<string>("");

    const location = useLocation();

    useEffect(() => {
        setFilteredClients(clients.filter(client => client.fullName.toLowerCase().includes(searchText)));

        if (clients.length === 0) {
            const apiUrl = "/api/clients";
            const config = {
                headers: {
                    Authorization: `Bearer ${user?.token}`,
                },
            };

            axios.get(apiUrl, config).then((resp) => {
                const clients: User[] = resp.data;
                setClients(clients);
                setFilteredClients(clients);
                if (location.pathname === "/admin/clients") {
                    navigate(clients[0].id)
                }
            });
        }
    }, [searchText]);

    const onType = (e: any) => {
        setSearchText(e.target.value)
    }

    return (
        <div>
            <div className="relative">
                <input value={searchText} onChange={onType} className="pl-8 pr-5 py-2 w-full text-primary-white dark:text-primary-dark bg-[#F2F3F3] dark:bg-[#4F4F4F] border border-[#B9B9B9] rounded-full" placeholder="Пойск" />
                <div className="absolute top-2/4 -translate-y-2/4 left-2">
                    <Search />
                </div>
            </div>
            {filteredClients?.map(client => {
                return (
                    <div key={client.id} className="p-1 flex items-center gap-1 border-b border-[#B9B9B9] hover:cursor-pointer"
                        onClick={() => navigate(`${client.id}`)}>
                        <ProfilePicture imageUrl={client.profileImageUrl} className="w-[50px] h-[50px] shrink-0" />
                        <TextLg className="font-medium" blue={location.pathname.includes(client.id)}>{client.fullName}</TextLg>
                    </div>
                )
            })}
        </div>
    );
}

export default ClientList;