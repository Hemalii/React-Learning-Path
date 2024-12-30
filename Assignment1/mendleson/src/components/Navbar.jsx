import React, { useState } from "react";
import Logo from "../assets/logo-1 1.png";
import { Navigate } from "react-router-dom"; // Import Navigate for redirection
import "./styles/Navbar.css"; // Import the CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(null); // To manage the redirection state

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path) => {
    setShouldRedirect(path); // Set the path for redirection
    setIsOpen(false); // Close the mobile menu when a link is clicked
  };

  // If redirection state is set, use Navigate to redirect
  if (shouldRedirect) {
    return <Navigate to={shouldRedirect} replace />;
  }

  return (
    <nav className="bg-transparent text-black rubik-regular">
      <div className="mx-auto">
        <div className="flex justify-between items-center text-nowrap">
          <div className="ml-[-3.5%]">
            <a href="/logo" className="font-bold text-lg">
              <img className="w-1/2 md:w-2/3 lg:w-full" src={Logo} alt="Logo" />
            </a>
          </div>

          <div className="lg:flex hidden mr-[-6%]">
            <a href="#" onClick={() => handleNavigation("/aboutUs")} className="nav-link">
              About Us
            </a>
            <a href="#" onClick={() => handleNavigation("/services")} className="nav-link">
              Services
            </a>
            <a href="#" onClick={() => handleNavigation("/team")} className="nav-link">
              Team
            </a>
            <a href="#" onClick={() => handleNavigation("/clients")} className="nav-link">
              Clients
            </a>
            <a href="#" onClick={() => handleNavigation("/contactUs")} className="nav-link">
              Contact Us
            </a>
          </div>

          <div
            className="lg:hidden top-4 right-4 text-black-800 z-50"
            onClick={toggleMenu}
            role="button"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div
            className={`flex flex-col items-end z-50 transform transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col w-1/2 text-sm p-1 rounded-lg bg-gray-50 border border-gray-200 items-end md:text-base lg:hidden">
              <a href="#" onClick={() => handleNavigation("/aboutUs")} className="nav-link">
                About Us
              </a>
              <a href="#" onClick={() => handleNavigation("/services")} className="nav-link">
                Services
              </a>
              <a href="#" onClick={() => handleNavigation("/team")} className="nav-link">
                Team
              </a>
              <a href="#" onClick={() => handleNavigation("/clients")} className="nav-link">
                Clients
              </a>
              <a href="#" onClick={() => handleNavigation("/contactUs")} className="nav-link">
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
