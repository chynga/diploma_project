import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../app/hooks";
import { selectUser } from "../auth/authSlice";

const Home = () => {
    const { t, i18n } = useTranslation(["kz", "ru"]);
    const user = useAppSelector(selectUser);

    return (
        <div>
            <h1>{t('home:title')}</h1>
            {user? <h2>{t('user:email')}: {user.email}</h2> : <></>}
        </div>
    );
};

export default Home;
