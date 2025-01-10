import React from "react";
import { InView } from 'react-intersection-observer'; // Import Intersection Observer

const OurMission = () => {
  return (
    <div className="bg-gray-50 py-8"> {/* Adjusted padding */}
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">

        {/* Left Section - Image */}
        <InView
          triggerOnce={true}  // Trigger animation once when element comes into view
          threshold={0.5}      // Trigger when 50% of the element is visible
        >
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`lg:w-1/2 flex justify-center transform transition-transform ${inView ? 'animate__animated animate__fadeInLeft' : ''}`}
            >
              <img
                src="https://www.sci.jfn.ac.lk/wp-content/uploads/2021/09/mission.gif"
                alt="Our Mission"
                className="w-full h-[300px] object-cover rounded-lg"
              />
            </div>
          )}
        </InView>

        {/* Right Section - Content */}
        <InView
          triggerOnce={true}  // Trigger animation once when element comes into view
          threshold={0.5}      // Trigger when 50% of the element is visible
        >
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`lg:w-1/2 text-left lg:text-left mt-4 lg:mt-0 transform transition-transform ${inView ? 'animate__animated animate__fadeInRight' : ''}`}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Mission</h2> {/* Reduced font size and margin */}
              <p className="text-lg text-gray-600 mb-2"> {/* Reduced margin bottom */}
                To revolutionize education management by offering technology-driven solutions that save time, reduce workload, and foster collaboration.
              </p>
            </div>
          )}
        </InView>

      </div>
    </div>
  );
};

export default OurMission;
