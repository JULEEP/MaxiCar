import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../images/admin.jpeg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenuAndNavigate = (hash) => {
    if (location.pathname !== "/") {
      window.location.href = `/${hash}`;
    } else {
      document.getElementById(hash.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleOutsideClick = (e) => {
    if (e.target.id === "menu-overlay") {
      setIsMenuOpen(false);
    }
  };

  return (
    <div>
      <header className="bg-white py-1 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-16 h-auto" />
          </div>

          <div className="hidden md:flex space-x-6 items-center">
            <a href="#features" onClick={() => closeMenuAndNavigate("#features")} className="text-blue-800 font-semibold text-lg">FEATURES</a>
            <a href="/price" className="text-blue-800 font-semibold text-lg">PRICING</a>
            <a href="#aboutus" onClick={() => closeMenuAndNavigate("#aboutus")} className="text-blue-800 font-semibold text-lg">ABOUT US</a>
            <a href="#whyus" onClick={() => closeMenuAndNavigate("#whyus")} className="text-blue-800 font-semibold text-lg">WHY US</a>
            <a href="#contactus" onClick={() => closeMenuAndNavigate("#contactus")} className="text-blue-800 font-semibold text-lg">CONTACT US</a>
            <a href="/" className="text-blue-900 font-semibold text-lg">HOME</a>

            <a href="/price">
              <button className="bg-gradient-to-r from-blue-500 to-purple-700 text-white py-2 px-6 rounded-lg mt-4">
                Purchase
              </button>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-blue-900 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div id="menu-overlay" onClick={handleOutsideClick} className="fixed inset-0 bg-black bg-opacity-50 z-40">
          <div className="fixed right-0 top-0 w-3/5 bg-white h-full shadow-lg transform transition-transform duration-300 ease-in-out pt-6 pb-6">
            <div className="flex flex-col items-center space-y-6">
              <a href="#home" onClick={() => closeMenuAndNavigate("#home")} className="text-blue-900 font-semibold text-lg">HOME</a>
              <a href="#features" onClick={() => closeMenuAndNavigate("#features")} className="text-blue-800 font-semibold text-lg">FEATURES</a>
              <a href="/price" className="text-blue-800 font-semibold text-lg">PRICING</a>
              <a href="#aboutus" onClick={() => closeMenuAndNavigate("#aboutus")} className="text-blue-800 font-semibold text-lg">ABOUT US</a>
              <a href="#whyus" onClick={() => closeMenuAndNavigate("#whyus")} className="text-blue-800 font-semibold text-lg">WHY US</a>
              <a href="#contactus" onClick={() => closeMenuAndNavigate("#contactus")} className="text-blue-800 font-semibold text-lg">CONTACT US</a>
              <a href="/" className="text-blue-900 font-semibold text-lg">HOME</a>
              <a href="/price">
                <button className="bg-gradient-to-r from-blue-500 to-purple-700 text-white py-2 px-6 rounded-lg mt-4">
                  Purchase
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
