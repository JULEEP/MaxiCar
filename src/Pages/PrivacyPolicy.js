import { Bell, FileText, Globe, Link, Lock, Mail, Phone, Users } from "lucide-react";
import React from "react";
import PrivacyImage from "../images/privacy-policy.png";
import Footer from "./Footer";

function PrivacyPolicy() {
  return (
    <div className="p-6 md:p-12 mx-auto mt-6 md:mt-12 shadow-2xl max-w-7xl bg-blue-50 rounded-3xl">
      {/* Content Section */}
      <div className="w-full text-center lg:text-left">
        <h1 className="mb-4 md:mb-6 text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-700 drop-shadow-lg">
          Privacy Policy
        </h1>
        <div className="border-b-2 border-gray-400 mb-6 w-full"></div>
        <p className="mb-4 md:mb-6 text-lg sm:text-xl italic text-green-900">Effective Date: 10 February 2025</p>
        <p className="mb-6 md:mb-8 text-lg sm:text-xl text-gray-700 text-center">
        Welcome to <span className="font-bold text-blue-700">Macbell EduCare</span>. Your privacy is our priority. This
        Privacy Policy explains how we collect, use, and protect the data of administrators, teachers, students, and
        parents using our School Management System.
      </p>      
      </div>

      {/* Sections */}
      <div className="space-y-6 md:space-y-8">
        {sections.map((section, index) => (
          <section
            key={index}
            className={`p-6 md:p-8 bg-white border-l-4 shadow-lg rounded-xl ${section.borderColor}`}
          >
            <h2 className="flex items-center justify-center lg:justify-start mb-4 mr-4 text-2xl sm:text-3xl font-semibold text-purple-800">
              {React.createElement(section.icon, { className: `mr-3 ${section.iconColor}` })} {section.title}
            </h2>
            {section.content}
          </section>
        ))}
      </div>

      <div className="flex justify-center mt-8">
      <img
        src={PrivacyImage}
        alt="Privacy Policy"
        className="w-32 sm:w-100 md:w-40 lg:w-[18rem] h-auto rounded-lg shadow-lg bg-transparent hidden sm:block"
      />
    </div>
    <Footer />
    
    </div>
  );
}

const sections = [
  {
    title: "Information We Collect",
    icon: Users,
    iconColor: "text-blue-500",
    borderColor: "border-blue-500",
    content: (
      <ul className="pl-6 space-y-2 text-sm sm:text-xl text-gray-700 list-disc">
        <li><strong>Personal Information:</strong> Name, email, phone, student details, parent contacts</li>
        <li><strong>Usage Information:</strong> Logins, attendance, assignments, GPS tracking</li>
        <li><strong>Payment Information:</strong> Secured transaction details via third-party gateways</li>
      </ul>
    ),
  },
  {
    title: "How We Use Your Information",
    icon: FileText,
    iconColor: "text-green-500",
    borderColor: "border-green-500",
    content: (
      <ul className="pl-6 space-y-2 text-sm sm:text-xl text-gray-700 list-disc">
        <li>Provide a seamless school management experience</li>
        <li>Facilitate communication between admins, teachers, students, and parents</li>
        <li>Track academic progress and attendance</li>
        <li>Enhance platform security and performance</li>
      </ul>
    ),
  },
  {
    title: "Data Security",
    icon: Lock,
    iconColor: "text-red-500",
    borderColor: "border-red-500",
    content: (
      <ul className="pl-6 space-y-2 text-sm sm:text-xl text-gray-700 list-disc">
        <li>Encryption for secure data storage and transmission</li>
        <li>Secure login authentication for all users</li>
        <li>Regular security audits and compliance checks</li>
      </ul>
    ),
  },
  {
    title: "User Rights & Controls",
    icon: Bell,
    iconColor: "text-yellow-500",
    borderColor: "border-yellow-500",
    content: (
      <ul className="pl-6 space-y-2 text-sm sm:text-xl text-gray-700 list-disc">
        <li>Access, update, or delete their personal information (as per school policies)</li>
        <li>Opt-out of non-essential notifications</li>
        <li>Request account deletion (subject to school administration approval)</li>
      </ul>
    ),
  },
  {
    title: "Contact Us",
    icon: Globe,
    iconColor: "text-purple-500",
    borderColor: "border-purple-500",
    content: (
      <div className="mt-4 space-y-2 text-lg sm:text-xl font-semibold text-gray-800">
        <p className="flex items-center justify-center lg:justify-start"><Mail className="mr-2 text-red-500" /><span className="text-blue-700">contact@macbell.in</span></p>
        <p className="flex items-center justify-center lg:justify-start"><Phone className="mr-2 text-green-500" /><span className="text-blue-700">+91 94249 77848</span></p>
        <p className="flex items-center justify-center lg:justify-start"><Link className="mr-2 text-blue-500" /><a href="https://www.educare.macbell.in" className="text-blue-600 underline">www.educare.macbell.in</a></p>
      </div>
    ),
  },
];

export default PrivacyPolicy;
