import React from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.svg";
import order_confirmed from "../assets/order_confirmed.svg";

const Checkout = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between bg-steevanz-black h-screen text-white items-center align-middle">
      <div className="pl-[40px]">
        <img className="h-[52px] w-[229px]" src={logo} alt="" />
        <h1 className="font-cormorant text-[96px] mt-[90px]">
          Congratulations!
        </h1>
        <h2 className="font-cormorant text-[40px] mt-[10px]">
          You will be evaluated in the next few days.
        </h2>
        <p className="text-[20px] pt-[30px] w-[624px] font-light">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <button
          onClick={() => navigate("/")}
          className="border border-2-white rounded-full px-[284px] py-[15.5px] text-[20px] uppercase mt-[20px] hover:outline"
        >
          home
        </button>
      </div>
      <div className="pr-[50px]">
        <img src={order_confirmed} alt="" />
      </div>
    </div>
  );
};
export default Checkout;
