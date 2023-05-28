import Sidebar from "./Sidebar";
import { Burger, Glasses, ThemeToggler } from "../common/SvgImages";
import { toggleTheme } from "../common/util";
import AppointmentsPage from "./appointmentsPage";
import ConsultationPage from "./consultationPage";
import ProfilePage from "./profilePage";
import { Route, Routes } from "react-router-dom";
import NotFound from "../common/NotFound";
import HealthInfoPage from "./healthInfoPage";
import DoctorAppointmentsPage from "./doctorAppointments";
import { SetStateAction, useContext, useState } from "react";
import VisuallyImpairedSettingBar, { VisuallyImpairedContext, VisuallyImpairedContextType } from "../common/header/VisuallyImpairedSettingBar";
import { TextLg } from "../common/TextElements";
import { useTranslation } from "react-i18next";

function ProfilePanel() {
    const [showSidebar, setShowSidebar] = useState(false);
    const { i18n } = useTranslation(["kz", "ru"]);
    const { visuallyImpairedSettings, setVisuallyImpairedSettings } =
        useContext(VisuallyImpairedContext) as VisuallyImpairedContextType;
    const toggleImpaired = () => {
        setVisuallyImpairedSettings({
            ...visuallyImpairedSettings,
            isOn: !visuallyImpairedSettings.isOn
        })
    }

    return (
        <div className="flex">
            <div>
                <Sidebar className="w-[320px] md:w-[370px]" showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
            </div>

            <div className="w-full h-screen overflow-auto">
                <div id="theme-toggle" className="p-6 flex justify-end items-center gap-3">
                    <div className="flex items-center gap-3 hover:cursor-pointer"
                        onClick={toggleImpaired}>
                        <Glasses />
                        <TextLg>
                            <p className="hidden xl:block font-medium text-center">
                                {visuallyImpairedSettings.isOn ?
                                    <>
                                        {i18n.language === "ru" ?
                                            "Обычная версия"
                                            :
                                            <>
                                                Көру қабылеті<br />нашарларға
                                            </>
                                        }
                                    </>
                                    :
                                    <>
                                        {i18n.language === "ru" ?
                                            "Слабовидящим"
                                            :
                                            <>
                                                Көру қабылеті<br />нашарларға
                                            </>
                                        }
                                    </>
                                }
                            </p>
                        </TextLg>
                    </div>
                    {!visuallyImpairedSettings.isOn ?
                        <div onClick={toggleTheme}>
                            <ThemeToggler />
                        </div>
                        :
                        <></>
                    }
                    <div onClick={() => setShowSidebar(!showSidebar)}>
                        <Burger className="lg:hidden w-[40px] h-[40px]" fill={"blue"} />
                    </div>
                </div>
                <VisuallyImpairedSettingBar />
                <div className="mt-5 p-6 overflow-x-auto w-full">
                    <Routes>
                        <Route path="/appointments/*" element={<AppointmentsPage />} />
                        <Route path="/doctor-appointments/*" element={<DoctorAppointmentsPage />} />
                        <Route path="/health-info/*" element={<HealthInfoPage />} />
                        <Route path="/consultation/*" element={<ConsultationPage />} />
                        <Route path="/profile/*" element={<ProfilePage />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default ProfilePanel;