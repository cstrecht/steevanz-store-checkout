import React from "react";
import carbon_delivery from "../assets/carbon_delivery.svg";

const FreeDelivery = () => {
  return (
    <div className="fd-bar">
      <span>
        <img
          className="hidden md:flex"
          src={carbon_delivery}
          alt="Delivery icon"
        />
      </span>
      Free delivery in Portugal for amounts over 50€
    </div>
  );
};
export default FreeDelivery;
