import axios from "axios";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import FormGroup from "./authModal/FormGroup";
import Hint, { HintContext, HintContextType, hints } from "./Hint";
import { CloseButton, PhoneSvg } from "./SvgImages";
import { nameRegex, phoneRegex, state } from "./util";
import { VisuallyImpairedContext, VisuallyImpairedContextType } from "./header/VisuallyImpairedSettingBar";

type OrderCallProps = {
    showOrderCall?: boolean
    setShowOrderCall: Dispatch<SetStateAction<boolean>>
}

export function OrderCallButton({ setShowOrderCall }: OrderCallProps) {
    const location = useLocation();
    const { step } = useContext(HintContext) as HintContextType;
    const { visuallyImpairedSettings } =
        useContext(VisuallyImpairedContext) as VisuallyImpairedContextType;

    const onClick = () => {
        setShowOrderCall(true);
    }

    if (location.pathname.includes("admin") ||
        location.pathname.includes("profile-panel")) {
        return <></>
    }

    const buttonColor = !visuallyImpairedSettings.isOn ?
        "bg-blue-white dark:bg-blue-dark shadow-[0px_0px_4px_6px_rgba(39,127,242,0.5)] dark:shadow-[0px_0px_5px_2px_#FFFFFF]"
        :
        visuallyImpairedSettings.theme === "black" ?
            "bg-white"
            :
            "bg-[#353535]";

    return (
        <div className="relative">
            <div className={`p-5 ${buttonColor} rounded-full hover:cursor-pointer`}
                onClick={onClick}>
                <PhoneSvg />
            </div>
            {step === 5 ?
                <Hint hintPos={"top"} pointerPos={"end"} right={"-right-7"} content={hints[5]} />
                :
                <></>
            }
        </div>
    );
}

export function OrderCallForm({ showOrderCall, setShowOrderCall }: OrderCallProps) {
    const [fullName, setFullName] = useState(state);
    const [phone, setPhone] = useState(state);
    const { visuallyImpairedSettings } =
        useContext(VisuallyImpairedContext) as VisuallyImpairedContextType;

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

    const bgColor = !visuallyImpairedSettings.isOn ?
        "bg-[#F2F2F2] dark:bg-background-dark"
        :
        visuallyImpairedSettings.theme === "white" ?
            "bg-[#F2F2F2]"
            :
            visuallyImpairedSettings.theme === "black" ?
                "bg-[#353535]"
                :
                "bg-[#9DD1FF]";

    return (
        <div className="z-30 fixed left-0 top-0 right-0 bottom-0 bg-[rgba(0,0,0,0.4)] flex justify-center items-center">
            <div className={`modal p-5 ${bgColor} rounded-xl`}>
                <div className="flex justify-end">
                    <div onClick={() => setShowOrderCall(false)}>
                        <CloseButton />
                    </div>
                </div>
                <div className="flex px-7 flex-col items-center gap-5 text-start">
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
                    <button onClick={onSubmit} className="px-8 py-3 bg-blue-white dark:bg-blue-dark text-primary-dark font-semibold rounded-full">
                        Заказать звонок
                    </button>
                </div>
            </div>
        </div>
    );
}