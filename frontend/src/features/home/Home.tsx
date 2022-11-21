import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectAuth } from "../auth/authSlice";

const Home = () => {
    const { t, i18n } = useTranslation(["kz", "ru"]);
    const { user } = useAppSelector(selectAuth);

    return (
        <div>
            <h1>{t('home:title')}</h1>
            {!user || user?.emailVerified ? "" : <Link to="/confirm">{t('locale:emailNotVerified')}</Link>}
        </div>
    );
};

export default Home;
