import React from "react";
import { useNavigate } from "react-router-dom";

// -- React Components --
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import undraw_devices from "../assets/undraw_devices.svg";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="screen">
      <Navbar />
      <div className="flex flex-grow justify-around items-center h-screen text-white">
        <div className="w-[631px] pl-[40px]">
          <h1 className="font-cormorant text-[48px] uppercase">
            Frontend Developer
          </h1>
          <p className="font-roboto text-[24px] pt-[30px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div className="flex justify-between font-roboto pt-[55px]">
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
    </div>
  );
}
export default Home;
