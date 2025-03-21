import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"; // Importing icons
import { InView } from 'react-intersection-observer'; // Import Intersection Observer
import { NavLink } from "react-router-dom";

const Footer = () => {
  const logo = 'https://13maxicabs.com/wp-content/uploads/2024/07/13-Maxi-Cabs-Logo-01-2-1024x150.png'; // Updated logo link

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
                <img src={logo} alt="13 Maxi Cabs" className="w-16 h-16 mr-4" />
                <p className="text-lg">
                  13 Maxi Cabs offers reliable transportation services throughout Sydney and beyond. Reach out for your booking needs!
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
                <h3 className="text-xl font-semibold mb-4">Quick Link</h3>
                <ul className="text-sm space-y-2">
                  <li><a href="/" className="hover:text-blue-500">Home</a></li>
                  <li><a href="/about" className="hover:text-blue-500">About Us</a></li>
                  <li><a href="/services" className="hover:text-blue-500">Services</a></li>
                  <li><a href="/contact" className="hover:text-blue-500">Contact</a></li>
                  <li><a href="/privacy-policy" className="hover:text-blue-500">Privacy Policy</a></li>
                  <li><a href="/help" className="hover:text-blue-500">Help</a></li>
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
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <ul className="text-sm space-y-2">
                  <li><p className="text-gray-400">Phone:</p></li>
                  <li className="text-white">+61 412 093 850</li>
                  <li><p className="text-gray-400">Email:</p></li>
                  <li className="text-blue">bookings@13maxicabs.com</li>
                  <li><p className="text-gray-400">Address:</p></li>
                  <li className="text-white">103 Railway St, Rockdale NSW 2216, Australia</li>
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
                  <li><a href="https://www.facebook.com/13MaxiCabs" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">Facebook</a></li>
                  <li><a href="https://twitter.com/13MaxiCabs" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">Twitter</a></li>
                  <li><a href="https://www.instagram.com/13maxicabs" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">Instagram</a></li>
                  <li><a href="https://www.linkedin.com/company/13maxicabs" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">LinkedIn</a></li>
                  <li><a href="https://wa.me/61412093850" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500">WhatsApp</a></li>
                </ul>
              </div>
            )}
          </InView>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-6 mt-6 flex justify-between items-center">
          <p className="text-sm text-center sm:text-left">© 13 Maxicabs All Rights Reserved, 2024.</p>
          <div className="flex space-x-4 ml-2">
            {/* Social Media Icons */}
            <a href="https://www.facebook.com/13MaxiCabs" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
              <FaFacebook size={20} />
            </a>
            <a href="https://twitter.com/13MaxiCabs" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
              <FaTwitter size={20} />
            </a>
            <a href="https://www.instagram.com/13maxicabs" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.linkedin.com/company/13maxicabs" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
              <FaLinkedin size={20} />
            </a>
            <a href="https://wa.me/61412093850" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500">
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
