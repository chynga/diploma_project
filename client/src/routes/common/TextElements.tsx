import { useContext } from "react";
import { VisuallyImpairedContext, VisuallyImpairedContextType } from "./header/VisuallyImpairedSettingBar";

type TextProps = {
    children: any,
    className?: string,
    blue?: boolean,
}

function Text4Xl({ children, className, blue = false }: TextProps) {
    const { visuallyImpairedSettings } =
        useContext(VisuallyImpairedContext) as VisuallyImpairedContextType;
    const fontSize = !visuallyImpairedSettings.isOn ?
        "text-2xl md:text-4xl"
        :
        visuallyImpairedSettings.fontSize === "small" ?
            "text-xl md:text-3xl"
            :
            visuallyImpairedSettings.fontSize === "medium" ?
                "text-2xl md:text-4xl"
                :
                "text-3xl md:text-5xl";

    const textColor = !visuallyImpairedSettings.isOn ?
        `text-${blue ? 'blue' : 'primary'}-white dark:text-${blue ? 'blue' : 'primary'}-dark`
        :
        visuallyImpairedSettings.theme === "black" ?
            "text-primary-dark"
            :
            "text-primary-white";

    return (
        <span className={`${fontSize} ${textColor} ${className}`}>
            {children}
        </span>
    );
}

function Text3Xl({ children, className, blue = false }: TextProps) {
    const { visuallyImpairedSettings } =
        useContext(VisuallyImpairedContext) as VisuallyImpairedContextType;
    const fontSize = !visuallyImpairedSettings.isOn ?
        "text-xl md:text-3xl"
        :
        visuallyImpairedSettings.fontSize === "small" ?
            "text-lg md:text-2xl"
            :
            visuallyImpairedSettings.fontSize === "medium" ?
                "text-xl md:text-3xl"
                :
                "text-2xl md:text-4xl";

    const textColor = !visuallyImpairedSettings.isOn ?
        `text-${blue ? 'blue' : 'primary'}-white dark:text-${blue ? 'blue' : 'primary'}-dark`
        :
        visuallyImpairedSettings.theme === "black" ?
            "text-primary-dark"
            :
            "text-primary-white";

    return (
        <span className={`${fontSize} ${textColor} ${className}`}>
            {children}
        </span>
    );
}

function Text2Xl({ children, className, blue = false }: TextProps) {
    const { visuallyImpairedSettings } =
        useContext(VisuallyImpairedContext) as VisuallyImpairedContextType;
    const fontSize = !visuallyImpairedSettings.isOn ?
        "text-lg md:text-2xl"
        :
        visuallyImpairedSettings.fontSize === "small" ?
            "text-lg md:text-xl"
            :
            visuallyImpairedSettings.fontSize === "medium" ?
                "text-lg md:text-2xl"
                :
                "text-xl md:text-3xl";

    const textColor = !visuallyImpairedSettings.isOn ?
        `text-${blue ? 'blue' : 'primary'}-white dark:text-${blue ? 'blue' : 'primary'}-dark`
        :
        visuallyImpairedSettings.theme === "black" ?
            "text-primary-dark"
            :
            "text-primary-white";

    return (
        <span className={`${fontSize} ${textColor} ${className}`}>
            {children}
        </span>
    );
}

function TextXl({ children, className, blue = false }: TextProps) {
    const { visuallyImpairedSettings } =
        useContext(VisuallyImpairedContext) as VisuallyImpairedContextType;
    const fontSize = !visuallyImpairedSettings.isOn ?
        "text-lg"
        :
        visuallyImpairedSettings.fontSize === "small" ?
            "text-xl"
            :
            visuallyImpairedSettings.fontSize === "medium" ?
                "text-xl"
                :
                "text-xl";

    const textColor = !visuallyImpairedSettings.isOn ?
        `text-${blue ? 'blue' : 'primary'}-white dark:text-${blue ? 'blue' : 'primary'}-dark`
        :
        visuallyImpairedSettings.theme === "black" ?
            "text-primary-dark"
            :
            "text-primary-white";

    return (
        <span className={`${fontSize} ${textColor} ${className}`}>
            {children}
        </span>
    );
}

function TextLg({ children, className, blue = false }: TextProps) {
    const { visuallyImpairedSettings } =
        useContext(VisuallyImpairedContext) as VisuallyImpairedContextType;
    const fontSize = !visuallyImpairedSettings.isOn ?
        "text-lg"
        :
        visuallyImpairedSettings.fontSize === "small" ?
            "text-base"
            :
            visuallyImpairedSettings.fontSize === "medium" ?
                "text-lg"
                :
                "text-xl";

    const textColor = !visuallyImpairedSettings.isOn ?
        `text-${blue ? 'blue' : 'primary'}-white dark:text-${blue ? 'blue' : 'primary'}-dark`
        :
        visuallyImpairedSettings.theme === "black" ?
            "text-primary-dark"
            :
            "text-primary-white";

    return (
        <span className={`${fontSize} ${textColor} ${className}`}>
            {children}
        </span>
    );
}

function TextBase({ children, className, blue = false }: TextProps) {
    const { visuallyImpairedSettings } =
        useContext(VisuallyImpairedContext) as VisuallyImpairedContextType;
    const fontSize = !visuallyImpairedSettings.isOn ?
        "text-base"
        :
        visuallyImpairedSettings.fontSize === "small" ?
            "text-sm"
            :
            visuallyImpairedSettings.fontSize === "medium" ?
                "text-base"
                :
                "text-lg";

    const textColor = !visuallyImpairedSettings.isOn ?
        `text-${blue ? 'blue' : 'primary'}-white dark:text-${blue ? 'blue' : 'primary'}-dark`
        :
        visuallyImpairedSettings.theme === "black" ?
            "text-primary-dark"
            :
            "text-primary-white";

    return (
        <span className={`${fontSize} ${textColor} ${className}`}>
            {children}
        </span>
    );
}

function TextSm({ children, className, blue = false }: TextProps) {
    const { visuallyImpairedSettings } =
        useContext(VisuallyImpairedContext) as VisuallyImpairedContextType;
    const fontSize = !visuallyImpairedSettings.isOn ?
        "text-sm"
        :
        visuallyImpairedSettings.fontSize === "small" ?
            "text-xs"
            :
            visuallyImpairedSettings.fontSize === "medium" ?
                "text-sm"
                :
                "text-base";

    const textColor = !visuallyImpairedSettings.isOn ?
        `text-${blue ? 'blue' : 'primary'}-white dark:text-${blue ? 'blue' : 'primary'}-dark`
        :
        visuallyImpairedSettings.theme === "black" ?
            "text-primary-dark"
            :
            "text-primary-white";

    return (
        <span className={`${fontSize} ${textColor} ${className}`}>
            {children}
        </span>
    );
}

export {
    Text4Xl,
    Text3Xl,
    Text2Xl,
    TextXl,
    TextLg,
    TextBase,
    TextSm,
}