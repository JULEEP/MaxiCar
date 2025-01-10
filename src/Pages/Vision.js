import React from "react";
import { InView } from 'react-intersection-observer'; // Import Intersection Observer

const Vision = () => {
  return (
    <div className="bg-gray-50 py-8"> {/* Reduced padding */}
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
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Vision</h2> {/* Reduced font size and margin */}
              <p className="text-lg text-gray-600 mb-2"> {/* Reduced margin */}
                To empower educational institutions worldwide with tools that enhance efficiency, communication, and learning outcomes.
              </p>
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
                src="https://static.vecteezy.com/system/resources/previews/010/902/081/large_2x/business-analytics-in-cloud-arrow-leadership-company-people-challenge-teamwork-up-flat-job-marketing-concept-illustration-growth-with-rocket-investment-service-man-and-woman-trend-result-vector.jpg"
                alt="Our Vision"
                className="w-full h-[300px] object-cover rounded-lg"
              />
            </div>
          )}
        </InView>
      </div>
    </div>
  );
};

export default Vision;
