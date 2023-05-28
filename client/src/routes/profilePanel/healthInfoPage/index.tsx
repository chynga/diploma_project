import axios from "axios";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../app/hooks";
import { selectAuth } from "../../../features/auth/authSlice";
import { TextLg } from "../../common/TextElements";
import { Client } from "../../common/types";

function HealthInfoPage() {
    const { user } = useAppSelector(selectAuth);
    const [client, setClient] = useState<Client>();

    useEffect(() => {
        const apiUrl = "/api/profile/healthInfo";
        const config = {
            headers: {
                Authorization: `Bearer ${user?.token}`,
            },
        };

        axios.get(apiUrl, config).then((resp) => {
            let client: Client = resp.data.data;
            setClient(client);
        });
    }, [])

    return (
        <div className="flex flex-col items-center">
            <DoctorSvg />
            <div className="flex gap-5">
                <div>
                    <div className="bg-blue-white dark:bg-blue-dark p-5 text-center rounded-t-3xl">
                        <TextLg><span className="text-primary-dark">Медикаменты на которые есть аллергия</span></TextLg>
                    </div>
                    <div className="min-h-[250px] p-5 shadow-[0px_4px_4px_0_rgba(0,0,0,0.25)] rounded-b-3xl">
                        <TextLg><span className="font-semibold">{client?.allergy}</span></TextLg>
                    </div>
                </div>
                <div>
                    <div className="bg-blue-white dark:bg-blue-dark p-5 text-center rounded-t-3xl">
                        <TextLg><span className="text-primary-dark">Медикаменты на которые есть аллергия</span></TextLg>
                    </div>
                    <div className="min-h-[250px] p-5 shadow-[0px_4px_4px_0_rgba(0,0,0,0.25)] rounded-b-3xl">
                        <TextLg><span className="font-semibold">{client?.prescribedMedications}</span></TextLg>
                    </div>
                </div>
            </div>
        </div>
    );
}

function DoctorSvg() {
    return (
        <svg width="232" height="246" viewBox="0 0 232 246" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <path d="M91.7999 106.165C39.5202 126.314 3.29335 200.25 0 246H232C221.021 174.262 181.926 126.668 145.303 104.713C129.036 101.611 91.7999 106.165 91.7999 106.165Z" fill="#5781E6" />
            <path d="M118.021 76.0887C98.5401 79.488 87.2148 61.3616 92.8774 47.0887C91.2912 17.8627 103.751 -10.9113 147.468 4.72213C169.213 7.44109 177.594 36.2151 159.7 43.6917C135.915 64.7631 118.021 76.091 118.021 76.091V76.0887Z" fill="#2B1710" />
            <path d="M91.7991 106.165C91.7991 105.485 101.652 103.276 105.221 96.9899C108.789 90.7038 110.488 74.7302 109.127 53.3187C117.452 55.5274 120.341 48.9012 120.509 37.5151C120.679 26.1313 126.115 7.94895 148.2 10.838C156.525 21.0335 160.942 27.4897 160.261 40.7443C159.581 53.999 161.053 63.4001 159.469 69.7443C157.901 76.017 151.088 87.6425 135.458 87.3023C134.1 95.4592 133.431 104.305 145.3 104.713C135.951 111.818 103.017 109.546 91.7969 106.165H91.7991Z" fill="#BA664D" />
            <rect x="145.957" y="55.4355" width="8.05439" height="6.4897" fill="url(#pattern0)" />
            <g style={{ mixBlendMode: 'multiply' }}>
                <path d="M133.336 66.659C141.746 64.1101 150.953 64.7367 151.785 67.44C147.181 69.9733 136.987 68.1875 133.336 66.659Z" fill="#E0B3A8" />
            </g>
            <path d="M104.867 64.6067C108.613 64.6067 111.649 61.5699 111.649 57.8239C111.649 54.0778 108.613 51.041 104.867 51.041C101.122 51.041 98.0859 54.0778 98.0859 57.8239C98.0859 61.5699 101.122 64.6067 104.867 64.6067Z" fill="#BA664D" />
            <g style={{ mixBlendMode: 'multiply' }}>
                <path d="M106.32 61.3517C106.493 61.3517 106.654 61.251 106.727 61.0854C106.824 60.8616 106.721 60.602 106.497 60.5036C105.915 60.2529 105.589 59.8859 105.548 59.4473C105.508 58.9975 105.786 58.494 106.237 58.1941C106.727 57.8696 107.314 57.845 107.842 58.127C107.983 58.2031 108.15 58.1964 108.285 58.1113C108.419 58.0263 108.497 57.8764 108.49 57.7175C108.417 56.1062 107.327 54.7837 105.645 54.2712C103.899 53.7364 102.13 54.26 101.134 55.6005C100.989 55.7974 101.029 56.0727 101.226 56.2181C101.421 56.3636 101.698 56.3233 101.843 56.1264C102.779 54.8665 104.336 54.7949 105.385 55.1149C106.246 55.3789 107.173 56.0212 107.493 57.0819C106.891 56.979 106.276 57.1043 105.748 57.4556C105.023 57.9368 104.598 58.7469 104.665 59.5234C104.705 59.971 104.949 60.799 106.141 61.3137C106.199 61.3383 106.258 61.3495 106.316 61.3495L106.32 61.3517Z" fill="#E0B3A8" />
            </g>
            <g style={{ mixBlendMode: 'multiply' }}>
                <path d="M134.101 87.2841C134.061 87.2841 134.023 87.2797 133.983 87.2685C122.738 84.0706 113.728 74.6068 111.028 63.1603C110.972 62.9276 111.117 62.6926 111.35 62.6389C111.582 62.583 111.817 62.7284 111.871 62.9612C114.5 74.1056 123.273 83.3187 134.22 86.4315C134.45 86.4964 134.584 86.7381 134.52 86.9686C134.466 87.1588 134.291 87.2841 134.101 87.2841Z" fill="#E0B3A8" />
            </g>
            <path d="M123.115 38.4585C122.965 38.4585 122.817 38.3802 122.737 38.2392C122.618 38.0311 122.69 37.7648 122.898 37.6462C128.556 34.4125 135.299 34.1574 138.076 35.0033C138.306 35.0727 138.434 35.3166 138.365 35.5449C138.295 35.7754 138.051 35.9029 137.823 35.8335C135.548 35.1398 128.959 35.1823 123.328 38.4003C123.26 38.4384 123.187 38.4585 123.113 38.4585H123.115Z" fill="#2B1710" />
            <path d="M158.566 38.9137C158.434 38.9137 158.305 38.8533 158.22 38.7392C158.148 38.6429 156.394 36.4006 150.805 37.0966C150.566 37.1257 150.351 36.9578 150.32 36.7206C150.291 36.4834 150.458 36.2664 150.696 36.235C156.676 35.4876 158.701 37.9358 158.911 38.2177C159.054 38.4102 159.016 38.681 158.824 38.8264C158.745 38.8846 158.654 38.9137 158.564 38.9137H158.566Z" fill="#2B1710" />
            <path d="M148.489 62.0241C148.361 62.0241 148.233 61.9682 148.148 61.8608C147.999 61.6728 148.03 61.3998 148.218 61.2498C150.466 59.4596 152.968 57.2665 153.511 56.5012C153.127 56.4206 152.292 56.4049 151.652 56.3915C150.084 56.3624 148.305 56.3266 147.256 55.7358C144.933 54.4289 147.175 44.6138 149.225 40.0017C149.323 39.7823 149.578 39.6839 149.797 39.7823C150.017 39.8786 150.115 40.1359 150.017 40.3552C147.634 45.7171 146.28 54.1917 147.681 54.9794C148.54 55.4628 150.274 55.4964 151.668 55.5232C153.415 55.5568 154.471 55.5769 154.471 56.3781C154.471 57.1792 151.364 59.8534 148.757 61.9279C148.676 61.9906 148.583 62.0219 148.486 62.0219L148.489 62.0241Z" fill="#2B1710" />
            <g style={{ mixBlendMode: 'multiply' }}>
                <path d="M142.77 77.6868C141.09 77.6868 139.34 77.3892 137.998 76.5097C137.796 76.3777 137.74 76.1092 137.872 75.9078C138.004 75.7064 138.273 75.6504 138.474 75.7825C141.553 77.7987 147.133 76.3352 147.708 75.919C147.898 75.7802 148.171 75.8138 148.314 76.0018C148.457 76.1897 148.43 76.4516 148.247 76.5993C147.772 76.9797 145.356 77.6868 142.77 77.6868Z" fill="#E0B3A8" />
            </g>
            <path d="M132.657 52.1303C134.111 52.1303 135.29 50.0383 135.29 47.4577C135.29 44.8771 134.111 42.7852 132.657 42.7852C131.202 42.7852 130.023 44.8771 130.023 47.4577C130.023 50.0383 131.202 52.1303 132.657 52.1303Z" fill="#2B1710" />
            <g style={{ mixBlendMode: 'multiply' }}>
                <path d="M132.062 53.7137C131.158 53.7137 129.161 53.3243 128.512 50.0168C128.489 49.8982 128.565 49.7841 128.684 49.7617C128.8 49.7393 128.917 49.8154 128.939 49.934C129.57 53.1475 131.481 53.3378 132.275 53.2706C132.396 53.2572 132.499 53.349 132.51 53.4676C132.521 53.5862 132.432 53.6913 132.313 53.7025C132.244 53.7092 132.161 53.7137 132.065 53.7137H132.062Z" fill="#E0B3A8" />
            </g>
            <path d="M152.594 52.6967C154.049 52.6967 155.228 50.6047 155.228 48.0241C155.228 45.4436 154.049 43.3516 152.594 43.3516C151.14 43.3516 149.961 45.4436 149.961 48.0241C149.961 50.6047 151.14 52.6967 152.594 52.6967Z" fill="#2B1710" />
            <g style={{ mixBlendMode: 'multiply' }}>
                <path d="M151.992 54.2821C151.088 54.2821 149.09 53.8927 148.441 50.5852C148.419 50.4666 148.495 50.3525 148.614 50.3301C148.73 50.3077 148.846 50.3838 148.869 50.5024C149.5 53.7159 151.41 53.9061 152.205 53.839C152.325 53.8256 152.428 53.9173 152.44 54.0359C152.451 54.1545 152.361 54.2597 152.243 54.2709C152.173 54.2776 152.09 54.2821 151.994 54.2821H151.992Z" fill="#E0B3A8" />
            </g>
            <path d="M129.105 57.8955C128.069 59.2897 127.382 60.5317 127.57 60.6704C127.758 60.8114 128.751 59.7954 129.787 58.4013C130.823 57.0071 131.51 55.7651 131.322 55.6263C131.134 55.4854 130.141 56.5013 129.105 57.8955Z" fill="#BA664D" />
            <path d="M131.765 58.2354C130.729 59.6295 130.042 60.8715 130.23 61.0103C130.418 61.1512 131.411 60.1353 132.447 58.7411C133.483 57.3469 134.17 56.1049 133.982 55.9662C133.794 55.8252 132.801 56.8412 131.765 58.2354Z" fill="#BA664D" />
            <path d="M134.71 58.5166C133.674 59.9108 132.988 61.1528 133.175 61.2915C133.363 61.4325 134.357 60.4165 135.393 59.0223C136.429 57.6282 137.115 56.3862 136.928 56.2474C136.74 56.1065 135.746 57.1224 134.71 58.5166Z" fill="#BA664D" />
            <path d="M104.25 32.5052C135.467 30.3099 148.205 10.8386 148.205 10.8386L131.809 7.37891L110.347 20.553L104.25 32.5075V32.5052Z" fill="#2B1710" />
            <g style={{ mixBlendMode: 'multiply' }}>
                <path d="M151.488 68.1663C147.79 77.6793 141.246 76.5537 133.422 67.0742C137.098 67.9022 140.172 70.7801 143.049 71.1001C147.076 71.5476 148.929 68.9719 151.488 68.1663Z" fill="#E0B3A8" />
            </g>
            <path d="M116.852 34.1162H116.856C135.844 33.973 148.599 21.1793 148.599 9.31662C148.599 9.02794 148.367 8.79297 148.076 8.79297C147.785 8.79297 147.552 9.0257 147.552 9.31662C147.552 20.6758 135.213 32.9324 116.847 33.0689C116.559 33.0689 116.326 33.3061 116.328 33.5948C116.328 33.8813 116.563 34.114 116.852 34.114V34.1162Z" fill="#2B1710" />
            <path d="M91.5803 40.8493C102.858 40.8493 112 31.7049 112 20.4247C112 9.14443 102.858 0 91.5803 0C80.3026 0 71.1602 9.14443 71.1602 20.4247C71.1602 31.7049 80.3026 40.8493 91.5803 40.8493Z" fill="#2B1710" />
            <path d="M107.704 147.422C133.32 158.647 158.935 144.983 158.935 144.983L145.303 104.715L103.312 103.99L107.704 147.424V147.422Z" fill="#BA664D" />
            <path d="M131.304 245.999C130.148 218.505 123.243 137.536 99.6865 102.004C99.5254 102.026 91.4844 105.846 91.4844 105.846C39.2025 125.996 3.29335 200.249 0 245.999H131.304Z" fill="#CDE4F5" />
            <path d="M160.203 246H232.001C221.023 174.262 181.928 126.666 145.305 104.713C152.276 132.948 162.407 213.63 160.203 246Z" fill="#CDE4F5" />
            <g style={{ mixBlendMode: 'multiply' }}>
                <path d="M181.868 245.004C181.624 245.004 181.418 244.816 181.402 244.568C180.722 234.491 184.065 225.219 187.014 217.038C189.381 210.47 191.618 204.264 191.403 198.681C191.135 191.679 188.714 183.833 186.152 175.526C184.034 168.658 181.843 161.558 180.434 153.851C180.387 153.595 180.554 153.354 180.81 153.307C181.065 153.26 181.308 153.428 181.353 153.683C182.754 161.336 184.937 168.41 187.047 175.251C189.627 183.618 192.066 191.52 192.339 198.645C192.56 204.412 190.294 210.7 187.893 217.356C184.975 225.45 181.669 234.623 182.335 244.505C182.353 244.762 182.159 244.986 181.901 245.004C181.89 245.004 181.879 245.004 181.87 245.004H181.868Z" fill="#BFBFBF" />
            </g>
            <g style={{ mixBlendMode: 'multiply' }}>
                <path d="M56.4769 245.736C56.4634 245.736 56.4523 245.736 56.4388 245.736C56.1815 245.716 55.9891 245.49 56.0093 245.233C56.0182 245.11 57.0966 232.685 66.2831 208.26C66.3726 208.018 66.6433 207.897 66.8849 207.987C67.1266 208.078 67.2496 208.347 67.1579 208.589C58.0251 232.867 56.9512 245.184 56.94 245.307C56.9199 245.551 56.7163 245.736 56.4746 245.736H56.4769Z" fill="#BFBFBF" />
            </g>
            <path d="M137.203 68.4746C137.203 68.4746 141.633 71.198 143.797 71.1488C145.96 71.0996 148.278 70.2403 149.916 68.8797C149.916 68.8797 140.08 69.4324 137.203 68.4768V68.4746Z" fill="#4D4D4D" />
            <path d="M144.921 69.1582C140.69 69.1582 135.706 68.5674 132.665 67.077C132.45 66.9719 132.361 66.7123 132.466 66.4952C132.571 66.2804 132.833 66.1909 133.048 66.296C138.185 68.8091 149.548 68.6704 151.788 67.4396C151.998 67.3232 152.262 67.4015 152.378 67.6096C152.495 67.82 152.416 68.0841 152.206 68.2004C151.136 68.789 148.266 69.1582 144.923 69.1582H144.921Z" fill="#2B1710" />
            <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_622_16430" transform="scale(0.0277778 0.0344828)" />
                </pattern>
                <image id="image0_622_16430" width="36" height="29" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAdCAYAAADCdc79AAAACXBIWXMAAAsSAAALEgHS3X78AAADD0lEQVRYhbVXa24TMRCesb2bpCTQP+V+XIMihBDiGoAKx6O/gKKmsdHYHs/Y66VpurHieOXHzOd5G6HTwuc3oZ3Ft1+6e5duEyYFDP2HjItGVFt5nubod/11MbAVoUoy9PVwSCP9HUIag1pvYRBAk0DKNwLc/q73Ei1a2x8ARgtwMQKshjjnKjDExGeO3gtnlhaDU0Nsf+4TA2vSaAyARYC/+4T6Lq9zRwPw8xfAyqVL07n1GEk5aBtqUCERDQqEViO1u32+tZd56j40+5vLhEx7PaS9mOzUVdJhYtRJnD40DPSo94OA0sD8DBj+2K4BXm4SqNxEQkyACDLT+4cZUHk/21gLTNtUmcT0aSCpbTMmMKOLnb1YAcoqYlB8U73OoBhYy7BnX1EXQZzA2SQRAjPY2PGdeKmL6opM/LQH9izFIbt6NTfXCsZ8xpl0mctNMmSLgO+/Vb7aMersqsVPGyNm9WiJQL210OEz7F2kHlIVeSEi4IebSfwSQBw7glJVzy663NsL5WWDMpJ6NkMCRNs+fu8GUzNhTAQPXm43F4M5cqMCYVUwtHkkNRGY17vE48UI+OnHbGR3EDoGWxh1BBEjcN4fJaCMlgWnQRK9q12KxFfDoznRxUNM2IQ8YnJtPopzkgoZNAoYoy5B6tmtS5w5JkHXRl2kgUpCPdWxurDxwExjMElV5NordzSYKaCWMJNgiVXIGzAEgA2YYk0MevZJYKaAONBhtgvIiTIEJSHl8oiiYr4IgdmuTgIjgIqBggRDVoc2bGMkUAYU77QoaiabGU4DI4AoasZk6oUwceLIirkXISkwLEG60PZ5YICtpE4fHAJ8XUKwveg5a2Tt1UWRMl6fXu6KDUXDzTHGz+QstpUoEZtTAEhh5kOVKE9pYqpFSk2poYssneW5QixVIi7yEJh6mS4Viuuj2EmxsZyfuNBf6FUyLfK1lHTVp0HzSVVYLdX+HxiNygMG66jt7Fneav13mW+KsvYI/Z5pvEcDqoCFTi7DZYz3yYAKqPih8umZn9SPEtev2bO/7wHgH3rvwdmd222tAAAAAElFTkSuQmCC" />
            </defs>
        </svg>
    );
}

export default HealthInfoPage;