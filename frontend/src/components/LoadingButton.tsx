import { Button, Spinner } from "reactstrap";

const LoadingButton = ({ children, isLoading, isDisabled, ...rest }: any) => {

    return (
        <Button {...rest} disabled={isDisabled | isLoading ? true : false} >
            {isLoading ? 
                <Spinner children={false} size="sm" /> :
                children
            }
        </Button>
    );
};

export default LoadingButton;
