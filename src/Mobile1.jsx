import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import CNavbar from "./CNavbar";
import Footer from "./Footer";
import MobileCard from "./MobileCard";
import Solutions from "./Solutions";
import FaqPage from "./FaqPage";
import "./Mobile.css";
import "./Mobile1.css";
import MADScard from "./Components/MADScard";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from 'framer-motion'
import Native from "./Native";
import HomeSlider from "./HomeSlider";
const Mobile1 = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const togglePopup = () => setIsPopupVisible(!isPopupVisible);
  const dragConstraintsdiv = useRef(null)

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
          <div className="md:w-1/2 h-full my-10 flex justify-center">
            <img
              loading="lazy"
              src="/images/Andro-app.png"
              alt="About Image"
              className="w-full md:w-[55%] h-auto max-w-full hover:scale-110 transition-all ease-in-out duration-500"
            />
          </div>
        </div>
      </div>

      <div className="containerx px-4  py-10 md:py-0 flex flex-col md:flex-row justify-center bg-zinc-100  items-center  rounded overflow-hidden mb-10">
        <div className="md:w-1/2  ">
          <h1 className="text-zinc-900 text-3xl md:text-5xl leading-none">Mobile Application Development Services</h1>
          <p className="text-zinc-900 text-lg mt-4">Bellway Infotech boasts a team of seasoned mobile app developers skilled in crafting feature-rich, high-performing applications for diverse platforms. To ensure your business remains at the forefront in a competitive landscape, we employ cutting-edge techniques and technologies. Our team excels in addressing even the most intricate business needs. We have successfully developed powerful apps for both iOS and Android, serving millions of users worldwide.
          </p>
        </div>
        <div className="md:w-1/2 ">
          <img src="/images/rb_5487.png" alt="" className="md:w-[80%] mx-auto" />
        </div>
      </div>

      <div className="flex gap-10 flex-col md:flex-row items-center w-full px-4 my-20" >

        <div className="relative bg-zinc-100  md:w-80 w-full h-80 rounded-[70px] overflow-hidden">
          <img src="/images/freepik__candid-image-photography-natural-textures-highly-r__50824.jpeg" className="w-full h-full  object-cover object-bottom" alt="" />
          <Link to={"/contact"} className="absolute  top-0 right-10 w-fit mt-10 bg-white text-black px-2 py-2 rounded-full flex items-center justify-center gap-2 hover:scale-125 transition-all ease-linear duration-400"><FiArrowUpRight size={25} /></Link>
        </div>
        <MADScard desc={"As a leading mobile app development company, Bellway Infotech prioritizes seamless UI/UX   designs, dependable functionalities, and robust security measures. Partner with our expert  developers to merge creativity with technical prowess, transforming your digital visions into reality."} dragConstraintsdiv={dragConstraintsdiv} />
        <MADScard desc={"At Bellway Infotech, our team of highly experienced Mobile App Developers specializes in bringing your business ideas to life. We create innovative, customer-focused mobile applications designed to meet your specific goals and drive success"} dragConstraintsdiv={dragConstraintsdiv}
        />
        <MADScard desc={"At Bellway Infotech, our skilled mobile app designers excel in prototyping and creating tailor-made mobile applications. We deliver an intuitive user interface and seamless user experience to ensure heightened engagement and a higher ROI."} dragConstraintsdiv={dragConstraintsdiv}
        />
      </div>

      <Native />
      <MobileCard />
      {/* <Solutions /> */}
      <div className="mt-24">
        <HomeSlider/>
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
