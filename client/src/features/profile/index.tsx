import { useState } from "react";
import Sidebar from "./Sidebar";
import { ModeToggler } from "../common/SvgImages";
import { toggleTheme } from "../common/util";

export type Page = 'appointments' | 'consultation' | 'profile'

function ProfilePage() {
    const [page, setPage] = useState<Page>('appointments');

    return (
        <div className="flex">
            <Sidebar className="w-[370px]" page={page} setPage={setPage} />

            <button onClick={toggleTheme} id="theme-toggle" type="button">
                <ModeToggler />
            </button>
        </div>
    );
}

export default ProfilePage;