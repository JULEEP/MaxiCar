import React, { useState } from "react";
import { PhoneIcon, ChatIcon } from "@heroicons/react/outline"; // Import icons
import { InView } from "react-intersection-observer"; // Import Intersection Observer
import axios from "axios"; // Import Axios for API calls

const ContactUs = () => {
  const [formData, setFormData] = useState({
    schoolName: "",
    studentsCount: "",
    contactPersonName: "",
    contactPersonDesignation: "",
    contactPersonEmail: "",
    contactPersonMobileNumber: "",
    fullAddress: "",
    marketingEmails: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await axios.post(
        "https://school-backend-1-2xki.onrender.com/api/admin/schools",
        formData
      );
      setSuccessMessage("Form submitted successfully!");
      setFormData({
        schoolName: "",
        studentsCount: "",
        contactPersonName: "",
        contactPersonDesignation: "",
        contactPersonEmail: "",
        contactPersonMobileNumber: "",
        fullAddress: "",
        marketingEmails: false,
      });
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-start">
        {/* Left Section - Contact Info */}
        <InView triggerOnce={true} threshold={0.5}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`w-full lg:w-2/5 text-left mb-8 lg:mb-0 ${
                inView ? "animate__animated animate__fadeInLeft" : ""
              }`}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Quick Support
              </h2>
              <p className="text-lg text-gray-600 mb-6">Get in touch today!</p>
              <div className="flex flex-col space-y-6 lg:space-y-0 lg:flex-row lg:space-x-6 mb-6">
                <div className="flex flex-col items-start">
                  <PhoneIcon className="w-6 h-6 text-blue-500 mb-2" />
                  <p className="text-lg text-gray-700">Call Us:</p>
                  <p className="text-lg text-gray-700 font-semibold">
                    123 456 7890
                  </p>
                </div>
                <div className="flex flex-col items-start">
                  <ChatIcon className="w-6 h-6 text-blue-500 mb-2" />
                  <p className="text-lg text-gray-700">Chat Us</p>
                  <p className="text-lg text-gray-700">
                    Our support will help you from 9am to 5pm
                  </p>
                  <p className="text-lg text-gray-700">info@gmail.com</p>
                </div>
              </div>
            </div>
          )}
        </InView>

        {/* Right Section - Contact Form */}
        <InView triggerOnce={true} threshold={0.5}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`w-full lg:w-3/5 shadow-lg p-6 bg-white rounded-lg mt-6 lg:mt-0 ${
                inView ? "animate__animated animate__fadeInRight" : ""
              }`}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Fill out the form and we will be in touch as soon as possible.
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">
                      School's Name
                    </label>
                    <input
                      type="text"
                      name="schoolName"
                      value={formData.schoolName}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">
                      Students Count
                    </label>
                    <input
                      type="number"
                      name="studentsCount"
                      value={formData.studentsCount}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="contactPersonName"
                      value={formData.contactPersonName}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">
                      Designation
                    </label>
                    <input
                      type="text"
                      name="contactPersonDesignation"
                      value={formData.contactPersonDesignation}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">
                      Email
                    </label>
                    <input
                      type="email"
                      name="contactPersonEmail"
                      value={formData.contactPersonEmail}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">
                      Mobile Number
                    </label>
                    <input
                      type="text"
                      name="contactPersonMobileNumber"
                      value={formData.contactPersonMobileNumber}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold">
                    Full address of the school
                  </label>
                  <textarea
                    name="fullAddress"
                    value={formData.fullAddress}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    required
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
                    Yes, I'd like to receive occasional marketing emails from us.{" "}
                    <a href="/privacy-policy" className="text-blue-500">
                      View privacy policy
                    </a>
                    .
                  </span>
                </div>
                {successMessage && (
                  <p className="text-green-500 mb-4">{successMessage}</p>
                )}
                {errorMessage && (
                  <p className="text-red-500 mb-4">{errorMessage}</p>
                )}
                <button
                  type="submit"
                  className="w-auto bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg float-right"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
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
