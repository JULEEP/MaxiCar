import React from "react";
import { InView } from 'react-intersection-observer'; // Import Intersection Observer
import { 
  TruckIcon,       // For vehicle icon
  UserIcon,        // For taxi with baby seat
  HandIcon,        // For wheelchair accessible taxi (replacing AccessibilityIcon)
  CalendarIcon,    // For availability
} from "@heroicons/react/outline"; // Heroicons

const KeyFeatures = () => {
  const features = [
    {
      icon: <TruckIcon className="w-12 h-12 text-yellow-500" />, // Vehicles
      title: "Vehicles",
      description: "We have a variety of vehicles available. Upgrade the way you travel! You’re a V.I.P. and should ride in one of our luxury vehicles.",
    },
    {
      icon: <UserIcon className="w-12 h-12 text-yellow-500" />, // Taxi with Baby Seat
      title: "Taxi with Baby Seat",
      description: "Need a taxi with a baby seat in Sydney? 13maxicabs offers Maxi Taxis with one free child seat! Book online or call: +61 416 967 807 for a safe and comfortable ride for the whole family.",
    },
    {
      icon: <HandIcon className="w-12 h-12 text-yellow-500" />, // Wheelchair Accessible Taxi (replacing AccessibilityIcon)
      title: "Wheelchair Accessible Taxi",
      description: "We understand the importance of accessibility. Our wheelchair-accessible taxis are designed to ensure a comfortable and safe journey for passengers with mobility limitations.",
    },
    {
      icon: <CalendarIcon className="w-12 h-12 text-yellow-500" />, // Availability
      title: "Availability",
      description: "Need a ride anywhere in Sydney and surrounding areas right now, or are you planning your family vacation? We’re available 24/7.",
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-6 text-center">
        {/* Title with Yellow Background and Purple Border */}
        <div className="bg-yellow-400 p-6 rounded-lg mb-12 border-b-4 border-purple-700">
          <h2 className="text-3xl font-bold text-white">Why Choose 13 Maxi Cabs</h2>
          <p className="text-lg text-white mt-4">
            Book 13 Maxi Cabs Service in Sydney, NSW, Australia for Local needs of Transportation from Sydney Airport to City, Hotels, or any Destination.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <InView
              key={index}
              triggerOnce={true}  // Trigger animation once when element comes into view
              threshold={0.5}      // Trigger when 50% of the element is visible
            >
              {({ inView, ref }) => (
                <div
                  ref={ref}
                  className={`bg-white shadow-xl rounded-lg p-6 flex flex-col items-center text-center transform transition-transform hover:-translate-y-2 ${inView ? 'animate__animated animate__fadeInUp' : ''}`}
                >
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-gray-800 mt-4">{feature.title}</h3>
                  <p className="text-gray-600 mt-2">{feature.description}</p>
                </div>
              )}
            </InView>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
