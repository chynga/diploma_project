import { Link } from "react-router-dom";
import { TextBase } from "./TextElements";

type LinkButton = {
    to: string,
    text: string,
}

function LinkButton({ to, text }: LinkButton) {
    return (
        <Link to={to}>
            <TextBase>
                <div className="px-8 py-3 font-bold inline-block bg-blue-white dark:bg-blue-dark text-primary-dark drop-shadow-lg rounded-full">
                    {text}
                </div>
            </TextBase>
        </Link>
    );
}

export default LinkButton;