import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Header from './routes/common/header';
import NotFound from './routes/common/NotFound';
import HomePage from './routes/home';
import Footer from './routes/common/Footer';
import ServicesPage from './routes/services';
import ServicePage from './routes/services/service';
import ReviewsPage from './routes/reviews';
import DoctorsPage from './routes/doctors';
import DoctorPage from './routes/doctors/doctor';
import AdvicesPage from './routes/advices';
import AboutPage from './routes/about';
import ProfilePanel from './routes/profilePanel';
import AdminPanel from './routes/adminPanel';
import { OrderCallButton, OrderCallForm } from './routes/common/OrderCall';
import { useEffect, useState } from 'react';
import { HintContext } from './routes/common/Hint';
import ScrollToTop from './routes/common/ScrollToTop';
import { VisuallyImpairedContext, VisuallyImpairedSettings } from './routes/common/header/VisuallyImpairedSettingBar';

function useStickyState(defaultValue: VisuallyImpairedSettings): [VisuallyImpairedSettings, (v: VisuallyImpairedSettings) => void] {
    const [value, setValue] = useState<VisuallyImpairedSettings>(defaultValue);

    useEffect(() => {
        const stickyValue = localStorage.getItem("impairedSettings")
        if (stickyValue !== null) {
            setValue(JSON.parse(stickyValue))
        }
    }, [setValue])

    return [value, (v) => {
        localStorage.setItem("impairedSettings", JSON.stringify(v))
        setValue(v)
    }]
}

function App() {
    const [showOrderCall, setShowOrderCall] = useState(false);
    const [step, setStep] = useState<number>(0);

    const [visuallyImpairedSettings, setVisuallyImpairedSettings] = useStickyState({
        isOn: false,
        fontSize: "medium",
        theme: "white",
    });

    const next = () => {
        if (step === 6) {
            close();
        }
        setStep(step + 1);
    }

    const close = () => {
        setStep(0);
    }

    const bgColor = !visuallyImpairedSettings.isOn ?
        "bg-background-white dark:bg-background-dark"
        :
        visuallyImpairedSettings.theme === "white" ?
            "bg-background-white"
            :
            visuallyImpairedSettings.theme === "black" ?
                "bg-[#353535]"
                :
                "bg-[#9DD1FF]";

    return (
        <VisuallyImpairedContext.Provider value={{
            visuallyImpairedSettings,
            setVisuallyImpairedSettings
        }}>
            <HintContext.Provider value={{ step, next, close }}>
                <div className={`App ${bgColor}`}>
                    <Router>
                        <ScrollToTop />
                        <Header />
                        <div className="fixed z-50 right-10 md:right-20 bottom-10 md:bottom-20">
                            <OrderCallButton setShowOrderCall={setShowOrderCall} />
                        </div>
                        <OrderCallForm showOrderCall={showOrderCall} setShowOrderCall={setShowOrderCall} />
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/services" element={<ServicesPage />} />
                            <Route path="/services/:id" element={<ServicePage />} />
                            <Route path="/reviews" element={<ReviewsPage />} />
                            <Route path="/doctors" element={<DoctorsPage />} />
                            <Route path="/doctors/:id" element={<DoctorPage />} />
                            <Route path="/advices" element={<AdvicesPage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/profile-panel/*" element={<ProfilePanel />} />
                            <Route path="/admin/*" element={<AdminPanel />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                        <Footer />
                    </Router>
                </div>
            </HintContext.Provider>
        </VisuallyImpairedContext.Provider>
    );
}

export default App;
