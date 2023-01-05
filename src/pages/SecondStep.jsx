import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataInput from "../components/DataForm/DataInput";
import dataInputs from "../components/DataForm/dataInputs";
import CountryInput from "../components/DataForm/CountryInput";

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
      <h1>Second Step - Your Data</h1>
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
    </>
  );
}
export default SecondStep;
