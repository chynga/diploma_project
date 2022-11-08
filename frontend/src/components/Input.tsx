import { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

type InputParams = {
    regex: RegExp,
}

const ValidatedInput = ({ regex, validationMessage, code, ...rest }: any) => {

    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (code.match(regex)) {
            setErrorMessage("");
            return
        }
        setErrorMessage(validationMessage)
    }, [code])

    return (
        <>
            <Input {...rest} value={code} />
            <p className="error-message">{errorMessage}</p>
        </>
    );
};

export default ValidatedInput;
