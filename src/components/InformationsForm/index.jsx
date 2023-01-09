import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
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
    //navigate("/card-details");
  };

  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="text-[14px] text-steevanz-gray font-light">
            Firstname(s)*
          </label>
          <br />
          <input
            className="border-b-[1px] border-b-steevanz-black w-[325px]"
            focused={focused.toString()}
            onBlur={handleFocus}
            onChange={onChange}
            pattern="^[a-zA-Z0-9]+$"
            placeholder="Firstname"
            required
            type="text"
          />
          <span className="span-error">
            Please enter a valid name. Your firstname must contain only letters.
          </span>
        </div>
        <div>
          <label className="text-[14px] text-steevanz-gray font-light">
            Lastname(s)*
          </label>
          <br />
          <input
            className="border-b-[1px] border-b-steevanz-black w-[325px]"
            onChange={onChange}
            onBlur={handleFocus}
            focused={focused.toString()}
            placeholder="Lastname"
            type="text"
            pattern="^[a-zA-Z]+$"
            required
          />
          <span className="span-error">
            Please enter a valid name. Your lastname must contain only letters.
          </span>
        </div>
        <div>
          <label className="text-[14px] text-steevanz-gray font-light">
            Email*
          </label>
          <br />
          <input
            className="border-b-[1px] border-b-steevanz-black w-[325px]"
            onChange={onChange}
            onBlur={handleFocus}
            focused={focused.toString()}
            type="email"
            placeholder="Email"
            required
          />
          <span className="span-error">
            Please enter a valid name. Your firstname must contain only letters.
          </span>
        </div>
      </form>
    </>
  );
}
export default Form;
