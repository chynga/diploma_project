import { Route, Routes } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { selectAuth, User } from "../../../features/auth/authSlice";
import NotFound from "../../common/NotFound";
import EditProfile from "./EditProfile";
import Profile from "./Profile";

export type ProfileProps = {
    user: User | undefined
}

function ProfilePage() {
    const { user } = useAppSelector(selectAuth);

    return (
        <div>
            <Routes>
                <Route path="/" element={<Profile user={user} />} />
                <Route path="/edit" element={<EditProfile user={user} />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}


export default ProfilePage;