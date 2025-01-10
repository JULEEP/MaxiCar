import React, { useState } from "react";
import { PhoneIcon, ChatIcon, MailIcon } from "@heroicons/react/outline"; // Import icons
import { InView } from 'react-intersection-observer';  // Import Intersection Observer

const ContactUs = () => {
  const [formData, setFormData] = useState({
    schoolName: "",
    studentsCount: "",
    yourName: "",
    designation: "",
    email: "",
    mobileNumber: "",
    fullAddress: "",
    marketingEmails: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-start">
        {/* Left Section - Contact Info */}
        <InView
          triggerOnce={true}  // Trigger animation once when element comes into view
          threshold={0.5}      // Trigger when 50% of the element is visible
        >
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`w-full lg:w-2/5 text-left mb-8 lg:mb-0 ${inView ? 'animate__animated animate__fadeInLeft' : ''}`}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Quick Support</h2>
              <p className="text-lg text-gray-600 mb-6">Get in touch today!</p>
              <div className="flex flex-col space-y-6 lg:space-y-0 lg:flex-row lg:space-x-6 mb-6">
                <div className="flex flex-col items-start">
                  <PhoneIcon className="w-6 h-6 text-blue-500 mb-2" />
                  <p className="text-lg text-gray-700">Call Us:</p>
                  <p className="text-lg text-gray-700 font-semibold">123 456 7890</p>
                </div>
                <div className="flex flex-col items-start">
                  <ChatIcon className="w-6 h-6 text-blue-500 mb-2" />
                  <p className="text-lg text-gray-700">Chat Us</p>
                  <p className="text-lg text-gray-700">Our support will help you from 9am to 5pm</p>
                  <p className="text-lg text-gray-700">info@gmail.com</p>
                </div>
              </div>
            </div>
          )}
        </InView>

        {/* Right Section - Contact Form */}
        <InView
          triggerOnce={true}  // Trigger animation once when element comes into view
          threshold={0.5}      // Trigger when 50% of the element is visible
        >
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`w-full lg:w-3/5 shadow-lg p-6 bg-white rounded-lg mt-6 lg:mt-0 ${inView ? 'animate__animated animate__fadeInRight' : ''}`}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Fill out the form and we will be in touch as soon as possible.</h2>
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">School's Name</label>
                    <input
                      type="text"
                      name="schoolName"
                      value={formData.schoolName}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">Students Count</label>
                    <input
                      type="text"
                      name="studentsCount"
                      value={formData.studentsCount}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">Your Name</label>
                    <input
                      type="text"
                      name="yourName"
                      value={formData.yourName}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">Designation</label>
                    <input
                      type="text"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">Mobile Number</label>
                    <input
                      type="text"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold">Full address of the school</label>
                  <textarea
                    name="fullAddress"
                    value={formData.fullAddress}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="mb-4 flex items-center">
                  <input
                    type="checkbox"
                    name="marketingEmails"
                    checked={formData.marketingEmails}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <span className="text-gray-700">
                    Yes, I'd like to receive occasional marketing emails from us. I have the right to opt out at any time.{" "}
                    <a href="/privacy-policy" className="text-blue-500">View privacy policy</a>.
                  </span>
                </div>
                <button
                  type="submit"
                  className="w-auto bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg float-right"
                >
                  Submit
                </button>
              </form>
            </div>
          )}
        </InView>
      </div>
    </div>
  );
};

export default ContactUs;
