import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Text2Xl, Text4Xl } from "../common/TextElements";

function LocationSection() {
    const { t } = useTranslation(["kz", "ru"]);

    return (
        <div className="py-20 px-20">
            <Text4Xl blue>
                <h2 className="text-center font-bold">
                    {t('home:location:title')}
                </h2>
            </Text4Xl>
            <div className="flex justify-center lg:block">
                <div className="mt-20 flex flex-col lg:flex-row lg:justify-between items-bottom lg:items-center gap-5">
                    <div className="md:w-[637px] h-[300px]">
                        <Map />
                    </div>
                    <div className="lg:order-first">
                        <div className="flex justify-start items-center gap-5">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 31.75C17.7125 31.75 17.4237 31.6512 17.19 31.4525C16.8875 31.195 9.7625 25.0775 6.79 18.405C6.50875 17.775 6.7925 17.035 7.42375 16.755C8.0525 16.475 8.7925 16.7575 9.07375 17.3888C11.2475 22.27 16.045 27.0125 17.9788 28.8013C21.3912 25.4888 28 18.0863 28 13.2875C28 7.615 23.5138 3 18 3C12.4863 3 8 7.615 8 13.2875C8 13.9775 7.44 14.5375 6.75 14.5375C6.06 14.5375 5.5 13.9775 5.5 13.2875C5.5 6.23625 11.1075 0.5 18 0.5C24.8925 0.5 30.5 6.23625 30.5 13.2875C30.5 20.6775 19.32 30.9863 18.8437 31.4225C18.605 31.64 18.3025 31.75 18 31.75Z" className="fill-blue-white dark:fill-blue-dark" />
                                <path d="M18 18C15.2425 18 13 15.7575 13 13C13 10.2425 15.2425 8 18 8C20.7575 8 23 10.2425 23 13C23 15.7575 20.7575 18 18 18ZM18 10.5C16.6212 10.5 15.5 11.6212 15.5 13C15.5 14.3787 16.6212 15.5 18 15.5C19.3787 15.5 20.5 14.3787 20.5 13C20.5 11.6212 19.3787 10.5 18 10.5Z" className="fill-blue-white dark:fill-blue-dark" />
                                <path d="M34.25 35.5009H1.75001C1.30501 35.5009 0.892505 35.2647 0.668755 34.8784C0.445005 34.4922 0.443755 34.0184 0.665005 33.6309L5.66501 24.8809C6.00751 24.2822 6.77126 24.0722 7.37001 24.4159C7.96876 24.7584 8.17751 25.5222 7.83501 26.1209L3.90376 33.0009H32.095L28.1638 26.1209C27.8213 25.5222 28.03 24.7584 28.6288 24.4159C29.2275 24.0709 29.9913 24.2822 30.3338 24.8809L35.3338 33.6309C35.555 34.0184 35.5538 34.4922 35.33 34.8784C35.1075 35.2647 34.695 35.5009 34.25 35.5009Z" className="fill-blue-white dark:fill-blue-dark" />
                            </svg>
                            <Text2Xl blue>
                                <p className="mt-3 font-bold">г.Алматы Сатпаева 133/3</p>
                            </Text2Xl>
                        </div>
                        <div className="mt-5 flex justify-start items-center gap-5">
                            <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.245 32.1613C22.0229 32.1523 20.8061 31.9989 19.62 31.7043C15.5239 30.716 11.306 28.209 7.74501 24.6449C4.18408 21.0809 1.67392 16.8621 0.685638 12.7699C-0.354987 8.46525 0.387201 4.78244 2.77314 2.3965L3.45439 1.71525C4.07248 1.0984 4.91005 0.751953 5.78329 0.751953C6.65654 0.751953 7.49411 1.0984 8.1122 1.71525L12.027 5.62931C12.6443 6.2472 12.991 7.08485 12.991 7.95822C12.991 8.83159 12.6443 9.66924 12.027 10.2871L9.71454 12.5988C10.8231 14.5442 12.331 16.491 14.113 18.2731C15.895 20.0551 17.8435 21.5637 19.788 22.6723L22.0997 20.3598C22.4055 20.0539 22.7686 19.8112 23.1682 19.6456C23.5678 19.4801 23.9961 19.3949 24.4286 19.3949C24.8611 19.3949 25.2894 19.4801 25.689 19.6456C26.0886 19.8112 26.4517 20.0539 26.7575 20.3598L30.6716 24.2738C31.289 24.8915 31.6358 25.7291 31.6358 26.6024C31.6358 27.4757 31.289 28.3132 30.6716 28.9309L29.9895 29.6121C28.3075 31.2973 25.9794 32.1613 23.245 32.1613ZM5.78329 3.09416C5.65856 3.09354 5.53495 3.11782 5.41971 3.16558C5.30448 3.21333 5.19993 3.28361 5.1122 3.37228L4.43017 4.05353C2.64345 5.84025 2.12158 8.74103 2.96064 12.2168C3.84892 15.8988 6.13564 19.7246 9.39892 22.9871C12.6622 26.2496 16.4872 28.534 20.17 29.4254C23.6466 30.2645 26.5458 29.7426 28.3325 27.9559L29.0138 27.2746C29.1918 27.0965 29.2917 26.855 29.2917 26.6031C29.2917 26.3513 29.1918 26.1098 29.0138 25.9317L25.1005 22.0176C24.9223 21.8396 24.6808 21.7396 24.429 21.7396C24.1772 21.7396 23.9357 21.8396 23.7575 22.0176L20.827 24.9481C20.6512 25.124 20.424 25.2394 20.1782 25.2776C19.9324 25.3158 19.6808 25.2748 19.4599 25.1606C17.0575 23.9184 14.6356 22.1098 12.456 19.9301C10.2763 17.7504 8.47158 15.3301 7.22626 12.9278C7.1119 12.7069 7.07078 12.4554 7.10884 12.2096C7.1469 11.9638 7.26217 11.7365 7.43798 11.5606L10.3692 8.6301C10.5472 8.45196 10.6472 8.21044 10.6472 7.95861C10.6472 7.70679 10.5472 7.46526 10.3692 7.28713L6.45517 3.37228C6.36716 3.28376 6.26245 3.21359 6.14712 3.16585C6.03178 3.11811 5.90812 3.09374 5.78329 3.09416Z" className="fill-blue-white dark:fill-blue-dark" />
                                <path d="M24.4961 18.073C24.1853 18.073 23.8872 17.9496 23.6675 17.7298C23.4477 17.51 23.3242 17.212 23.3242 16.9012C23.3219 14.8453 22.5043 12.8743 21.0507 11.4206C19.5971 9.9668 17.6261 9.14897 15.5703 9.14648C15.2595 9.14648 14.9614 9.02302 14.7417 8.80325C14.5219 8.58348 14.3984 8.28541 14.3984 7.97461C14.3984 7.66381 14.5219 7.36574 14.7417 7.14597C14.9614 6.9262 15.2595 6.80273 15.5703 6.80273C21.1383 6.80273 25.668 11.334 25.668 16.9012C25.668 17.212 25.5445 17.51 25.3247 17.7298C25.105 17.9496 24.8069 18.073 24.4961 18.073Z" className="fill-blue-white dark:fill-blue-dark" />
                                <path d="M29.4492 18.073C29.1384 18.073 28.8403 17.9496 28.6206 17.7298C28.4008 17.51 28.2773 17.212 28.2773 16.9012C28.2773 9.89414 22.5742 4.19336 15.5703 4.19336C15.2595 4.19336 14.9614 4.06989 14.7417 3.85013C14.5219 3.63036 14.3984 3.33228 14.3984 3.02148C14.3984 2.71068 14.5219 2.41261 14.7417 2.19284C14.9614 1.97307 15.2595 1.84961 15.5703 1.84961C23.8695 1.84961 30.6211 8.60195 30.6211 16.9012C30.6211 17.212 30.4976 17.51 30.2779 17.7298C30.0581 17.9496 29.76 18.073 29.4492 18.073Z" className="fill-blue-white dark:fill-blue-dark" />
                            </svg>
                            <div>
                                <Text2Xl blue>
                                    <p className="mt-3 font-bold">
                                        +7 701 188 5055 <br />
                                        +7 707 188 5055
                                    </p>
                                </Text2Xl>
                            </div>
                        </div>
                        <div className="mt-5 flex justify-start items-center gap-5">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.0003 35.5C13.3253 35.5 8.93158 33.68 5.62658 30.3738C0.224076 24.9725 -1.05967 16.7812 2.43408 9.99375C2.75033 9.38 3.50283 9.13875 4.11783 9.45375C4.73283 9.76875 4.97408 10.5225 4.65783 11.1375C1.66283 16.955 2.76283 23.975 7.39408 28.6063C10.2266 31.44 13.9928 33 18.0003 33C22.0066 33 25.7741 31.44 28.6066 28.6063C31.4391 25.7725 33.0003 22.0063 33.0003 18C33.0003 13.9925 31.4403 10.2262 28.6066 7.39375C25.7728 4.56125 22.0078 3 18.0003 3C13.9928 3 10.2266 4.56125 7.39408 7.39375C6.90533 7.8825 6.11533 7.8825 5.62658 7.39375C5.13783 6.905 5.13783 6.115 5.62658 5.62625C8.93158 2.32125 13.3253 0.5 18.0003 0.5C22.6753 0.5 27.0703 2.32125 30.3741 5.62625C33.6803 8.93125 35.5003 13.325 35.5003 18C35.5003 22.6737 33.6803 27.0688 30.3741 30.3738C27.0703 33.68 22.6753 35.5 18.0003 35.5Z" className="fill-blue-white dark:fill-blue-dark" />
                                <path d="M24.2488 24.25C23.975 24.25 23.7 24.1613 23.4688 23.9762L17.2188 18.9762C16.9225 18.7388 16.75 18.38 16.75 18V8C16.75 7.31 17.31 6.75 18 6.75C18.69 6.75 19.25 7.31 19.25 8V17.4L25.0312 22.0238C25.57 22.4563 25.6575 23.2425 25.2262 23.7812C24.9788 24.0888 24.6163 24.25 24.2488 24.25Z" className="fill-blue-white dark:fill-blue-dark" />
                            </svg>
                            <Text2Xl blue>
                                <p className="mt-3 font-bold">Пн-Вс: 9:00-21:00</p>
                            </Text2Xl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const containerStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '1.5rem',
};

const Map = () => {
    const mapCenter = useMemo(() => ({ lat: 43.23322, lng: 76.8749337 }), [])
    const markerPos = { lat: 43.23322, lng: 76.8749337 };

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    })

    if (!isLoaded) return <div>Loading...</div>
    if (loadError) return <div>ERROR</div>
    return (
        <GoogleMap zoom={14} mapContainerStyle={containerStyle} center={mapCenter} mapContainerClassName="map">
            <Marker position={markerPos} />
        </GoogleMap>
    );
};

export default LocationSection;