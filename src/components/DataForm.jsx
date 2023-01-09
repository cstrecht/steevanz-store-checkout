import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CountryInput from "./CountryInput";
import offer from "../assets/offer.svg";

function DataForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/card-details");
    reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="data-form-page">
          <div className="data-form-grid">
            <div className="md:col-span-1">
              <label className="label">Firstname(s)*</label>
              <br />
              <input
                type="text"
                className="data-form-input"
                {...register("firstname", {
                  required: "Firstname is required.",
                  pattern: {
                    value: /^[a-zA-Z]+$/,
                    message: "Only letters are allowed.",
                  },
                })}
                onKeyUp={() => {
                  trigger("firstname");
                }}
              />
              <br />
              {errors.firstname && (
                <small className="text-danger-red">
                  {errors.firstname.message}
                </small>
              )}
            </div>
            <div className="md:col-span-1">
              <label className="label">Lastname(s)*</label>
              <br />
              <input
                type="text"
                className="data-form-input"
                {...register("lastname", {
                  required: "Lastname is required.",
                  pattern: {
                    value: /^[a-zA-Z]+$/,
                    message: "Only letters are allowed.",
                  },
                })}
                onKeyUp={() => {
                  trigger("lastname");
                }}
              />
              <br />
              {errors.lastname && (
                <small className="text-danger-red">
                  {errors.lastname.message}
                </small>
              )}
            </div>
            <div className="md:col-span-1">
              <label className="label">Email*</label>
              <br />
              <input
                type="text"
                className="data-form-input"
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Enter a valid email.",
                  },
                })}
                onKeyUp={() => {
                  trigger("email");
                }}
              />
              <br />
              {errors.email && (
                <small className="text-danger-red">
                  {errors.email.message}
                </small>
              )}
            </div>
            <div className="md:col-span-1">
              <label className="label">Phone*</label>
              <br />
              <input
                type="text"
                className="data-form-input"
                {...register("phone", {
                  required: "Phone number is required.",
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "Only numbers are allowed.",
                  },
                  minLength: {
                    value: 9,
                    message: "The phone number should have 9-16 digits.",
                  },
                  maxLength: {
                    value: 10,
                    message: "The phone number should have 9-16 digits.",
                  },
                })}
                onKeyUp={() => {
                  trigger("phone");
                }}
              />
              <br />
              {errors.phone && (
                <small className="text-danger-red">
                  {errors.phone.message}
                </small>
              )}
            </div>
            <div className="md:col-span-1">
              <label className="label">Country*</label>
              <br />
              <CountryInput />
            </div>
            <div className="md:col-span-1">
              <label className="label">Location*</label>
              <br />
              <input
                type="text"
                className="data-form-input"
                {...register("location", {
                  required: "Location is required.",
                })}
                onKeyUp={() => {
                  trigger("location");
                }}
              />
              <br />
              {errors.location && (
                <small className="text-danger-red">
                  {errors.location.message}
                </small>
              )}
            </div>
            <div className="md:col-span-2">
              <label className="label">Address*</label>
              <br />
              <input
                type="text"
                className="border-b-[1px] border-b-steevanz-black w-[325px] xl:w-full"
                {...register("address", {
                  required: "Address is required.",
                })}
                onKeyUp={() => {
                  trigger("address");
                }}
              />
              <br />
              {errors.address && (
                <small className="text-danger-red">
                  {errors.address.message}
                </small>
              )}
            </div>
            <div className="md:col-span-1">
              <label className="label">Postal Code*</label>
              <br />
              <input
                type="text"
                className="data-form-input"
                {...register("postalcode", {
                  required: "Postal code is required.",
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "Only numbers are allowed.",
                  },
                })}
                onKeyUp={() => {
                  trigger("postalcode");
                }}
              />
              <br />
              {errors.postalcode && (
                <small className="text-danger-red">
                  {errors.postalcode.message}
                </small>
              )}
            </div>
            <div className="md:col-span-1">
              <label className="label">VAT Number*</label>
              <br />
              <input
                type="text"
                className="data-form-input"
                {...register("vat", {
                  required: "VAT number is required.",
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "Only numbers are allowed.",
                  },
                })}
                onKeyUp={() => {
                  trigger("vat");
                }}
              />
              <br />
              {errors.vat && (
                <small className="text-danger-red">{errors.vat.message}</small>
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="pt-[80px] text-steevanz-black">
              <div className="absolute">
                <div className="md:text-[20px]">Is this purchase an offer?</div>
                <div className="text-[14px]">Add a custom message</div>
              </div>
              <img
                className="relative -mt-4 mb-[40px]"
                src={offer}
                alt="Gift"
              />
            </div>
            <div className="grid grid-cols-2">
              <div>
                <label className="label">From</label>
                <br />
                <input
                  type="text"
                  className="border-b-[1px] border-b-steevanz-black"
                />
              </div>
              <div>
                <label className="label">To</label>
                <br />
                <input
                  type="text"
                  className="border-b-[1px] border-b-steevanz-black"
                />
              </div>
              <div className="col-span-2">
                <label className="label">Message</label>
                <br />
                <input
                  type="textarea"
                  rows="4"
                  className="border-b-[1px] border-b-steevanz-black h-[80px] w-[325px]"
                  placeholder="Write here your message"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 pt-[57px]">
          <input type="checkbox" className="checkbox-round " />
          <label className="text-[12px] md:text-[16px] text-steevanz-black pl-[16px]">
            Add a delivery address different from the billing address.
          </label>
          <br />
        </div>
        <div className="navigation-buttons">
          <button className="light-btn" onClick={() => navigate("/cart")}>
            Previous
          </button>
          <button type="submit" className="dark-btn">
            Checkout
          </button>
        </div>
      </form>
    </>
  );
}
export default DataForm;
