import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Importing icons
import { InView } from 'react-intersection-observer'; // Import Intersection Observer

const Footer = () => {
  const logo = 'https://res.cloudinary.com/dokfnv3vy/image/upload/v1736084543/custom/yhbii0wbedftmpvlpnon.jpg';

  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-6">
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
                  <li><a href="/our-story" className="hover:text-blue-500">Our Story</a></li>
                  <li><a href="/ceo-desk" className="hover:text-blue-500">CEO Desk</a></li>
                  <li><a href="/media-press" className="hover:text-blue-500">Latest Media & Press</a></li>
                  <li><a href="/privacy-policy" className="hover:text-blue-500">Privacy Policy</a></li>
                  <li><a href="/refund-policy" className="hover:text-blue-500">Refund Policy</a></li>
                  <li><a href="/terms-of-use" className="hover:text-blue-500">Terms of Use</a></li>
                  <li><a href="/terms-of-service" className="hover:text-blue-500">Terms of Service</a></li>
                  <li><a href="/sitemap" className="hover:text-blue-500">Sitemap</a></li>
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
                <h3 className="text-xl font-semibold mb-4">Our Products</h3>
                <ul className="text-sm space-y-2">
                  <li><a href="/admission" className="hover:text-blue-500">Admission</a></li>
                  <li><a href="/transport" className="hover:text-blue-500">Transport</a></li>
                  <li><a href="/website-email" className="hover:text-blue-500">Website & Email</a></li>
                  <li><a href="/examination" className="hover:text-blue-500">Examination</a></li>
                  <li><a href="/fee-collection" className="hover:text-blue-500">Fee Collection</a></li>
                  <li><a href="/hr-management" className="hover:text-blue-500">HR Management</a></li>
                  <li><a href="/parent-communication" className="hover:text-blue-500">Parent Communication</a></li>
                  <li><a href="/learning-management-system" className="hover:text-blue-500">Learning Management System</a></li>
                  <li><a href="/all-in-one" className="hover:text-blue-500">All-in-One</a></li>
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
                  <li className="text-white">Lorem Ipsum</li>
                  <li className="text-white">Epsum Lorem Epsum, Lorem</li>
                  <li className="text-white">Epsum Lorem Epsum, Lorem</li>
                  <li><p className="text-gray-400">Sales:</p></li>
                  <li className="text-white">12345 1234 / 1234 1234</li>
                  <li><p className="text-gray-400">Support:</p></li>
                  <li className="text-white">1234 1234</li>
                  <li><p className="text-gray-400">Email:</p></li>
                  <li className="text-white">info@gmail.com</li>
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
                  <li><a href="#" className="text-white hover:text-blue-500">Facebook</a></li>
                  <li><a href="#" className="text-white hover:text-blue-500">Twitter</a></li>
                  <li><a href="#" className="text-white hover:text-blue-500">Instagram</a></li>
                  <li><a href="#" className="text-white hover:text-blue-500">LinkedIn</a></li>
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
            <a href="#" className="text-white hover:text-blue-500">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-white hover:text-blue-500">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-white hover:text-blue-500">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-white hover:text-blue-500">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
