import React from "react";
import DataForm from "../components/DataForm";
import Footer from "../components/Footer";
import FreeDelivery from "../components/FreeDelivery";
import Navbar from "../components/Navbar";
import group2 from "../assets/group2.svg";
import icon2 from "../assets/icon2.svg";

function Informations() {
  return (
    <>
      <Navbar />
      <div className="checkout-bar">
        <h1>Checkout</h1>
        <div>
          <img src={group2} alt="Number of the step icon" />
        </div>
      </div>
      <div className="space" />
      <FreeDelivery />
      <div className="bar-total">
        <div className="pt-[20px]">
          Total: 50€
          <span className="font-light text-steevanz-gray text-[12px] md:text-[16px] pl-[20px]">
            per month
          </span>
        </div>
      </div>
      <div className="p-[40px]">
        <div className="flex">
          <img src={icon2} alt="icon number 2" />
          <span className="page-location">Your Data</span>
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
