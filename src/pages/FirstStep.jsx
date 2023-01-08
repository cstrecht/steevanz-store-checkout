import React from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import carbon_delivery from "../assets/carbon_delivery.svg";
import icon1 from "../assets/icon1.svg";
import leftarrow from "../assets/leftarrow.svg";
import undraw_tasks from "../assets/undraw_tasks.svg";
import deleteicon from "../assets/deleteicon.svg";
import group1 from "../assets/group1.svg";

const FirstStep = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="flex absolute mt-[73px] justify-between items-center px-[40px] py-[12px] text-[24px] w-full bg-steevanz-black text-white h-[80px]">
        <h1>Checkout</h1>
        <div>
          <img src={group1} alt="Number of the step icon" />
        </div>
      </div>
      <div className="h-[153px]" />
      <div className="flex justify-center py-[12px] text-[20px] w-full text-center bg-steevanz-gold h-[50px] text-white">
        <span>
          <img src={carbon_delivery} alt="Delivery icon" />
        </span>
        Free delivery in Portugal for amounts over 50€
      </div>
      <div className="m-[30px]">
        <div className="flex pb-[24px]">
          <img src={leftarrow} alt="Left arrow" />
          <span
            onClick={() => navigate(-1)}
            className="text-[20px] pl-[11px] hover:underline hover:cursor-pointer"
          >
            Continue shopping
          </span>
        </div>
        <div className="flex pb-[40px]">
          <img src={icon1} alt="icon" />
          <span className="text-[24px] pl-[10px] font-light">
            Check your cart
          </span>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <div className="flex font-cormorant text-[48px] uppercase">
              Frontend Developer
              <img
                src={deleteicon}
                alt="delete icon"
                className="pl-[24px] hover:cursor-pointer"
                onClick={() => navigate(-1)}
              />
            </div>
            <p className="text-steevanz-gray text-[24px] font-light">
              One position available every month.
            </p>
          </div>
          <div>
            <div className="text-[24px]">Do you have a discount cupon?</div>
            <input
              type="text"
              placeholder="Write here your cupon"
              className="w-[440px] font-light border-b-[1px] border-b-steevanz-black"
            />
          </div>
        </div>
        <img
          src={undraw_tasks}
          alt="undraw tasks"
          className="mt-[42px] ml-[73px] h-[160px] w-[292px]"
        />
      </div>
      <div className="w-full h-[88px] bg-steevanz-light-gray mt-[36px] pl-[41px] font-bold text-steevanz-gray">
        <div className="pt-[30px] text-[24px]">
          Total: 50$
          <span className="font-light text-steevanz-gray text-[16px] pl-[20px]">
            per month
          </span>
        </div>
      </div>
      <div className="flex justify-between px-[40px] mt-[50px] mb-[90px]">
        <button className="clean-cart-btn" onClick={() => navigate(-1)}>
          Clean Cart
        </button>
        <button onClick={() => navigate("/informations")} className="next-btn">
          Next
        </button>
      </div>
      <Footer />
    </>
  );
};
export default FirstStep;
