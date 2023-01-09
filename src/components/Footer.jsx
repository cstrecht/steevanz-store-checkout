import React from "react";
import logo from "../assets/logo.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import youtube from "../assets/youtube.svg";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={logo} alt="Steevanz logo" className="footer-logo" />
      </div>
      <div className="footer-link">
        <a className="pb-[14px]" href="https://steevanz.com/">
          Who We Are
        </a>
        <a className="pb-[14px]" href="https://steevanz.com/">
          FAQs
        </a>
        <a className="pb-[14px]" href="https://steevanz.com/">
          Contacts
        </a>
      </div>
      <div className="footer-link">
        <a className="pb-[14px]" href="https://steevanz.com//">
          Complaints Book
        </a>
        <a href="https://steevanz.com/">Terms and Conditions</a>
      </div>
      <div className="footer-social-icons">
        <a href="https://www.facebook.com/steevanzsteevanz/">
          <img className="h-[24px]" src={facebook} alt="Facebook" />
        </a>
        <a href="https://steevanz.com/">
          <img className="h-[24px]" src={instagram} alt="Instagram" />
        </a>
        <a href="https://twitter.com/steevanz_">
          <img className="h-[24px]" src={twitter} alt="Twitter" />
        </a>
        <a href="https://www.linkedin.com/company/steevanz/?originalSubdomain=pt">
          <img className="h-[24px]" src={linkedin} alt="LinkedIn" />
        </a>
        <a href="https://steevanz.com/">
          <img className="h-[24px]" src={youtube} alt="Youtube" />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
