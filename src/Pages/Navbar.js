import React, { useState } from "react";

const logo = 'https://res.cloudinary.com/dokfnv3vy/image/upload/v1736084543/custom/yhbii0wbedftmpvlpnon.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the menu after clicking a link
  const closeMenuAndNavigate = () => {
    setIsMenuOpen(false);
    // Optionally, you can handle the navigation here with react-router, etc.
  };

  return (
    <div>
      {/* Sticky Navbar */}
      <header className="bg-white py-1 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6">
          {/* Left Side: Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="w-16 h-auto" // Adjusted size for smaller screens
            />
          </div>

          {/* Right Side: Menu for large screens */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#home" onClick={closeMenuAndNavigate} className="text-blue-900 font-semibold text-lg">HOME</a>
            <a href="#features" onClick={closeMenuAndNavigate} className="text-blue-800 font-semibold text-lg">FEATURES</a>
            <a href="#pricing" onClick={closeMenuAndNavigate} className="text-blue-800 font-semibold text-lg">PRICING</a>
            <a href="#aboutus" onClick={closeMenuAndNavigate} className="text-blue-800 font-semibold text-lg">ABOUT US</a>
            <a href="#whyus" onClick={closeMenuAndNavigate} className="text-blue-800 font-semibold text-lg">WHY US</a>
            <a href="#contactus" onClick={closeMenuAndNavigate} className="text-blue-800 font-semibold text-lg">CONTACT US</a>
            <button className="bg-gradient-to-r from-blue-500 to-purple-700 text-white py-2 px-6 rounded-lg">
              Purchase
            </button>
          </div>

          {/* Menu Icon for Small Screens */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-blue-900 focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
          <div className="flex justify-end p-3">
            <button onClick={toggleMenu} className="text-white text-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="fixed right-0 top-0 w-2/5 bg-white h-full shadow-lg transform transition-transform duration-300 ease-in-out pt-4 pb-6">
            <div className="flex flex-col items-center space-y-4">
              <a href="#home" onClick={closeMenuAndNavigate} className="text-blue-900 font-semibold text-lg">HOME</a>
              <a href="#features" onClick={closeMenuAndNavigate} className="text-blue-800 font-semibold text-lg">FEATURES</a>
              <a href="#pricing" onClick={closeMenuAndNavigate} className="text-blue-800 font-semibold text-lg">PRICING</a>
              <a href="#aboutus" onClick={closeMenuAndNavigate} className="text-blue-800 font-semibold text-lg">ABOUT US</a>
              <a href="#whyus" onClick={closeMenuAndNavigate} className="text-blue-800 font-semibold text-lg">WHY US</a>
              <a href="#contactus" onClick={closeMenuAndNavigate} className="text-blue-800 font-semibold text-lg">CONTACT US</a>
              <button className="bg-gradient-to-r from-blue-500 to-purple-700 text-white py-2 px-6 rounded-lg mt-4">
                Purchase
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
