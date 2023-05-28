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
import VacancyPage from './routes/vacancy';
import DoctorsPage from './routes/doctors';
import DoctorPage from './routes/doctors/doctor';
import AdvicesPage from './routes/advices';
import AboutPage from './routes/about';
import ProfilePanel from './routes/profilePanel';
import AdminPanel from './routes/adminPanel';
import { OrderCallButton, OrderCallForm } from './routes/common/OrderCall';
import { useState } from 'react';
import { HintContext } from './routes/common/Hint';
import ScrollToTop from './routes/common/ScrollToTop';

function App() {
    const [showOrderCall, setShowOrderCall] = useState(false);
    const [step, setStep] = useState<number>(0);

    const next = () => {
        if (step === 6) {
            close();
        }
        setStep(step + 1);
    }

    const close = () => {
        setStep(0);
    }

    return (
        <HintContext.Provider value={{ step, next, close }}>
            <div className="App bg-background-white dark:bg-background-dark">
                <Router>
                    <ScrollToTop />
                    <Header />
                    <div className="fixed z-50 right-20 bottom-20">
                        <OrderCallButton setShowOrderCall={setShowOrderCall} />
                    </div>
                    <OrderCallForm showOrderCall={showOrderCall} setShowOrderCall={setShowOrderCall} />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/services/:id" element={<ServicePage />} />
                        <Route path="/reviews" element={<ReviewsPage />} />
                        <Route path="/vacancy" element={<VacancyPage />} />
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
    );
}

export default App;
