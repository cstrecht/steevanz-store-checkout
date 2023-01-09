import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

function CardDetailsForm() {
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
    navigate("/checkout");
    reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="card-details-page">
          <div className="col-span-2">
            <label className="label">Credit Card*</label>
            <br />
            <input
              type="text"
              className="card-details-input"
              {...register("creditcard", {
                required: "Credit Card number is required.",
                pattern: {
                  value: /^[0-9]*$/,
                  message: "Only numbers are allowed.",
                },
                minLength: {
                  value: 16,
                  message: "The Credit Card number should have 16 digits.",
                },
                maxLength: {
                  value: 16,
                  message: "The Credit Card number should have 16 digits.",
                },
              })}
              onKeyUp={() => {
                trigger("creditcard");
              }}
            />
            {errors.creditcard && (
              <small className="text-danger-red">
                {errors.creditcard.message}
              </small>
            )}
          </div>
          <div className="col-span-2 md:col-span-1">
            <label className="label">Expiration Date*</label>
            <br />
            <input
              type="date"
              className="card-details-input"
              {...register("expirationdate", {
                required: "Expiration date is required.",
              })}
              onKeyUp={() => {
                trigger("expirationdate");
              }}
            />
            {errors.expiationdate && (
              <small className="text-danger-red">
                {errors.expirationdate.message}
              </small>
            )}
          </div>
          <div className="col-span-1">
            <label className="label">CVC*</label>
            <br />
            <input
              type="text"
              className="card-details-input"
              {...register("cvc", {
                required: "CVC number is required.",
                minLength: {
                  value: 3,
                  message: "The CVC number should have 3 digits.",
                },
                maxLength: {
                  value: 3,
                  message: "The CVC number should have 3 digits.",
                },
                pattern: {
                  value: /^[0-9]*$/,
                  message: "Only numbers are allowed.",
                },
              })}
              onKeyUp={() => {
                trigger("cvc");
              }}
            />
            {errors.cvc && (
              <small className="text-danger-red">{errors.cvc.message}</small>
            )}
          </div>
          <div className="col-span-2">
            <input
              type="checkbox"
              className="checkbox-round"
              {...register("terms", {
                required: "You must accept the terms and conditions.",
              })}
            />
            <label className="checkbox-label">
              I have read and accept the store's terms and conditions.*
            </label>
            <br />
            {errors.terms && (
              <small className="text-danger-red">{errors.terms.message}</small>
            )}
          </div>
        </div>
        <div className="navigation-buttons">
          <button
            className="light-btn"
            onClick={() => navigate("/informations")}
          >
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
export default CardDetailsForm;
