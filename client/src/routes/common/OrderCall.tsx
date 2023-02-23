import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectAuth } from "../../features/auth/authSlice";
import { CloseButton, Phone } from "./SvgImages";

type OrderCallProps = {
    showOrderCall?: boolean
    setShowOrderCall: Dispatch<SetStateAction<boolean>>
}

export function OrderCallButton({ setShowOrderCall }: OrderCallProps) {
    const { user } = useAppSelector(selectAuth);

    const onClick = () => {
        setShowOrderCall(true);
    }

    if (!user?.roles?.includes("CLIENT")) {
        return <></>
    }

    return (
        <div className="p-5 bg-blue-white dark:bg-blue-dark shadow-[0px_0px_4px_6px_rgba(39,127,242,0.5)] dark:shadow-[0px_0px_5px_2px_#FFFFFF] rounded-full hover:cursor-pointer"
            onClick={onClick}>
            <Phone />
        </div>
    );
}

export function OrderCallForm({ showOrderCall, setShowOrderCall }: OrderCallProps) {
    const navigate = useNavigate();
    const { user } = useAppSelector(selectAuth);

    const onClick = (e: any) => {
        if (e.target.className.includes("modal")) {
            return;
        }
        setShowOrderCall(false);
    }

    const onSubmit = (e: any) => {
        e.preventDefault();

        const config = {
            headers: {
                Authorization: `Bearer ${user?.token}`,
            },
        };
        axios.post("/api/ordered-calls", {}, config)
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setShowOrderCall(false);
            });
    }

    if (!showOrderCall || !user?.roles?.includes("CLIENT")) {
        return <></>
    }

    return (
        <div className="z-30 fixed left-0 top-0 right-0 bottom-0 bg-[rgb(0,0,0)] bg-[rgba(0,0,0,0.4)] flex justify-center items-center"
            onClick={onClick}>
            <div className="modal p-5 bg-[#F2F2F2] rounded-xl">
                <div className="flex justify-end">
                    <div onClick={() => setShowOrderCall(false)}>
                        <CloseButton />
                    </div>
                </div>
                <div className="flex px-7 flex-col items-center gap-5 text-center">
                    Нажмите подтвердить <br /> и мы перезвоним на номер: {user.phone}
                    <button onClick={onSubmit} className="px-3 py-1 bg-blue-white dark:bg-blue-dark text-primary-dark font-semibold rounded-full">
                        Подтвердить
                    </button>
                </div>
            </div>
        </div>
    );
}