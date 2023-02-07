import ServiceCard from "../common/ServiceCard";

function ServicesSection() {
    return (
        <div className="pt-12 bg-[#277ff280] px-20">
            <h2 className="text-center text-xl sm:text-4xl text-primary-white dark:text-primary-dark font-bold">
                Предоставляемые нами услуги
            </h2>
            <div className="py-12">
                <div className="max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-x-14 gap-y-6">
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                </div>
            </div>
        </div>
    );
}

export default ServicesSection;