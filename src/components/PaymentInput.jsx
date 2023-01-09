import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

function PaymentInput(props) {
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
    // the reset method clears all the values
    reset();
  };

  //console.log(errors);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 w-[555px] gap-x-24 gap-y-10 pt-[55px]">
          <div className="col-span-2">
            <label className="label">Credit Card*</label>
            <br />
            <input
              type="text"
              className={"border-b-[1px] border-b-steevanz-black w-[555px]"}
              {...register("creditcard", {
                required: "Card number is required",
                pattern: {
                  value: /^[0-9]*$/,
                  message: "Only numbers are allowed.",
                },
                minLength: {
                  value: 16,
                  message: "The Credit card number should have 16 digits.",
                },
                maxLength: {
                  value: 16,
                  message: "The Credit card number should have 16 digits.",
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
          <div className="col-span-1 ">
            <label className="label">Expiration Date*</label>
            <br />
            <input
              type="date"
              className="border-b-[1px] border-b-steevanz-black w-full"
              {...register("expirationdate", {
                required: "Expiration date is required",
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
              className="border-b-[1px] border-b-steevanz-black w-full"
              {...register("cvc", {
                required: "CVC number is required",
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
              className="w-4 h-4 text-steevanz-black bg-steevanz-black border-steevanz-black rounded-full"
              {...register("terms", {
                required: "You must accept the terms and conditions.",
              })}
            />
            <label className="text-[16px] text-steevanz-black pl-[20px]">
              I have read and accept the store's terms and conditions.*
            </label>
            <br />
            {errors.terms && (
              <small className="text-danger-red">{errors.terms.message}</small>
            )}
          </div>
        </div>
        <div className="flex justify-between px-[40px] mt-[50px] mb-[90px]">
          <button
            className="light-btn"
            onClick={() => navigate("/informations")}
          >
            Previous
          </button>
          <button
            onSubmit={handleSubmit(onSubmit)}
            type="submit"
            //onClick={() => navigate("/checkout")}
            className="dark-btn"
          >
            Checkout
          </button>
        </div>
      </form>
    </>
  );
}
export default PaymentInput;
