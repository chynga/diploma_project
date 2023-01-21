import { Link } from "react-router-dom";
import Doctor4 from "../common/Doctor4";
import LinkButton from "../common/LinkButton";

function AdvicesSection() {
    return (
        <div className="py-16 px-20 xl:h-[730px]">
            <h2 className="mt-12 text-center text-xl sm:text-4xl text-primary-white dark:text-primary-dark font-bold">
                Советы
            </h2>
            <div className="relative flex flex-col items-center gap-1">
                <div className="xl:absolute left-0 top-24">
                    <AdviceCard title="Только одна щетка" text="Нельзя использовать одну зубную щетку для нескольких членов семьи." />
                </div>
                <div className="xl:absolute top-72">
                    <AdviceCard title="Сочетание температур пищи" text="Не сочетайте горячую пищу с холодной в один прием." />
                </div>
                <div className="xl:absolute right-0 top-24">
                    <AdviceCard title="Твердые предметы" text="Не стоит портить зубы попытками открывания крышечек из-под пива, раскалывать орехи, откусывать леску и т.д. – это может привести только к травме зуба (трещины, сколы)" />
                </div>
                <div className="hidden xl:block absolute top-[63px]">
                    <Doctor4 />
                </div>
                <div className="mt-8 xl:absolute top-[440px]">
                    <LinkButton to={"/advice"} text={"Узнать больше"} />
                </div>
            </div>
        </div>
    );
}

type Advice = {
    title: string;
    text: string;
};

function AdviceCard({ title, text }: Advice) {
    return (
        <Link to={"/"}>
            <div className="mt-5 px-8 pb-5 max-w-[443px] min-h-[120px] border-[1px] border-blue-white dark:border-blue-dark rounded-2xl">
                <h3 className="mt-3 font-bold text-lg text-primary-white dark:text-primary-dark">{title}</h3>
                <p className="font-light text-primary-white dark:text-primary-dark">{text}</p>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 17L18 12L13 7" stroke="#7A95B9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6 17L11 12L6 7" stroke="#7A95B9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
        </Link>
    );
}

export default AdvicesSection;