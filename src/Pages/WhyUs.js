import React from "react";
import { CogIcon, UserCircleIcon, SupportIcon, LockClosedIcon, UsersIcon, DesktopComputerIcon } from "@heroicons/react/outline"; // Heroicons
import { InView } from 'react-intersection-observer'; // Intersection Observer for animations
import { FaCar, FaPlane, FaGift, FaCalendarAlt, FaRing, FaWheelchair } from 'react-icons/fa'; // Importing more suitable icons

const WhyUs = () => {
  const services = [
    {
      icon: <FaCar className="w-8 h-8 text-purple-700" />, // Taxi/Car Icon
      title: "Services We Provide | Maxi Taxi Near Me",
      description: "Stuck somewhere in Sydney and need a ride? Skip the wait! Book a reliable taxi in seconds with 13 maxi cabs. We have got spacious Maxi Taxis for 11 persons, group transfer, classic Sedans, and even wheelchair-accessible maxi options. Plus, one baby seat comes free with every booking only in maxis for sedan; some chargers may apply! You can call: +61 416 967 807, and get rolling in Sydney’s comfort zone.",
      bgColor: "bg-purple-500",
    },
    {
      icon: <FaPlane className="w-8 h-8 text-blue-700" />, // Plane Icon for Airport
      title: "Sydney Airport Transfer",
      description: "Sydney Airport arrival? Skip the queues and stress! 13 maxi cabs Maxi Taxis are your smooth-sailing partner. Spacious rides, friendly drivers, and 24/7 service get you to your destination feeling relaxed. Book your Sydney airport transfer now with a car seat whether it's a pickup or drop-off service we always be there with a taxi maxi for your group transfer.",
      bgColor: "bg-blue-500",
    },
    {
      icon: <FaGift className="w-8 h-8 text-green-700" />, // Gift/Parcel Icon for Parcel Transfer
      title: "Parcel Transfer Service",
      description: "13maxicabs isn’t just for people – we deliver parcels too! Need that urgent gift across town, or that bulky box collected? We are available around NSW, Australia. Our reliable drivers will pick it up and deliver it fast on-time, for the price of a cab ride! No queues, no hassle – just convenient parcel delivery in Sydney.",
      bgColor: "bg-green-500",
    },
    {
      icon: <FaCalendarAlt className="w-8 h-8 text-red-700" />, // Calendar Icon for Special Events
      title: "Special Events Transfer",
      description: "Sydney’s hottest event awaits, and 13 maxi cabs is your ride in style! Our Maxi Taxis take you and your crew there comfortably, ensuring a grand entrance that’ll turn heads. Forget about looking for parking or getting into crowded rideshares. Book your special event transfer now and arrive feeling fresh for the fun!",
      bgColor: "bg-red-500",
    },
    {
      icon: <FaRing className="w-8 h-8 text-yellow-700" />, // Wedding Ring Icon for Wedding Transfer
      title: "Wedding Transfer",
      description: "Make your Sydney wedding entrance unforgettable with 13 maxi cabs. Spacious Maxi Taxis ensure the whole bridal party arrives relaxed and picture-perfect. Plus, our professional drivers handle the logistics, leaving you free to focus on the 'I dos.' Book your wedding transfer today and say 'Yes’ in a stress-free style!",
      bgColor: "bg-yellow-500",
    },
    {
      icon: <FaWheelchair className="w-8 h-8 text-teal-700" />, // Wheelchair Icon for Accessible Transfer
      title: "Accessible Wheelchair Transfer",
      description: "13 maxi cabs offer wheelchair-accessible taxis in Sydney, ensuring a comfortable and stress-free journey wherever you need to go. Book your accessible transfer today and experience the freedom of Sydney!",
      bgColor: "bg-teal-500",
    },
  ];

  return (
    <div className="py-8">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-12">Services We Provide | Maxi Taxi Near Me</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 gap-8">
          {services.map((service, index) => (
            <InView
              key={index}
              triggerOnce={true}
              threshold={0.5}
            >
              {({ inView, ref }) => (
                <div
                  ref={ref}
                  className={`rounded-lg p-6 flex flex-col items-center text-center transform transition-transform hover:-translate-y-2 shadow-lg ${service.bgColor} ${inView ? 'animate__animated animate__fadeIn' : ''}`}
                  style={{ minHeight: "220px", maxWidth: "400px", transition: "all 0.3s ease" }} // Adjusted width for small screens
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white mb-4 shadow-md">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                  <p className="text-white mt-2 text-sm">{service.description}</p>
                </div>
              )}
            </InView>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
