import WhyUsSection from "./WhyUsSection";

function ServicePage() {
    return (
        <div className="py-12 px-20">
            <div className="flex justify-between items-center gap-6">
                <img src="/service-image.png" alt="" className="w-[300px]" />
                <div>
                    <h2 className="text-xl sm:text-4xl text-primary-white dark:text-primary-dark font-bold">
                        Ортопедия
                    </h2>
                    <p className="mt-6 font-light text-center lg:text-start text-primary-white dark:text-primary-dark">
                        Неправильное пережевывание пищи
                        атрофия десны и костной ткани
                        смещение зубного ряда
                        изменение височно-нижнечелюстного сустава
                        В конце концов, нарушается эстетика. Поэтому, потеряв зуб необходимо пройти ортопедическое лечение. В нашей клинике понятие эстетическое протезирование и есть само протезирование в целом. Соответственно всё, что изготавливается в клинике «ИМАТЭК-ДЕНТ» это высоко эстетичные конструкции, ведь красота и эстетика – веление времени.
                    </p>
                    <p className="mt-6 font-medium text-center lg:text-start text-primary-white dark:text-primary-dark">
                        Цена: 20 000 - 30 000 тг
                    </p>
                    <div className="mt-6 px-8 py-3 inline-block bg-blue-white dark:bg-blue-dark text-lg text-primary-dark font-semibold drop-shadow-lg rounded-full">
                        Записаться
                    </div>
                </div>
            </div>

            <div className="py-12">
                <h2 className="text-xl text-center sm:text-4xl text-primary-white dark:text-primary-dark font-bold">
                    До и После
                </h2>
                <div className="mt-5 flex justify-center items-center gap-6">
                    <img src="/service-before.png" alt="" className="w-[217px]" />
                    <img src="/service-after.png" alt="" className="w-[217px]" />
                </div>
            </div>
            <WhyUsSection />
        </div>
    );
}

export default ServicePage;