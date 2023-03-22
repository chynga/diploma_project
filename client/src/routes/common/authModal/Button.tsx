type ButtonParams = {
    isLoading?: boolean
}
function Button({ isLoading = false }: ButtonParams) {
    return (
        <button className={`mt-6 px-8 py-3 inline-block bg-blue-white dark:bg-blue-dark text-lg text-primary-dark font-semibold drop-shadow-lg rounded-full ${isLoading ? "bg-[#AEC9EE] hover:cursor-not-allowed" : ""}`}>
            Отправить
        </button>
    );
}

export default Button;