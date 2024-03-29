import { useTranslation } from "react-i18next";
import AppointmentForm from "../common/AppointmentForm";
import { Text2Xl, Text4Xl } from "../common/TextElements";
import ServiceSection from "../home/ServicesSection";

function ServicesPage() {
    const { t } = useTranslation(["kz", "ru"]);

    return (
        <div>
            <ServiceSection />
            <section className="py-12 px-20">
                <Text2Xl blue>
                    <p className="text-center font-bold">
                        {t('service:call')}
                    </p>
                </Text2Xl>
                <Text4Xl blue>
                    <h2 className="mt-10 text-center font-bold">
                        {t('service:makeAppointment')}
                    </h2>
                </Text4Xl>
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