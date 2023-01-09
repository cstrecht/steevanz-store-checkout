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
      <div className="home-page">
        <div className="home-page-container">
          <h1 className="home-page-title">Frontend Developer</h1>
          <p className="home-page-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div className="flex justify-between pt-[55px]">
            <div>
              <p className="text-[32px] font-bold">
                50€
                <span className="text-[16px] font-light pl-[20px]">
                  per month
                </span>
              </p>
            </div>
            <button onClick={() => navigate("/cart")} className="subscribe-btn">
              Subscribe
            </button>
          </div>
        </div>
        <div>
          <img
            className="home-page-img"
            src={undraw_devices}
            alt="Undraw devices icon"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Home;
