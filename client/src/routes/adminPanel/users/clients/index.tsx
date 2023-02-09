import { Route, Routes } from "react-router-dom";
import NotFound from "../../../common/NotFound";
import Clients from "./Clients";

function ClientsPage() {
    return (
        <div className="p-10 shadow-lg rounded-lg">
            <Routes>
                <Route path="/" element={<Clients />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default ClientsPage;