import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// -- React Components --
// import DataInput from "../components/InformationsForm/DataInput";
// import inputsBeforeCountry from "../components/InformationsForm/inputsBeforeCountry";
// import inputsAfterCountry from "../components/InformationsForm/inputsAfterCountry";
// import CountryInput from "../components/InformationsForm/CountryInput";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import carbon_delivery from "../assets/carbon_delivery.svg";
import group2 from "../assets/group2.svg";
import icon2 from "../assets/icon2.svg";
import DataForm from "../components/DataForm";

function Informations() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="flex absolute mt-[73px] justify-between items-center px-[40px] py-[12px] text-[24px] w-full bg-steevanz-black text-white h-[80px]">
        <h1>Checkout</h1>
        <div>
          <img src={group2} alt="Number of the step icon" />
        </div>
      </div>
      <div className="h-[153px]" />
      <div className="flex justify-center py-[12px] text-[20px] w-full text-center bg-steevanz-gold h-[50px] text-white">
        <span>
          <img src={carbon_delivery} alt="Delivery icon" />
        </span>
        Free delivery in Portugal for amounts over 50€
      </div>
      <div className="w-full bg-steevanz-light-gray pl-[41px] font-bold text-steevanz-gray h-[68px]">
        <div className="pt-[20px] text-[24px]">
          Total: 50€
          <span className="font-light text-steevanz-gray text-[16px] pl-[20px]">
            per month
          </span>
        </div>
      </div>
      <div className="p-[40px]">
        <div className="flex">
          <img src={icon2} alt="icon number 2" />
          <span className="text-[24px] pl-[10px] font-light uppercase">
            Your Data
          </span>
        </div>
        <div className="pt-[40px] space-x-[15px]">
          <button className="dark-btn">Personal</button>
          <button className="light-btn">Company</button>
        </div>

        <DataForm />
      </div>

      <Footer />
    </>
  );
}
export default Informations;
