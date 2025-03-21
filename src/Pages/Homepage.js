import React from "react";
import { InView } from "react-intersection-observer"; // Import Intersection Observer
import Navbar from "./Navbar";
import KeyFeatures from "./KeyFeatures";
import WhyUs from "./WhyUs";
import SchoolERP from "./Erp";
import AboutUs from "./AboutUs";
import Vision from "./Vision";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LatestNews from "./LatestNews";

// Direct links to the images
const fleetImage1 = "https://13maxicabs.com/wp-content/uploads/2024/07/13-Maxi-Fleets-600x380-02-1-2.png";
const fleetImage2 = "https://13maxicabs.com/wp-content/uploads/2024/07/13-Maxi-Fleets-600x380-03-1.png";
const fleetImage3 = "https://13maxicabs.com/wp-content/uploads/2024/07/13-Maxi-Fleets-600x380-01-2.png";
const fleetImage4 = "https://13maxicabs.com/wp-content/uploads/2024/07/13-Maxi-Fleets-600x380-04-1.png";

const HomePage = () => {
  const navigate = useNavigate();
  const images = [fleetImage1, fleetImage2, fleetImage3, fleetImage4]; // Using the direct image links
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      {/* Static Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Hero Section with Slider */}
      <section
        id="home"
        className="bg-cover bg-center flex flex-col lg:flex-row justify-between items-center px-6 py-12 mt-16"
        style={{
          backgroundImage:
            "url('https://www.simplus.com/wp-content/uploads/2022/08/Featured-image-14.jpg')",
        }}
      >
        {/* Left Side Text */}
        <InView triggerOnce={true} threshold={0.5}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`text-white w-full max-w-lg mb-6 lg:mb-0 transform transition-transform ${
                inView ? "animate__animated animate__fadeInLeft" : ""
              }`}
            >
              <h1 className="text-3xl font-bold mb-4 ml-4">
                Book a Maxi Cab Service in Sydney with 13 Maxi Cabs
              </h1>
              <p className="text-lg mb-3 ml-4">
                YOUR RELIABLE AND TRUSTED MAXI or TAXI SERVICE FOR REGULAR TRANSFERS like Sydney Airport to your hotel or anywhere in Sydney CBD, Australia.
              </p>
              <p className="text-lg mb-3 ml-4">
                We have multiple fleet options of Maxis Cabs for Group Transfer, Sedan taxi for Corporate transfer, Wheelchair accessible Taxi Maxi for disabled persons, Taxi with Maxi Taxi Baby Seats, and all the needs of transportation services we cover.
              </p>

              {/* Book Now and Call Now Buttons */}
              <div className="mt-6 ml-4">
                <button
                  onClick={() => navigate("/book")} // Navigate to the Booking Page
                  className="mr-4 px-6 py-3 text-white font-semibold rounded-full shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-colors duration-300"
                >
                  Book Now
                </button>
                <a
                  href="tel:+61212345678" // Replace with the actual number for calling
                  className="px-6 py-3 text-white font-semibold rounded-full shadow-lg bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 transition-colors duration-300"
                >
                  Call Now
                </a>
              </div>
            </div>
          )}
        </InView>

        {/* Right Side Image Slider */}
        <InView triggerOnce={true} threshold={0.5}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`w-full max-w-xl transform transition-transform ${
                inView ? "animate__animated animate__fadeInRight" : ""
              }`}
            >
              <Slider {...settings} className="w-full">
                {images.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          )}
        </InView>
      </section>

      {/* Rest of the Sections */}
      <div className="">
        <hr className="border-t-2 border-gray-300" />

        {/* Sections with Intersection Observer */}
        {[ 
          { id: "features", component: <KeyFeatures /> },
          { id: "whyus", component: <WhyUs /> },
          { id: "schoolerp", component: <SchoolERP /> },
          { id: "aboutus", component: <AboutUs /> },
          { id: "letestnews", component: <LatestNews /> },
          { id: "vision", component: <Vision /> },
          { id: "contactus", component: <ContactUs /> },
        ].map(({ id, component }) => (
          <InView triggerOnce={true} threshold={0.5} key={id}>
            {({ inView, ref }) => (
              <section
                id={id}
                ref={ref}
                className={`transform transition-transform ${
                  inView ? "animate__animated animate__fadeInUp" : ""
                }`}
              >
                {component}
              </section>
            )}
          </InView>
        ))}

        <hr className="border-t-2 border-gray-300" />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
