import React from 'react';
import 'animate.css'; // Importing the animate.css library
import { InView } from 'react-intersection-observer'; // Importing Intersection Observer

const SchoolERP = () => {
  return (
    <div className="py-6 flex flex-col lg:flex-row">
      {/* Left Section */}
      <InView
        triggerOnce={true}  // Trigger the animation only once
        threshold={0.5}      // Trigger when 50% of the element is in view
      >
        {({ inView, ref }) => (
          <div
            ref={ref} // Attach the intersection observer to this div
            className={`w-full lg:w-1/2 p-8 lg:ml-8 mb-8 lg:mb-0 ${inView ? 'animate__animated animate__fadeInLeft' : ''}`}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">All-In-One School ERP</h2>
            <p className="text-lg mb-6">Single bundle solution including all our modules for the best school automation.</p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Complete Paperless Solutions</h3>
            <ul className="space-y-4 text-gray-700 text-lg list-disc pl-6">
              <li>Increases Overall Productivity</li>
              <li>Reduces Workload & Backlogs</li>
              <li>Centralized Admin Control</li>
            </ul>
          </div>
        )}
      </InView>

      {/* Right Section */}
      <InView
        triggerOnce={true}  // Trigger the animation only once
        threshold={0.5}      // Trigger when 50% of the element is in view
      >
        {({ inView, ref }) => (
          <div
            ref={ref} // Attach the intersection observer to this div
            className={`w-full lg:w-1/2 p-8 flex justify-center ${inView ? 'animate__animated animate__fadeInRight' : ''}`}
          >
            <img
              src="https://buddyblogger.com/wp-content/uploads/2020/10/School-ERP-Software.jpg"
              alt="School ERP"
              className="w-full sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] h-auto object-cover rounded-lg"
              />
          </div>
        )}
      </InView>
    </div>
  );
};

export default SchoolERP;
