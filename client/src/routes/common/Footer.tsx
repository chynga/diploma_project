import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { Instagram, Logo } from "./SvgImages";
import { TextLg, TextXl } from "./TextElements";
import { Service } from "./types";

function Footer() {
    const [services, setServices] = useState<Service[]>([]);
    const location = useLocation();
    const { t } = useTranslation(["kz", "ru"]);

    useEffect(() => {
        const apiUrl = `/api/services`;

        axios.get(apiUrl).then((resp) => {
            const services: Service[] = resp.data.data.services;
            setServices(services);
        });
    }, [])

    if (location.pathname.includes("/profile-panel") ||
        location.pathname.includes("/admin")) {
        return <div></div>
    }

    return (
        <footer className="bg-blue-white dark:bg-blue-dark py-16 px-40 flex flex-col md:flex-row items-center md:items-start justify-between">
            <Logo fill={"white"} />
            <div className="hidden xl:block">
                <TextXl>
                    <h3 className="font-bold text-primary-dark">{t('common:menu')}</h3>
                </TextXl>
                <Link to="/">
                    <TextLg className="text-primary-dark">
                        <div>
                            {t('home:title')}
                        </div>
                    </TextLg>
                </Link>
                <Link to="/about">
                    <TextLg className="text-primary-dark">
                        <div>
                            {t('about:title')}
                        </div>
                    </TextLg>
                </Link>
                <Link to="/services">
                    <TextLg className="text-primary-dark">
                        <div>
                            {t('service:title')}
                        </div>
                    </TextLg>
                </Link>
                <Link to="/doctors">
                    <TextLg className="text-primary-dark">
                        <div>
                            {t('doctor:title')}
                        </div>
                    </TextLg>
                </Link>
                <Link to="/reviews">
                    <TextLg className="text-primary-dark">
                        <div>
                            {t('review:title')}
                        </div>
                    </TextLg>
                </Link>
                <Link to="/advices">
                    <TextLg className="text-primary-dark">
                        <div>
                            {t('advice:title')}
                        </div>
                    </TextLg>
                </Link>
            </div>
            <div className="hidden xl:block">
                <TextXl>
                    <h3 className="font-bold text-primary-dark">{t('service:title')}</h3>
                </TextXl>
                {services.map(service => {
                    return (
                        <Link key={service.id} to={`/services/${service.id}`}>
                            <TextLg className="text-primary-dark">
                                <div>
                                    {service.title}
                                </div>
                            </TextLg>
                        </Link>
                    )
                })}
            </div>
            <div>
                <TextXl>
                    <h3 className="font-bold text-primary-dark">{t('common:contact')}</h3>
                </TextXl>
                <TextLg>
                    <div className="text-primary-dark">
                        г.Алматы <br />
                        Сатпаева 133/3 (напротив ТЦ ADK)
                    </div>
                </TextLg>
                <div className="flex items-center gap-2">
                    <TextLg>
                        <div className="text-primary-dark">
                            dentalcare@gmail.com
                        </div>
                    </TextLg>
                    <svg className="fill-white" width="20" height="14" viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 4.75C18.8011 4.75 18.6103 4.82902 18.4697 4.96967C18.329 5.11032 18.25 5.30109 18.25 5.5V11.5C18.25 11.6989 18.171 11.8897 18.0303 12.0303C17.8897 12.171 17.6989 12.25 17.5 12.25H2.5C2.30109 12.25 2.11032 12.171 1.96967 12.0303C1.82902 11.8897 1.75 11.6989 1.75 11.5V5.5C1.75 5.30109 1.67098 5.11032 1.53033 4.96967C1.38968 4.82902 1.19891 4.75 1 4.75C0.801088 4.75 0.610322 4.82902 0.46967 4.96967C0.329018 5.11032 0.25 5.30109 0.25 5.5V11.5C0.250525 12.0965 0.487923 12.6684 0.91 13.09C1.33155 13.5121 1.90346 13.7495 2.5 13.75H17.5C18.0965 13.7495 18.6684 13.5121 19.09 13.09C19.5121 12.6684 19.7495 12.0965 19.75 11.5V5.5C19.75 5.30109 19.671 5.11032 19.5303 4.96967C19.3897 4.82902 19.1989 4.75 19 4.75Z" />
                        <path d="M9.55047 9.1C9.68029 9.19737 9.83819 9.25 10.0005 9.25C10.1627 9.25 10.3206 9.19737 10.4505 9.1L19.308 2.455C19.4461 2.3508 19.544 2.20202 19.585 2.03389C19.6261 1.86576 19.6077 1.68862 19.533 1.5325C19.4213 1.30174 19.2717 1.09133 19.0905 0.91C18.6689 0.487923 18.097 0.250525 17.5005 0.25H2.50047C1.90393 0.250525 1.33202 0.487923 0.910471 0.91C0.729237 1.09133 0.579666 1.30174 0.467971 1.5325C0.393283 1.68862 0.374884 1.86576 0.415892 2.03389C0.4569 2.20202 0.554792 2.3508 0.692971 2.455L9.55047 9.1ZM2.50047 1.75H17.5005C17.57 1.73904 17.6409 1.73904 17.7105 1.75L10.0005 7.5625L2.29047 1.75C2.36004 1.73904 2.4309 1.73904 2.50047 1.75Z" />
                    </svg>
                </div>
                <div className="flex items-center gap-2">
                    <TextLg>
                        <div className="text-primary-dark">
                            +7 701 188 5055 <br />
                            +7 707 188 5055
                        </div>
                    </TextLg>
                    <svg className="fill-white" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.3462 19.0956C13.613 19.0902 12.8829 18.9981 12.1712 18.8214C9.71357 18.2284 7.18279 16.7242 5.04623 14.5858C2.90966 12.4474 1.40357 9.9161 0.810602 7.46079C0.186227 4.87798 0.631539 2.66829 2.0631 1.23673L2.47185 0.827979C2.84271 0.457865 3.34525 0.25 3.8692 0.25C4.39314 0.25 4.89568 0.457865 5.26654 0.827979L7.61545 3.17642C7.98579 3.54715 8.19381 4.04974 8.19381 4.57376C8.19381 5.09778 7.98579 5.60037 7.61545 5.9711L6.22795 7.35814C6.8931 8.52532 7.79779 9.69345 8.86701 10.7627C9.93623 11.8319 11.1053 12.737 12.272 13.4022L13.659 12.0147C13.8425 11.8312 14.0604 11.6856 14.3001 11.5862C14.5399 11.4869 14.7969 11.4357 15.0564 11.4357C15.3159 11.4357 15.5729 11.4869 15.8126 11.5862C16.0524 11.6856 16.2703 11.8312 16.4537 12.0147L18.8022 14.3631C19.1726 14.7337 19.3807 15.2363 19.3807 15.7602C19.3807 16.2842 19.1726 16.7868 18.8022 17.1574L18.3929 17.5661C17.3837 18.5772 15.9869 19.0956 14.3462 19.0956ZM3.8692 1.65532C3.79435 1.65495 3.72019 1.66952 3.65105 1.69817C3.58191 1.72683 3.51918 1.76899 3.46654 1.8222L3.05732 2.23095C1.98529 3.30298 1.67216 5.04345 2.1756 7.12892C2.70857 9.33813 4.0806 11.6336 6.03857 13.5911C7.99654 15.5486 10.2915 16.9192 12.5012 17.4541C14.5872 17.9575 16.3267 17.6444 17.3987 16.5724L17.8075 16.1636C17.9143 16.0567 17.9743 15.9118 17.9743 15.7607C17.9743 15.6096 17.9143 15.4647 17.8075 15.3578L15.4595 13.0094C15.3526 12.9026 15.2077 12.8426 15.0566 12.8426C14.9055 12.8426 14.7606 12.9026 14.6537 13.0094L12.8954 14.7677C12.7899 14.8732 12.6536 14.9425 12.5061 14.9654C12.3586 14.9883 12.2077 14.9637 12.0751 14.8952C10.6337 14.1499 9.1806 13.0647 7.87279 11.7569C6.56498 10.4491 5.48216 8.99688 4.73498 7.55548C4.66636 7.42296 4.64169 7.27205 4.66452 7.12458C4.68736 6.9771 4.75652 6.84072 4.86201 6.73517L6.62076 4.97688C6.72756 4.87 6.78755 4.72509 6.78755 4.57399C6.78755 4.4229 6.72756 4.27799 6.62076 4.1711L4.27232 1.8222C4.21952 1.76908 4.15669 1.72698 4.08749 1.69834C4.01829 1.66969 3.94409 1.65507 3.8692 1.65532Z" />
                        <path d="M15.0977 10.643C14.9112 10.643 14.7323 10.569 14.6005 10.4371C14.4686 10.3052 14.3945 10.1264 14.3945 9.93992C14.3932 8.70642 13.9026 7.52382 13.0304 6.65156C12.1582 5.7793 10.9757 5.2886 9.74219 5.28711C9.55571 5.28711 9.37686 5.21303 9.245 5.08117C9.11314 4.94931 9.03906 4.77046 9.03906 4.58398C9.03906 4.3975 9.11314 4.21866 9.245 4.0868C9.37686 3.95494 9.55571 3.88086 9.74219 3.88086C13.083 3.88086 15.8008 6.59961 15.8008 9.93992C15.8008 10.1264 15.7267 10.3052 15.5948 10.4371C15.463 10.569 15.2841 10.643 15.0977 10.643Z" />
                        <path d="M18.0695 10.6423C17.883 10.6423 17.7042 10.5682 17.5723 10.4363C17.4405 10.3045 17.3664 10.1256 17.3664 9.93914C17.3664 5.73492 13.9445 2.31445 9.74219 2.31445C9.55571 2.31445 9.37686 2.24037 9.245 2.10851C9.11314 1.97665 9.03906 1.79781 9.03906 1.61133C9.03906 1.42485 9.11314 1.24601 9.245 1.11414C9.37686 0.982282 9.55571 0.908203 9.74219 0.908203C14.7217 0.908203 18.7727 4.95961 18.7727 9.93914C18.7727 10.1256 18.6986 10.3045 18.5667 10.4363C18.4349 10.5682 18.256 10.6423 18.0695 10.6423Z" />
                    </svg>
                </div>
                <div className="inline-block">
                    <a href="/" className="flex items-center gap-2">
                        <TextLg>
                            <div className="text-primary-dark">
                                Instagram
                            </div>
                        </TextLg>
                        <Instagram className="w-[25px] h-[25px]" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;