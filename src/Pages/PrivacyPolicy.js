import { Bell, FileText, Globe, Link, Lock, Mail, Phone, Users } from "lucide-react";
import React from "react";
import PrivacyImage from "../images/privacy-policy.png";

function PrivacyPolicy() {
  return (
    <div className="p-12 mx-auto mt-12 shadow-2xl max-w-7xl bg-blue-50 rounded-3xl">
      <div className="flex flex-col items-start lg:flex-row-reverse">
        <div className="flex justify-center w-full lg:w-1/3 lg:justify-end">
          <img src={PrivacyImage} alt="Privacy Policy" className="w-28 lg:w-[18rem] rounded-lg shadow-lg bg-transparent" />
        </div>
        <div className="w-full lg:w-2/3">
          <h1 className="mb-6 text-6xl font-extrabold text-blue-700 drop-shadow-lg">Privacy Policy</h1>
          <p className="mb-6 text-xl italic text-gray-600">Effective Date: 10 February 2025</p>
          <p className="mb-8 text-xl text-gray-700">
            Welcome to <span className="font-bold text-blue-700">Macbell EduCare</span>. Your privacy is our priority. This Privacy Policy explains how we collect,
            use, and protect the data of administrators, teachers, students, and parents using our School
            Management System.
          </p>
          <div className="space-y-8">
            <section className="p-8 bg-white border-l-4 border-blue-500 shadow-lg rounded-xl">
              <h2 className="flex items-center mb-4 text-3xl font-semibold text-gray-800">
                <Users className="mr-3 text-blue-500" /> Information We Collect
              </h2>
              <ul className="pl-8 space-y-2 text-xl text-gray-700 list-disc">
                <li><strong>Personal Information:</strong> Name, email, phone, student details, parent contacts</li>
                <li><strong>Usage Information:</strong> Logins, attendance, assignments, GPS tracking</li>
                <li><strong>Payment Information:</strong> Secured transaction details via third-party gateways</li>
              </ul>
            </section>
            <section className="p-8 bg-white border-l-4 border-green-500 shadow-lg rounded-xl">
              <h2 className="flex items-center mb-4 text-3xl font-semibold text-gray-800">
                <FileText className="mr-3 text-green-500" /> How We Use Your Information
              </h2>
              <p className="text-xl text-gray-700">We utilize the collected data to:</p>
              <ul className="pl-8 space-y-2 text-xl text-gray-700 list-disc">
                <li>Provide a seamless school management experience</li>
                <li>Facilitate communication between admins, teachers, students, and parents</li>
                <li>Track academic progress and attendance</li>
                <li>Enhance platform security and performance</li>
              </ul>
            </section>
            <section className="p-8 bg-white border-l-4 border-red-500 shadow-lg rounded-xl">
              <h2 className="flex items-center mb-4 text-3xl font-semibold text-gray-800">
                <Lock className="mr-3 text-red-500" /> Data Security
              </h2>
              <p className="text-xl text-gray-700">We take data security seriously and use:</p>
              <ul className="pl-8 space-y-2 text-xl text-gray-700 list-disc">
                <li>Encryption for secure data storage and transmission</li>
                <li>Secure login authentication for all users</li>
                <li>Regular security audits and compliance checks</li>
              </ul>
            </section>
            <section className="p-8 bg-white border-l-4 border-yellow-500 shadow-lg rounded-xl">
              <h2 className="flex items-center mb-4 text-3xl font-semibold text-gray-800">
                <Bell className="mr-3 text-yellow-500" /> User Rights & Controls
              </h2>
              <ul className="pl-8 space-y-2 text-xl text-gray-700 list-disc">
                <li>Access, update, or delete their personal information (as per school policies)</li>
                <li>Opt-out of non-essential notifications</li>
                <li>Request account deletion (subject to school administration approval)</li>
              </ul>
            </section>
            <section className="p-8 bg-white border-l-4 border-purple-500 shadow-lg rounded-xl">
              <h2 className="flex items-center mb-4 text-3xl font-semibold text-gray-800">
                <Globe className="mr-3 text-purple-500" /> Contact Us
              </h2>
              <p className="text-xl text-gray-700">For any questions or concerns, contact us at:</p>
              <div className="mt-4 space-y-2 text-xl font-semibold text-gray-800">
                <p className="flex items-center"><Mail className="mr-2 text-red-500" /> Email: <span className="text-blue-700">contact@macbell.in</span></p>
                <p className="flex items-center"><Phone className="mr-2 text-green-500" /> Phone: <span className="text-blue-700">+91 94249 77848</span></p>
                <p className="flex items-center"><Link className="mr-2 text-blue-500" /> Website: <a href="https://www.educare.macbell.in" className="text-blue-600 underline">www.educare.macbell.in</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
