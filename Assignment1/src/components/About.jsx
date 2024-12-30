import React from "react";
import EngagementIcon from "../assets/Enagagement icon 1.png";
import CommunicationIcon from "../assets/coomunication icon 1.png";
import Group30Image from "../assets/Group 30.png";
import AboutUsImage from "../assets/about us 1.png";
import Asset5 from "../assets/Asset 5 1.png";
import Group34 from "../assets/Group 33.png";
import './styles/about.css'; // Merged CSS file

const AboutUsContent = () => {
  return (
    <div className="about-us-content">
     <h2 className="title">
  ABOUT US
  <img
    src={Group34}
    className="img1"
    alt=""
  />
</h2>


      <p className="description">
        We love what we do and are driven by achieving great results for our
        clients. Our awards and impressive client list are testament to our high
        quality approach. We deliver value, creativity, results, and exceptional
        levels of customer service and professionalism. We specialize in
        infrastructure development, energy, and natural resources.
      </p>

      <div className="cards-container">
        <div className="card engagement-card">
          <img src={EngagementIcon} alt="Engagement Icon" />
          <h4 className="card-title">ENGAGEMENT</h4>
          <p className="card-description">
            We are engagement specialists, who have led projects at all levels
            of the IAP2 spectrum.
            <a className="read-more-link" href="/AboutUs">
              READ MORE
            </a>
          </p>
        </div>

        <div className="card communication-card">
          <img src={CommunicationIcon} alt="Communication Icon" />
          <h4 className="card-title">COMMUNICATIONS</h4>
          <p className="card-description">
            We are award-winning leaders in communications and campaign
            management.
            <a className="read-more-link" href="/ReadMore">
              READ MORE
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <>
      <div className="lg:mt-16 text-black relative">
        <div className="flex flex-col gap-y-16 lg:flex-row lg:items-center lg:justify-evenly lg:gap-x-8">
          <div className="mt-20 mx-auto md:mx-0 w-full lg:w-2/5">
            <img
              src={AboutUsImage}
              alt="About Us"
              className="block scale-105 md:scale-110 lg:scale-100 transition-transform duration-300 decorative-image"
            />
          </div>

          <div className="w-full lg:w-3/5 lg:ml-8">
            <div className="text-hover-effect">
              <AboutUsContent />
            </div>
          </div>
        </div>
      </div>

      <div>
        <img
          src={Asset5}
          className="absolute left-0 w-1/3 md:w-1/4 lg:w-1/5 bottom-0 decorative-image"
          alt="Decorative"
        />
      </div>
    </>
  );
};

export default About;
