import React from "react";
import { CogIcon, UserCircleIcon, SupportIcon, LockClosedIcon, UsersIcon, DesktopComputerIcon } from "@heroicons/react/outline"; // Heroicons
import { InView } from 'react-intersection-observer'; // Intersection Observer for animations

const WhyUs = () => {
  const features = [
    {
      icon: <CogIcon className="w-8 h-8 text-purple-700" />,
      title: "Customizable",
      description: "Build on open API, to customise solutions based on school needs. Custom URL & tailored reports.",
      bgColor: "bg-purple-500",
    },
    {
      icon: <UserCircleIcon className="w-8 h-8 text-blue-700" />,
      title: "User Friendly",
      description: "Engage Teachers, Students, Parents without technical expertise. Multiuser login operations with ease.",
      bgColor: "bg-blue-500",
    },
    {
      icon: <SupportIcon className="w-8 h-8 text-green-700" />,
      title: "24/7 Support",
      description: "Our experienced support engineers are available round the clock for any resolution of query.",
      bgColor: "bg-green-500",
    },
    {
      icon: <LockClosedIcon className="w-8 h-8 text-red-700" />,
      title: "Data Security",
      description: "Implementation of 'Zero Trust' access layer for authentication & authorisation of canvas application.",
      bgColor: "bg-red-500",
    },
    {
      icon: <UsersIcon className="w-8 h-8 text-yellow-700" />,
      title: "Scalability",
      description: "Designed to scale with your school as it grows, from small institutions to large educational networks.",
      bgColor: "bg-yellow-500",
    },
    {
      icon: <DesktopComputerIcon className="w-8 h-8 text-teal-700" />,
      title: "Collaboration",
      description: "Facilitate seamless collaboration between teachers, students, and parents for improved learning outcomes.",
      bgColor: "bg-teal-500",
    },
  ];

  return (
    <div className="py-8">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Why Schools Choose MACBELL EDUCARE?</h2>
        <p className="text-base text-gray-600 mb-8">
          MACBELL EDUCARE is an end-to-end school management software that automates the school's day-to-day operations in a hassle-free way
          and provides highly informative reports and dashboards to the management for faster productivity.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 gap-8">
          {features.map((feature, index) => (
            <InView
              key={index}
              triggerOnce={true}
              threshold={0.5}
            >
              {({ inView, ref }) => (
                <div
                  ref={ref}
                  className={`rounded-lg p-6 flex flex-col items-center text-center transform transition-transform hover:-translate-y-2 shadow-lg ${feature.bgColor} ${inView ? 'animate__animated animate__fadeIn' : ''}`}
                  style={{ minHeight: "220px", maxWidth: "400px", transition: "all 0.3s ease" }} // Adjusted width for small screens
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white mb-4 shadow-md">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="text-white mt-2 text-sm">{feature.description}</p>
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
