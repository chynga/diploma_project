import axios from "axios";
import { Dispatch, SetStateAction, useState } from "react";
import FormGroup from "./authModal/FormGroup";
import { CloseButton, PhoneSvg } from "./SvgImages";
import { nameRegex, phoneRegex, state } from "./util";

type OrderCallProps = {
    showOrderCall?: boolean
    setShowOrderCall: Dispatch<SetStateAction<boolean>>
}

export function OrderCallButton({ setShowOrderCall }: OrderCallProps) {
    const onClick = () => {
        setShowOrderCall(true);
    }

    return (
        <div className="p-5 bg-blue-white dark:bg-blue-dark shadow-[0px_0px_4px_6px_rgba(39,127,242,0.5)] dark:shadow-[0px_0px_5px_2px_#FFFFFF] rounded-full hover:cursor-pointer"
            onClick={onClick}>
            <PhoneSvg />
        </div>
    );
}

export function OrderCallForm({ showOrderCall, setShowOrderCall }: OrderCallProps) {
    const [fullName, setFullName] = useState(state);
    const [phone, setPhone] = useState(state);

    const onSubmit = (e: any) => {
        e.preventDefault();

        const credentials = {
            fullName: fullName.value,
            phoneNumber: phone.value
        }

        axios.post("/api/ordered-calls", credentials)
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setShowOrderCall(false);
            });
    }

    if (!showOrderCall) {
        return <></>
    }

    return (
        <div className="z-30 fixed left-0 top-0 right-0 bottom-0 bg-[rgb(0,0,0)] bg-[rgba(0,0,0,0.4)] flex justify-center items-center">
            <div className="modal p-5 bg-[#F2F2F2] rounded-xl">
                <div className="flex justify-end">
                    <div onClick={() => setShowOrderCall(false)}>
                        <CloseButton />
                    </div>
                </div>
                <div className="flex px-7 flex-col items-center gap-5 text-center">
                    <FormGroup
                        labelText="ФИО"
                        type="name"
                        id="name"
                        name="name"
                        field={fullName}
                        setField={setFullName}
                        regex={nameRegex}
                        validationMessage="Enter valid name" />
                    <FormGroup
                        labelText="Номер телефона"
                        type="phone"
                        id="phone"
                        name="phone"
                        field={phone}
                        setField={setPhone}
                        regex={phoneRegex}
                        validationMessage="Enter valid phone number" />
                    <button onClick={onSubmit} className="px-3 py-1 bg-blue-white dark:bg-blue-dark text-primary-dark font-semibold rounded-full">
                        Отправить
                    </button>
                </div>
            </div>
        </div>
    );
}