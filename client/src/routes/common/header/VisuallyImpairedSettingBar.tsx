import { createContext, useContext } from "react";
import { TextBase } from "../TextElements";

type VisuallyImpairedFontSize = "small" | "medium" | "large";
type VisuallyImpairedTheme = "white" | "black" | "blue";

export type VisuallyImpairedSettings = {
    isOn: boolean
    fontSize: VisuallyImpairedFontSize
    theme: VisuallyImpairedTheme
}

export type VisuallyImpairedContextType = {
    visuallyImpairedSettings: VisuallyImpairedSettings
    setVisuallyImpairedSettings: (v: VisuallyImpairedSettings) => void
}

export const VisuallyImpairedContext = createContext<VisuallyImpairedContextType | null>(null);

function VisuallyImpairedSettingBar() {
    const { visuallyImpairedSettings, setVisuallyImpairedSettings } =
        useContext(VisuallyImpairedContext) as VisuallyImpairedContextType;

    const changeFont = (fontSize: VisuallyImpairedFontSize) => {
        setVisuallyImpairedSettings({
            ...visuallyImpairedSettings,
            fontSize
        })
    }

    const changeTheme = (theme: VisuallyImpairedTheme) => {
        setVisuallyImpairedSettings({
            ...visuallyImpairedSettings,
            theme
        })
    }

    const borderColor = visuallyImpairedSettings.theme === "black" ?
        "border-primary-dark"
        :
        "border-[#353535]";

    return (
        <>
            {visuallyImpairedSettings.isOn ?
                <div className={`p-1 flex flex-col sm:flex-row justify-center items-center gap-7 border-y ${borderColor}`}>
                    <div className="flex justify-center items-center gap-2">
                        <TextBase>Размер Шрифта:</TextBase>
                        <FontButton selected={visuallyImpairedSettings.fontSize === "small"} fontSize={"small"} setFont={() => changeFont("small")} />
                        <FontButton selected={visuallyImpairedSettings.fontSize === "medium"} fontSize={"medium"} setFont={() => changeFont("medium")} />
                        <FontButton selected={visuallyImpairedSettings.fontSize === "large"} fontSize={"large"} setFont={() => changeFont("large")} />
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <TextBase>Цвет:</TextBase>
                        <ThemeButton selected={visuallyImpairedSettings.theme === "white"} theme={"white"} setTheme={() => changeTheme("white")} />
                        <ThemeButton selected={visuallyImpairedSettings.theme === "black"} theme={"black"} setTheme={() => changeTheme("black")} />
                        <ThemeButton selected={visuallyImpairedSettings.theme === "blue"} theme={"blue"} setTheme={() => changeTheme("blue")} />
                    </div>
                </div>
                :
                <></>
            }
        </>
    )
}

type FontButtonProps = {
    selected: boolean
    fontSize: VisuallyImpairedFontSize
    setFont: () => void
}

function FontButton({ selected, fontSize, setFont }: FontButtonProps) {
    return (
        <>
            {fontSize === "small" ?
                <svg width="38" height="51" viewBox="0 0 38 51" fill="none" xmlns="http://www.w3.org/2000/svg"
                    className={selected ? "" : "hover:cursor-pointer"}
                    onClick={setFont}>
                    <rect x="1" y="1" width="36" height="49" className={`${selected ? "fill-[#353535]" : "fill-white"}`} />
                    <path d="M8.92 35.5L17.88 15.9H19.924L28.884 35.5H26.7L18.468 17.104H19.308L11.076 35.5H8.92ZM12.448 30.264L13.064 28.584H24.46L25.076 30.264H12.448Z" className={`${selected ? "fill-white" : "fill-[#353535]"}`} />
                    <rect x="1" y="1" width="36" height="49" className={`${selected ? "stroke-white" : "stroke-[#353535]"}`} />
                </svg>
                :
                <>
                    {fontSize === "medium" ?
                        <svg width="44" height="61" viewBox="0 0 44 61" fill="none" xmlns="http://www.w3.org/2000/svg"
                            className={selected ? "" : "hover:cursor-pointer"}
                            onClick={setFont}>
                            <rect x="1" y="1" width="42" height="59" className={`${selected ? "fill-[#353535]" : "fill-white"}`} />
                            <path d="M9.04 43.5L20.56 18.3H23.188L34.708 43.5H31.9L21.316 19.848H22.396L11.812 43.5H9.04ZM13.576 36.768L14.368 34.608H29.02L29.812 36.768H13.576Z" className={`${selected ? "fill-white" : "fill-[#353535]"}`} />
                            <rect x="1" y="1" width="42" height="59" className={`${selected ? "stroke-white" : "stroke-[#353535]"}`} />
                        </svg>
                        :
                        <svg width="53" height="76" viewBox="0 0 53 76" fill="none" xmlns="http://www.w3.org/2000/svg"
                            className={selected ? "" : "hover:cursor-pointer"}
                            onClick={setFont}>
                            <rect x="1" y="1" width="51" height="74" className={`${selected ? "fill-[#353535]" : "fill-white"}`} />
                            <path d="M9.22 55L24.58 21.4H28.084L43.444 55H39.7L25.588 23.464H27.028L12.916 55H9.22ZM15.268 46.024L16.324 43.144H35.86L36.916 46.024H15.268Z" className={`${selected ? "fill-white" : "fill-[#353535]"}`} />
                            <rect x="1" y="1" width="51" height="74" className={`${selected ? "stroke-white" : "stroke-[#353535]"}`} />
                        </svg>
                    }
                </>
            }
        </>
    )
}

type ThemeButtonProps = {
    selected: boolean
    theme: VisuallyImpairedTheme
    setTheme: () => void
}

function ThemeButton({ selected, theme, setTheme }: ThemeButtonProps) {
    const { visuallyImpairedSettings } =
        useContext(VisuallyImpairedContext) as VisuallyImpairedContextType;

    return (
        <>
            {theme === "white" ?
                <svg width="33" height="45" viewBox="0 0 33 45" fill="none" xmlns="http://www.w3.org/2000/svg"
                    className={selected ? "" : "hover:cursor-pointer"}
                    onClick={setTheme}>
                    <rect x="1.5" y="1.5" width="15" height="42" fill="#353535" />
                    <rect x="16.5" y="1.5" width="15" height="42" fill="white" />
                    <rect x="1" y="1" width="31" height="43" className={visuallyImpairedSettings.theme === "black" ? "stroke-white" : `stroke-[#353535]`} />
                </svg>
                :
                <>
                    {theme === "black" ?
                        <svg width="33" height="45" viewBox="0 0 33 45" fill="none" xmlns="http://www.w3.org/2000/svg"
                            className={selected ? "" : "hover:cursor-pointer"}
                            onClick={setTheme}>
                            <rect x="1.5" y="1.5" width="15" height="42" fill="white" />
                            <rect x="16.5" y="1.5" width="15" height="42" fill="#353535" />
                            <rect x="1" y="1" width="31" height="43" className={visuallyImpairedSettings.theme === "black" ? "stroke-white" : `stroke-[#353535]`} />
                        </svg>
                        :
                        <svg width="33" height="45" viewBox="0 0 33 45" fill="none" xmlns="http://www.w3.org/2000/svg"
                            className={selected ? "" : "hover:cursor-pointer"}
                            onClick={setTheme}>
                            <rect x="1.5" y="1.5" width="15" height="42" fill="#063462" />
                            <rect x="16.5" y="1.5" width="15" height="42" fill="#9DD1FF" />
                            <rect x="1" y="1" width="31" height="43" className={visuallyImpairedSettings.theme === "black" ? "stroke-white" : `stroke-[#353535]`} />
                        </svg>
                    }
                </>
            }
        </>
    )
}

export default VisuallyImpairedSettingBar;