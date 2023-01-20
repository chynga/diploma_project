import BannerSection from "./BannerSection";
import AboutSection from "./AboutSection";
import ServiceSection from "./ServiceSection";
import DoctorSection from "./DoctorSection";
import ReviewSection from "./ReviewSection";
import AppointmentSection from "./AppointmentSection";
import AdviceSection from "./AdviceSection";
import LocationSection from "./LocationSection";

function HomePage() {
    return (
        <div>
            <BannerSection />
            <AboutSection />
            <ServiceSection />
            <DoctorSection />
            <ReviewSection />
            <AppointmentSection />
            <AdviceSection />
            <LocationSection />
        </div>
    );
}

export default HomePage;