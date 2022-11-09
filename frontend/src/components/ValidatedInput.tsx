import { useEffect, useState } from "react";
import { Input } from "reactstrap";

// type InputParams = {
//     regex: RegExp,
//     validationMessage: string,
//     value: string,
//     // rest: any
// }

const ValidatedInput = ({ regex, validationMessage, value, ...rest }: any) => {

    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (value.match(regex)) {
            setErrorMessage("");
            return
        }
        setErrorMessage(validationMessage)
    }, [value])

    return (
        <>
            <Input {...rest} value={value} />
            <p className="error-message">{errorMessage}</p>
        </>
    );
};

export default ValidatedInput;
