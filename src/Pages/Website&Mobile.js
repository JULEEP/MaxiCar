import React from 'react';
import { InView } from 'react-intersection-observer'; // Import Intersection Observer

const WebsiteMobileApp = () => {
  return (
    <div className="py-16">
      <div className="flex flex-col lg:flex-row">

        {/* Left Section with Content */}
        <InView
          triggerOnce={true}  // Trigger animation once when element comes into view
          threshold={0.5}      // Trigger when 50% of the element is visible
        >
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`w-full lg:w-1/2 p-4 ml-8 transform transition-transform ${inView ? 'animate__animated animate__fadeInLeft' : ''}`}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Website and Mobile App</h2>
              <p className="text-lg mb-6">
                Global Recognition and Add Credibility with Rich Design and Content
              </p>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h3>
              <ul className="space-y-4 text-gray-700 text-lg list-disc pl-6">
                <li>Integration with ERP for easy access</li>
                <li>Responsive design for all screen sizes</li>
                <li>SEO optimized design process</li>
                <li>Dedicated design manager for any on-going changes</li>
              </ul>
            </div>
          )}
        </InView>

        {/* Right Section with Image */}
        <InView
          triggerOnce={true}  // Trigger animation once when element comes into view
          threshold={0.5}      // Trigger when 50% of the element is visible
        >
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`w-full lg:w-1/2 p-4 flex justify-center transform transition-transform ${inView ? 'animate__animated animate__fadeInRight' : ''}`}
            >
              <img
                src="https://schoolcanvas.com/assets/img/app.png"
                alt="Website and Mobile App"
                className="w-full sm:w-[300px] md:w-[400px] lg:w-[500px] h-auto object-cover rounded-lg"
              />
            </div>
          )}
        </InView>

      </div>
    </div>
  );
};

export default WebsiteMobileApp;
