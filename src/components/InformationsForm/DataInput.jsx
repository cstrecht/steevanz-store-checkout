import React from "react";
import { useState } from "react";

function DataInputs(props) {
  const { label, onChange, id, errorMessage, required, ...inputProps } = props;

  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <>
      <div>
        <label className="text-[14px] text-steevanz-gray font-light">
          {label}
        </label>
        <br />
        <input
          className="border-b-[1px] border-b-steevanz-black w-[325px]"
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          focused={focused.toString()}
          required
        />
        <span className="span-error">{errorMessage}</span>
      </div>
    </>
  );
}
export default DataInputs;
