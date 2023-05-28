import { Text2Xl, TextXl } from "../../common/TextElements";
import { Service } from "../../common/types";

type WhyUsSectionProps = {
    service: Service | undefined
}

function WhyUsSection({ service }: WhyUsSectionProps) {

    return (
        <div>
            <Text2Xl>
                <h2 className="text-center font-bold">
                    Почему надо выбрать именно нас ?
                </h2>
            </Text2Xl>
            <div className="mt-6 flex flex-col gap-6">
                {service?.subServices?.map((subService, index) => {
                    return (
                        <div key={index} className="py-6 px-12 rounded-2xl flex items-center justify-between gap-10 bg-[rgba(39,127,242,0.2)] dark:bg-blue-dark">
                            <TextXl>
                                <p className="font-medium">
                                    {subService.title}
                                </p>
                            </TextXl>
                            <TextXl>
                                <p className="font-medium">
                                    {subService.price}
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