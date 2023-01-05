import React from "react";
import { useNavigate } from "react-router-dom";

function SecondStep() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Second Step - Your Data</h1>
      <div>
        <button>Personal</button>
        <button>Company</button>
      </div>

      {/* make this form a component */}

      <div className="forms">
        <div>
          <form>
            <input type="firstname" placeholder="Firstname" />
            <input type="lastname" placeholder="Lastname" />
            <input type="email" placeholder="Email" />
            <input type="phone" placeholder="Phone" />
            <input type="country" placeholder="Country" />
            <input type="location" placeholder="Location" />
            <input type="address" placeholder="Address" />
            <input type="postalcode" placeholder="Postal code" />
            <input type="vatnumber" placeholder="VAT number" />
          </form>
          <input type="checkbox" />
          <label htmlFor="checkbox">Add a delivery address...</label>
        </div>

        <div>
          <p>Is this purchase an offer?</p>
          <input type="text" placeholder="from" />
          <input type="text" placeholder="to" />
          <input type="text" placeholder="Your message" />
        </div>
      </div>

      {/* make this prev and next buttons a component */}
      <div>
        <button onClick={() => navigate(-1)}>Previous</button>
        <button onClick={() => navigate("/page3")}>Next</button>
      </div>
    </>
  );
}
export default SecondStep;
