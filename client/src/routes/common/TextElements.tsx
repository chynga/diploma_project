type TextProps = {
    children: any,
    className?: string,
    blue?: boolean,
}

function HeaderText1({ children, className, blue = false }: TextProps) {
    return (
        <h1 className={`text-xl sm:text-4xl font-bold text-${blue ? 'blue' : 'primary'}-white dark:text-${blue ? 'blue' : 'primary'}-dark ${className}`}>
            {children}
        </h1>
    );
}

function HeaderText2({ children, className, blue = false }: TextProps) {
    return (
        <h2 className={`font-bold text-lg text-${blue ? 'blue' : 'primary'}-white dark:text-${blue ? 'blue' : 'primary'}-dark ${className}`}>
            {children}
        </h2>
    );
}

function HeaderText3({ children, className, blue = false }: TextProps) {
    return (
        <h3 className={`font-medium text-${blue ? 'blue' : 'primary'}-white dark:text-${blue ? 'blue' : 'primary'}-dark ${className}`}>
            {children}
        </h3>
    );
}

function Text2Xl({ children, className, blue = false }: TextProps) {
    return (
        <div className={`text-2xl text-${blue ? 'blue' : 'primary'}-white dark:text-${blue ? 'blue' : 'primary'}-dark ${className}`}>
            {children}
        </div>
    );
}

function TextXl({ children, className, blue = false }: TextProps) {
    return (
        <div className={`text-xl text-${blue ? 'blue' : 'primary'}-white dark:text-${blue ? 'blue' : 'primary'}-dark ${className}`}>
            {children}
        </div>
    );
}

function TextLg({ children, className, blue = false }: TextProps) {
    return (
        <div className={`text-lg text-${blue ? 'blue' : 'primary'}-white dark:text-${blue ? 'blue' : 'primary'}-dark ${className}`}>
            {children}
        </div>
    );
}

function TextBase({ children, className, blue = false }: TextProps) {
    return (
        <div className={`text-base font-normal text-${blue ? 'blue' : 'primary'}-white dark:text-${blue ? 'blue' : 'primary'}-dark ${className}`}>
            {children}
        </div>
    );
}

function Paragraph({ children, className }: TextProps) {
    return (
        <p className={`font-light text-primary-white dark:text-primary-dark ${className}`}>
            {children}
        </p>
    );
}

export {
    HeaderText1,
    HeaderText2,
    HeaderText3,
    Paragraph,
    Text2Xl,
    TextXl,
    TextLg,
    TextBase,
}