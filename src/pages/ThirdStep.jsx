import React from "react";
import { useNavigate } from "react-router-dom";

function ThirdStep() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Third Step - Payment</h1>

      <form>
        <input type="number" placeholder="Credit Card" />
        <input type="number" placeholder="Expiration Date" />
        <input type="number" placeholder="CVC" />
      </form>
      <input type="checkbox" />
      <label htmlFor="checkbox">I have read terms and conditions</label>

      <button>A dropdown with RESUME</button>

      {/* make this prev and next buttons a component */}
      <div>
        <button onClick={() => navigate(-1)}>Previous</button>
        <button onClick={() => navigate("/page4")}>Checkout</button>
      </div>
    </>
  );
}
export default ThirdStep;
