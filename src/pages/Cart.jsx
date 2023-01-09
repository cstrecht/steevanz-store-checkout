import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import FreeDelivery from "../components/FreeDelivery";
import Navbar from "../components/Navbar";
import deleteicon from "../assets/deleteicon.svg";
import group1 from "../assets/group1.svg";
import icon1 from "../assets/icon1.svg";
import leftarrow from "../assets/leftarrow.svg";
import undraw_tasks from "../assets/undraw_tasks.svg";

const Cart = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="checkout-bar">
        <h1>Checkout</h1>
        <img src={group1} alt="Number of the step icon" />
      </div>
      <div className="space" />
      <FreeDelivery />
      <div className="m-[30px]">
        <div className="flex pb-[24px]">
          <img src={leftarrow} alt="Left arrow" />
          <span
            onClick={() => navigate(-1)}
            className="text-[12px] md:text-[20px] pl-[11px] hover:underline hover:cursor-pointer"
          >
            Continue shopping
          </span>
        </div>
        <div className="flex pb-[40px]">
          <img src={icon1} alt="icon number 1" />
          <span className="page-location">Check your cart</span>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col">
            <div className="cart-title">
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
            <div className="text-[16px] md:text-[24px]">
              Do you have a discount cupon?
            </div>
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
      <div className="px-[40px]">
        <div className="navigation-buttons">
          <button className="light-btn" onClick={() => navigate("/")}>
            Clean Cart
          </button>
          <button
            onClick={() => navigate("/informations")}
            className="dark-btn"
          >
            Next
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Cart;
