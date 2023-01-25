import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Header from './features/common/Header';
import NotFound from './features/common/NotFound';
import HomePage from './features/home';
import Footer from './features/common/Footer';
import ServicesPage from './features/services';
import ServicePage from './features/services/service';
import ReviewsPage from './features/reviews';
import VacancyPage from './features/vacancy';
import DoctorsPage from './features/doctors';
import DoctorPage from './features/doctors/doctor';
import AdvicesPage from './features/advices';
import AboutPage from './features/about';
import ProfilePanel from './features/profile';

function App() {
    return (
        <div className="App bg-background-white dark:bg-background-dark">
            <Router>
                <Header />
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
                    <Route path="/profile" element={<ProfilePanel />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
