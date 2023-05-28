import { Dispatch, SetStateAction } from "react";
import { CloseButton, TrashBin } from "./SvgImages";
import { TextLg } from "./TextElements";

type DeleteButtonProps = {
    setShow: Dispatch<SetStateAction<boolean>>
}

export function DeleteButton({ setShow }: DeleteButtonProps) {
    return (
        <div onClick={() => { setShow(true) }} className="px-8 py-3 flex items-center gap-3 bg-[#FF4646] dark:bg-[#B67474] text-lg text-primary-dark font-semibold drop-shadow-lg rounded-full hover:cursor-pointer">
            <TrashBin className="stroke-white" />
            Удалить
        </div>
    )
}

export function DeleteTrashCanButton({ setShow }: DeleteButtonProps) {
    return (
        <div onClick={() => { setShow(true) }}>
            <TrashBin className="stroke-primary-white dark:stroke-primary-dark" />
        </div>
    )
}

type DeleteFormProps = DeleteButtonProps & {
    title: string
    show: boolean
    onDelete: () => void
}

export function DeleteForm({ title, show, setShow, onDelete }: DeleteFormProps) {
    if (!show) {
        return <></>
    }

    return (
        <div className="z-30 fixed left-0 top-0 right-0 bottom-0 bg-[rgba(0,0,0,0.4)] flex justify-center items-center">
            <div className="modal p-5 bg-[#F2F2F2] dark:bg-background-dark rounded-xl">
                <div className="flex justify-end">
                    <div onClick={() => setShow(false)}>
                        <CloseButton />
                    </div>
                </div>
                <div className="mt-3 text-center">
                    <TextLg>
                        {title}
                    </TextLg>
                </div>
                <div className="mt-3 flex px-7 items-stretch items-center gap-5 text-start">
                    <button onClick={() => setShow(false)} className="px-8 py-3 bg-blue-white dark:bg-blue-dark text-primary-dark font-semibold rounded-full">
                        Отменить
                    </button>
                    <div onClick={onDelete} className="px-8 py-3 flex items-center gap-3 bg-[#FF4646] dark:bg-[#B67474] text-lg text-primary-dark font-semibold drop-shadow-lg rounded-full hover:cursor-pointer">
                        <TrashBin className="stroke-white" />
                        Удалить
                    </div>
                </div>
            </div>
        </div>
    );
}