import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"; // Importing icons
import { InView } from 'react-intersection-observer'; // Import Intersection Observer
import { NavLink } from "react-router-dom";


const Footer = () => {
  const logo = 'https://res.cloudinary.com/dokfnv3vy/image/upload/v1736084543/custom/yhbii0wbedftmpvlpnon.jpg';

  return (
    <footer className="bg-gray-800 text-white py-16 w-full">
      <div className="container mx-auto px-6 w-full">
        {/* Logo and Description */}
        <InView
          triggerOnce={true}  // Trigger animation once when element comes into view
          threshold={0.5}      // Trigger when 50% of the element is visible
        >
          {({ inView, ref }) => (
            <div ref={ref} className={`flex justify-between items-center mb-10 ${inView ? 'animate__animated animate__fadeIn' : ''}`}>
              <div className="flex items-center">
                <img src={logo} alt="School Canvas" className="w-16 h-16 mr-4" />
                <p className="text-lg">
                  MACBELL EDUCARE envisions to provide the best software experience to educational institutes using technology as innovation.
                </p>
              </div>
            </div>
          )}
        </InView>

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <InView
            triggerOnce={true}
            threshold={0.5}
          >
            {({ inView, ref }) => (
              <div ref={ref} className={`${inView ? 'animate__animated animate__fadeIn' : ''}`}>
                <h3 className="text-xl font-semibold mb-4">Explore MACBELL EDUCARE</h3>
                <ul className="text-sm space-y-2">
                  <li><a href="/" className="hover:text-blue-500">Home</a></li>
                  <li><NavLink to="/private-policy" className="hover:text-blue-500">Privecy Policy</NavLink></li>
                  <li><NavLink to="/term&condition" className="hover:text-blue-500">Terms & Conditions</NavLink></li>
                </ul>
              </div>
            )}
          </InView>

          <InView
            triggerOnce={true}
            threshold={0.5}
          >
            {({ inView, ref }) => (
              <div ref={ref} className={`${inView ? 'animate__animated animate__fadeIn' : ''}`}>
                <h3 className="text-xl font-semibold mb-4">Our Services</h3>
                <ul className="text-sm space-y-2">
                  <li><a className="hover:text-blue-500">Admission</a></li>
                  <li><a className="hover:text-blue-500">Transport</a></li>
                  <li><a className="hover:text-blue-500">Examination</a></li>
                  <li><a className="hover:text-blue-500">Fee Collection</a></li>
                  <li><a className="hover:text-blue-500">Parent Communication</a></li>
                  <li><a className="hover:text-blue-500">Learning Management System</a></li>
                  <li><a className="hover:text-blue-500">All-in-One</a></li>
                </ul>
              </div>
            )}
          </InView>

          <InView
            triggerOnce={true}
            threshold={0.5}
          >
            {({ inView, ref }) => (
              <div ref={ref} className={`${inView ? 'animate__animated animate__fadeIn' : ''}`}>
                <h3 className="text-xl font-semibold mb-4">Get in Touch With MACBELL EDUCARE</h3>
                <ul className="text-sm space-y-2">
                  <li><p className="text-gray-400">Address:</p></li>
                  <li className="text-white">Ayodhya bypass road</li>
                  <li className="text-white">Bhopal</li>
                  <li><p className="text-gray-400">Sales:</p></li>
                  <li className="text-white">+91 942 497 7848</li>
                  <li><p className="text-gray-400">Support:</p></li>
                  <li className="text-white">+91 942 497 7848</li>
                  <li><p className="text-gray-400">Email:</p></li>
                  <li className="text-blue">info@macbell.in</li>
                </ul>
              </div>
            )}
          </InView>

          <InView
            triggerOnce={true}
            threshold={0.5}
          >
            {({ inView, ref }) => (
              <div ref={ref} className={`${inView ? 'animate__animated animate__fadeIn' : ''}`}>
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <ul className="text-sm space-y-2">
                  <li><a href="https://www.facebook.com/macbelleducare" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">Facebook</a></li>
                  <li><a href="https://twitter.com/EducareMacbell" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">Twitter</a></li>
                  <li><a href="https://www.instagram.com/macbell_educare" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">Instagram</a></li>
                  <li><a href="https://www.linkedin.com/company/macbell-educare/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">LinkedIn</a></li>
                  <li><a href="https://wa.me/qr/P6PN4QJUSW3AN1" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">WhatsApp</a></li>


                </ul>
              </div>
            )}
          </InView>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-6 mt-6 flex justify-between items-center">
          <p className="text-sm text-center sm:text-left">© MACBELL EDUCARE All Rights Reserved, 2025.</p>
          <div className="flex space-x-4 ml-2">
            {/* Social Media Icons */}
            <a href="https://www.facebook.com/macbelleducare" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
              <FaFacebook size={20} />
            </a>
            <a href="https://twitter.com/EducareMacbell" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
              <FaTwitter size={20} />
            </a>
            <a href="https://www.instagram.com/macbell_educare" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.linkedin.com/company/macbell-educare/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
              <FaLinkedin size={20} />
            </a>
            <a href="https://wa.me/919424977848?text=Hi,%20I%20have%20an%20inquiry%20regarding%20your%20services." target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500">
              <FaWhatsapp size={20} />
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
