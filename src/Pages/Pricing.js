import React, { useState } from "react";

const PricingCart = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (index) => {
    setExpandedSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
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

  const features2 = [
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
        "Leave Management (For Students and Teacher)",
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

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <h1 className="text-3xl font-semibold text-purple-800 text-center mb-8">
        Pricing & Features
      </h1>
      <div className="container mx-auto px-6 sm:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl border-b-4 border-purple-800">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-semibold text-blue-600">
              ₹400 <span className="text-gray-600 text-base">/ Year / Student</span>
            </h2>
            <h2 className="text-xl font-medium text-blue-500 mt-1">
              ₹50 <span className="text-gray-600 text-base">/ Month / Student</span>
            </h2>
          </div>
          <div className="space-y-4">
            {features1.map((feature, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <ul className="list-disc pl-4 text-sm text-gray-600 space-y-1">
                  {feature.items
                    .slice(0, expandedSections[index] ? feature.items.length : 3)
                    .map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
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
        <div className="bg-white shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl border-b-4 border-purple-800">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-semibold text-blue-600">
              ₹250 <span className="text-gray-600 text-base">/ Year / Student</span>
            </h2>
            <h2 className="text-xl font-medium text-blue-500 mt-1">
              ₹28 <span className="text-gray-600 text-base">/ Month / Student</span>
            </h2>
          </div>
          <div className="space-y-4">
            {features2.map((feature, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <ul className="list-disc pl-4 text-sm text-gray-600 space-y-1">
                  {feature.items
                    .slice(0, expandedSections[index] ? feature.items.length : 3)
                    .map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
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

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl border-b-4 border-purple-800">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-semibold text-blue-600">
              ₹585 <span className="text-gray-600 text-base">/ Year / Student</span>
            </h2>
            <h2 className="text-xl font-medium text-blue-500 mt-1">
              ₹65 <span className="text-gray-600 text-base">/ Month / Student</span>
            </h2>
          </div>
          <div className="space-y-4">
            {features3.map((feature, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <ul className="list-disc pl-4 text-sm text-gray-600 space-y-1">
                  {feature.items
                    .slice(0, expandedSections[index] ? feature.items.length : 3)
                    .map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
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
      </div>
    </div>
  );
};

export default PricingCart;
