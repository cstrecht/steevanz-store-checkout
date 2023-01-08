import React from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import undraw_devices from "../assets/undraw_devices.svg";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="flex justify-around relative items-center bg-steevanz-black text-white shadow-lg">
        <div className="w-[631px] pl-[40px] py-[185px]">
          <h1 className="font-cormorant text-[48px] uppercase">
            Frontend Developer
          </h1>
          <p className="text-[24px] pt-[30px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div className="flex justify-between pt-[55px]">
            <div>
              <p className="text-[32px] font-bold">
                50€ <span className="text-[16px] font-light">per month</span>{" "}
              </p>
            </div>
            <button onClick={() => navigate("/cart")} className="subscribe-btn">
              Subscribe
            </button>
          </div>
        </div>

        <div>
          <img
            className="w-[607px] h-[304px] pr-[86px] pl-[76px]"
            src={undraw_devices}
            alt="Undraw devices"
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
export default Home;
