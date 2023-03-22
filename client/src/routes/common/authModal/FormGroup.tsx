import { useEffect, useState } from "react";

function FormGroup({ labelText, regex, validationMessage, field, setField, ...rest }: any) {
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (field.value !== "") {
            setField((prevState: any) => ({
                ...prevState,
                startedTyping: true
            }))
        } else {
            setField((prevState: any) => ({
                ...prevState,
                startedTyping: false
            }))
        }

        if (field.value.match(regex)) {
            setErrorMessage("");
            setField((prevState: any) => ({
                ...prevState,
                isValid: true
            }))
            return;
        }
        setErrorMessage(validationMessage)
        setField((prevState: any) => ({
            ...prevState,
            isValid: false
        }))
    }, [field.value]);

    const onChange = (e: React.FormEvent<HTMLInputElement>, setValue: any) => {
        let value = (e.target as HTMLTextAreaElement).value
        setValue((prevState: any) => ({
            ...prevState,
            value,
        }));
    };

    return (
        <div>
            <label className="text-primary-white dark:text-primary-dark" htmlFor="">{labelText}</label>
            <input {...rest}
                className="block mt-2 p-3 text-primary-white dark:text-primary-dark w-[315px] rounded-[10px] bg-[rgba(39,127,242,0.2)]"
                onChange={(event: any) => onChange(event, setField)} />
            {field.startedTyping ?
                <p className="text-red-500 text-sm">{errorMessage}</p> :
                ""}
        </div>
    );
}

export default FormGroup;