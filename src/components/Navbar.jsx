import React from "react";
import logo from "../assets/logo.svg";
import globe from "../assets/globe.svg";
import user from "../assets/user.svg";
import cart from "../assets/cart.svg";
import burguermenu from "../assets/burguermenu.svg";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-wrap w-full items-center justify-between mx-auto bg-steevanz-black z-20 absolute shadow-lg h-[73px]">
        <img
          className="py-[19px] pl-10 w-[155px]"
          src={logo}
          alt="Steevanz logo"
        />

        <div className="flex py-6 space-x-[65px]">
          <img className="h-[24px]" src={globe} alt="Globe icon" />
          <img src={user} alt="User icon" />
          <img src={cart} alt="Cart icon" />
          <img
            className="pr-[44px]"
            src={burguermenu}
            alt="Burguer menu icon"
          />
        </div>
      </div>
    </>
  );
};
export default Navbar;
