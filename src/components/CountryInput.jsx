import React from "react";
import { useState, useEffect } from "react";

const CountryInput = () => {
  const URL = "https://restcountries.com/v3.1/all";
  const [countries, setCountries] = useState([]);

  function getData() {
    fetch(URL)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("api error");
      })
      .then((data) => setCountries(data))
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <select
        name="country"
        required
        id="country"
        className="text-[14px] text-steevanz-gray font-light border-b-[1px] border-b-steevanz-black "
      >
        <option value="country">Select country</option>
        {countries.map((country) => {
          return <option>{country.name.common}</option>;
        })}
      </select>
    </>
  );
};
export default CountryInput;
