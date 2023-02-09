import { PlusCircle, ServiceSvg } from "../../common/SvgImages";
import ViewService from "./ViewService";

function ServicesPage() {
    return (
        <div className="px-10">
            <div className="flex flex-wrap justify-center gap-9">
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <AddServiceCard />
            </div>
            <div className="mt-10 bg-background-white dark:bg-background-dark p-10 shadow-lg rounded-lg">
                <ViewService />
            </div>
        </div>
    );
}

function ServiceCard() {
    return (
        <div className="px-9 py-4 flex flex-col items-center justify-between gap-3 shadow-lg rounded-3xl bg-background-white dark:bg-background-dark">
            <ServiceSvg />
            <p className="text-primary-white dark:text-primary-dark">Чистка зубов</p>
        </div>
    );
}

function AddServiceCard() {
    return (
        <div className="px-9 pb-4 pt-8 flex flex-col items-center justify-between gap-3 shadow-lg rounded-3xl bg-background-white dark:bg-background-dark">
            <PlusCircle />
            <p className="text-primary-white dark:text-primary-dark">Добавить</p>
        </div>
    );
}

export default ServicesPage;