import React from "react";
import { InView } from 'react-intersection-observer'; // Import Intersection Observer

const OurMission = () => {
  return (
    <div className="py-8 bg-gray-100"> {/* Adjusted padding and background color */}
      <div className="container mx-auto px-6 flex flex-wrap items-center space-x-8"> {/* Flex layout for side by side */}

        {/* Left Section - Taxi Service Content */}
        <InView
          triggerOnce={true}  // Trigger animation once when element comes into view
          threshold={0.5}      // Trigger when 50% of the element is visible
        >
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`w-full sm:w-1/2 lg:w-1/2 text-left lg:text-left transform transition-transform ${inView ? 'animate__animated animate__fadeInLeft' : ''}`}
            >
              <h2 className="text-xl font-bold text-gray-800 mb-2">Services We Provide | Maxi Taxi Near Me</h2>
              <p className="text-sm text-gray-600 mb-2">
                Taxi service/ Taxi near me: <br />
                Stuck somewhere in Sydney and need a ride? Skip the wait! Book a reliable taxi in seconds with 13 maxi cabs. We have got spacious Maxi Taxis for 11 persons, group transfer, classic Sedans, and even wheelchair-accessible maxi options. Plus, one baby seat comes free with every booking only in maxis for sedan; some chargers may apply! <br />
                You can call: <strong>+61 416 967 807</strong>, and get rolling in Sydney’s comfort zone.
              </p>
            </div>
          )}
        </InView>

        {/* Right Section - Taxi Service Image */}
        <InView
          triggerOnce={true}  // Trigger animation once when element comes into view
          threshold={0.5}      // Trigger when 50% of the element is visible
        >
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`w-full sm:w-1/2 lg:w-1/2 flex justify-center transform transition-transform ${inView ? 'animate__animated animate__fadeInRight' : ''}`}
            >
              <img
                src="https://13maxicabs.com/wp-content/uploads/2024/07/taxi.png"
                alt="Taxi Service"
                className="w-[150px] h-[150px] object-cover rounded-full border-4 border-gray-300"
              />
            </div>
          )}
        </InView>

      </div>

      {/* Second Row for Sydney Airport Transfer */}
      <div className="container mx-auto px-6 flex flex-wrap items-center space-x-8 mt-8"> {/* Flex layout for side by side */}

        {/* Left Section - Sydney Airport Transfer Content */}
        <InView
          triggerOnce={true}  // Trigger animation once when element comes into view
          threshold={0.5}      // Trigger when 50% of the element is visible
        >
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`w-full sm:w-1/2 lg:w-1/2 text-left lg:text-left transform transition-transform ${inView ? 'animate__animated animate__fadeInLeft' : ''}`}
            >
              <h2 className="text-xl font-bold text-gray-800 mb-2">Sydney Airport Transfer</h2>
              <p className="text-sm text-gray-600 mb-2">
                Sydney Airport arrival? Skip the queues and stress! <br />
                13 maxi cabs Maxi Taxis are your smooth-sailing partner. Spacious rides, friendly drivers, and 24/7 service get you to your destination feeling relaxed. Book your Sydney airport transfer now with a car seat. Whether it's a pickup or drop-off service, we are always there with a taxi maxi for your group transfer.
              </p>
            </div>
          )}
        </InView>

        {/* Right Section - Sydney Airport Transfer Image */}
        <InView
          triggerOnce={true}  // Trigger animation once when element comes into view
          threshold={0.5}      // Trigger when 50% of the element is visible
        >
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`w-full sm:w-1/2 lg:w-1/2 flex justify-center transform transition-transform ${inView ? 'animate__animated animate__fadeInRight' : ''}`}
            >
              <img
                src="https://13maxicabs.com/wp-content/uploads/2024/07/airport.png"
                alt="Sydney Airport Transfer"
                className="w-[150px] h-[150px] object-cover rounded-full border-4 border-gray-300"
              />
            </div>
          )}
        </InView>

      </div>
    </div>
  );
};

export default OurMission;
