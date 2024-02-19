import AboutUs from "./Components/AboutUs/About";
import Banner from "./Components/Banner/Banner";
import Feedback from "./Components/Feedback";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/NavBar/Navbar";
import Review from "./Components/Review ";
import Service from "./Components/Service";
// import Venue from "./Components/VenueSlider";
import Story from "./Components/Story";
import PaymentForm from "./Components/PaymentForm";
import VenueCard from "./Components/VenueSlider";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <VenueCard />
      <Service />
      <Review />
      <AboutUs />
      <Story />
      <Feedback />
      <PaymentForm />

      <Footer />
    </div>
  );
};

export default MainPage;
