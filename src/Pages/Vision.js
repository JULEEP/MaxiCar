import React from "react";
import { InView } from 'react-intersection-observer'; // Import Intersection Observer

const Vision = () => {
  return (
    <div className="py-8"> {/* Reduced padding */}
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
        {/* Left Section - Content */}
        <InView
          triggerOnce={true}  // Trigger animation once when element comes into view
          threshold={0.5}      // Trigger when 50% of the element is visible
        >
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`lg:w-1/2 text-left lg:text-left mb-4 lg:mb-0 transform transition-transform ${inView ? 'animate__animated animate__fadeInLeft' : ''}`}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-2">How Can We Help?</h2> {/* Title */}
              <p className="text-lg text-gray-600 mb-4">
                Get a Ride Quote Here
              </p>
              <p className="text-base text-gray-600 mb-6">
                Our customer service team is available around the clock, 7 days a week. Speak with one of our team members to get comprehensive guidance tailored to your specific requirements.
              </p>
              <a 
                href="/contact"  // Update this link to your contact page
                className="inline-block bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition"
              >
                Contact Us
              </a>
            </div>
          )}
        </InView>

        {/* Right Section - Image */}
        <InView
          triggerOnce={true}  // Trigger animation once when element comes into view
          threshold={0.5}      // Trigger when 50% of the element is visible
        >
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`lg:w-1/2 flex justify-center transform transition-transform ${inView ? 'animate__animated animate__fadeInRight' : ''}`}
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/023/399/688/large_2x/can-i-help-you-text-button-can-i-help-you-sign-icon-label-sticker-web-buttons-vector.jpg"
                alt="How Can We Help"
                className="w-full sm:w-[280px] md:w-[350px] lg:w-[500px] h-auto object-cover rounded-lg"
              />
            </div>
          )}
        </InView>
      </div>
    </div>
  );
};

export default Vision;
