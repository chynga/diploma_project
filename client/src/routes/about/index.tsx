import { useTranslation } from "react-i18next";
import { Text2Xl, Text4Xl, TextXl } from "../common/TextElements";
import LocationSection from "../home/LocationSection";
import Pano from "./PanoView";

function AboutPage() {
    const { t } = useTranslation(["kz", "ru"]);

    return (
        <div className="text-center">
            <Text4Xl>
                <h1 className="pt-20 font-bold">
                    {t('about:title')}
                </h1>
            </Text4Xl>
            <Pano />
            <TextXl>
                <div className="px-20 mt-3 flex justify-center">
                    <div className="max-w-[800px]">
                        <p className="mt-3">
                            {t('about:subtitle')}
                        </p>
                        <p>
                            {t('about:firstText')}
                        </p>
                        <p className="mt-6">
                            {t('about:secondText')}
                        </p>
                    </div>
                </div>
            </TextXl>
            <Text2Xl>
                <h1 className="mt-10 font-bold">
                    Наша Клиника
                </h1>
            </Text2Xl>
            <div className="mt-5 flex items-start gap-x-5 overflow-x-auto">
                <img src="/about/IMG_2064.jpg" className="h-[300px]" />
                <img src="/about/IMG_2017.jpg" className="h-[300px]" />
                <img src="/about/IMG_2135.jpg" className="h-[300px]" />
                <img src="/about/IMG_2121.jpg" className="h-[300px]" />
                <img src="/about/IMG_2020.jpg" className="h-[300px]" />
                <img src="/about/IMG_2130.jpg" className="h-[300px]" />
                <img src="/about/IMG_2131.jpg" className="h-[300px]" />
                <img src="/about/IMG_2136.jpg" className="h-[300px]" />
            </div>
            <LocationSection />
        </div>
    );
}

export default AboutPage;