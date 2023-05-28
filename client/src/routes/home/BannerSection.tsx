import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import AppointmentModal from "../common/AppointmentModal";
import Hint, { HintContext, HintContextType, hints } from "../common/Hint";
import { Text4Xl, TextBase, TextLg } from "../common/TextElements";
import { VisuallyImpairedContext, VisuallyImpairedContextType } from "../common/header/VisuallyImpairedSettingBar";

function BannerSection() {
    const [showAppointmentForm, setShowAppointmentForm] = useState(false);
    const { t, i18n } = useTranslation(["kz", "ru"]);
    const { step, next, close } = useContext(HintContext) as HintContextType;
    const { visuallyImpairedSettings } =
        useContext(VisuallyImpairedContext) as VisuallyImpairedContextType;

    const toggleHint = () => {
        step !== 0 ? close() : next()
    }

    const buttonColor = !visuallyImpairedSettings.isOn ?
        "bg-blue-white dark:bg-blue-dark shadow-[0px_0px_3px_3px_rgba(39,127,242,0.5)]"
        :
        visuallyImpairedSettings.theme === "black" ?
            "bg-white"
            :
            "bg-[#353535]";

    const buttonTextColor = !visuallyImpairedSettings.isOn ?
        "text-primary-dark"
        :
        visuallyImpairedSettings.theme === "black" ?
            "text-primary-white"
            :
            "text-primary-dark";

    return (
        <>
            <div className={`relative w-full h-[574px] 
                        ${visuallyImpairedSettings.isOn ? "" : "bg-cover bg-center bg-[url('images/banner.jpg')] bg-black"}
                        flex justify-center items-center`}>
                <div className={`hidden lg:block z-20 absolute top-0 right-0 mt-1 py-2 px-6 ${buttonColor} rounded-l-lg hover:cursor-pointer`}
                    onClick={toggleHint}>
                    <TextBase>
                        <span className={buttonTextColor}>
                            {t("hint:title")}
                        </span>
                    </TextBase>
                </div>
                {visuallyImpairedSettings.isOn ?
                    <></>
                    :
                    <div className="absolute z-10 top-0 right-0 bottom-0 left-0 dark:bg-[rgba(77,77,77,0.5)]"></div>
                }
                <div className="z-20 flex flex-col max-w-2xl justify-center items-center">
                    <Text4Xl>
                        <h1 className="text-center font-bold">{t('home:banner:title:firstPart')}
                            <span className={visuallyImpairedSettings.isOn ? "" : "text-blue-white"}> {t('home:banner:title:bluePart')} </span>{i18n.language === "ru" ? <br /> : <></>}
                            {t('home:banner:title:lastPart:first')} {i18n.language === "ru" ? <br /> : <></>}
                            {t('home:banner:title:lastPart:second')}
                        </h1>
                    </Text4Xl>
                    <TextLg className="mt-5 text-center">{t('home:banner:discount')}</TextLg>
                    <div className="mt-8 relative">
                        <div className={`px-8 py-3 ${buttonColor} drop-shadow-lg rounded-full hover:cursor-pointer`}
                            onClick={() => setShowAppointmentForm(true)}>
                            <TextLg>
                                <span className={`font-bold ${buttonTextColor}`}>
                                    {t('common:makeAppointment')}
                                </span>
                            </TextLg>
                        </div>
                        {step === 6 ?
                            <Hint hintPos={"top"} pointerPos={"end"} content={hints[6]} />
                            :
                            <></>
                        }
                    </div>
                    <TextLg className="mt-8 text-center">{t('home:banner:downloadApp')}</TextLg>
                    <a href="https://play.google.com/store/apps/details?id=com.dental_plaza&pli=1">
                        <img src="googlePlayButton.png" alt="" className="mt-3 w-[145px]" />
                    </a>
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