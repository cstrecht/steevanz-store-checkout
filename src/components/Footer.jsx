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
        <a href="https://steevanz.com">Who We Are</a>
        <a href="https://steevanz.com">FAQs</a>
        <a href="https://steevanz.com">Contacts</a>
      </div>
      <div className="flex flex-col leading-7">
        <a href="https://steevanz.com">Complaints Book</a>
        <a href="https://steevanz.com">Terms and Conditions</a>
      </div>
      <div className="flex space-x-4 align-bottom items-center">
        <a href="https://steevanz.com">
          <img className="h-[24px]" src={facebook} alt="Facebook" />
        </a>
        <a href="https://steevanz.com">
          <img className="h-[24px]" src={instagram} alt="Instagram" />
        </a>
        <a href="https://steevanz.com">
          <img className="h-[24px]" src={twitter} alt="Twitter" />
        </a>
        <a href="https://steevanz.com">
          <img className="h-[24px]" src={linkedin} alt="LinkedIn" />
        </a>
        <a href="https://steevanz.com">
          <img className="h-[24px]" src={youtube} alt="Youtube" />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
