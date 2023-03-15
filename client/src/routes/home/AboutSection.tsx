import { Link } from "react-router-dom";
import { Text4Xl, TextBase, TextXl } from "../common/TextElements";

type PromiseContent = {
    title: string,
    text: string,
}

function AboutSection() {
    return (
        <div className="px-20">
            <div className="mt-12 text-center">
                <Text4Xl>
                    <h2 className="font-bold">
                        О нас
                    </h2>
                </Text4Xl>
            </div>
            <div className="mt-12 flex justify-center">
                <div className="hidden lg:block w-[40vw] flex justify-center content-center">
                    <DoctorSvg />
                </div>
                <div className="lg:w-[40vw]">
                    <Promise title="Лечение зубы без боли в комфортной обстановке"
                        text="Лечение проводится с применением качественных и эффективных анестетиков" />
                    <Promise title="Даем гарантию на все виды услуг"
                        text="Используем только качественные материалы, поэтому даем гарантию на 12 месяцев" />
                    <Promise title="Стараемя вылечить зуб, а не удалять"
                        text="Удаление зуба всегда является крайней мерой. Мы стараемся сохранить зубы" />
                    <Promise title="Стоимость фиксируется во время осмотра"
                        text="Наши доктора всегда информируют пациентов об окончательной стоимости до начала лечения" />
                    <div className="my-16 text-center lg:text-start">
                        <Link className="px-8 py-3 bg-blue-white dark:bg-blue-dark text-lg text-primary-dark font-semibold drop-shadow-lg rounded-full"
                            to={"/about"}>
                            <TextBase>
                                <span className="font-bold text-primary-dark">
                                    Подробнее
                                </span>
                            </TextBase>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
}

function Promise({ title, text }: PromiseContent) {
    return (
        <div>
            <TextXl blue>
                <h3 className="mt-3 font-bold text-center lg:text-start">{title}</h3>
            </TextXl>
            <TextBase>
                <p className="text-center lg:text-start">{text}</p>
            </TextBase>
            <div className="flex justify-center lg:block">
                <TeethSvg />
            </div>
        </div>
    );
}

function TeethSvg() {
    return (
        <svg width="50" height="51" viewBox="0 0 50 51" className="fill-primary-white dark:fill-primary-dark" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.02971 21.7129C8.06639 21.9105 8.02312 22.1145 7.90941 22.2801C7.79571 22.4457 7.62089 22.5594 7.42341 22.5961C7.22593 22.6327 7.02197 22.5895 6.85639 22.4757C6.69081 22.362 6.57719 22.1871 6.54051 21.9896C5.88995 17.253 4.91854 11.5513 9.34189 8.10956C10.319 7.43944 11.4327 6.99491 12.6026 6.80811C13.7725 6.6213 14.9693 6.6969 16.1064 7.02944C16.2024 7.05531 16.2924 7.09984 16.3712 7.16051C16.4501 7.22117 16.5162 7.29677 16.5658 7.38299C16.6154 7.46921 16.6476 7.56436 16.6604 7.66301C16.6733 7.76166 16.6666 7.86188 16.6407 7.95795C16.6149 8.05401 16.5704 8.14404 16.5097 8.22289C16.4491 8.30174 16.3735 8.36787 16.2873 8.41751C16.2011 8.46715 16.106 8.49931 16.0073 8.51218C15.9087 8.52504 15.8085 8.51834 15.7125 8.49247C14.7824 8.22102 13.8036 8.15964 12.847 8.31275C11.8903 8.46586 10.9795 8.82965 10.1805 9.37782C6.52944 12.2309 7.45881 17.6625 8.02971 21.7129ZM28.8299 21.2703C28.6359 21.2807 28.4534 21.3652 28.3198 21.5062C28.1863 21.6472 28.1118 21.8341 28.1118 22.0283C28.1118 22.2226 28.1863 22.4095 28.3198 22.5505C28.4534 22.6915 28.6359 22.7759 28.8299 22.7864H30.8501C31.044 22.7759 31.2266 22.6915 31.3601 22.5505C31.4937 22.4095 31.5681 22.2226 31.5681 22.0283C31.5681 21.8341 31.4937 21.6472 31.3601 21.5062C31.2266 21.3652 31.044 21.2807 30.8501 21.2703H28.8299ZM35.9108 21.2703C35.7168 21.2807 35.5343 21.3652 35.4007 21.5062C35.2672 21.6472 35.1927 21.8341 35.1927 22.0283C35.1927 22.2226 35.2672 22.4095 35.4007 22.5505C35.5343 22.6915 35.7168 22.7759 35.9108 22.7864C36.9021 22.6846 38.6723 23.187 38.6878 22.0294C38.7033 20.8718 36.8999 21.3831 35.9063 21.2813L35.9108 21.2703ZM33.3815 23.8068C32.2243 23.8201 32.7177 25.5907 32.6226 26.5845C32.6231 26.7857 32.7033 26.9785 32.8455 27.1207C32.9877 27.263 33.1804 27.3432 33.3815 27.3437C34.5388 27.3282 34.0454 25.5575 34.1383 24.5637C34.1383 24.363 34.0586 24.1704 33.9167 24.0285C33.7747 23.8865 33.5822 23.8068 33.3815 23.8068ZM34.1383 17.4942C34.1383 17.2935 34.0586 17.1009 33.9167 16.959C33.7747 16.817 33.5822 16.7373 33.3815 16.7373C33.1808 16.7373 32.9883 16.817 32.8464 16.959C32.7045 17.1009 32.6248 17.2935 32.6248 17.4942C32.7243 18.4836 32.222 20.2565 33.3815 20.2698C34.541 20.2831 34.0365 18.4836 34.1383 17.4942ZM48.0633 9.43537C47.9685 9.46508 47.8804 9.51326 47.8042 9.57713C47.728 9.641 47.6651 9.7193 47.6193 9.80754C47.5734 9.89577 47.5455 9.99221 47.537 10.0913C47.5285 10.1904 47.5397 10.2902 47.5699 10.3849C48.3273 12.7971 48.618 15.3317 48.4262 17.8528C47.477 29.4951 43.2284 41.1884 37.338 48.3641C37.1231 48.6268 36.8331 48.8173 36.5067 48.9102C36.1804 49.0031 35.8335 48.9939 35.5126 48.8837C35.1917 48.7736 34.9121 48.5679 34.7115 48.2941C34.511 48.0204 34.399 47.6919 34.3906 47.3526C33.3484 35.9692 28.6993 28.3176 25.0084 28.3176C21.3175 28.3176 16.6684 35.967 15.6284 47.3526C15.6195 47.6913 15.5073 48.0193 15.3068 48.2924C15.1064 48.5656 14.8272 48.771 14.5068 48.881C14.1864 48.991 13.84 49.0005 13.5141 48.9081C13.1882 48.8157 12.8982 48.6259 12.6832 48.3641C6.25506 40.9914 -3.82858 15.4889 5.0668 5.57525C13.6812 -3.63457 27.0043 7.74878 29.3299 10.4867C29.9938 11.226 31.1201 10.1636 30.4363 9.45972C29.251 8.22502 27.9759 7.0798 26.6215 6.03342C28.7259 4.52169 34.7889 0.721337 40.4093 2.55622C40.5037 2.5879 40.6035 2.60047 40.7028 2.59318C40.8021 2.5859 40.899 2.55891 40.9878 2.51379C41.0765 2.46867 41.1554 2.40633 41.2199 2.33039C41.2843 2.25445 41.333 2.16644 41.363 2.07149C41.4252 1.88041 41.4091 1.67246 41.3183 1.49323C41.2275 1.31399 41.0693 1.17809 40.8784 1.11532C34.1516 -1.08256 27.2123 3.66733 25.3514 5.08389C13.0726 -4.45352 -1.23299 1.80367 0.0836138 17.9856C1.05724 29.9135 5.43633 41.9276 11.506 49.3291C11.7978 49.6946 12.1681 49.9896 12.5895 50.1923C13.0109 50.395 13.4725 50.5002 13.94 50.5C14.7532 50.4893 15.533 50.1751 16.1266 49.619C16.7202 49.063 17.0847 48.3052 17.1486 47.4942C18.1333 36.7174 22.4593 29.836 25.0194 29.836C27.5796 29.836 31.9078 36.7151 32.8925 47.492C32.939 48.1252 33.1728 48.7302 33.5642 49.2301C33.9556 49.7299 34.4869 50.1019 35.0904 50.2986C35.6938 50.4954 36.3422 50.5081 36.9529 50.335C37.5636 50.162 38.109 49.8111 38.5196 49.3269C44.5937 41.9232 48.9728 29.9112 49.9464 17.9768C50.1535 15.2593 49.8411 12.5272 49.0259 9.92674C48.9961 9.83052 48.9473 9.74124 48.8824 9.66418C48.8175 9.58712 48.7379 9.52383 48.6482 9.47803C48.5585 9.43224 48.4605 9.40487 48.3601 9.39754C48.2596 9.39022 48.1587 9.40308 48.0633 9.43537ZM39.387 5.81209C39.4003 6.97189 41.1705 6.4761 42.1641 6.57127C42.2641 6.57185 42.3633 6.55265 42.4559 6.51476C42.5485 6.47687 42.6327 6.42104 42.7036 6.35048C42.7746 6.27993 42.8309 6.19604 42.8693 6.10364C42.9077 6.01124 42.9275 5.91216 42.9275 5.81209C42.9142 4.65449 41.1418 5.14807 40.1504 5.05511C40.0505 5.05424 39.9514 5.07317 39.8588 5.11082C39.7662 5.14847 39.682 5.20408 39.611 5.27446C39.5401 5.34484 39.4837 5.42859 39.4453 5.52086C39.4068 5.61314 39.387 5.71212 39.387 5.81209ZM47.2136 6.57127C48.2072 6.46946 49.9752 6.97189 49.9907 5.81209C50.0062 4.65228 48.205 5.14807 47.2136 5.05511C47.0296 5.07853 46.8606 5.16852 46.7384 5.30809C46.6162 5.44767 46.5494 5.62717 46.5505 5.81269C46.5515 5.99821 46.6205 6.17691 46.7443 6.31504C46.8681 6.45317 47.0382 6.54117 47.2225 6.56242L47.2136 6.57127ZM44.6977 11.1065C45.855 11.0932 45.3615 9.32027 45.4545 8.32868C45.4516 8.12985 45.3706 7.94014 45.229 7.80056C45.0873 7.66099 44.8965 7.58276 44.6977 7.58278C43.5404 7.59606 44.0339 9.36897 43.9409 10.3606C43.9438 10.5594 44.0249 10.7491 44.1665 10.8887C44.3081 11.0283 44.4989 11.1065 44.6977 11.1065ZM44.6977 4.03475C45.855 4.02147 45.3615 2.26405 45.4545 1.25697C45.4545 1.05621 45.3747 0.863672 45.2328 0.721712C45.0909 0.579752 44.8984 0.5 44.6977 0.5C43.5404 0.51328 44.0339 2.28619 43.9409 3.27778C43.9401 3.37774 43.959 3.47689 43.9966 3.5695C44.0343 3.66211 44.0899 3.74634 44.1602 3.81734C44.2306 3.88833 44.3143 3.94468 44.4066 3.98314C44.4988 4.0216 44.5978 4.04139 44.6977 4.04139V4.03475Z" />
        </svg>
    );
}

function DoctorSvg() {
    return (
        <svg width="256" height="573" viewBox="0 0 256 573" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <path d="M71.1147 2.01362C86.9737 -6.01858 104.328 11.79 103.815 23.5725C103.301 35.3551 108.118 39.4385 115.172 42.7585C115.243 42.7922 115.315 42.8258 115.382 42.8595C122.819 46.4452 122.474 57.2134 115.003 60.728L68.7308 82.4815C60.9606 86.1346 51.3987 84.6487 45.8624 78.0949C39.2879 70.3172 42.92 60.9788 46.732 53.8748C52.1146 43.8439 25.6591 10.4051 71.1147 2.0211V2.01362Z" fill="#2B1710" />
            <path d="M12.4129 519.425C13.0389 532.435 10.4751 541.448 8.09866 546.149C5.72225 550.85 9.18942 555.517 9.63172 558.575C10.074 561.633 11.221 571.761 11.221 571.761H21.4726C21.4726 571.761 21.5213 560.357 21.9598 560.278C29.0029 561.73 35.2813 568.101 37.9201 570.661C40.5589 573.217 64.2481 571.458 65.485 570.788C67.5353 567.685 53.9665 565.485 53.4118 564.152C47.452 553.156 34.3629 540.374 32.56 536.687C30.7571 532.996 29.5351 517.568 29.5351 517.568L12.4167 519.429L12.4129 519.425Z" fill="#BA664D" />
            <path d="M53.4944 564.273C49.2063 564.752 44.5022 565.672 42.8605 564.946C40.6452 563.966 26.0981 545.787 10.0517 541.254C9.43696 543.211 8.76227 544.847 8.10257 546.153C5.72615 550.854 9.19332 555.522 9.63562 558.58C10.0779 561.634 11.2249 571.766 11.2249 571.766H21.4765C21.4765 571.766 21.5252 560.361 21.9637 560.283C29.0068 561.735 35.2852 568.105 37.924 570.665C40.5628 573.222 64.252 571.463 65.4889 570.793C67.483 567.78 54.7426 565.714 53.4981 564.28L53.4944 564.273Z" fill="#2B1710" />
            <path d="M110.679 519.425C111.305 532.435 108.741 541.448 106.364 546.149C103.988 550.85 107.455 555.517 107.897 558.575C108.34 561.633 109.487 571.761 109.487 571.761H119.738C119.738 571.761 119.787 560.357 120.225 560.278C127.269 561.73 133.547 568.101 136.186 570.661C138.824 573.217 162.514 571.458 163.751 570.788C165.801 567.685 152.232 565.485 151.677 564.152C145.718 553.156 132.629 540.374 130.826 536.687C129.023 532.996 127.801 517.568 127.801 517.568L110.682 519.429L110.679 519.425Z" fill="#BA664D" />
            <path d="M151.76 564.273C147.472 564.752 142.768 565.672 141.126 564.946C138.911 563.966 124.364 545.787 108.317 541.254C107.703 543.211 107.028 544.847 106.368 546.153C103.992 550.854 107.459 555.522 107.901 558.58C108.344 561.634 109.491 571.766 109.491 571.766H119.742C119.742 571.766 119.791 560.361 120.229 560.283C127.272 561.735 133.551 568.105 136.19 570.665C138.828 573.222 162.518 571.463 163.755 570.793C165.749 567.78 153.008 565.714 151.764 564.28L151.76 564.273Z" fill="#2B1710" />
            <path d="M127.521 88.6582C144.928 105.722 173.726 158.815 173.726 158.815C173.726 158.815 207.273 134.797 219.298 137.327C231.322 139.853 237.653 159.765 225.31 174.617C212.967 189.469 197.46 210.328 166.128 207.165C134.796 204.006 114.544 161.341 112.329 157.549C110.114 153.758 97.4558 99.7184 127.521 88.6582Z" fill="#BBD2E6" />
            <path d="M55.8365 191.679C27.0383 209.694 23.7136 264.68 22.7653 295.016C21.817 325.352 2.82812 538.666 2.82812 538.666H41.7541L82.8954 349.056L102.518 534.874H135.746C135.746 534.874 154.735 240.98 127.676 191.679C100.617 142.382 55.8365 191.679 55.8365 191.679Z" fill="#6694FF" />
            <g style={{ mixBlendMode: 'multiply' }}>
                <path d="M85.9039 340.504C85.874 340.504 85.8477 340.504 85.8177 340.496C85.5704 340.447 85.4092 340.208 85.4579 339.965L103.498 247.531C103.525 247.392 103.615 247.276 103.742 247.213L110.144 244.016L111.089 201.153C111.092 200.902 111.284 200.696 111.553 200.707C111.805 200.711 112.003 200.921 112 201.172L111.051 244.308C111.047 244.477 110.95 244.63 110.8 244.705L104.353 247.924L86.3575 340.141C86.3163 340.358 86.1251 340.507 85.9114 340.507L85.9039 340.504Z" fill="#E3E3E3" />
            </g>
            <g style={{ mixBlendMode: 'multiply' }}>
                <path d="M51.0095 222.707C50.7734 222.707 50.5709 222.524 50.556 222.284C50.5372 222.034 50.7284 221.817 50.9795 221.802C65.5903 220.795 74.2489 213.148 79.058 197.001C79.1292 196.762 79.3841 196.623 79.624 196.694C79.8638 196.766 80.0025 197.02 79.9313 197.26C74.9986 213.822 66.0926 221.671 51.0432 222.707C51.032 222.707 51.0207 222.707 51.0132 222.707H51.0095Z" fill="#E3E3E3" />
            </g>
            <g style={{ mixBlendMode: 'multiply' }}>
                <path d="M12.322 528.216C12.322 528.216 12.2958 528.216 12.2846 528.216C12.0334 528.193 11.8498 527.976 11.8685 527.725C12.9368 514.925 38.2227 214.013 58.0737 197.024C58.2649 196.86 58.5497 196.882 58.7146 197.073C58.8796 197.264 58.8571 197.548 58.6659 197.713C39.0961 214.462 13.038 524.668 12.7756 527.8C12.7568 528.036 12.5582 528.216 12.322 528.216Z" fill="#E3E3E3" />
            </g>
            <path d="M51.8817 93.7142C66.44 82.0215 79.6115 78.9785 79.6115 78.9785L101.325 81.4638L127.518 88.6538C127.518 88.6538 142.71 139.849 141.128 147.75C139.547 155.651 131.761 163.036 129.104 172.082C126.967 179.351 127.62 182.727 127.62 182.727L55.9973 182.824C55.9973 178.086 53.4672 155.647 51.8817 148.064C50.2999 140.481 41.7538 114.251 51.8817 93.7104V93.7142Z" fill="#7A95B9" />
            <path d="M127.676 182.832H55.8359V191.68H127.676V182.832Z" fill="#2B1710" />
            <path d="M68.8154 181.725H65.1758V192.152H68.8154V181.725Z" fill="#6694FF" />
            <path d="M124.987 181.881H121.348V192.308H124.987V181.881Z" fill="#6694FF" />
            <g style={{ mixBlendMode: 'multiply' }}>
                <path d="M172.144 168.657C172.032 168.657 171.919 168.604 171.848 168.507C171.728 168.346 171.765 168.118 171.927 167.998C172.774 167.384 172.897 164.547 172.98 162.672C173.066 160.74 173.119 159.951 173.553 159.726C173.718 159.644 173.913 159.659 174.082 159.771C175.113 160.46 175.581 163.39 175.664 163.97C175.694 164.169 175.555 164.352 175.356 164.382C175.158 164.412 174.974 164.274 174.944 164.075C174.787 162.986 174.374 161.216 173.868 160.564C173.778 161.014 173.741 161.934 173.707 162.705C173.602 165.078 173.486 167.766 172.354 168.585C172.29 168.634 172.215 168.657 172.14 168.657H172.144Z" fill="#E0E0E0" />
            </g>
            <path d="M62.8161 53.9835C64.7165 56.3452 68.1761 56.7232 70.5413 54.8256C72.9065 52.928 73.2851 49.4733 71.3847 47.1116C69.4843 44.7498 66.0246 44.3718 63.6594 46.2694C61.2943 48.167 60.9157 51.6217 62.8161 53.9835Z" fill="#BA664D" />
            <path d="M74.0639 80.7293C81.4181 60.8173 65.1842 43.0237 64.8281 42.5783C64.8281 42.5783 84.5104 27.764 74.36 10.9099C90.4852 8.89997 96.265 20.1623 98.6302 28.0934C100.999 36.0245 106.127 40.2839 105.531 46.95C104.935 53.616 100.362 59.7131 95.6128 61.8204C95.6991 77.7612 106.445 82.7056 106.445 82.7056C113.376 93.7208 113.942 111.937 112.949 112.783C88.06 113.206 74.0602 80.7293 74.0602 80.7293H74.0639Z" fill="#BA664D" />
            <rect x="88.6719" y="38.5508" width="6.3721" height="5.6143" fill="url(#pattern0)" />
            <g style={{ mixBlendMode: 'multiply' }}>
                <path d="M97.0429 45.9968C93.9168 43.7698 82.7769 49.7921 82.9793 50.1177C88.1669 54.7551 95.4611 54.6092 97.0429 45.9968Z" fill="#E0B3A8" />
            </g>
            <g style={{ mixBlendMode: 'multiply' }}>
                <path d="M93.4547 62.1643C93.5221 62.1082 93.5596 62.0183 93.5409 61.9285C93.5146 61.7975 93.3872 61.7114 93.256 61.7376C85.1709 63.3695 78.5627 60.6335 75.8414 57.4034C75.7552 57.3023 75.594 57.2948 75.5003 57.3734C75.3991 57.4595 75.3841 57.613 75.4704 57.714C78.2778 61.0527 85.0735 63.8823 93.3497 62.2092C93.3872 62.2017 93.4247 62.183 93.4547 62.1606V62.1643Z" fill="#E0B3A8" />
            </g>
            <path d="M96.6236 24.1896C96.6461 24.1709 96.6648 24.1522 96.6798 24.126C96.7473 24.0099 96.7098 23.864 96.5974 23.7929C94.0823 22.292 91.0686 22.4716 89.8579 23.1715C89.7418 23.2389 89.7043 23.3886 89.7717 23.5009C89.8392 23.6169 89.9891 23.6544 90.1016 23.587C91.2073 22.9432 93.9923 22.801 96.35 24.2046C96.4399 24.257 96.5487 24.2457 96.6274 24.1859L96.6236 24.1896Z" fill="#2B1710" />
            <path d="M80.6578 27.6104C80.7291 27.5543 80.7628 27.457 80.7403 27.3634C80.7103 27.2324 80.5791 27.1538 80.4479 27.1875C76.2086 28.2205 73.9672 31.3383 73.8734 31.4731C73.7947 31.5816 73.821 31.7313 73.9334 31.8099C74.0421 31.8885 74.192 31.8623 74.2708 31.75C74.2933 31.7201 76.5085 28.6435 80.5641 27.6553C80.6016 27.6479 80.6316 27.6291 80.6578 27.6104Z" fill="#2B1710" />
            <path d="M93.3311 43.5751C93.3311 43.5751 93.3386 43.5713 93.3423 43.5676C93.4173 43.5002 95.2202 41.8721 95.134 40.0643C95.1153 39.6975 95.0141 39.4392 94.8192 39.267C94.4893 38.9788 93.987 39.02 93.4023 39.0649C92.6377 39.1285 91.6856 39.2034 90.7598 38.6008C88.9343 37.4031 87.8661 36.2391 88.9343 27.7652C88.9493 27.6342 88.8556 27.5107 88.7244 27.4957C88.5933 27.4807 88.4696 27.5743 88.4546 27.7053C87.4125 36.0033 88.3234 37.5827 90.4974 39.005C91.5619 39.7012 92.6489 39.6114 93.4435 39.5477C93.9158 39.5103 94.3244 39.4766 94.5006 39.6301C94.5905 39.7087 94.643 39.8584 94.6542 40.0867C94.7292 41.6662 93.0425 43.1933 93.0237 43.2083C92.9225 43.2981 92.915 43.4516 93.005 43.5489C93.0912 43.6462 93.2374 43.6574 93.3386 43.5751H93.3311Z" fill="#2B1710" />
            <path d="M96.2538 47.1489C96.7299 46.7671 97.1684 46.3591 97.5507 45.9325C97.6407 45.8314 97.6332 45.6817 97.532 45.5919C97.4308 45.502 97.2809 45.5095 97.1909 45.6106C93.8024 49.3834 86.1672 51.5355 82.6025 49.7202C82.4826 49.6604 82.3364 49.7053 82.2764 49.825C82.2165 49.9448 82.2615 50.0908 82.3814 50.1507C85.6986 51.8387 92.3594 50.2704 96.2538 47.1489Z" fill="#2B1710" />
            <g style={{ mixBlendMode: 'multiply' }}>
                <path d="M95.5566 54.9009C95.6503 54.826 95.6766 54.695 95.6129 54.5902C95.5454 54.4742 95.3955 54.4367 95.283 54.5041C92.0932 56.3606 89.9192 56.1585 89.9005 56.1585C89.7693 56.1435 89.6493 56.2408 89.6343 56.3718C89.6193 56.5028 89.7168 56.6226 89.848 56.6376C89.9417 56.6488 92.1869 56.8659 95.5266 54.9196C95.5379 54.9121 95.5454 54.9083 95.5566 54.8971V54.9009Z" fill="#E0B3A8" />
            </g>
            <g style={{ mixBlendMode: 'multiply' }}>
                <path d="M80.8998 42.8473C80.9785 42.7875 81.0122 42.6789 80.9785 42.5816C80.9372 42.4543 80.7986 42.387 80.6711 42.4281C78.2835 43.2329 76.9641 41.0246 76.9116 40.9273C76.8441 40.8112 76.6979 40.7738 76.5817 40.8374C76.4655 40.9048 76.428 41.0508 76.4918 41.1668C76.5068 41.193 78.0586 43.8168 80.8285 42.8848C80.8548 42.8735 80.881 42.8623 80.9035 42.8436L80.8998 42.8473Z" fill="#E0B3A8" />
            </g>
            <g style={{ mixBlendMode: 'multiply' }}>
                <path d="M69.7262 53.6093C69.8012 53.5494 69.8349 53.4484 69.8049 53.351C69.7675 53.2238 69.6325 53.1489 69.5051 53.1864C68.6542 53.4371 67.9195 53.265 67.4885 52.7073C67.0949 52.1982 67.0349 51.4871 67.3461 50.9781C67.6684 50.4466 68.3169 50.237 69.1715 50.3867C69.2614 50.4017 69.3514 50.368 69.4039 50.2969C69.4601 50.2257 69.4713 50.1284 69.4339 50.0498C68.9503 48.9981 67.7509 48.2271 66.379 48.0811C65.0184 47.9351 63.7927 48.4479 63.013 49.4847C62.9343 49.5932 62.9531 49.7429 63.0618 49.8215C63.1705 49.9001 63.3204 49.8814 63.3991 49.7729C64.0738 48.8746 65.1421 48.4329 66.3265 48.5602C67.3311 48.6687 68.2531 49.1703 68.7629 49.8589C67.942 49.8327 67.2898 50.1397 66.9337 50.7273C66.5252 51.4047 66.5964 52.3405 67.1099 53.003C67.6722 53.7253 68.5942 53.9611 69.6475 53.6505C69.6775 53.643 69.7075 53.628 69.73 53.6056L69.7262 53.6093Z" fill="#E0B3A8" />
            </g>
            <path d="M77.3565 38.472C77.8288 40.3472 79.0207 41.6647 80.0178 41.4139C81.0148 41.1632 81.4421 39.4414 80.9698 37.5663C80.4975 35.6911 79.3056 34.3736 78.3085 34.6244C77.3115 34.8751 76.8842 36.5969 77.3565 38.472Z" fill="#2B1710" />
            <path d="M91.2393 33.1693C91.7116 35.0445 92.9035 36.362 93.9006 36.1112C94.8976 35.8604 95.3249 34.1387 94.8526 32.2635C94.3803 30.3883 93.1884 29.0709 92.1913 29.3216C91.1943 29.5724 90.767 31.2941 91.2393 33.1693Z" fill="#2B1710" />
            <g style={{ mixBlendMode: 'multiply' }}>
                <path d="M79.5783 45.0783C80.6241 45.8494 81.3587 46.6241 81.2238 46.8075C81.0888 46.9909 80.133 46.5118 79.0873 45.7371C78.0415 44.9623 77.3068 44.1913 77.4418 44.0079C77.5767 43.8245 78.5325 44.3035 79.5783 45.0783Z" fill="#E0B3A8" />
            </g>
            <g style={{ mixBlendMode: 'multiply' }}>
                <path d="M77.2228 45.2697C78.2686 46.0408 79.0033 46.8155 78.8683 46.9989C78.7334 47.1823 77.7776 46.7032 76.7318 45.9285C75.686 45.1574 74.9513 44.3827 75.0863 44.1993C75.2212 44.0159 76.177 44.495 77.2228 45.2697Z" fill="#E0B3A8" />
            </g>
            <g style={{ mixBlendMode: 'multiply' }}>
                <path d="M75.3947 45.5197C76.4405 46.2908 77.1751 47.0655 77.0402 47.2489C76.9052 47.4323 75.9494 46.9532 74.9037 46.1785C73.8579 45.4074 73.1232 44.6327 73.2582 44.4493C73.3931 44.2659 74.3489 44.745 75.3947 45.5197Z" fill="#E0B3A8" />
            </g>
            <path d="M51.8836 93.7145C53.4767 86.0903 74.0623 80.7305 74.0623 80.7305C71.5959 101.47 76.1238 160.27 80.202 213.191C84.2801 266.111 68.4248 397.283 68.4248 397.283H0.026027C-0.881059 366.977 22.2234 235.352 22.2234 235.352L51.8836 93.7145Z" fill="#BBD2E5" />
            <path d="M51.6684 241.438C52.7629 244.821 54.071 257.146 58.7526 258.396C63.4342 259.647 69.2516 262.3 71.8791 267.589C74.5067 272.878 82.1195 274.895 82.2507 276.212C82.3819 277.53 74.6716 277.762 71.5568 275.939C68.442 274.116 68.1496 272.23 67.3175 274.068C66.4854 275.909 73.6333 293.957 76.587 299.523C79.5407 305.089 72.4789 300.698 72.4789 300.698C70.6535 302.944 67.295 300.698 67.295 300.698C64.019 303.483 56.5149 293.669 55.9789 294.811C52.3768 298.183 44.7453 287.052 43.4521 279.532C42.1627 272.013 42.3688 265.418 39.2878 259.4C36.2029 253.377 32.3047 245.371 32.3047 245.371L51.6684 241.441V241.438Z" fill="#BA664D" />
            <g style={{ mixBlendMode: 'multiply' }}>
                <path d="M71.8459 299.777C71.7147 299.814 71.5648 299.777 71.4711 299.665C71.1 299.234 62.3365 289.012 60.7172 280.355C60.6797 280.157 60.8147 279.97 61.0096 279.932C61.2082 279.895 61.3956 280.026 61.4331 280.224C63.0149 288.687 71.9321 299.088 72.022 299.193C72.1532 299.346 72.1345 299.575 71.9846 299.706C71.9433 299.739 71.8946 299.766 71.8459 299.781V299.777Z" fill="#E0B3A8" />
            </g>
            <g style={{ mixBlendMode: 'multiply' }}>
                <path d="M65.7324 299.837C65.6162 299.871 65.485 299.845 65.3913 299.759C65.0315 299.437 56.5604 291.831 54.3564 284.72C54.2964 284.529 54.4051 284.323 54.5962 284.267C54.7837 284.211 54.9936 284.316 55.0498 284.507C57.1938 291.423 65.7849 299.137 65.8749 299.216C66.0248 299.351 66.036 299.579 65.9048 299.729C65.8561 299.781 65.7961 299.819 65.7324 299.837Z" fill="#E0B3A8" />
            </g>
            <g style={{ mixBlendMode: 'multiply' }}>
                <path d="M55.3929 293.344C55.2579 293.382 55.108 293.344 55.0143 293.228C51.7683 289.381 50.8949 286.989 50.8612 286.888C50.7937 286.701 50.8912 286.491 51.0823 286.424C51.2773 286.356 51.4797 286.454 51.5471 286.645C51.5546 286.667 52.4242 289.029 55.5728 292.76C55.704 292.914 55.6815 293.142 55.5278 293.273C55.4866 293.307 55.4416 293.329 55.3929 293.344Z" fill="#E0B3A8" />
            </g>
            <path d="M51.8822 93.7148C66.1219 104.786 66.7554 134.875 55.3643 162.977C43.9695 191.078 51.2487 213.786 57.2647 227.695C63.277 241.603 65.1774 259.486 39.8577 261.758C14.5379 264.03 2.83203 216.627 2.83203 185.969C2.83203 155.311 30.0484 97.9742 51.8859 93.7148H51.8822Z" fill="#BBD2E6" />
            <path d="M106.449 82.7069C122.784 106.747 131.24 127.853 127.616 155.596C123.991 183.338 133.051 397.433 133.051 397.433C133.051 397.433 165.665 399.241 165.665 397.433C166.268 370.897 156.001 271.991 147.545 234.6C139.089 197.209 132.447 182.735 135.465 171.274C138.482 159.814 146.335 158.609 145.128 144.737C143.921 130.866 127.518 88.6543 127.518 88.6543C117.345 82.6208 106.445 82.7032 106.445 82.7032L106.449 82.7069Z" fill="#BBD2E5" />
            <path d="M187.518 187.137H236.688C238.176 187.137 239.439 186.048 239.656 184.581L248.562 124.59C248.832 122.779 247.427 121.154 245.594 121.154H196.424C194.935 121.154 193.672 122.243 193.455 123.711L184.549 183.701C184.279 185.513 185.685 187.137 187.518 187.137Z" fill="#2B1710" />
            <path d="M232.174 119.072H208.654C207.033 119.072 205.719 120.384 205.719 122.003V124.26C205.719 125.878 207.033 127.191 208.654 127.191H232.174C233.795 127.191 235.109 125.878 235.109 124.26V122.003C235.109 120.384 233.795 119.072 232.174 119.072Z" fill="#ABABAB" />
            <path d="M220.701 121.023C222.773 121.023 224.453 119.345 224.453 117.276C224.453 115.207 222.773 113.529 220.701 113.529C218.629 113.529 216.949 115.207 216.949 117.276C216.949 119.345 218.629 121.023 220.701 121.023Z" fill="#ABABAB" />
            <path d="M248.61 164.652C255.956 159.345 258.929 141.08 246.732 137.176C246.263 137.801 245.637 142.483 245.637 142.483C245.637 142.483 227.346 144.201 226.566 149.819C223.751 152.784 226.877 156.062 226.877 156.062C226.566 159.341 234.538 161.37 234.538 161.37C234.538 161.37 229.692 160.434 229.849 162.773C230.007 165.116 243.137 166.988 248.61 164.648V164.652Z" fill="#BA664D" />
            <g style={{ mixBlendMode: 'multiply' }}>
                <path d="M232.342 151.501C236.469 151.501 242.77 151.082 246.983 148.829C247.08 148.776 247.118 148.657 247.065 148.559C247.013 148.462 246.893 148.424 246.795 148.477C240.202 151.999 228.346 150.962 228.226 150.951C228.114 150.94 228.02 151.022 228.009 151.131C227.998 151.239 228.08 151.336 228.189 151.348C228.234 151.351 229.909 151.497 232.346 151.497L232.342 151.501Z" fill="#E0B3A8" />
            </g>
            <g style={{ mixBlendMode: 'multiply' }}>
                <path d="M241.975 158.455C242.016 158.455 242.038 158.455 242.042 158.455C242.151 158.455 242.241 158.365 242.241 158.253C242.241 158.141 242.166 158.055 242.038 158.055C241.967 158.055 234.947 158.107 227.716 155.955C227.611 155.925 227.499 155.985 227.469 156.09C227.439 156.195 227.499 156.307 227.604 156.337C234.515 158.392 241.236 158.451 241.978 158.451L241.975 158.455Z" fill="#E0B3A8" />
            </g>
            <g style={{ mixBlendMode: 'multiply' }}>
                <path d="M239.082 162.141C239.46 162.141 239.685 162.123 239.712 162.123C239.82 162.115 239.903 162.018 239.895 161.909C239.888 161.801 239.79 161.718 239.682 161.726C239.663 161.726 237.729 161.872 235.289 161.262C235.18 161.236 235.071 161.299 235.045 161.408C235.019 161.516 235.082 161.625 235.191 161.651C236.878 162.07 238.306 162.145 239.082 162.145V162.141Z" fill="#E0B3A8" />
            </g>
            <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_622_16562" transform="scale(0.0588235 0.0666667)" />
                </pattern>
                <image id="image0_622_16562" width="17" height="15" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAPCAYAAAACsSQRAAAACXBIWXMAAAsSAAALEgHS3X78AAABQ0lEQVQ4jXWSXU7DMBCEx39pg0C0EuKNw3GNHoAj8NpHLohEaWobjXed2ElZaRUr2f12dmLci/zxnu9++CfM+nUB/CbgojklmM+vTV0bZgO4ZuAqzeV8icAtS/I9nykD1OoM8LaH6wEJRQVzypJRAVEba0Il/CT4rTYDWAPkLBkhqhhVgWlqg4XF2shJV4l1ehZoXA3zBthb4BAaJbWJQ6NOLdP17LCAvAVGO69kuzVKNlACqMQ1/g/axdpDAF6HRkn1gGHVeYIoOyl0sOIJ13jywMsAczqbBoKluK7h1QvCH1wxsZwH8WK2Z1lHQTSRxlL2Tf8OJyc1+DkIkNufzqaH5GalnVOjEzDqOjsLHIOoaQA9hIU0a3R6MyF/gFMJfPSz6S2gLiFC2rvyHYFgBEaDCaoNK0AH6WD1avPrSvomAPwBcDim5wgaWZIAAAAASUVORK5CYII=" />
            </defs>
        </svg>
    );
}

export default AboutSection;