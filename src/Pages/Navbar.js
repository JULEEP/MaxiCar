import React, { useState } from "react";
import { useLocation } from "react-router-dom";

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
      <header className="bg-black py-7 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6">
          <div className="flex items-center">
            <img
              src="https://13maxicabs.com/wp-content/uploads/2024/07/13-Maxi-Cabs-Logo-01-2-1024x150.png"
              alt="Logo"
              className="w-16 h-auto"
            />
          </div>

          <div className="hidden md:flex space-x-6 items-center text-white">
            <a
              href="#home"
              onClick={() => closeMenuAndNavigate("#home")}
              className="text-white font-semibold text-xs hover:text-yellow-500 transition-colors duration-300"
            >
              HOME
            </a>
            <a
              href="#aboutus"
              onClick={() => closeMenuAndNavigate("#aboutus")}
              className="text-white font-semibold text-xs hover:text-yellow-500 transition-colors duration-300"
            >
              ABOUT US
            </a>
            <a
              href="#services"
              onClick={() => closeMenuAndNavigate("#services")}
              className="text-white font-semibold text-xs hover:text-yellow-500 transition-colors duration-300"
            >
              SERVICES
            </a>
            <a
              href="#corporateservices"
              onClick={() => closeMenuAndNavigate("#corporateservices")}
              className="text-white font-semibold text-xs hover:text-yellow-500 transition-colors duration-300"
            >
              CORPORATE SERVICES
            </a>
            <a
              href="#taxiupdates"
              onClick={() => closeMenuAndNavigate("#taxiupdates")}
              className="text-white font-semibold text-xs hover:text-yellow-500 transition-colors duration-300"
            >
              TAXI UPDATES
            </a>
            <a
              href="#contactus"
              onClick={() => closeMenuAndNavigate("#contactus")}
              className="text-white font-semibold text-xs hover:text-yellow-500 transition-colors duration-300"
            >
              CONTACT US
            </a>

            <div className="flex items-center border-2 border-white rounded-lg pl-2">
              <input
                type="text"
                placeholder="Search..."
                className="bg-black text-white placeholder-white focus:outline-none py-1 px-2 text-xs"
              />
              <button className="bg-yellow-500 text-black rounded-r-lg py-1 px-4 hover:bg-yellow-600 focus:outline-none text-xs">
                Search
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div id="menu-overlay" onClick={handleOutsideClick} className="fixed inset-0 bg-black bg-opacity-50 z-40">
          <div className="fixed right-0 top-0 w-3/5 bg-black h-full shadow-lg transform transition-transform duration-300 ease-in-out pt-6 pb-6">
            <div className="flex flex-col items-center space-y-6 text-white">
              <a
                href="#home"
                onClick={() => closeMenuAndNavigate("#home")}
                className="text-white font-semibold text-xs hover:text-yellow-500 transition-colors duration-300"
              >
                HOME
              </a>
              <a
                href="#aboutus"
                onClick={() => closeMenuAndNavigate("#aboutus")}
                className="text-white font-semibold text-xs hover:text-yellow-500 transition-colors duration-300"
              >
                ABOUT US
              </a>
              <a
                href="#services"
                onClick={() => closeMenuAndNavigate("#services")}
                className="text-white font-semibold text-xs hover:text-yellow-500 transition-colors duration-300"
              >
                SERVICES
              </a>
              <a
                href="#corporateservices"
                onClick={() => closeMenuAndNavigate("#corporateservices")}
                className="text-white font-semibold text-xs hover:text-yellow-500 transition-colors duration-300"
              >
                CORPORATE SERVICES
              </a>
              <a
                href="#taxiupdates"
                onClick={() => closeMenuAndNavigate("#taxiupdates")}
                className="text-white font-semibold text-xs hover:text-yellow-500 transition-colors duration-300"
              >
                TAXI UPDATES
              </a>
              <a
                href="#contactus"
                onClick={() => closeMenuAndNavigate("#contactus")}
                className="text-white font-semibold text-xs hover:text-yellow-500 transition-colors duration-300"
              >
                CONTACT US
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
