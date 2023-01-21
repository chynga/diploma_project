import AppointmentForm from "../common/AppointmentForm";
import ServiceSection from "../home/ServicesSection";

function ServicesPage() {
    return (
        <div>
            <ServiceSection />
            <section className="py-12 px-20">
                <h3 className="text-center font-bold text-lg text-blue-white dark:text-blue-dark">Вас беспокоит боль в полости рта? Запишитесь!</h3>
                <h2 className="mt-10 text-xl text-center sm:text-4xl text-blue-white dark:text-blue-dark font-bold">
                    Записаться
                </h2>
                <div className="flex justify-center">
                    <div className="max-w-[764px]">
                        <AppointmentForm />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ServicesPage;