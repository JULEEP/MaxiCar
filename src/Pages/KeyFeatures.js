import React from "react";
import { InView } from 'react-intersection-observer'; // Import Intersection Observer
import { 
  AcademicCapIcon, 
  UserGroupIcon, 
  CalendarIcon, 
  CreditCardIcon, 
  ClipboardCheckIcon, 
  ChartBarIcon, 
  BookOpenIcon, 
  CogIcon 
} from "@heroicons/react/outline"; // Heroicons

const KeyFeatures = () => {
  const features = [
    {
      icon: <AcademicCapIcon className="w-12 h-12 text-purple-700" />,
      title: "Student Management",
      description: "Easily manage student information, including admissions, records, and academic progress.",
    },
    {
      icon: <UserGroupIcon className="w-12 h-12 text-purple-700" />,
      title: "Staff Management",
      description: "Streamline staff records, performance tracking, and payroll management.",
    },
    {
      icon: <CalendarIcon className="w-12 h-12 text-purple-700" />,
      title: "Attendance Tracking",
      description: "Track attendance for students and staff with automated reports.",
    },
    {
      icon: <CreditCardIcon className="w-12 h-12 text-purple-700" />,
      title: "Fee Management",
      description: "Simplify fee collection with automated reminders, receipts, and reports.",
    },
    {
      icon: <ClipboardCheckIcon className="w-12 h-12 text-purple-700" />,
      title: "Exam & Results",
      description: "Create schedules, manage exams, and generate automated report cards.",
    },
    {
      icon: <ChartBarIcon className="w-12 h-12 text-purple-700" />,
      title: "Analytics & Reports",
      description: "Gain insights into academic performance, attendance, and finances.",
    },
    {
      icon: <BookOpenIcon className="w-12 h-12 text-purple-700" />,
      title: "Library Management",
      description: "Manage library inventory, track borrowed books, and generate overdue reminders.",
    },
    {
      icon: <CogIcon className="w-12 h-12 text-purple-700" />,
      title: "Customizable Settings",
      description: "Tailor the system to suit your institution's unique needs and requirements.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16 shadow-lg">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Key Features</h2>
        <p className="text-lg text-gray-600 mb-12">
          Discover the essential features of our school management system that streamline administration and enhance productivity.
        </p>

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
