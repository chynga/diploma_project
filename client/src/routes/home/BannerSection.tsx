import { useState } from "react";
import { useTranslation } from "react-i18next";
import AppointmentModal from "../common/AppointmentModal";
import { Text4Xl, TextBase, TextLg } from "../common/TextElements";

function BannerSection() {
    const [showAppointmentForm, setShowAppointmentForm] = useState(false);
    const { t, i18n } = useTranslation(["kz", "ru"]);

    return (
        <>
            <div className="relative w-full h-[574px] bg-[url('images/banner.jpg')]
                         bg-cover bg-center flex justify-center items-center
                         bg-black">
                <div className="absolute z-10 top-0 right-0 bottom-0 left-0 dark:bg-[rgba(77,77,77,0.5)]"></div>
                <div className="z-20 flex flex-col max-w-2xl justify-center items-center">
                    <Text4Xl>
                        <h1 className="text-center font-bold">{t('home:banner:title:firstPart')}
                            <Text4Xl blue> {t('home:banner:title:bluePart')} </Text4Xl>{i18n.language === "ru" ? <br /> : <></>}
                            {t('home:banner:title:lastPart:first')} {i18n.language === "ru" ? <br /> : <></>}
                            {t('home:banner:title:lastPart:second')}
                        </h1>
                    </Text4Xl>
                    <TextLg className="mt-5 text-center">{t('home:banner:discount:firstPart')} <TextLg blue>{t('home:banner:discount:bluePart')}</TextLg> {t('home:banner:discount:lastPart')}</TextLg>
                    <div className="mt-8 px-8 py-3 bg-blue-white dark:bg-blue-dark drop-shadow-lg rounded-full hover:cursor-pointer"
                        onClick={() => setShowAppointmentForm(true)}>
                        <TextBase>
                            <span className="font-bold text-primary-dark">
                                {t('common:makeAppointment')}
                            </span>
                        </TextBase>
                    </div>
                </div>
            </div>
            {showAppointmentForm ?
                <AppointmentModal setShowAppointmentForm={setShowAppointmentForm} />
                :
                <></>
            }
        </>
    );
}

export default BannerSection;