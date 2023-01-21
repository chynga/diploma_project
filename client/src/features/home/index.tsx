import BannerSection from "./BannerSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import DoctorsSection from "./DoctorsSection";
import ReviewsSection from "./ReviewsSection";
import AppointmentSection from "./AppointmentSection";
import AdvicesSection from "./AdvicesSection";
import LocationSection from "./LocationSection";

function HomePage() {
    return (
        <div>
            <BannerSection />
            <AboutSection />
            <ServicesSection />
            <DoctorsSection />
            <ReviewsSection />
            <AppointmentSection />
            <AdvicesSection />
            <LocationSection />
        </div>
    );
}

export default HomePage;