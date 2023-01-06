import React from "react";

import logo from "../assets/logo.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import youtube from "../assets/youtube.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row md:justify-around absolute pt-[59px] w-full h-fit md:h-[166px] bottom-0 bg-steevanz-black shadow-2xl z-10 font-roboto text-white">
      <div>
        <img src={logo} alt="Steevanz logo" className="w-[211px]" />
      </div>
      <div className="flex flex-col text-[16px] leading-7">
        <a href="">Who We Are</a>
        <a href="">FAQs</a>
        <a href="">Contacts</a>
      </div>
      <div className="flex flex-col leading-7">
        <a href="">Complaints Book</a>
        <a href="">Terms and Conditions</a>
      </div>
      <div className="flex space-x-4 align-bottom items-center">
        <img className="h-[24px]" src={facebook} alt="Facebook" />
        <img className="h-[24px]" src={instagram} alt="Instagram" />
        <img className="h-[24px]" src={twitter} alt="Twitter" />
        <img className="h-[24px]" src={linkedin} alt="LinkedIn" />
        <img className="h-[24px]" src={youtube} alt="Youtube" />
      </div>
    </footer>
  );
};
export default Footer;
