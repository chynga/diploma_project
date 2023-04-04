import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import AppointmentModal from "../common/AppointmentModal";
import Hint, { HintContext, HintContextType } from "../common/Hint";
import { Text4Xl, TextBase, TextLg } from "../common/TextElements";

function BannerSection() {
    const [showAppointmentForm, setShowAppointmentForm] = useState(false);
    const { t, i18n } = useTranslation(["kz", "ru"]);
    const { step, next, close } = useContext(HintContext) as HintContextType;

    const toggleHint = () => {
        step !== 0 ? close() : next()
    }

    return (
        <>
            <div className="relative w-full h-[574px] bg-[url('images/banner.jpg')]
                         bg-cover bg-center flex justify-center items-center
                         bg-black">
                <div className="z-20 absolute top-0 right-0 mt-1 py-2 px-6 bg-blue-white dark:bg-blue-dark shadow-[0px_0px_3px_3px_rgba(39,127,242,0.5)] rounded-l-lg hover:cursor-pointer"
                    onClick={toggleHint}>
                    <TextBase className="text-primary-dark">Подсказки</TextBase>
                </div>
                <div className="absolute z-10 top-0 right-0 bottom-0 left-0 dark:bg-[rgba(77,77,77,0.5)]"></div>
                <div className="z-20 flex flex-col max-w-2xl justify-center items-center">
                    <Text4Xl>
                        <h1 className="text-center font-bold">{t('home:banner:title:firstPart')}
                            <span className="text-blue-white"> {t('home:banner:title:bluePart')} </span>{i18n.language === "ru" ? <br /> : <></>}
                            {t('home:banner:title:lastPart:first')} {i18n.language === "ru" ? <br /> : <></>}
                            {t('home:banner:title:lastPart:second')}
                        </h1>
                    </Text4Xl>
                    <TextLg className="mt-5 text-center">{t('home:banner:discount')}</TextLg>
                    <div className="mt-8 relative">
                        <div className="px-8 py-3 bg-blue-white dark:bg-blue-dark drop-shadow-lg rounded-full hover:cursor-pointer"
                            onClick={() => setShowAppointmentForm(true)}>
                            <TextLg>
                                <span className="font-bold text-primary-dark">
                                    {t('common:makeAppointment')}
                                </span>
                            </TextLg>
                        </div>
                        {step === 7 ?
                            <Hint hintPos={"top"} pointerPos={"end"} />
                            :
                            <></>
                        }
                    </div>
                    <TextLg className="mt-8 text-center">{t('home:banner:downloadApp')}</TextLg>
                    <img src="googlePlayButton.png" alt="" className="mt-3 w-[145px]" />
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