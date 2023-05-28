import { createContext, useContext } from "react";
import { Text2Xl, TextBase } from "./TextElements";
import { VisuallyImpairedContext, VisuallyImpairedContextType } from "./header/VisuallyImpairedSettingBar";
import { useTranslation } from "react-i18next";

type HintContent = {
    title: string
    body: string
}
export const hints: HintContent[] = [
    {
        title: "hint:hints.0:title",
        body: "hint:hints.0:body"
    },
    {
        title: "hint:hints.1:title",
        body: "hint:hints.1:body"
    },
    {
        title: "hint:hints.2:title",
        body: "hint:hints.2:body"
    },
    {
        title: "hint:hints.3:title",
        body: "hint:hints.3:body"
    },
    {
        title: "hint:hints.4:title",
        body: "hint:hints.4:body"
    },
    {
        title: "hint:hints.5:title",
        body: "hint:hints.5:body"
    },
    {
        title: "hint:hints.6:title",
        body: "hint:hints.6:body"
    },
]

export type HintContextType = {
    step: number
    next: () => void
    close: () => void
}

export const HintContext = createContext<HintContextType | null>(null);

type HintProps = {
    hintPos: 'top' | 'bottom'
    pointerPos: 'center' | 'end'
    right?: string
    content: HintContent
}

function Hint({ pointerPos = 'center', hintPos = 'top', right = 'right-0', content }: HintProps) {
    const { t } = useTranslation(["kz", "ru"]);
    const { step, next, close } = useContext(HintContext) as HintContextType;
    const { visuallyImpairedSettings } =
        useContext(VisuallyImpairedContext) as VisuallyImpairedContextType;

    const bgColor = !visuallyImpairedSettings.isOn ?
        "bg-blue-white dark:bg-blue-dark"
        :
        visuallyImpairedSettings.theme === "black" ?
            "bg-background-white"
            :
            "bg-[#353535]";

    const tipColor = !visuallyImpairedSettings.isOn ?
        "border-blue-white dark:border-blue-dark"
        :
        visuallyImpairedSettings.theme === "black" ?
            "border-white"
            :
            "border-[#353535]";

    const textColor = !visuallyImpairedSettings.isOn ?
        "text-primary-dark"
        :
        visuallyImpairedSettings.theme === "black" ?
            "text-primary-white"
            :
            "text-primary-dark";

    return (
        <div className={`w-fit z-100 absolute flex flex-col ${hintPos === 'bottom' ? 'top-full' : 'bottom-full'} ${pointerPos === 'center' ? 'mx-auto left-0 right-0' : right}`}>
            <div className={`flex ${pointerPos === 'center' ? 'ml-6 justify-center' : 'mr-10 justify-end'} ${hintPos === 'bottom' ? 'order-first' : 'order-last'}`}>
                <div className={`w-0 h-0 ${hintPos === 'bottom' ? 'border-b-[35px]' : 'border-t-[35px]'} border-l-[60px] border-r-[25px] ${tipColor} border-l-[transparent] border-r-[transparent] dark:border-l-[transparent] dark:border-r-[transparent]`}></div>
            </div>
            <div className={`p-4 flex flex-col gap-5 rounded-2xl ${bgColor}`}>
                <div>
                    <Text2Xl className="font-semibold">
                        <span className={textColor}>
                            {t(content.title)}
                        </span>
                    </Text2Xl>
                </div>
                <div className="w-[430px]">
                    <TextBase>
                        <span className={textColor}>
                            {t(content.body)}
                        </span>
                    </TextBase>
                </div>
                <div className="flex justify-between">
                    <div className="flex items-center hover:cursor-pointer" onClick={() => close()}>
                        <TextBase className="font-medium">
                            <span className={textColor}>
                                {t("hint:close")}
                            </span>
                        </TextBase>
                        <Close />
                    </div>
                    {step === 6 ?
                        <div className="hover:cursor-pointer" onClick={() => close()}>
                            <TextBase className="font-medium">
                                <span className={textColor}>
                                    {t("hint:finish")}
                                </span>
                            </TextBase>
                        </div>
                        :
                        <div className="flex items-center hover:cursor-pointer" onClick={() => next()}>
                            <TextBase className="font-medium">
                                <span className={textColor}>
                                    {t("hint:next")}
                                </span>
                            </TextBase>
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
            <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function Next() {
    const { visuallyImpairedSettings } =
        useContext(VisuallyImpairedContext) as VisuallyImpairedContextType;

    const strokeColor = !visuallyImpairedSettings.isOn ?
        "stroke-white"
        :
        visuallyImpairedSettings.theme === "black" ?
            "stroke-primary-white"
            :
            "stroke-primary-dark";

    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={strokeColor}>
            <path d="M13 17L18 12L13 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 17L11 12L6 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}