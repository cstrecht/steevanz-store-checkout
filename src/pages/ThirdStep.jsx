import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

//-- React Components --
import paymentInputs from "../components/CardDetailsForm/paymentInputs";
import PaymentInput from "../components/CardDetailsForm/PaymentInput";
import Navbar from "../components/Navbar";

function ThirdStep() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    cardnumber: "",
    expirationdate: "",
    cvc: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/success");
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <h1>Third Step - Payment</h1>

      <form className="m-8" onSubmit={handleSubmit}>
        {paymentInputs.map((input) => (
          <React.Fragment key={input.id}>
            <PaymentInput
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          </React.Fragment>
        ))}

        <div>
          <button onClick={() => navigate(-1)}>Prev</button>
          <button>
            <input type="submit" value="Next" />
          </button>
        </div>
      </form>
      <button>A dropdown with RESUME</button>

      {/* make this prev and next buttons a component */}
      <div>
        <button onClick={() => navigate(-1)}>Previous</button>
        <button onClick={() => navigate("/success")}>Checkout</button>
      </div>
    </>
  );
}
export default ThirdStep;
