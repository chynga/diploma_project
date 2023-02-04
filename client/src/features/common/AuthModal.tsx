import { Dispatch, SetStateAction } from "react";

type ModalProps = {
    showModal: boolean
    setShowModal: Dispatch<SetStateAction<boolean>>
}

function AuthModal({ showModal, setShowModal }: ModalProps) {
    return (
        <div className="z-30 fixed left-0 top-0 right-0 bottom-0 bg-[rgb(0,0,0)] bg-[rgba(0,0,0,0.4)] flex justify-center items-center">

            <div className="py-9 px-11 w-[1000px] h-[670px] bg-[#F2F2F2] rounded-xl">
                <div className="flex justify-end">
                    <div onClick={() => setShowModal(false)}>
                        <CloseButton />
                    </div>
                </div>
                <form action="" className="mt-10 pb-6 h-96 overflow-auto flex flex-col items-center gap-6">
                    <Input />
                    <Input />
                    <Input />
                    <Button />
                </form>
            </div>
        </div>
    );
}

function CloseButton() {
    return (
        <svg className="hover:cursor-pointer" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33Z" stroke="#277FF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22.5 13.5L13.5 22.5" stroke="#277FF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.5 13.5L22.5 22.5" stroke="#277FF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function Input() {
    return (
        <div>
            <label htmlFor="">E-mail</label>
            <input type="text" className="block mt-2 p-3 w-[315px] rounded-[10px] bg-[rgba(39,127,242,0.2)]" />
        </div>
    );
}

function Button() {
    return (
        <button className="mt-6 px-8 py-3 inline-block bg-blue-white dark:bg-blue-dark text-lg text-primary-dark font-semibold drop-shadow-lg rounded-full">
            Отправить
        </button>
    );
}

export default AuthModal;