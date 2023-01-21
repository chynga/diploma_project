import { t } from "i18next";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Header() {

    const { t, i18n } = useTranslation(["kz", "ru"]);

    const toggleTheme = (e: any) => {
        e.preventDefault();

        // if set via local storage previously
        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            }

            // if NOT set via local storage previously
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        }
    }

    const changeLanguage = (e: any) => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <header>
            <button onClick={toggleTheme} id="theme-toggle" type="button">
                <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.64648 1.50008C5.96148 3.22508 4.14648 6.27008 4.14648 9.75008C4.14648 13.2301 5.96148 16.2751 8.69148 18.0001C4.08648 18.0001 0.396484 14.3101 0.396484 9.75008C0.396484 7.56204 1.26568 5.46362 2.81285 3.91645C4.36003 2.36927 6.45845 1.50008 8.64648 1.50008ZM26.0015 3.75008L28.1465 5.89508L4.79148 29.2501L2.64648 27.1051L26.0015 3.75008ZM16.7315 7.39508L14.5115 6.00008L12.3515 7.50008L12.9815 4.95008L10.8965 3.36008L13.5215 3.18008L14.3915 0.705078L15.3965 3.15008L17.9915 3.19508L15.9665 4.89008L16.7315 7.39508ZM11.7815 12.8101L10.0415 11.7151L8.36148 12.8851L8.87148 10.9051L7.23648 9.66008L9.27648 9.52508L9.95148 7.59008L10.7165 9.49508L12.7565 9.54008L11.1815 10.8451L11.7815 12.8101ZM25.5079 18.7364C25.5079 20.9245 24.6387 23.0229 23.0915 24.5701C21.5443 26.1173 19.4459 26.9864 17.2579 26.9864C15.4279 26.9864 13.7329 26.3864 12.3679 25.3814L23.9029 13.8464C24.9079 15.2114 25.5079 16.9064 25.5079 18.7364ZM19.2965 28.6201L23.4515 26.8951L23.0915 31.9201L19.2965 28.6201ZM25.7915 24.5701L27.5165 20.4151L30.8165 24.2251L25.7915 24.5701ZM27.5165 17.1301L25.8065 12.9601L30.8165 13.3201L27.5165 17.1301ZM11.8415 26.8951L15.9965 28.6201L12.2015 31.9051L11.8415 26.8951Z" fill="#277FF2" />
                </svg>
            </button>
            <button value="kz" className="pr-6" onClick={changeLanguage}>kz</button>
            <button value="ru" onClick={changeLanguage}>ru</button>
            <Navbar />
        </header>
    );
}

function Navbar() {
    return (
        <div className="border-gray-200 px-4 lg:px-6 py-2.5">
            <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl">
                <div className="flex items-center lg:order-2">
                    <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <Link to="/" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                {t('home:title')}
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                {t('about:title')}
                            </Link>
                        </li>
                        <li>
                            <Link to="/services" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                {t('service:title')}
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                {t('doctor:title')}
                            </Link>
                        </li>
                        <li>
                            <Link to="/reviews" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                {t('review:title')}
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                {t('advice:title')}
                            </Link>
                        </li>
                        <li>
                            <Link to="/vacancy" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                {t('vacancy:title')}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;