import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// -- React Components --
import DataInput from "../components/DataForm/DataInput";
import dataInputs from "../components/DataForm/dataInputs";
import CountryInput from "../components/DataForm/CountryInput";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import carbon_delivery from "../assets/carbon_delivery.svg";

function SecondStep() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    country: "",
    location: "",
    address: "",
    postalcode: "",
    vatnumber: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/card-details");
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);
  return (
    <>
      <Navbar />

      <div className="flex justify-between px-[40px] py-[12px] text-[24px] w-full bg-steevanz-black h-[50px] text-white font-roboto">
        <h1>Checkout</h1>
        <div>cenas</div>
      </div>
      <div className="flex justify-center py-[12px] text-[20px] w-full text-center bg-steevanz-gold h-[50px] text-white font-roboto">
        <span>
          <img src={carbon_delivery} alt="Delivery icon" />
        </span>
        Free delivery in Portugal for amounts over 50$
      </div>
      <div>
        <button className="bg-red-300 mx-5">Personal</button>
        <button className="bg-red-300 mx-5">Company</button>
      </div>

      <form className="m-8" onSubmit={handleSubmit}>
        {dataInputs.map((input) => (
          <React.Fragment key={input.id}>
            <DataInput
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          </React.Fragment>
        ))}
        <CountryInput />
        <div>
          <button onClick={() => navigate(-1)}>Prev</button>
          <button>
            <input type="submit" value="Next" />
          </button>
        </div>
      </form>

      <form className="m-8" onSubmit={handleSubmit}>
        {dataInputs.map((input) => (
          <React.Fragment key={input.id}>
            <DataInput
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          </React.Fragment>
        ))}
        <CountryInput />
        <div>
          <button onClick={() => navigate(-1)}>Prev</button>
          <button>
            <input type="submit" value="Next" />
          </button>
        </div>
      </form>

      <Footer />
    </>
  );
}
export default SecondStep;
