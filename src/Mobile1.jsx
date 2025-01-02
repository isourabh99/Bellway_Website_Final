import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import CNavbar from "./CNavbar";
import Footer from "./Footer";
import MobileCard from "./MobileCard";
import Solutions from "./Solutions";
import FaqPage from "./FaqPage";
import "./Mobile.css";
import "./Mobile1.css";

const Mobile1 = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => setIsPopupVisible(!isPopupVisible);

  return (
    <>
      <Helmet>
        <title>
          BELLWAY INFOTECH - Mobile Application Development | Service
        </title>
        <meta
          name="description"
          content="Discover Bellway Infotech comprehensive mobile application development services."
        />
      </Helmet>

      <CNavbar />

      {/* Main Container */}
      <div class="containerx bg-black px-4 py-10 sm:py-12 md:py-10 ">
        <div class="flex flex-col md:flex-row items-center w-full justify-between">
          <div class="md:w-1/2 md:text-left ml-0 lg:ml-10">
            <h1 class="text-5xl sm:text-3xl lg:text-4xl xl:text-5xl  font-bold mb-4 mt-14 text-white">
              Mobile Application Development...
            </h1>
            <p className="text-sm  my-6 text-left text-zinc-500 hover:text-zinc-50 transition-all duration-300">
              At Bellway Infotech, we specialize in creating intuitive,
              high-performance mobile applications tailored to your business
              needs. Whether you are looking to build a cutting-edge app for
              Android, iOS, or both, our team of expert developers is ready to
              bring your vision to life.
            </p>

            <a
              href="/contact"
              class="relative inline-flex items-center justify-center h-10 mt-4 md:h-14 p-5 px-6 py-2 mb-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-3 border-red-500 rounded-full shadow-md group"
            >
              <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-500 group-hover:translate-x-0 ease">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span class="absolute flex items-center justify-center w-full h-full text-red-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                Contact Us
              </span>
              <span class="relative invisible">Contact Us</span>
            </a>
          </div>
          <div className="md:w-1/2 h-full mb-9 flex justify-center">
            <img
              loading="lazy"
              src="/images/Andro-app.png"
              alt="About Image"
              className="w-full md:w-[55%] h-auto max-w-full hover:scale-110 transition-all ease-in-out duration-500"
            />
          </div>
        </div>
      </div>

      {/* Section Title */}
      <div className="se">
        <h1 className="tag4 text-2xl mx-4 md:text-5xl font-bold">
          Mobile App Development Services
        </h1>
      </div>

      {/* Additional Components */}
      <div className="adjustable-container">
        <MobileCard />
        <Solutions />
      </div>

      {/* FAQ Section */}
      <div className="mt-24">
        <FaqPage />
      </div>

      <Footer />
    </>
  );
};

export default Mobile1;
