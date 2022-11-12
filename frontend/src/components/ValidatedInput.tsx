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
        if (field.value !== "") {
            setField((prevState: any) => ({
                ...prevState, 
                startedTyping: true
            }))
        }
        
        if (field.value.match(regex)) {
            setErrorMessage("");
            setField((prevState: any) => ({
                ...prevState, 
                isValid: true
            }))
            return
        }
        setErrorMessage(validationMessage)
        setField((prevState: any) => ({
                ...prevState, 
                isValid: false
            }))
    }, [field.value])

    return (
        <>
            <Input {...rest} value={field.value} />
            {field.startedTyping ? <p className="error-message">{errorMessage}</p> : ""}
        </>
    );
};

export default ValidatedInput;
