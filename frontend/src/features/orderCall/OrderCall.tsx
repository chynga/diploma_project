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
import { state } from "../auth/Login";
import axios from "axios";

const OrderCall = () => {
    const dispatch = useDispatch<any>();

    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");
    
    const [name, setName] = useState(state);
    const [phone, setPhone] = useState(state);

    const fullNameRegex = /[^0-9]{3,30}/;
    const phoneRegex = /^(\+\d{1,3}( )?)?((\(\d{1,3}\))|\d{1,3})[- .]?\d{3,4}[- .]?\d{4}$/;
    const { t, i18n } = useTranslation(["kz", "ru"]);

    // useEffect(() => {        
    //     dispatch(reset())
    //     if (user) {
    //         navigate("/");
    //     }
    // }, [user]);

    const onChange = (e: React.FormEvent<HTMLInputElement>, setValue: any) => {
        let value = (e.target as HTMLTextAreaElement).value
        setValue((prevState: any) => ({
            ...prevState,
            value,
        }));
    };

    const onSubmit = (e: any) => {
        e.preventDefault();

        const contact = {
            name: name.value,
            phone: phone.value,
        };

        setMessage("")
        setIsLoading(true);
        axios.post("/api/order-call", contact)
            .then(_ => {
                setMessage("successfully sent message")
            })
            .catch(error => {
                console.log(error)
                setMessage("error")
            })
            .finally(() => setIsLoading(false));
    };

    return (
        <div className="auth">
            <Form className="form" onSubmit={onSubmit}>
                <h2>{t('order.call')}</h2>
                <h6>{message}</h6>
                <FormGroup>
                    <Label for="name">{t('name')}</Label>
                    <ValidatedInput 
                        type="name"
                        id="name"
                        name="name"
                        field={name}
                        setField={setName}
                        onChange={(event: any) => onChange(event, setName)}
                        regex={fullNameRegex}
                        validationMessage="Enter valid name"
                        required />
                </FormGroup>
                <FormGroup>
                    <Label for="phone">{t('phone')}</Label>
                    <ValidatedInput 
                        type="phone"
                        id="phone"
                        name="phone"
                        field={phone}
                        setField={setPhone}
                        onChange={(event: any) => onChange(event, setPhone)}
                        regex={phoneRegex}
                        validationMessage="not valid"
                        required />
                </FormGroup>
                <LoadingButton 
                    isLoading={isLoading}
                    isDisabled={
                        !(name.isValid &&
                        phone.isValid)
                        }>
                    {t('order.call')}
                </LoadingButton>
            </Form>
        </div>
    );
};

export default OrderCall;
