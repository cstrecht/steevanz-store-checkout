import React from "react";
import { useNavigate } from "react-router-dom";

const FinalStep = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Final page</h1>
      <button onClick={() => navigate("/")}>Home</button>
    </>
  );
};
export default FinalStep;
