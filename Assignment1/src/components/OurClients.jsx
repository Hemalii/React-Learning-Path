import React, { useEffect, useState } from "react";
import Client1 from "../assets/Layer 19.png";
import Client2 from "../assets/Layer 20.png";
import Client3 from "../assets/1280px-Brigitte-Logo.png";
import Client4 from "../assets/Layer 22.png";
import Client5 from "../assets/BHP_2017_logo.png";
import Client6 from "../assets/Layer 21.png";
import Client7 from "../assets/Layer 23.png";
import Client8 from "../assets/Layer 24.png";
import Client9 from "../assets/MelbourneWaterLogo-1024x282.png";
import Group34 from "../assets/Group 34.png";
import Asset9 from "../assets/Assets 9 1.png";
import "./styles/ourClients.css";

const OurClients = () => {
  const clientImages = [Client1, Client2, Client3, Client4, Client5, Client6, Client7, Client8, Client9];

  // Adding fade-in animation effect
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100); // Delay for animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mt-40 text-black md:mt-60 lg:mt-32">
      <img
        src={Asset9}
        className="absolute left-0 w-1/6 -mt-24 md:w-1/6 md:-mt-48 lg:-mt-20 lg:w-[10%]"
        alt=""
      />
      <h2 className="text-4xl rubik-medium mb-12 lg:text-5xl lg:rubik-medium lg:flex lg:flex-col lg:justify-center lg:items-center text-center">
        OUR CLIENTS
        <img
          src={Group34}
          className="py-2 w-[70%] md:w-[45%] lg:w-[45%] xl:w-[29%] 2xl:w-[20%] mx-auto"
          alt="Decoration"
        />
      </h2>
      <div className="flex flex-wrap gap-20 justify-center items-center lg:gap-12">
        {clientImages.map((image, index) => (
          <div
            key={index}
            className={`client-container ${isVisible ? "fade-in" : ""}`}
          >
            <img src={image} alt={`Client ${index + 1}`} className="client-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurClients;
