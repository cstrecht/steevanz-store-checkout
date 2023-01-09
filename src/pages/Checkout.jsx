import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import order_confirmed from "../assets/order_confirmed.svg";

const Checkout = () => {
  const navigate = useNavigate();
  return (
    <div className="checkout-page">
      <div className="pl-[40px]">
        <img className="checkout-img" src={logo} alt="Steevans logo" />
        <h1 className="checkout-greeting-title">Congratulations!</h1>
        <h2 className="checkout-greeting-desc">
          You will be evaluated in the next few days.
        </h2>
        <p className="checkout-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <button onClick={() => navigate("/")} className="go-home-btn">
          home
        </button>
      </div>
      <div className="checkout-image">
        <img src={order_confirmed} alt="Order confirmed icon" />
      </div>
    </div>
  );
};
export default Checkout;
