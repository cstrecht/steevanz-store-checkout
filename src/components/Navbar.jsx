import React from "react";
import logo from "../assets/logo.svg";
import globe from "../assets/globe.svg";
import user from "../assets/user.svg";
import cart from "../assets/cart.svg";
import burguermenu from "../assets/burguermenu.svg";

const Navbar = () => {
  return (
    <>
      <nav>
        <img className="navbar-logo" src={logo} alt="Steevanz logo" />
        <div className="md:flex py-6 space-x-[65px]">
          <img className="hidden md:flex" src={globe} alt="Globe icon" />
          <img className="hidden md:flex" src={user} alt="User icon" />
          <img className="hidden md:flex" src={cart} alt="Cart icon" />
          <img
            className="pr-[44px] flex"
            src={burguermenu}
            alt="Burguer menu icon"
          />
        </div>
      </nav>
    </>
  );
};
export default Navbar;
