import { useTranslation } from "react-i18next";
import { TextXl, TextBase, Text4Xl } from "../common/TextElements";

function AdvicesPage() {
    const { t } = useTranslation(["kz", "ru"]);

    return (
        <div className="p-20">
            <div className="flex flex-col lg:flex-row items-center gap-5">
                <div>
                    <Text4Xl blue>
                        <h1 className="font-bold">
                            {t('advice:title')}
                        </h1>
                    </Text4Xl>
                    <TextXl>
                        <h2 className="font-bold mt-3">
                            {t('advice:rule:title')}
                        </h2>
                    </TextXl>
                    <TextBase>
                        <h3 className="font-medium mt-5">
                            {t('advice:rule:first:title')}
                        </h3>
                    </TextBase>
                    <TextBase>
                        <p className="font-light mt-3">
                            {t('advice:rule:first:firstText')}
                        </p>
                    </TextBase>
                    <TextBase>
                        <p className="font-light mt-3">
                            {t('advice:rule:first:secondText')}
                        </p>
                    </TextBase>
                </div>
                <div>
                    <img src="/advice-1.png" alt="" className="max-w-[440px] shadow-blue" />
                </div>
            </div>

            <div>
                <TextBase>
                    <h3 className="font-medium mt-5">
                        {t('advice:rule:second:title')}
                    </h3>
                </TextBase>
                <TextBase>
                    <p className="font-light mt-3">
                        {t('advice:rule:second:text')}
                    </p>
                </TextBase>
                <TextBase>
                    <h3 className="font-medium mt-5">
                        {t('advice:rule:third:title')}
                    </h3>
                </TextBase>
                <TextBase>
                    <p className="font-light mt-3">
                        {t('advice:rule:third:text')}
                    </p>
                </TextBase>
                <TextBase>
                    <h3 className="font-medium mt-5">
                        {t('advice:rule:fourth:title')}
                    </h3>
                </TextBase>
                <TextBase>
                    <p className="font-light mt-3">
                        {t('advice:rule:fourth:firstText')}
                    </p>
                </TextBase>
                <TextBase>
                    <p className="font-light mt-3">
                        {t('advice:rule:fourth:secondText')}
                    </p>
                </TextBase>
                <TextBase>
                    <h3 className="font-medium mt-5">
                        {t('advice:rule:fifth:title')}
                    </h3>
                </TextBase>
                <TextBase>
                    <p className="font-light mt-3">
                        {t('advice:rule:fifth:firstText')}
                    </p>
                </TextBase>
                <TextBase>
                    <p className="font-light mt-3">
                        {t('advice:rule:fifth:secondText')}
                    </p>
                </TextBase>
            </div>

            <div className="mt-6 flex flex-col lg:flex-row items-center lg:items-start gap-10">
                <div>
                    <TextXl>
                        <h2 className="font-bold mt-3">
                            {t('advice:recommendation:title')}
                        </h2>
                    </TextXl>
                    <TextBase>
                        <h3 className="font-medium mt-5">
                            {t('advice:recommendation:first:title')}
                        </h3>
                    </TextBase>
                    <TextBase>
                        <p className="font-light mt-3">
                            {t('advice:recommendation:first:firstText')}
                        </p>
                    </TextBase>
                    <TextBase>
                        <p className="font-light mt-3">
                            {t('advice:recommendation:first:secondText')}
                        </p>
                    </TextBase>
                </div>
                <div className="lg:mt-10">
                    <img src="/advice-2.png" alt="" className="max-w-[350px] shadow-blue" />
                </div>
            </div>

            <div>
                <TextBase>
                    <h3 className="font-medium mt-5">
                        {t('advice:recommendation:second:title')}
                    </h3>
                </TextBase>
                <TextBase>
                    <p className="font-light mt-3">
                        {t('advice:recommendation:second:text')}
                    </p>
                </TextBase>
                <TextBase>
                    <h3 className="font-medium mt-5">
                        {t('advice:recommendation:third:title')}
                    </h3>
                </TextBase>
                <TextBase>
                    <p className="font-light mt-3">
                        {t('advice:recommendation:third:text')}
                    </p>
                </TextBase>
            </div>
        </div >
    );
}

export default AdvicesPage;