import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

//-- React Components --

import CardDetailsForm from "../components/CardDetailsForm";
import Navbar from "../components/Navbar";
import group3 from "../assets/group3.svg";
import carbon_delivery from "../assets/carbon_delivery.svg";
import icon4 from "../assets/icon4.svg";
import visa from "../assets/visa.svg";
import Footer from "../components/Footer";
import downarrow from "../assets/downarrow.svg";

function CardDetails() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    cardnumber: "",
    expirationdate: "",
    cvc: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/checkout");
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />

      <div className="flex absolute mt-[73px] justify-between items-center px-[40px] py-[12px] text-[24px] w-full bg-steevanz-black text-white h-[80px]">
        <h1>Checkout</h1>
        <div>
          <img src={group3} alt="Number of the step icon" />
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
          Total: 31,98€
          <span className="font-light text-steevanz-gray text-[16px] pl-[20px]">
            26,99€ (Product) + 4.99€ (Delivery Fee)
          </span>
        </div>
      </div>

      <div className="m-[40px]">
        {" "}
        <div className="">
          <div className="flex">
            <img src={icon4} alt="icon number 2" />
            <span className="text-[24px] pl-[10px] font-light">Payment</span>
          </div>

          <div className="flex justify-between pt-[30px]">
            <div className="flex">
              <img src={visa} alt="" />
              <p className="pl-[20px] text-[16px] text-steevanz-gray">
                Pay securely with your credit card.
              </p>
            </div>
            <div className="flex justify-between h-[40px] w-[555px] bg-steevanz-light-gray rounded-md shadow-lg hover:cursor-pointer">
              <div className="text-[14px] font-bold text-steevanz-gray pl-[10px] pt-[11px]">
                Resume
              </div>
              <div className="p-[17px]">
                <img src={downarrow} alt="" />
              </div>
            </div>
          </div>
        </div>
        <CardDetailsForm />
        {/* make this prev and next buttons a component */}
      </div>

      <Footer />
    </>
  );
}
export default CardDetails;
