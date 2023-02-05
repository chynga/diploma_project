import { Link } from "react-router-dom";

type LinkButton = {
    to: string,
    text: string,
}

function LinkButton({ to, text }: LinkButton) {
    return (
        <Link to={to}>
            <div className="px-8 py-3 inline-block bg-blue-white dark:bg-blue-dark text-lg text-primary-dark font-semibold drop-shadow-lg rounded-full">
                {text}
            </div>
        </Link>
    );
}

export default LinkButton;