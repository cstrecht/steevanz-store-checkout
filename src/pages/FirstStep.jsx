import React from "react";
import { useNavigate } from "react-router-dom";

const FirstStep = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>First Step - Check your cart</h1>
      <div>
        <label htmlFor="">Do you have a discount cupon?</label>
        <input type="text" />
      </div>

      <div>
        <button>Clean Cart</button>
        <button onClick={() => navigate("/informations")}>Next</button>
      </div>
    </>
  );
};
export default FirstStep;
