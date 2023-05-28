import { Text2Xl, TextXl } from "../../common/TextElements";

function WhyUsSection() {
    const reasons = [
        {
            "text": "Прицельный рентген снимок",
            "price": "2000 тг",
        },
        {
            "text": "Панорамный снимок",
            "price": "3000 тг",
        },
        {
            "text": "Анестезия",
            "price": "2000 тг",
        },
        {
            "text": "Поверхностный кариес",
            "price": "от 10 000 тг",
        },
        {
            "text": "Средний кариес",
            "price": "от 15 000 тг",
        },
        {
            "text": "Глубокий кариес",
            "price": "от 20 000 тг",
        },
        {
            "text": "Удаление зуба",
            "price": "от 10 000 тг",
        },
    ]

    return (
        <div>
            <Text2Xl>
                <h2 className="text-center font-bold">
                    Почему надо выбрать именно нас ?
                </h2>
            </Text2Xl>
            <div className="mt-6 flex flex-col gap-6">
                {reasons.map((reason, index) => {
                    return (
                        <div key={index} className="py-6 px-12 rounded-2xl flex items-center justify-between gap-10 bg-[rgba(39,127,242,0.2)] dark:bg-blue-dark">
                            <TextXl>
                                <p className="font-medium">
                                    {reason.text}
                                </p>
                            </TextXl>
                            <TextXl>
                                <p className="font-medium">
                                    {reason.price}
                                </p>
                            </TextXl>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default WhyUsSection;