import { useTranslation } from "react-i18next";
import { Text4Xl, TextBase, TextLg, TextXl } from "../common/TextElements";
import LocationSection from "../home/LocationSection";

function AboutPage() {
    const { t } = useTranslation(["kz", "ru"]);

    return (
        <div className="p-20 text-center">
            <Text4Xl>
                <h1 className="font-bold mt-10">
                    {t('about:title')}
                </h1>
            </Text4Xl>
            <img src="/about-us-banner.png" alt="" className="w-full" />
            <TextXl>
                <div className="mt-3 flex justify-center">
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
            <LocationSection />
        </div>
    );
}

export default AboutPage;