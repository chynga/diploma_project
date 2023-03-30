import { Dispatch, SetStateAction, useState } from "react";
import { CloseButton } from "../SvgImages";
import { TextSm } from "../TextElements";
import LoginForm from "./LoginForm";
import PasswordRecoveryForm from "./PasswordRecoveryForm";
import RegisterForm from "./RegisterForm";

export type AuthPage = "login" | "register" | "forgotPassword" | "emailConfirmation" | null
export type ModalProps = {
    authPage?: AuthPage
    setAuthPage: Dispatch<SetStateAction<AuthPage>>
}

export type FormProps = ModalProps & {
    setErrorMsg: Dispatch<SetStateAction<string>>
}

function AuthModal({ authPage, setAuthPage }: ModalProps) {
    const [errorMsg, setErrorMsg] = useState("");

    return (
        <div className="z-30 fixed left-0 top-0 right-0 bottom-0 bg-[rgb(0,0,0)] bg-[rgba(0,0,0,0.4)] flex justify-center items-center">
            <div className="py-9 px-11 w-[800px] h-[560px] bg-[#F2F2F2] dark:bg-background-dark rounded-xl overflow-auto">
                <div className="flex justify-end">
                    <div onClick={() => setAuthPage(null)}>
                        <CloseButton />
                    </div>
                </div>
                <div className="pb-6 flex flex-col items-center gap-6">
                    <TextSm className="text-red-600 dark:text-red-400">{errorMsg}</TextSm>
                    {(() => {
                        switch (authPage) {
                            case "login":
                                return <LoginForm setAuthPage={setAuthPage} setErrorMsg={setErrorMsg} />
                            case "register":
                                return <RegisterForm setAuthPage={setAuthPage} setErrorMsg={setErrorMsg} />
                            case "forgotPassword":
                                return <PasswordRecoveryForm setAuthPage={setAuthPage} setErrorMsg={setErrorMsg} />
                        }
                    })()}
                </div>
            </div>
        </div>
    );
}

export default AuthModal;