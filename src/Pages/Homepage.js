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

const HomePage = () => {
  return (
    <div>
      {/* Static Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-white flex flex-col lg:flex-row justify-between items-center px-6 py-12 mt-24"
      >
        {/* Left Side Text */}
        <InView
          triggerOnce={true} // Trigger animation once when element comes into view
          threshold={0.5}     // Trigger when 50% of the element is visible
        >
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
            </div>
          )}
        </InView>

        {/* Right Side Image */}
        <InView
          triggerOnce={true} // Trigger animation once when element comes into view
          threshold={0.5}     // Trigger when 50% of the element is visible
        >
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`w-full max-w-xl transform transition-transform ${
                inView ? "animate__animated animate__fadeInRight" : ""
              }`}
            >
              <img
                src="https://th.bing.com/th/id/OIP.SNyXkVPKPHcQyIPZltTnJgHaEK?rs=1&pid=ImgDetMain"
                alt="Dashboard"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          )}
        </InView>
      </section>

      {/* Rest of the Sections */}
      <div className="px-6 lg:px-8">
        <hr className="border-t-2 border-gray-300" />
        <InView
          triggerOnce={true}
          threshold={0.5}
        >
          {({ inView, ref }) => (
            <section
              id="features"
              ref={ref}
              className={`transform transition-transform ${
                inView ? "animate__animated animate__fadeInUp" : ""
              }`}
            >
              <KeyFeatures />
            </section>
          )}
        </InView>
        <hr className="border-t-2 border-gray-300" />

        <InView
          triggerOnce={true}
          threshold={0.5}
        >
          {({ inView, ref }) => (
            <section
              id="whyus"
              ref={ref}
              className={`transform transition-transform ${
                inView ? "animate__animated animate__fadeInUp" : ""
              }`}
            >
              <WhyUs />
            </section>
          )}
        </InView>
        <hr className="border-t-2 border-gray-300" />

        <InView
          triggerOnce={true}
          threshold={0.5}
        >
          {({ inView, ref }) => (
            <section
              id="schoolerp"
              ref={ref}
              className={`transform transition-transform ${
                inView ? "animate__animated animate__fadeInUp" : ""
              }`}
            >
              <SchoolERP />
            </section>
          )}
        </InView>
        <hr className="border-t-2 border-gray-300" />

        <InView
          triggerOnce={true}
          threshold={0.5}
        >
          {({ inView, ref }) => (
            <section
              id="admission"
              ref={ref}
              className={`transform transition-transform ${
                inView ? "animate__animated animate__fadeInUp" : ""
              }`}
            >
              <AdmissionManagement />
            </section>
          )}
        </InView>
        <hr className="border-t-2 border-gray-300" />

        <InView
          triggerOnce={true}
          threshold={0.5}
        >
          {({ inView, ref }) => (
            <section
              id="learning"
              ref={ref}
              className={`transform transition-transform ${
                inView ? "animate__animated animate__fadeInUp" : ""
              }`}
            >
              <LearningManagement />
            </section>
          )}
        </InView>
        <hr className="border-t-2 border-gray-300" />

        <InView
          triggerOnce={true}
          threshold={0.5}
        >
          {({ inView, ref }) => (
            <section
              id="examination"
              ref={ref}
              className={`transform transition-transform ${
                inView ? "animate__animated animate__fadeInUp" : ""
              }`}
            >
              <ExaminationSoftware />
            </section>
          )}
        </InView>
        <hr className="border-t-2 border-gray-300" />

        <InView
          triggerOnce={true}
          threshold={0.5}
        >
          {({ inView, ref }) => (
            <section
              id="webapp"
              ref={ref}
              className={`transform transition-transform ${
                inView ? "animate__animated animate__fadeInUp" : ""
              }`}
            >
              <WebsiteMobileApp />
            </section>
          )}
        </InView>
        <hr className="border-t-2 border-gray-300" />

        <InView
          triggerOnce={true}
          threshold={0.5}
        >
          {({ inView, ref }) => (
            <section
              id="aboutus"
              ref={ref}
              className={`transform transition-transform ${
                inView ? "animate__animated animate__fadeInUp" : ""
              }`}
            >
              <AboutUs />
            </section>
          )}
        </InView>
        <hr className="border-t-2 border-gray-300" />

        <InView
          triggerOnce={true}
          threshold={0.5}
        >
          {({ inView, ref }) => (
            <section
              id="ourmission"
              ref={ref}
              className={`transform transition-transform ${
                inView ? "animate__animated animate__fadeInUp" : ""
              }`}
            >
              <OurMission />
            </section>
          )}
        </InView>
        <hr className="border-t-2 border-gray-300" />

        <InView
          triggerOnce={true}
          threshold={0.5}
        >
          {({ inView, ref }) => (
            <section
              id="vision"
              ref={ref}
              className={`transform transition-transform ${
                inView ? "animate__animated animate__fadeInUp" : ""
              }`}
            >
              <Vision />
            </section>
          )}
        </InView>
        <hr className="border-t-2 border-gray-300" />

        <InView
          triggerOnce={true}
          threshold={0.5}
        >
          {({ inView, ref }) => (
            <section
              id="contactus"
              ref={ref}
              className={`transform transition-transform ${
                inView ? "animate__animated animate__fadeInUp" : ""
              }`}
            >
              <ContactUs />
            </section>
          )}
        </InView>
        <hr className="border-t-2 border-gray-300" />

        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
