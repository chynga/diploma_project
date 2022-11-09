import { useEffect, useState } from "react";
import { Input } from "reactstrap";

// type InputParams = {
//     regex: RegExp,
//     validationMessage: string,
//     value: string,
//     // rest: any
// }

const ValidatedInput = ({ regex, validationMessage, field, setField, ...rest }: any) => {

    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (field.value.match(regex)) {
            setErrorMessage("");
            setField({value: field.value, isValid: true})
            return
        }
        setErrorMessage(validationMessage)
        setField({value: field.value, isValid: false})
    }, [field.value])

    return (
        <>
            <Input {...rest} value={field.value} />
            <p className="error-message">{errorMessage}</p>
        </>
    );
};

export default ValidatedInput;
