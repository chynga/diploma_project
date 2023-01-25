import { useState } from "react";
import Sidebar from "./Sidebar";
import { ModeToggler } from "../common/SvgImages";
import { toggleTheme } from "../common/util";
import AppointmentsPage from "./AppointmentsPage";
import ConsultationPage from "./ConsultationPage";
import ProfilePage from "./ProfilePage";

export type Page = 'appointments' | 'consultation' | 'profile'

function ProfilePanel() {
    const [pageName, setPageName] = useState<Page>('appointments');
    let selectedPage: JSX.Element;

    switch (pageName) {
        case 'appointments':
            selectedPage = <AppointmentsPage />;
            break;
        case 'consultation':
            selectedPage = <ConsultationPage />;
            break;
        case 'profile':
            selectedPage = <ProfilePage />;
            break;
    }

    return (
        <div className="flex">
            <div >
                <Sidebar className="w-[370px]" pageName={pageName} setPageName={setPageName} />
            </div>

            <div className="w-full p-6">
                <button onClick={toggleTheme} id="theme-toggle" type="button" className="block ml-auto">
                    <ModeToggler />
                </button>

                {selectedPage}
            </div>
        </div>
    );
}

export default ProfilePanel;