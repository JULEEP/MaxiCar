
// import React from "react";
// import { Book, UserCheck, CheckCircle, Briefcase, ShieldCheck, CreditCard } from "lucide-react";

// const TermsAndConditions = () => {
//   return (
//     <div className="flex flex-col md:flex-row items-start justify-between p-6 md:p-12 bg-white min-h-screen">
//       {/* Left Side - Terms & Conditions */}
//       <div className="md:w-3/5 bg-white p-6 rounded-lg">
//         <h1 className="text-2xl font-bold mb-4">Terms & Conditions</h1>
//         <p className="text-gray-600 mb-4">Effective Date: 10 February 2025</p>
//         <div className="space-y-4">
//           {sections.map((section, index) => (
//             <div key={index} className="p-4 border border-purple-500 rounded-lg bg-white w-full md:w-auto">
//               <h2 className="text-lg font-semibold flex items-center gap-2 text-purple-500">
//                 {section.icon} <span className="text-purple-500">{section.title}</span>
//               </h2>
//               <ul className="list-none space-y-2 mt-2">
//                 {section.items.map((item, idx) => (
//                   <li key={idx} className="flex items-start">
//                     <input type="checkbox" className="w-5 h-5 mr-2 accent-blue-500" disabled />
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right Side - Image */}
//       <div className="md:w-2/5 flex justify-center mt-6 md:mt-0">
//         <img
//           src="https://cdni.iconscout.com/illustration/premium/thumb/cryptocurrency-terms-and-conditions-illustration-download-in-svg-png-gif-file-formats--bitcoin-logo-condition-pack-illustrations-3518850.png?f=webp"
//           alt="Terms & Conditions Illustration"
//           className="w-full max-w-xs md:max-w-sm"
//         />
//       </div>
//     </div>
//   );
// };

// const sections = [
//   {
//     title: "Introduction",
//     icon: <Book className="w-5 h-5 text-purple-500" />, 
//     items: [
//       "Welcome to Macbell EduCare! These Terms & Conditions (“T&C”) govern your use of our School Management System and associated services.",
//       "By accessing or using our platform, you agree to comply with these terms."
//     ]
//   },
//   {
//     title: "Definitions",
//     icon: <Book className="w-5 h-5 text-purple-500" />, 
//     items: [
//       "'Platform' refers to Macbell EduCare’s digital services, including admin, teacher, student, and parent panels.",
//       "'User' refers to administrators, teachers, students, parents, or any individual using the platform.",
//       "'School' refers to the institution subscribing to our services.",
//       "'We,' 'Us,' 'Our' refers to Macbell EduCare and its authorized representatives."
//     ]
//   },
//   {
//     title: "Account Registration & Use",
//     icon: <UserCheck className="w-5 h-5 text-purple-500" />, 
//     items: [
//       "Schools and users must provide accurate and complete information during registration.",
//       "User accounts are non-transferable, and login credentials must be kept secure.",
//       "Unauthorized access, modification, or misuse of the platform is strictly prohibited."
//     ]
//   },
//   {
//     title: "Services & Features",
//     icon: <Briefcase className="w-5 h-5 text-purple-500" />, 
//     items: [
//       "School Management System with multiple login panels (Admin, Teacher, Student, Parent).",
//       "Attendance tracking, exam schedules, homework management, and fee payments.",
//       "Real-time notifications and communication tools.",
//       "AI-powered insights and analytics."
//     ]
//   },
//   {
//     title: "User Responsibilities",
//     icon: <ShieldCheck className="w-5 h-5 text-purple-500" />, 
//     items: [
//       "Schools are responsible for managing access rights for teachers, students, and parents.",
//       "Users must comply with ethical standards and avoid misuse, hacking, or data tampering.",
//       "Any misuse of the platform may result in account suspension or termination."
//     ]
//   },
//   {
//     title: "Payment & Subscription",
//     icon: <CreditCard className="w-5 h-5 text-purple-500" />, 
//     items: [
//       "Some services may be subscription-based, with pricing details outlined on our website.",
//       "Payments must be made on time, and failure to do so may result in service suspension.",
//       "Refunds are subject to our refund policy (if applicable)."
//     ]
//   },
//   {
//     title: "Limitation of Liability",
//     items: [
//       "Macbell EduCare is not liable for any direct, indirect, or incidental damages resulting from platform misuse or technical issues.",
//       "Schools and users are responsible for ensuring accurate data entry and system usage."
//     ]
//   },
//   {
//     title: "Service Availability & Modifications",
//     icon: <Briefcase className="w-5 h-5 text-purple-500" />,
//     items: [
//       "We aim for 99.9% uptime, but downtime due to maintenance or unforeseen issues may occur.",
//       "We reserve the right to modify or discontinue services with prior notice."
//     ]
//   },
//   {
//     title: "Termination of Services",
//     icon: <ShieldCheck className="w-5 h-5 text-purple-500" />,
//     items: [
//       "We may suspend or terminate accounts if users violate these T&Cs.",
//       "Schools may request service termination with prior notice and data export options (if applicable)."
//     ]
//   },
//   {
//     title: "Governing Law & Dispute Resolution",
//     icon: <CreditCard className="w-5 h-5 text-purple-500" />,
//     items: [
//       "These T&Cs are governed by the laws of India.",
//       "Disputes shall be resolved through arbitration or legal proceedings in the appropriate jurisdiction."
//     ]
//   },
//   {
//     title: "Updates to Terms & Conditions",
//     icon: <Book className="w-5 h-5 text-purple-500" />,
//     items: [
//       "We may update these T&Cs periodically. Continued use of our platform implies acceptance of updated terms."
//     ]
//   },
//   {
//     title: "Contact Us",
//     items: [
//       "Email: contact@macbell.in",
//       "Phone: +91 94249 77848",
//       "Website: www.educare.macbell.in",
//       "Thank you for choosing Macbell EduCare – making education smarter."
//     ]
//   }
  


// ];

// export default TermsAndConditions;

import React from "react";
import { Book, UserCheck, CheckCircle, Briefcase, ShieldCheck, CreditCard } from "lucide-react";

const TermsAndConditions = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between p-6 md:p-12 bg-white min-h-screen">
      {/* Left Side - Terms & Conditions */}
      <div className="md:w-3/5 bg-white p-6 rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Terms & Conditions</h1>
        <p className="text-gray-600 mb-4">Effective Date: 10 February 2025</p>
        <div className="space-y-4">
          {sections.map((section, index) => (
            <div key={index} className="p-4 border border-purple-500 rounded-lg bg-white w-full md:w-auto">
              <h2 className="text-lg font-semibold flex items-center gap-2 text-purple-500">
                {section.icon} <span className="text-purple-500">{section.title}</span>
              </h2>
              <ul className="list-none space-y-2 mt-2">
                {section.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="md:w-2/5 flex justify-center mt-6 md:mt-0">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/cryptocurrency-terms-and-conditions-illustration-download-in-svg-png-gif-file-formats--bitcoin-logo-condition-pack-illustrations-3518850.png?f=webp"
          alt="Terms & Conditions Illustration"
          className="w-full max-w-xs md:max-w-sm"
        />
      </div>
    </div>
  );
};

const sections = [
  {
    title: "Introduction",
    icon: <Book className="w-5 h-5 text-purple-500" />, 
    items: [
      "Welcome to Macbell EduCare! These Terms & Conditions (“T&C”) govern your use of our School Management System and associated services.",
      "By accessing or using our platform, you agree to comply with these terms."
    ]
  },
  {
    title: "Definitions",
    icon: <Book className="w-5 h-5 text-purple-500" />, 
    items: [
      "'Platform' refers to Macbell EduCare’s digital services, including admin, teacher, student, and parent panels.",
      "'User' refers to administrators, teachers, students, parents, or any individual using the platform.",
      "'School' refers to the institution subscribing to our services.",
      "'We,' 'Us,' 'Our' refers to Macbell EduCare and its authorized representatives."
    ]
  },
  {
    title: "Account Registration & Use",
    icon: <UserCheck className="w-5 h-5 text-purple-500" />, 
    items: [
      "Schools and users must provide accurate and complete information during registration.",
      "User accounts are non-transferable, and login credentials must be kept secure.",
      "Unauthorized access, modification, or misuse of the platform is strictly prohibited."
    ]
  },
  {
    title: "Services & Features",
    icon: <Briefcase className="w-5 h-5 text-purple-500" />, 
    items: [
      "School Management System with multiple login panels (Admin, Teacher, Student, Parent).",
      "Attendance tracking, exam schedules, homework management, and fee payments.",
      "Real-time notifications and communication tools.",
      "AI-powered insights and analytics."
    ]
  },
  {
    title: "User Responsibilities",
    icon: <ShieldCheck className="w-5 h-5 text-purple-500" />, 
    items: [
      "Schools are responsible for managing access rights for teachers, students, and parents.",
      "Users must comply with ethical standards and avoid misuse, hacking, or data tampering.",
      "Any misuse of the platform may result in account suspension or termination."
    ]
  },
  {
    title: "Payment & Subscription",
    icon: <CreditCard className="w-5 h-5 text-purple-500" />, 
    items: [
      "Some services may be subscription-based, with pricing details outlined on our website.",
      "Payments must be made on time, and failure to do so may result in service suspension.",
      "Refunds are subject to our refund policy (if applicable)."
    ]
  },
  {
        title: "Limitation of Liability",
        items: [
          "Macbell EduCare is not liable for any direct, indirect, or incidental damages resulting from platform misuse or technical issues.",
          "Schools and users are responsible for ensuring accurate data entry and system usage."
        ]
      },
      {
        title: "Service Availability & Modifications",
        icon: <Briefcase className="w-5 h-5 text-purple-500" />,
        items: [
          "We aim for 99.9% uptime, but downtime due to maintenance or unforeseen issues may occur.",
          "We reserve the right to modify or discontinue services with prior notice."
        ]
      },
      {
        title: "Termination of Services",
        icon: <ShieldCheck className="w-5 h-5 text-purple-500" />,
        items: [
          "We may suspend or terminate accounts if users violate these T&Cs.",
          "Schools may request service termination with prior notice and data export options (if applicable)."
        ]
      },
      {
        title: "Governing Law & Dispute Resolution",
        icon: <CreditCard className="w-5 h-5 text-purple-500" />,
        items: [
          "These T&Cs are governed by the laws of India.",
          "Disputes shall be resolved through arbitration or legal proceedings in the appropriate jurisdiction."
        ]
      },
      {
        title: "Updates to Terms & Conditions",
        icon: <Book className="w-5 h-5 text-purple-500" />,
        items: [
          "We may update these T&Cs periodically. Continued use of our platform implies acceptance of updated terms."
        ]
      },
      {
        title: "Contact Us",
        items: [
          "Email: contact@macbell.in",
          "Phone: +91 94249 77848",
          "Website: www.educare.macbell.in",
          "Thank you for choosing Macbell EduCare – making education smarter."
        ]
      } 

];

export default TermsAndConditions;

































