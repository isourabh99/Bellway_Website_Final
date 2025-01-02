import React from 'react'
import CNavbar from '../CNavbar'
import { Link } from 'react-router-dom';
import screen from '../assets/Connect1.png'
import screen1 from '../assets/coupon2.png'
import screen2 from '../assets/coupon3.png'
import screen3 from '../assets/hotel5.png'
import brobo4 from '../assets/coupon4.png'
import brobo5 from '../assets/coupons5.png'
import brobo6 from '../assets/coupon6.png'
import brobo7 from '../assets/coupon7.png'
import brobo8 from '../assets/coupon8.png'
import brobo9 from '../assets/coupon10.png'
import laravel from '../assets/laravel.png'
import flutter from '../assets/flutter.png'
import react from '../assets/react.png'
import js from '../assets/js.png'
import brobo10 from '../assets/dairy10.png'
import brobo11 from '../assets/dairy11.png'
import brobo12 from '../assets/Brobos12.png'
import CaseSlider from './CaseSlider.jsx'
import Footer from '../Footer.jsx';
const Brobo = () => {
  return (
    <>
      <div className="sticky-nav">
        <CNavbar />
      </div>
      <div class="containerx mx-auto pt-32 md:pt-0 bg-black md:p-8">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 text-left mb-4 md:mb-0 md:p-16">
            <h1 class="md:text-5xl text-3xl font-bold mb-4 text-white ">
              Coupon Counter
            </h1>

            <a
              href="https://play.google.com/store/apps/details?id=com.bellwayinfotech.deliciousmeal"
              target="_blank"
              class="relative inline-flex items-center justify-center h-6 md:h-16 p-5 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-3 border-red-500 rounded-full shadow-md group mr-4"
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
                View Demo
              </span>
              <span class="relative invisible">Let's Talk</span>
            </a>
            <a
              href="/contact"
              class="relative inline-flex items-center justify-center h-6 md:h-16 p-5 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-3 border-red-500 rounded-full shadow-md group"
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
                Buy Now
              </span>
              <span class="relative invisible">Contact Us</span>
            </a>

            <h3 class="sm:text-2xl text-white mt-3">
              <Link to="/" class="text-red-600 hover:underline">
                Home
              </Link>{" "}
              / Coupon Counter
            </h3>
          </div>
          <div class="md:w-1/2 text-right">
            <img
              loading="lazy"
              src="https://i.pinimg.com/564x/33/d7/67/33d767d764cd48c59753ff5cb54523e1.jpg"
              alt="About Image"
              class="w-full rounded-md h-auto mt-4"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center mt-8 md:mt-0 justify-between md:p-8">
        {/* Left Side */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h4 className="text-3xl font-bold mb-4 text-center md:ml-20">
            About Coupon Counter
          </h4>
          <p className="text-gray-700 md:ml-20 mx-4 md:mx-0 text-justify text-lg md:text-xl">
            Coupon Counter is a premier online platform specializing in booking
            coupons for a wide range of events. Our service allows users to
            easily browse and purchase event coupons, providing convenient
            access to popular events such as concerts, theater performances,
            sporting events, and more. Whether you're planning a night out with
            friends, a family outing, or a special occasion, Coupon Counter
            offers a user-friendly interface that simplifies the booking
            process. Users can search for coupons based on event type, location,
            and date, ensuring they find the perfect tickets to suit their
            preferences.
          </p>
        </div>

        {/* Right Side */}
        <div className="md:w-1/3 w-5/6 h-80  bg-gray-200 m-auto p-6 rounded shadow-lg md:mr-36">
          <div className="space-y-6">
            {/* Box 1 */}
            <div className="inline-flex md:flex items-start">
              <div
                style={{
                  backgroundColor: "#ff1493",
                  backgroundImage:
                    "linear-gradient(319deg, #ff1493 0%, #0000ff 37%, #ff8c00 100%)",
                }}
                className="w-1 h-4 bg-black mr-4 mt-4"
              ></div>
              <div>
                <h2 className="font-semibold text-lg mt-4">Clients Location</h2>
                <ul className="list-disc list-inside ml-4">
                  <p>Sub point 1</p>
                </ul>
              </div>
            </div>

            {/* Box 2 */}
            <div className="inline-flex md:flex items-start">
              <div
                style={{
                  backgroundColor: "#ff1493",
                  backgroundImage:
                    "linear-gradient(319deg, #ff1493 0%, #0000ff 37%, #ff8c00 100%)",
                }}
                className="w-1 h-4 bg-black mr-4 mt-1"
              ></div>
              <div>
                <h2 className="font-semibold text-lg">Development Time</h2>
                <ul className="list-disc list-inside ml-4">
                  <p>Sub point 1</p>
                </ul>
              </div>
            </div>

            {/* Box 3 */}
            <div className="inline-flex md:flex items-start">
              <div
                style={{
                  backgroundColor: "#ff1493",
                  backgroundImage:
                    "linear-gradient(319deg, #ff1493 0%, #0000ff 37%, #ff8c00 100%)",
                }}
                className="w-1 h-4 bg-black mr-4 mt-1"
              ></div>
              <div>
                <h2 className="font-semibold text-lg">Target Users</h2>
                <ul className="list-disc list-inside ml-4">
                  <p>Sub point 1</p>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center h-full md:relative z-10 top-3">
        <div className="w-full max-w-6xl ">
          <div className="inset-x-0 top-0 transform translate-y-8 mx-4 ">
            <div
              className="bg-cover bg-center rounded-lg shadow-lg"
              style={{
                backgroundImage:
                  "url('https://i.pinimg.com/564x/60/c7/15/60c715285cae14f6a4c97f4e10e3fe97.jpg')",
              }}
            >
              <div className="bg-black bg-opacity-50 p-6 rounded-lg mb-26">
                <h3 className="text-3xl font-bold text-white text-center">
                  Technologies Leveraged
                </h3>
                <p className="text-gray-200 text-center text-[18px]">
                  We leveraged the strength of robust and secure technologies,
                  tools, and frameworks used in the app/web to escalate the
                  creation of new features and functionalities.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-4">
                  <div className="bg-black p-4 rounded-lg flex justify-center items-center">
                    <img
                      loading="lazy"
                      src={flutter}
                      alt="Logo"
                      className="w-12 h-12"
                    />
                  </div>
                  <div className="bg-black p-4 rounded-lg flex justify-center items-center">
                    <img
                      loading="lazy"
                      src={js}
                      alt="Logo"
                      className="w-12 h-12"
                    />
                  </div>
                  <div className="bg-black p-4 rounded-lg flex justify-center items-center">
                    <img
                      loading="lazy"
                      src="https://i.pinimg.com/564x/49/eb/b3/49ebb3a19141d6eb3a71fadb1929336a.jpg"
                      alt="Logo"
                      className="w-16 h-16"
                    />
                  </div>
                  <div className="bg-black p-4 rounded-lg flex justify-center items-center">
                    <img
                      loading="lazy"
                      src={react}
                      alt="Logo"
                      className="w-12 h-12"
                    />
                  </div>
                  <div className="bg-black p-4 rounded-lg flex justify-center items-center">
                    <img
                      loading="lazy"
                      src={laravel}
                      alt="Logo"
                      className="w-12 h-12"
                    />
                  </div>
                  <div className="bg-black p-4 rounded-lg flex justify-center items-center">
                    <img
                      loading="lazy"
                      src="https://www.shareicon.net/data/2016/06/21/607631_php_4096x4096.png"
                      alt="Logo"
                      className="w-16 h-16"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-white mt-20 md:mt-0 font-sans min-h-screen">
        <div
          className="w-full md:relative bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/564x/3f/67/8e/3f678e4d9c1b467ac5755766e88b2ac9.jpg')",
          }}
        >
          <div className="bg-black bg-opacity-50 p-8">
            <h2 className="md:text-4xl text-3xl font-bold mt-8 text-left md:ml-24">
              The Need
            </h2>
            <p className="text-lg mt-7 text-justify md:ml-24">
              Coupon Counter is a major online platform that enables the easy
              booking <br /> of event coupons. This new service intends to
              improve access to a wide range <br /> of events, including
              concerts, theater performances, and sporting events, by
              <br /> offering users a simple and secure booking experience.
              Coupon Counter's <br /> comprehensive search capabilities and
              secure payment choices provide a <br />
              hassle-free booking experience, catering to a wide range of event
              preferences
              <br /> and assuring complete client satisfaction.Coupon Counter
              revolutionizes the <br />
              way people access and enjoy events by providing a streamlined
              platform for <br />
              booking event coupons online. Whether you're planning a night out
              with friends, <br />
              attending a cultural event, or catching your favorite team in
              action,
              <br /> Coupon Counter offers a comprehensive selection of tickets
              and coupons
              <br /> to suit every interest.
            </p>
            <br />
            <div className="md:relative md:h-36 space-y-4 md:space-y-0">
              <img
                loading="lazy"
                src={screen}
                alt="Image 1"
                className="md:absolute w-[16rem] h-[34rem] left-[54rem] bottom-[-7rem] transform translate-x-4 translate-y-4"
              />
              <img
                loading="lazy"
                src={screen1}
                alt="Image 2"
                className="md:absolute w-[16rem] h-[34rem] left-24 top-0 transform translate-x-4 translate-y-4"
              />
              <img
                loading="lazy"
                src={screen2}
                alt="Image 3"
                className="md:absolute w-[16rem] h-[34rem] left-[32rem] top-48 transform translate-x-4 translate-y-4"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-black p-8">
        <h2 className="md:text-4xl text-3xl font-bold md:mt-[34rem] text-center">
          Client Goals
        </h2>
        <p className="text-lg mt-6 md:text-center text-justify  max-w-4xl mx-auto">
          Our client's objective was to swiftly launch Coupon Counter, an
          innovative online platform dedicated to simplifying the booking of
          event coupons. This new service aims to enhance accessibility to a
          wide range of events.
        </p>

        <div className="inline-flex md:flex items-center mt-8">
          <div
            style={{
              backgroundColor: "#ff1493",
              backgroundImage:
                "linear-gradient(319deg, #ff1493 0%, #0000ff 37%, #ff8c00 100%)",
            }}
            className="w-2 h-6 bg-gray-500 md:ml-24"
          ></div>
          <h3 className="text-2xl font-bold ml-4 ">App Objectives</h3>
        </div>

        <ul className="list-disc list-inside text-lg mt-4 max-w-4xl  md:ml-24 ">
          <li className="text-black">
            Simplify online booking of event coupons
          </li>
          <li className="text-black">Engage users with intuitive interface.</li>
          <li className="text-black">
            Increase access to diverse events: concerts, sports
          </li>
          <li className="text-black">
            Provide accurate ticket availability and booking details
          </li>
          <li className="text-black">
            Streamline booking with advanced filters and secure payments
          </li>
          <li className="text-black">
            Offer savings through discounts and special offers
          </li>
        </ul>
      </div>

      <div className=" text-white font-sans min-h-screen">
        <div
          className="w-full md:relative bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/564x/25/d0/cf/25d0cfcd1837ab7001ca80de76b9e619.jpg')",
          }}
        >
          <div className="bg-black bg-opacity-50 p-7">
            <h2 className="md:text-4xl text-3xl font-bold md:mt-[29rem] text-center md:ml-24">
              Mobile View Design
            </h2>
            <p className="text-lg mt-8 mb-3 md:mb-0 md:ml-24 text-center">
              Our UI/UX team developed hi-fi prototype after low-fi approval,
              through intuitive interfaces and aesthetically appealing layouts.
            </p>

            <div className="md:relative md:h-36 mr-8 md:mr-0 space-y-4 md:space-y-0">
              <img
                loading="lazy"
                src="https://i.pinimg.com/564x/fd/e5/ab/fde5ab020ecedac8b6a7cd88d459e375.jpg"
                alt="Image 1"
                className="md:absolute rounded-md w-[30rem] h-[33rem] left-[44rem] bottom-[27rem] transform translate-x-4 translate-y-4"
              />
              <img
                loading="lazy"
                src="https://i.pinimg.com/564x/e8/44/d1/e844d1353c6873092b045b1c9896fd78.jpg"
                alt="Image 2"
                className="md:absolute rounded-md w-[30rem] h-[26rem] left-24 top-[-35rem] transform translate-x-4 translate-y-4"
              />
              <img
                loading="lazy"
                src={brobo4}
                alt="Image 3"
                className="md:absolute w-[16rem] h-[34rem] left-[5rem] top-66 transform translate-x-4 translate-y-4 border-4 border-black rounded-lg"
              />
              <img
                loading="lazy"
                src={brobo8}
                alt="Image 3"
                className="md:absolute w-[16rem] h-[34rem] left-[30rem] top-[4rem] transform translate-x-4 translate-y-4 border-4 border-black rounded-lg"
              />
              <img
                loading="lazy"
                src={brobo9}
                alt="Image 3"
                className="md:absolute w-[16rem] h-[34rem] left-[54rem] top-[0rem] transform translate-x-4 translate-y-4 border-4 border-black rounded-lg"
              />
              <img
                loading="lazy"
                src={brobo6}
                alt="Image 4"
                className="md:absolute w-[16rem] h-[34rem] left-[5rem] top-[37rem] transform translate-x-4 translate-y-4 border-4 border-black rounded-lg"
              />
              <img
                loading="lazy"
                src={brobo7}
                alt="Image 5"
                className="md:absolute w-[16rem] h-[34rem] left-[30rem] top-[40rem] transform translate-x-4 translate-y-4 border-4 border-black rounded-lg"
              />
              <img
                loading="lazy"
                src={brobo5}
                alt="Image 6"
                className="md:absolute w-[16rem] h-[34rem] left-[54rem] top-[36.6rem] transform translate-x-4 translate-y-4   border-4 border-black rounded-lg"
              />
              {/* <img
                src={brobo10}
                alt="Image 7"
                className="absolute w-[16rem] h-[34rem] left-[15rem] top-[76rem] transform translate-x-4 translate-y-4"
              />
               <img
                src={brobo9}
                alt="Image 8"
                className="absolute w-[16rem] h-[34rem] left-[46rem] top-[76rem] transform translate-x-4 translate-y-4"
              /> */}
              {/* <img
                src={brobo12}
                alt="Image 9"
                className="absolute w-[16rem] h-[34rem] left-[54rem] top-[73.3rem] transform translate-x-4 translate-y-4"
              /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 md:mt-[69rem] px-4 md:px-0">
        {/* <h2 className="md:text-4xl font-bold text-2xl mt-4">Admin Visual Design</h2>
      <p className="text-lg mt-4 text-center">We’ve designed the Admin Visual Panel for the implementation of user interface elements and aesthetics for administrative interfaces, with a focus on clarity and functionality.</p>
      <CaseSlider /> */}
      </div>
      <div className=" mx-auto px-4 py-16 justify-start">
        <h1 className="md:text-5xl text-3xl font-bold mb-4 text-black">
          We'll help you get started
        </h1>
        <div className="flex items-center justify-between">
          <p className=" text-[18px] text-black ">
            Browse our blog, educational videos, and customer stories to find{" "}
            <br />
            what you need to succeed as a Webflow freelancer.
          </p>
          <div className="text-end">
            <a
              href="/contact"
              class="relative inline-flex items-center justify-center h-6 md:h-16 mt-4 md:mt-0 p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-3 border-red-500 rounded-full shadow-md group"
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
              <span class="absolute flex items-center justify-center w-full h-full text-red-500 transition-all duration-300 transform group-hover:translate-x-full ease text-[20px]">
                Dive In
              </span>
              <span class="relative invisible">Button Text</span>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Brobo
