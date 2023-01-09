import React from "react";
import CardDetailsForm from "../components/CardDetailsForm";
import Navbar from "../components/Navbar";
import group3 from "../assets/group3.svg";
import icon4 from "../assets/icon4.svg";
import visa from "../assets/visa.svg";
import Footer from "../components/Footer";
import downarrow from "../assets/downarrow.svg";
import FreeDelivery from "../components/FreeDelivery";

function CardDetails() {
  return (
    <>
      <Navbar />
      <div className="checkout-bar">
        <h1>Checkout</h1>
        <div>
          <img src={group3} alt="Number of the step icon" />
        </div>
      </div>
      <div className="space" />
      <FreeDelivery />
      <div className="bar-total">
        <div className="bar-total-title">
          Total: 31,98€
          <span className="bar-total-subtitle">
            26,99€ (Product) + 4.99€ (Delivery Fee)
          </span>
        </div>
      </div>
      <div className="m-[40px]">
        <div className="">
          <div className="flex">
            <img src={icon4} alt="icon number 2" />
            <span className="page-location">Payment</span>
          </div>
          <div className="flex flex-col md:flex-row justify-between pt-[30px]">
            <div className="flex">
              <img src={visa} alt="" />
              <p className="pl-[20px] text-[16px] text-steevanz-gray">
                Pay securely with your credit card.
              </p>
            </div>
            <div className="resume-btn">
              <div className="text-[14px] font-bold text-steevanz-gray pl-[10px] pt-[11px]">
                Resume
              </div>
              <div className="p-[17px]">
                <img src={downarrow} alt="Down arrow" />
              </div>
            </div>
          </div>
        </div>
        <CardDetailsForm />
      </div>
      <Footer />
    </>
  );
}
export default CardDetails;
