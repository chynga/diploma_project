import { Dispatch, SetStateAction } from "react";
import CloseButton from "./CloseButton";
import LoginForm from "./LoginForm";
import PasswordRecoveryForm from "./PasswordRecoveryForm";
import RegisterForm from "./RegisterForm";

export type AuthPage = "login" | "register" | "forgotPassword" | "emailConfirmation" | null
export type ModalProps = {
    authPage?: AuthPage
    setAuthPage: Dispatch<SetStateAction<AuthPage>>
}

function AuthModal({ authPage, setAuthPage }: ModalProps) {
    return (
        <div className="z-30 fixed left-0 top-0 right-0 bottom-0 bg-[rgb(0,0,0)] bg-[rgba(0,0,0,0.4)] flex justify-center items-center">

            <div className="py-9 px-11 w-[1000px] h-[670px] bg-[#F2F2F2] rounded-xl">
                <div className="flex justify-end">
                    <div onClick={() => setAuthPage(null)}>
                        <CloseButton />
                    </div>
                </div>
                <div className="mt-10 pb-6 h-96 overflow-auto flex flex-col items-center gap-6">
                    {(() => {
                        switch (authPage) {
                            case "login":
                                return <LoginForm setAuthPage={setAuthPage} />
                            case "register":
                                return <RegisterForm />
                            case "forgotPassword":
                                return <PasswordRecoveryForm setAuthPage={setAuthPage} />
                        }
                    })()}
                </div>
            </div>
        </div>
    );
}

export default AuthModal;