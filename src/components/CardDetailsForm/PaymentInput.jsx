import React from "react";
import { useState } from "react";

function PaymentInput(props) {
  const { label, onChange, id, errorMessage, required, ...inputProps } = props;

  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <>
      <div className="">
        <label>{label}</label>
        <input
          className="border-2"
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          focused={focused.toString()}
          required
        />
        <span>{errorMessage}</span>
      </div>
    </>
  );
}
export default PaymentInput;
