import { Text4Xl, TextBase } from "../common/TextElements";
import LocationSection from "../home/LocationSection";

function AboutPage() {
    return (
        <div className="p-20 text-center">
            <img src="/about-us-banner.png" alt="" className="w-full" />
            <Text4Xl>
                <h1 className="font-bold mt-10">
                    О нас
                </h1>
            </Text4Xl>
            <TextBase>
                <div className="flex justify-center">
                    <div className="max-w-[800px]">
                        <p className="mt-3">
                            КОМАНДА С ОБЩЕЙ ЦЕЛЬЮ
                        </p>
                        <p>
                            Наша команда собралась вокруг одной миссии — помогать взрослым и детям справляться с проблемами полости рта надолго или навсегда.Для этого мы закупаем только отборные инструменты и материалы. Например, для пломбирования мы используем световые композиты: японские Estelite Asteria, немецко-американские Filtek Z250-550, английские CERAM-X и Spectrum. Отбеливаем зубы с помощью нидерландской системы Philips Zoom.Параллельно мы также стараемся сохранять доступные цены.
                        </p>
                        <p className="mt-6">
                            Нам важно, чтобы вы чувствовали искренность и персональное отношение. Для этого мы подбираем только чутких и отзывчивых профессионалов. А еще мы создали отдел заботы для ваших просьб — уверены, что всегда сможем найти решение вашей ситуации.
                        </p>
                    </div>
                </div>
            </TextBase>
            <LocationSection />
        </div>
    );
}

export default AboutPage;