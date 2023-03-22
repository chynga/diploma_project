type TextProps = {
    children: any,
    className?: string,
    blue?: boolean,
}

function Text4Xl({ children, className, blue = false }: TextProps) {
    return (
        <span className={`text-2xl lg:text-4xl text-${blue ? 'blue' : 'primary'}-white dark:text-${blue ? 'blue' : 'primary'}-dark ${className}`}>
            {children}
        </span>
    );
}

function Text3Xl({ children, className, blue = false }: TextProps) {
    return (
        <span className={`text-3xl text-${blue ? 'blue' : 'primary'}-white dark:text-${blue ? 'blue' : 'primary'}-dark ${className}`}>
            {children}
        </span>
    );
}

function Text2Xl({ children, className, blue = false }: TextProps) {
    return (
        <span className={`text-2xl text-${blue ? 'blue' : 'primary'}-white dark:text-${blue ? 'blue' : 'primary'}-dark ${className}`}>
            {children}
        </span>
    );
}

function TextXl({ children, className, blue = false }: TextProps) {
    return (
        <span className={`text-xl text-${blue ? 'blue' : 'primary'}-white dark:text-${blue ? 'blue' : 'primary'}-dark ${className}`}>
            {children}
        </span>
    );
}

function TextLg({ children, className, blue = false }: TextProps) {
    return (
        <span className={`text-lg text-${blue ? 'blue' : 'primary'}-white dark:text-${blue ? 'blue' : 'primary'}-dark ${className}`}>
            {children}
        </span>
    );
}

function TextBase({ children, className, blue = false }: TextProps) {
    return (
        <span className={`text-base font-normal text-${blue ? 'blue' : 'primary'}-white dark:text-${blue ? 'blue' : 'primary'}-dark ${className}`}>
            {children}
        </span>
    );
}

function TextSm({ children, className, blue = false }: TextProps) {
    return (
        <span className={`text-sm font-normal text-${blue ? 'blue' : 'primary'}-white dark:text-${blue ? 'blue' : 'primary'}-dark ${className}`}>
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