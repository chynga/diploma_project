import { useEffect, useState } from "react";
import { Button, Spinner } from "reactstrap";

const LoadingButton = ({ children, isLoading, ...rest }: any) => {

    return (
        <Button {...rest}>
            {isLoading ? 
                <Spinner children={false} size="sm" /> :
                children
            }
        </Button>
    );
};

export default LoadingButton;
