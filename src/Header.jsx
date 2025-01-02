import React from "react";
import video2 from "./assets/video1.mp4";
function Header() {
  return (
  
    <div className=" bg-black px-4 py-10 sm:py-12 md:py-16 ">

      <div className="flex flex-col md:flex-row items-center gap-4 w-full justify-between">
        {/* left part  */}
        <div className="md:w-1/2 md:text-left ml-0 lg:ml-10">
          <h1 className="text-5xl sm:text-3xl lg:text-4xl xl:text-5xl  font-bold mb-4 mt-14 bg-gradient-to-r from-red-600 to-white bg-clip-text text-transparent">
            Custom App Development Company
          </h1>

          <p className="text-sm  my-6 text-left text-zinc-500 hover:text-zinc-50 transition-all duration-300">
            We have developed over 500+ Android and iOS-based mobile
          </p>

          <p className="text-sm  my-6 text-left text-zinc-500 hover:text-zinc-50 transition-all duration-300">
            At Bellway Infotech, we specialize in custom app development //
            solutions that are designed to solve your unique business //
            challenges. Whether you're looking to build a mobile app, web //
            application, or enterprise-level solution, our expert // developers
            work closely with you to create a product that // meets your exact
            specifications and delivers a seamless user // experience.
          </p>

          {/* button */}
          <a
            href="/contact"
            className="relative inline-flex items-center justify-center h-10 md:h-14 p-5 px-6 py-2 mb-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-3 border-red-500 rounded-full shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-500 group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-red-500 transition-all duration-300 transform group-hover:translate-x-full ease">
              Contact Us
            </span>
            <span className="relative invisible">Contact Us</span>
          </a>
        </div>

        {/* reight part */}
        <div className="md:w-1/2 flex justify-center items-center ">
          <video
            autoPlay
            loop
            muted
            loading="lazy"
            className="rounded-lg border-2 border-red-600 w-full max-w-full md:mt-16 "
          >
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default Header;
