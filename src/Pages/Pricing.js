import React, { useState } from "react";
import { BiCheck } from "react-icons/bi"; // Import check icon
import { BiChevronLeft, BiChevronRight, BiX } from "react-icons/bi"; // Import chevron icons for navigation

const PricingCart = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [currentCard, setCurrentCard] = useState(0); // Track current card index
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const toggleSection = (index) => {
    setExpandedSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleChoosePlan = (planName) => {
    setSelectedPlan(planName);
    setShowPopup(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, message } = formData;
    const whatsappURL = `https://wa.me/919424977848?text=${encodeURIComponent(
      `Inquiry for ${selectedPlan}\n\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`
    )}`;
    window.open(whatsappURL, "_blank");
    setShowPopup(false);
  };


  const features1 = [
    { title: "1. Multi-Panel Login", items: ["Admin", "Students", "Parents", "Teachers"] },
    {
      title: "2. Customize Website",
      items: [
        "Personalized Domain Name for Your Institution",
        "Admission Inquiry Forms and Online Application",
        "Integrated Contact Forms for Seamless Communication",
        "Mobile-Friendly and SEO-Optimized Design",
        "Online Fee Payment Gateway Integration (Coming Soon)",
      ],
    },
    {
      title: "3. Admin Panel Features",
      items: [
        "Centralized Student, Teacher, and Staff Data Management",
        "Attendance Management",
        "Exam Scheduling & Result Management",
        "Leave Management (For Students and Teachers)",
        "Complaint and Grievance Handling",
        "Transport Management (Bus Routes, Driver Details & Time)",
        "Bulk Data Download",
        "ID Card Generation",
        "Admit Card Generation",
        "Marksheet Generation",
        "Certificate Generation",
      ],
    },
    {
      title: "4. Teacher Panel",
      items: [
        "Attendance Management for Students",
        "Homework Assignment and Evaluation",
        "Exam Schedule Uploading",
        "Schedule Management for Classes and Exams",
        "Communication Tools for Students and Parents",
        "Add Marks of Exams",
        "Complain to Parents",
        "Performance Reporting for Individual Students",
      ],
    },
    {
      title: "5. Student Panel",
      items: [
        "Access to Homework and Study Materials",
        "View Exam Schedules & Download Admit Cards",
        "Results & Progress Tracking",
        "Attendance Records and Leave Requests",
        "Notifications for Important Announcements",
        "Communication Tools to Connect with Teachers",
      ],
    },
    {
      title: "6. Parent Panel",
      items: [
        "Real-Time Access to Child’s Academic Performance",
        "Homework & Assignment Tracking",
        "Attendance and Leave Approval Management",
        "Notifications for Exam Schedules, Results, and School Events",
        "Complaint Submission and Tracking",
        "Live Bus Tracking and Route Updates",
      ],
    },
  ];

  const features3 = [
    { title: "1. Multi-Panel Login", items: ["Admin", "Students", "Parents", "Teachers"] },
    {
      title: "2. Customize Website",
      items: [
        "Personalized Domain Name for Your Institution",
        "Admission Inquiry Forms and Online Application",
        "Integrated Contact Forms for Seamless Communication",
        "Mobile-Friendly and SEO-Optimized Design",
        "Online Fee Payment Gateway Integration",
      ],
    },
    {
      title: "3. Admin Panel Features",
      items: [
        "Centralized Student, Teacher, and Staff Data Management",
        "Attendance Management",
        "Exam Scheduling & Result Management",
        "Leave Management (For Students and Teachers)",
        "Complaint and Grievance Handling",
        "Transport Management (Bus Routes, Driver Details & Time)",
        "Report Generation (Attendance, Academic Performance, Fee Reports)",
        "Online Fee Management",
        "HR Management",
        "Bulk Data Download",
        "ID Card Generation",
        "Admit Card Generation",
        "Marksheet Generation",
        "Certificate Generation",
      ],
    },
    {
      title: "4. Teacher Panel",
      items: [
        "Attendance Management for Students",
        "Homework Assignment and Evaluation",
        "Exam Schedule Uploading",
        "Schedule Management for Classes and Exams",
        "Communication Tools for Students and Parents",
        "Add Marks of Exams",
        "Complain to Parents",
        "Performance Reporting for Individual Students",
      ],
    },
    {
      title: "5. Student Panel",
      items: [
        "Access to Homework and Study Materials",
        "View Exam Schedules & Download Admit Cards",
        "Results & Progress Tracking",
        "Attendance Records and Leave Requests",
        "Notifications for Important Announcements",
        "Communication Tools to Connect with Teachers",
        "Online Fee Payment",
      ],
    },
    {
      title: "6. Parent Panel",
      items: [
        "Real-Time Access to Child’s Academic Performance",
        "Homework & Assignment Tracking",
        "Attendance and Leave Approval Management",
        "Notifications for Exam Schedules, Results, and School Events",
        "Complaint Submission and Tracking",
        "Live Bus Tracking and Route Updates",
        "Online Fee Payment",
      ],
    },
  ];

  const extraFeatures = [
    "24/7 Customer Support",
    "Cloud Storage for Data Backup",
    "Advanced Reporting & Analytics",
    "Data Encryption for Enhanced Security",
    "Customizable User Roles & Permissions",
    "Real-Time Notifications & Alerts",
    "Task Automation & Scheduling",
    "Integration with External APIs",
    "Easy-to-Use Mobile App",
    "Regular Software Updates",
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-8 flex justify-center items-center">
      <div className="container mx-auto px-6 sm:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {/* Title and Divider */}
        <div className="col-span-full text-center mb-8">
          <h2 className="text-3xl font-semibold text-blue-600">Prices & Features</h2>
          <div className="h-px bg-purple-600 w-24 mx-auto"></div>
        </div>

        {/* Card 1 */}
        <div className={`bg-white border-2 border-purple-600 rounded-xl p-4 relative w-full max-w-xs mx-auto lg:block ${currentCard === 0 ? 'block' : 'hidden'}`}>
          <div className="text-left mb-6">
            <div className="text-2xl font-bold text-blue-900 mb-2 mt-8">Basic Plan</div>
            <div className="text-sm text-purple-600 font-bold mb-4 mt-2">A great solution for Schools.</div>
            <div className="flex items-center mb-2 mt-4">
              <div className="text-sm font-semibold text-gray-600 mr-3 line-through">₹870.00</div>
              <div className="text-xl text-blue-600 font-bold">50% OFF</div>
            </div>
            <div className="text-3xl font-bold mt-4">
              <span className="text-xl text-blue-900">₹</span>
              <span className="text-blue-900">435.00</span>{" "}
              <span className="text-sm text-gray-600">/ Year / Student</span>
            </div>
            <div className="flex items-center mb-2 mt-4">
              <div className="text-sm font-semibold text-gray-600 mr-3 line-through">₹180.00</div>
              <div className="text-xl text-blue-600 font-bold">50% OFF</div>
            </div>
            <div className="text-3xl font-bold text-blue-900 mt-2">
              <span className="text-xl text-blue-900">₹</span>
              <span className="text-blue-900">90.00</span>{" "}
              <span className="text-sm text-gray-600">/ Month / Student</span>
            </div>
            <div onClick={() => handleChoosePlan("Basic Plan")} className="mt-4 py-2 px-4 border-2 text-center border-purple-600 text-blue-600 rounded-md cursor-pointer hover:bg-purple-600 hover:text-white transition duration-300">
              Choose Plan
            </div>
          </div>
          <div className="my-4 h-px bg-gray-400 w-full mx-auto"></div>
          <div className="space-y-2 mt-4">
            <div>
              <h3 className="text-sm font-semibold text-purple-800 mb-2">Top Features</h3>
              <ul className="list-disc pl-4 text-sm text-gray-600 space-y-1">
                {extraFeatures.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center">
                    <BiCheck className="text-purple-600 text-xs mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {features1.map((feature, index) => (
              <div key={index}>
                <h3 className="text-sm font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <ul className="list-disc pl-4 text-sm text-gray-600 space-y-1">
                  {feature.items
                    .slice(0, expandedSections[index] ? feature.items.length : 3)
                    .map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <BiCheck className="text-purple-600 text-xs mr-2" />
                        {item}
                      </li>
                    ))}
                </ul>
                <button
                  onClick={() => toggleSection(index)}
                  className="mt-2 text-xs text-blue-600 font-semibold hover:underline"
                >
                  {expandedSections[index] ? "Read Less" : "Read More"}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Card 2 */}
        <div className={`bg-white border-2 border-purple-600 rounded-xl p-4 relative w-full max-w-xs mx-auto lg:block ${currentCard === 1 ? 'block' : 'hidden'}`}>
          <div className="text-left mb-6">
            <div className="text-2xl font-bold text-blue-900 mb-2 mt-8">Advance Plan</div>
            <div className="text-sm text-purple-600 font-bold mb-4 mt-2">Everything you need you will get here.</div>
            <div className="flex items-center mb-2 mt-4">
              <div className="text-sm font-semibold text-gray-600 mr-3 line-through">₹3170.00</div>
              <div className="text-xl text-blue-600 font-bold">50% OFF</div>
            </div>
            <div className="text-3xl font-bold mt-4">
              <span className="text-xl text-blue-900">₹</span>
              <span className="text-blue-900">1585.00</span>{" "}
              <span className="text-sm text-gray-600">/ Year / Student</span>
            </div>
            <div className="flex items-center mb-2 mt-4">
              <div className="text-sm font-semibold text-gray-600 mr-3 line-through">₹350.00</div>
              <div className="text-xl text-blue-600 font-bold">50% OFF</div>
            </div>
            <div className="text-3xl font-bold text-blue-900 mt-2">
              <span className="text-xl text-blue-900">₹</span>
              <span className="text-blue-900">175.00</span>{" "}
              <span className="text-sm text-gray-600">/ Month / Student</span>
            </div>
            <div onClick={() => handleChoosePlan("Advance Plan")} className="mt-4 py-2 px-4 border-2 text-center border-purple-600 text-blue-600 rounded-md cursor-pointer hover:bg-purple-600 hover:text-white transition duration-300">
              Choose Plan
            </div>
          </div>
          <div className="my-4 h-px bg-gray-400 w-full mx-auto"></div>
          <div className="space-y-2 mt-4">
            <div>
              <h3 className="text-sm font-semibold text-purple-800 mb-2">Top Features</h3>
              <ul className="list-disc pl-4 text-sm text-gray-600 space-y-1">
                {extraFeatures.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center">
                    <BiCheck className="text-purple-600 text-xs mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {features3.map((feature, index) => (
              <div key={index}>
                <h3 className="text-sm font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <ul className="list-disc pl-4 text-sm text-gray-600 space-y-1">
                  {feature.items
                    .slice(0, expandedSections[index] ? feature.items.length : 3)
                    .map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <BiCheck className="text-purple-600 text-xs mr-2" />
                        {item}
                      </li>
                    ))}
                </ul>
                <button
                  onClick={() => toggleSection(index)}
                  className="mt-2 text-xs text-blue-600 font-semibold hover:underline"
                >
                  {expandedSections[index] ? "Read Less" : "Read More"}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="absolute top-1/2 left-0 right-0 mt-20 flex justify-between transform -translate-y-1/2 sm:hidden">
          <button
            onClick={() => setCurrentCard((prev) => Math.max(prev - 1, 0))}
            className="bg-purple-600 text-white p-2 rounded-full focus:outline-none"
          >
            <BiChevronLeft />
          </button>
          <button
            onClick={() => setCurrentCard((prev) => Math.min(prev + 1, 1))}
            className="bg-purple-600 text-white p-2 rounded-full focus:outline-none"
          >
            <BiChevronRight />
          </button>
        </div>
      </div>
       {/* Popup Form */}
       {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-xl w-80">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Inquiry for {selectedPlan}</h3>
              <button onClick={() => setShowPopup(false)} className="text-red-600">
                <BiX size={24} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input type="text" name="name" placeholder="Your Name" className="w-full p-2 border rounded" onChange={handleChange} required />
              <input type="tel" name="phone" placeholder="Phone Number" className="w-full p-2 border rounded" onChange={handleChange} required />
              <textarea name="message" placeholder="Message" className="w-full p-2 border rounded" rows="3" onChange={handleChange}></textarea>
              <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-800">Send Inquiry</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingCart;
