import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { login, reset, selectAuth, updateUserProfile } from "../../features/auth/authSlice";
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
import { state } from "./Login";

const ProfilePage = () => {
    const { user, error, isLoading } = useAppSelector(selectAuth);
    const navigate = useNavigate();
    const dispatch = useDispatch<any>();

    const [firstName, setFirstName] = useState({...state, value: user?.firstName});
    const [lastName, setLastName] = useState({...state, value: user?.lastName});
    const [phone, setPhone] = useState({...state, value: user?.phone});
    // const [password, setPassword] = useState(state);

    const nameRegex = /[^\s0-9]{3,15}/;
    const phoneRegex = /^(\+\d{1,3}( )?)?((\(\d{1,3}\))|\d{1,3})[- .]?\d{3,4}[- .]?\d{4}$/;

    const { t, i18n } = useTranslation(["kz", "ru"]);

    // useEffect(() => {        
    //     dispatch(reset())
        
    // }, [user]);

    const onChange = (e: React.FormEvent<HTMLInputElement>, setValue: any) => {
        let value = (e.target as HTMLTextAreaElement).value
        setValue((prevState: any) => ({
            ...prevState,
            value,
        }));
    };

    const onSubmitUserInfo = (e: any) => {
        e.preventDefault();

        const userData = {
            firstName: firstName.value!,
            lastName: lastName.value!,
            phone: phone.value!
        };
        
        // console.log(userData)
        dispatch(updateUserProfile(userData));
    };

    return (
        <div className="auth">
            <Form className="form" onSubmit={onSubmitUserInfo}>
                <h2>{t('user:profile')}</h2>
                <h6 className="error-message">{error ? error.message : ""}</h6>
                {/* <FormGroup>
                    <Label for="email">{t('user:email')}</Label>
                    <Input 
                        type="email"
                        value={user?.email}
                        disabled={true} />
                </FormGroup> */}
                <FormGroup>
                    <Label for="firstName">{t('user:firstName')}</Label>
                    <ValidatedInput 
                        type="text"
                        id="firstName"
                        name="firstName"
                        field={firstName}
                        setField={setFirstName}
                        onChange={(event: any) => onChange(event, setFirstName)}
                        regex={nameRegex}
                        validationMessage="Enter valid name"
                        required />
                </FormGroup>
                <FormGroup>
                    <Label for="lastName">{t('user:lastName')}</Label>
                    <ValidatedInput 
                        type="text"
                        id="lastName"
                        name="lastName"
                        field={lastName}
                        setField={setLastName}
                        onChange={(event: any) => onChange(event, setLastName)}
                        regex={nameRegex}
                        validationMessage="Enter valid name"
                        required />
                </FormGroup>
                <FormGroup>
                    <Label for="phone">{t('user:phone')}</Label>
                    <ValidatedInput 
                        type="text"
                        id="phone"
                        name="phone"
                        field={phone}
                        setField={setPhone}
                        onChange={(event: any) => onChange(event, setPhone)}
                        regex={phoneRegex}
                        validationMessage="Enter phone number"
                        required />
                </FormGroup>
                <LoadingButton 
                    isLoading={isLoading}
                    isDisabled={
                            !(firstName.isValid &&
                            lastName.isValid &&
                            phone.isValid)
                        }>
                    {t('user:change.profile')}
                </LoadingButton>
            </Form>
        </div>
    );
};

export default ProfilePage;
