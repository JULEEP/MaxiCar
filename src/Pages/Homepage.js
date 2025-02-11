import React from "react";
import { InView } from "react-intersection-observer"; // Import Intersection Observer
import Navbar from "./Navbar";
import KeyFeatures from "./KeyFeatures";
import WhyUs from "./WhyUs";
import SchoolERP from "./Erp";
import AdmissionManagement from "./AdmissionManagement";
import LearningManagement from "./LearningManagement";
import ExaminationSoftware from "./ExaminationSoftware";
import WebsiteMobileApp from "./Website&Mobile";
import AboutUs from "./AboutUs";
import OurMission from "./OurMission";
import Vision from "./Vision";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image12 from "../images/image12.png";
import image2 from "../images/image2.png";
import image6 from "../images/image6.png";
import image8 from "../images/image8.png";
import image9 from "../images/image9.png";
import image10 from "../images/image10.png";


const HomePage = () => {
  const navigate = useNavigate();
  const images = [image12, image2, image6, image8, image9, image10];
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
        className="bg-white flex flex-col lg:flex-row justify-between items-center px-6 py-12 mt-24"
      >
        {/* Left Side Text */}
        <InView triggerOnce={true} threshold={0.5}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`text-gray-800 w-full max-w-lg mb-6 lg:mb-0 transform transition-transform ${
                inView ? "animate__animated animate__fadeInLeft" : ""
              }`}
            >
              <h1 className="text-3xl font-bold mb-4 ml-4">
                Welcome to <span className="text-purple-700">Macbell EduCare</span>
              </h1>
              <p className="text-lg mb-3 ml-4">
                Your ultimate solution for managing educational institutions effortlessly!
              </p>
              <p className="text-lg mb-3 ml-4">
                At <span className="font-bold text-purple-700">Macbell EduCare</span>, we simplify the operations of schools, coaching centers, libraries, and other educational establishments.
              </p>
              <p className="text-lg ml-4">
                From handling student data and exams to managing attendance, fees, and communication, our solution empowers educators and administrators.
              </p>

              {/* Try a Demo Button */}
              <button
                onClick={() => navigate("/demo")} // Navigate to the DemoPage
                className="mt-6 ml-4 px-6 py-3 text-white font-semibold rounded-full shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-colors duration-300"
              >
                Try a Demo
              </button>

              {/* Inquiry Me Button */}
              <a
                href="https://wa.me/919424977848?text=Hi,%20I%20have%20an%20inquiry%20regarding%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 ml-4 px-6 py-3 text-white font-semibold rounded-full shadow-lg bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 transition-colors duration-300"
              >
                Inquiry Me
              </a>
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
                    <img src={image} alt={`Slide ${index + 1}`} className="w-full h-auto object-contain rounded-lg" />
                  </div>
                ))}
              </Slider>
            </div>
          )}
        </InView>
      </section>

      {/* Rest of the Sections */}
      <div className="px-6 lg:px-8">
        <hr className="border-t-2 border-gray-300" />

        {/* Sections with Intersection Observer */}
        {[
          { id: "features", component: <KeyFeatures /> },
          { id: "whyus", component: <WhyUs /> },
          { id: "schoolerp", component: <SchoolERP /> },
          { id: "admission", component: <AdmissionManagement /> },
          { id: "learning", component: <LearningManagement /> },
          { id: "examination", component: <ExaminationSoftware /> },
          { id: "webapp", component: <WebsiteMobileApp /> },
          { id: "aboutus", component: <AboutUs /> },
          { id: "ourmission", component: <OurMission /> },
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
