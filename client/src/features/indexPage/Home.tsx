import Banner from "./Banner";
import About from "./About";
import Service from "./Service";
import Doctor from "./doctor/Doctor";
import Review from "./Review";
import Appointment from "./Appointment";
import Advice from "./Advice";
import Location from "./Location";

function Home() {
    return (
        <div>
            <Banner />
            <About />
            <Service />
            <Doctor />
            <Review />
            <Appointment />
            <Advice />
            <Location />
        </div>
    );
}

export default Home;