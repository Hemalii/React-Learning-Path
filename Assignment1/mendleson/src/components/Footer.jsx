import React from "react";
import LinkedinLogo from "../assets/linkedin 1.png";
import GoogleLogo from "../assets/Group 20.png";
import FacebookLogo from "../assets/facebook 1.png";
import "./styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer mt-20 mb-5 text-black bg-[#BFDBFF] p-10 md:p-16 lg:p-12 w-full">
      <div className="mx-auto flex justify-between items-start flex-wrap max-w-screen-xl">
        
        {/* Social Section */}
        <div className="col-span-1 text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4 underline">Social</h3>
          <ul className="space-y-2">
            <li className="social-item flex gap-2 items-center justify-center md:justify-start">
              <img src={FacebookLogo} alt="Facebook Logo" />
              Facebook
            </li>
            <li className="social-item flex gap-2 items-center justify-center md:justify-start">
              <img src={LinkedinLogo} alt="LinkedIn Logo" />
              LinkedIn
            </li>
            <li className="social-item flex gap-2 items-center justify-center md:justify-start">
              <img src={GoogleLogo} alt="Google Logo" />
              Google
            </li>
          </ul>
        </div>

        {/* Explore Section */}
        <div className="col-span-1 text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4 underline">Explore</h3>
          <ul className="space-y-2">
            <li className="explore-item">Services</li>
            <li className="explore-item">Team</li>
            <li className="explore-item">Clients</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="col-span-1 text-center md:text-left mb-6 lg:mb-0">
          <h3 className="text-xl font-semibold mb-4 underline">Contact</h3>
          <p>
            Lorem ipsum dolor sit amet,<br></br> consectetur adipisicing elit. Minus corporis rerum delectus modi ullam eligendi.
          </p>
        </div>

        {/* Email Section */}
        <div className="col-span-1 text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4 underline">Email</h3>
          <p>mendlesoncommunication@email.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
