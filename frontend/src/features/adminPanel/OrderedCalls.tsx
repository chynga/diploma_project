import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { login, reset, selectAuth } from "../../features/auth/authSlice";
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap';
import { useTranslation } from "react-i18next";
import ValidatedInput from "../../components/ValidatedInput";
import LoadingButton from "../../components/LoadingButton";
import axios from "axios";

// TODO move to different file
export const state = {
    value: "",
    isValid: false,
    startedTyping: false
}

const OrderedCalls = () => {
    const { user } = useAppSelector(selectAuth);
    const navigate = useNavigate();
    const dispatch = useDispatch<any>();

    const [data, setData] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const { t, i18n } = useTranslation(["kz", "ru"]);

    useEffect(() => {        
        dispatch(reset())
        if (user?.role !== "admin") {
            navigate("/");
        }

        setIsLoading(true);
        const path = "/api/order-call";
        const config = {
            headers: {
                Authorization: `Bearer ${user?.token}`,
            },
        };
        axios.get(path, config)
            .then(data => {
                setData(data.data)
            })
            .catch(error => {
                console.log(error);
                
            // handle any errors/rejected Promises
            })
            .finally(() => setIsLoading(false)); // complete loading success/fail
    }, []);

    return (
        <div>
            <h1>{t('locale:adminPanel')}</h1>
            {data.map(contact => <>{contact.name}: {contact.phone}<br /></>)}
        </div>
    );
};

export default OrderedCalls;
