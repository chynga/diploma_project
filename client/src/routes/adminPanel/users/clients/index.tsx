import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ClientInfo from "./ClientInfo";
import ClientList from "./ClientList";
import EditClientInfo from "./EditClientInfo";

function ClientsPage() {
    return (
        <div className="grid h-[70vh] grid-cols-3 gap-4">
            <div className="p-10 shadow-lg rounded-lg">
                <ClientList />
            </div>
            <div className="shadow-lg rounded-lg col-span-2">
                <Routes>
                    <Route path="/:id" element={<ClientInfo />} />
                    <Route path="/:id/edit" element={<EditClientInfo />} />
                </Routes>
            </div>
        </div>
    );
}

export default ClientsPage;