import React from "react";
import { InView } from "react-intersection-observer"; // Import Intersection Observer
import {
  UserIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  UserGroupIcon,
} from "@heroicons/react/outline"; // Heroicons

const DemoPage = () => {
  const cards = [
    {
      icon: <UserIcon className="w-12 h-12 text-blue-700" />,
      title: "ADMIN",
      buttonLabel: "Try a Demo",
      bgColor: "bg-blue-500",
      url: "https://school-manage-zeta.vercel.app/Admin-dashboard",
    },
    {
      icon: <AcademicCapIcon className="w-12 h-12 text-green-700" />,
      title: "STUDENT",
      buttonLabel: "Try a Demo",
      bgColor: "bg-green-500",
      url: "https://school-manage-zeta.vercel.app/student-dashboard",
    },
    {
      icon: <BriefcaseIcon className="w-12 h-12 text-yellow-700" />,
      title: "TEACHER",
      buttonLabel: "Try a Demo",
      bgColor: "bg-yellow-500",
      url: "https://school-manage-zeta.vercel.app/teacher-dashboard",
    },
    {
      icon: <UserGroupIcon className="w-12 h-12 text-red-700" />,
      title: "PARENT",
      buttonLabel: "Try a Demo",
      bgColor: "bg-red-500",
      url: "https://school-manage-zeta.vercel.app/parent-dashboard",
    },
  ];

  return (
    <div
      className="relative bg-gray-50 min-h-screen py-16"
      style={{
        backgroundImage: `url('https://www.teahub.io/photos/full/13-137242_new-animated-desktop-wallpapers-animated-background-cute-animated.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Transparent Overlay */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-40"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Demo for Key Users</h2>
        <p className="text-lg text-gray-200 mb-12">
          Explore the tailored features for each user type to understand how our platform works.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <InView
              key={index}
              triggerOnce={true} // Trigger animation once when element comes into view
              threshold={0.5} // Trigger when 50% of the element is visible
            >
              {({ inView, ref }) => (
                <div
                  ref={ref}
                  className={`rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition-transform hover:-translate-y-2 ${card.bgColor} ${
                    inView ? "animate__animated animate__fadeInUp" : ""
                  }`}
                  onClick={() => (window.location.href = card.url)} // Redirect on card click
                  style={{ cursor: "pointer" }}
                >
                  <div className="p-4 bg-white rounded-full shadow-md mb-4">{card.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                  <button
                    className="mt-4 px-4 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold rounded shadow hover:opacity-90"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent card click redirection
                      window.location.href = card.url;
                    }}
                  >
                    {card.buttonLabel}
                  </button>
                </div>
              )}
            </InView>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
