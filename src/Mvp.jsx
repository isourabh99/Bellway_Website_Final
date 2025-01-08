import React from 'react'
import CNavbar from "./CNavbar";
import { Helmet } from "react-helmet";
import Solutions from "./Solutions";
import "./Form1.css";
import Footer from "./Footer";
import HomeSlider from "./HomeSlider";
import Mvpcard from './Mvpcard';
import FaqPage from "./FaqPage";

const Mvp = () => {
     

  return (
    <div>
      <>
        <Helmet>
          <title>BELLWAY INFOTECH - MVP Development | Service</title>
          <meta
            name="description"
            content="Discover Bellway Infotech comprehensive MVP development services. From concept to deployment our team delivers best solutions for your business."
          />
        </Helmet>
        <CNavbar />

        <div className="containerx bg-black px-4 py-10 sm:py-12 md:pt-10 ">
          <div className="flex flex-col md:flex-row items-center w-full justify-between">
            <div className="md:w-1/2 md:text-left ml-0 lg:ml-10">
              <h1 className="text-5xl sm:text-3xl lg:text-4xl xl:text-5xl  font-bold mb-4 mt-14 text-white">
                MVP Development...
              </h1>
              <p className="text-sm  my-6 text-left text-zinc-500 hover:text-zinc-50 transition-all duration-300">
                At Bellway Infotech, our MVP development services help bring
                your product idea to life swiftly and efficiently. We focus on
                building a core version with essential features to test market
                fit and gather user feedback. Our agile approach ensures a
                cost-effective, user-centered design, allowing you to validate
                your concept with minimal risk and scale as needed. Partner with
                us to fast-track your MVP and move from idea to market with
                confidence.
              </p>

              <a
                href="/contact"
                class="relative inline-flex items-center justify-center h-10 mt-8 md:h-14 p-5 px-6 py-2 mb-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-3 border-red-500 rounded-full shadow-md group"
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
            <div class="md:w-1/2 h-full mt-12 mb-9 flex justify-center">
              <img
                loading="lazy"
                src="/images/MVP1.png"
                alt="About Image"
                class="w-full md:w-[65%] h-auto hover:scale-110 transition-all duration-500 ease-in-out"
              />
            </div>
          </div>
        </div>

        <div className="se">
          <h1 className="tag4 text-2xl mx-4 md:text-5xl font-bold ">
            MVP Development for Validating Your Idea Quickly
          </h1>
        </div>
        <p className="text-lg mx-4 mt-6 md:text-center sm:text-left">
          Creating an MVP (Minimum Viable Product) lets you explore your
          concept's potential with efficient use of time and resources. An ideal
          MVP balances essential features with distinct functionalities to
          attract early adopters and secure investor interest. Testing your idea
          on a live audience provides valuable insights, paving the way for a
          refined product.
        </p>

        <div className="flex items-center justify-center flex-col">
          <Mvpcard />
          {/* <Solutions /> */}
        </div>
        <div className="mt-24">
          <HomeSlider />
        </div>

        <div style={{ marginTop: "90px" }}>
          <FaqPage></FaqPage>
        </div>

        <Footer />
      </>
    </div>
  );
}

export default Mvp
