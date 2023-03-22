import Clients from "./Clients";
import { useState } from "react";
import { User } from "../../common/types";
import Consultation from "./Consultation";

function MessagesPage() {
    const [selectedClient, setSelectedClient] = useState<User>();

    return (
        <div className="grid h-[70vh] grid-cols-3 gap-4">
            <div className="p-10 shadow-lg rounded-lg">
                <Clients setSelectedClient={setSelectedClient} />
            </div>
            <div className="p-10 shadow-lg rounded-lg col-span-2">
                <Consultation selectedClient={selectedClient} />
            </div>
        </div>
    );
}

export default MessagesPage;