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

function App() {
    return (
        <div className="App bg-background-white dark:bg-background-dark">
            <Router>
                <Header />
                <Routes>
                    <Route path="/about" />
                    <Route path="/users" />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/services/:id" element={<ServicePage />} />
                    <Route path="/reviews" element={<ReviewsPage />} />
                    <Route path="/vacancy" element={<VacancyPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
