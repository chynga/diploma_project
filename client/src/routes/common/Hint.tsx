import { createContext, useContext } from "react";
import { Text2Xl, TextBase } from "./TextElements";

type HintContent = {
    title: string
    body: string
}
export const hints: HintContent[] = [
    {
        title: "Навигационный бар",
        body: "Выберите страницы которые вам интересны. Это вам сохранит время!"
    },
    {
        title: "Слабовидящий режим",
        body: "Если у вас есть проблемы со зрением ! Или вам приносит какой нибудь дискомфорт глазам воспользуйтесь этим режимом"
    },
    {
        title: "Меняйте режим экрана темный светлый",
        body: "Чтобы было удобно вам просматривать наш сайт в любое время суток воспользуйтесь нашим режимом"
    },
    {
        title: "Меняйте язык который вам удобен",
        body: "Вы можете язык на русский также на казахский"
    },
    {
        title: "Профиль",
        body: "Зарегестрируйтесь или войдите после чего можете посмотреть ваш личный кабинет!"
    },
    {
        title: "Заказать звонок",
        body: "Если у вас возникли вопросы или хотите чтоб вам позвонили воспользуйтесь заказать звонок"
    },
    {
        title: "Записаться",
        body: "Хотите записаться? После регистрации вы можете записаться где заполните легкую форму"
    },
]

type HintProps = {
    hintPos: 'top' | 'bottom'
    pointerPos: 'center' | 'end'
    right?: string
}

export type HintContextType = {
    step: number
    next: () => void
    close: () => void
}

export const HintContext = createContext<HintContextType | null>(null);

function Hint({ pointerPos = 'center', hintPos = 'top', right = 'right-0' }: HintProps) {
    const { step, next, close } = useContext(HintContext) as HintContextType;

    return (
        <div className={`w-fit z-100 absolute flex flex-col ${hintPos === 'bottom' ? 'top-full' : 'bottom-full'} ${pointerPos === 'center' ? 'mx-auto left-0 right-0' : right}`}>
            <div className={`flex ${pointerPos === 'center' ? 'ml-6 justify-center' : 'mr-10 justify-end'} ${hintPos === 'bottom' ? 'order-first' : 'order-last'}`}>
                <div className={`w-0 h-0 ${hintPos === 'bottom' ? 'border-b-[35px]' : 'border-t-[35px]'} border-l-[60px] border-r-[25px] border-blue-white dark:border-blue-dark border-l-[transparent] border-r-[transparent] dark:border-l-[transparent] dark:border-r-[transparent]`}></div>
            </div>
            <div className="p-4 flex flex-col gap-5 rounded-2xl bg-blue-white dark:bg-blue-dark">
                <div>
                    <Text2Xl className="font-semibold text-primary-dark">Навигационный бар</Text2Xl>
                </div>
                <div className="w-[430px]">
                    <TextBase className="text-primary-dark">Выберите страницы которые вам интересны. Это вам сохранит время !</TextBase>
                </div>
                <div className="flex justify-between">
                    <div className="flex items-center hover:cursor-pointer" onClick={() => close()}>
                        <TextBase className="font-medium text-primary-dark">Пропустить</TextBase>
                        <Close />
                    </div>
                    {step === 7 ?
                        <div className="hover:cursor-pointer" onClick={() => close()}>
                            <TextBase className="font-medium text-primary-dark">Понятно!</TextBase>
                        </div>
                        :
                        <div className="flex items-center hover:cursor-pointer" onClick={() => next()}>
                            <TextBase className="font-medium text-primary-dark">Далее</TextBase>
                            <Next />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Hint;

function Close() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6 6L18 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
}

function Next() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 17L18 12L13 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6 17L11 12L6 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
}