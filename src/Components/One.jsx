import React from 'react'
import CNavbar from '../CNavbar'
import { Link } from 'react-router-dom';
import screen from '../assets/one1.png'
import screen1 from '../assets/one2.png'
import screen2 from '../assets/one3.png'
import screen3 from '../assets/hotel5.png'
import brobo4 from '../assets/one4.png'
import brobo5 from '../assets/one5.png'
import brobo6 from '../assets/one6.png'
import brobo7 from '../assets/one7.png'
import brobo8 from '../assets/one8.png'
import brobo9 from '../assets/one9.png'
import brobo10 from '../assets/Go-connect 29.png'
import brobo11 from '../assets/Go-connect 32.png'
import brobo12 from '../assets/Go-connect 33.png'
import laravel from '../assets/laravel.png'
import flutter from '../assets/flutter.png'
import react from '../assets/react.png'
import js from '../assets/js.png'
import CaseSlider9 from './CaseSlider9.jsx'
import Footer from '../Footer.jsx';
const Brobo = () => {
  return (
    <>
      <div className="sticky-nav">
        <CNavbar />
      </div>
      <div class="containerx mx-auto pt-32 md:pt-0  bg-black md:p-8">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 text-left mb-4 md:mb-0 md:p-16">
            <h1 class="md:text-5xl text-3xl font-bold mb-4 text-white ">
              Oneapp Plus
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
              / Oneapp Plus
            </h3>
          </div>
          <div class="md:w-1/2 text-right mx-3 md:mx-0 my-4 md:my-0">
            <img
              loading="lazy"
              src="https://i.pinimg.com/564x/66/66/e6/6666e66640af828ff4d8cdb6cdfdc36b.jpg"
              alt="About Image"
              class="w-full rounded-md h-auto mt-4"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-8">
        {/* Left Side */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h4 className="text-3xl font-bold mb-4 md:ml-20">
            About Oneapp Plus
          </h4>
          <p className="text-gray-700 text-justify md:ml-20 text-lg md:text-xl">
            One App Plus is a premier e-commerce app designed to offer users a
            seamless shopping experience. Our platform brings a diverse range of
            products to your fingertips, from electronics and fashion to home
            essentials and more. Whether you're looking to upgrade your gadgets,
            refresh your wardrobe, or enhance your living space, One App Plus
            provides easy navigation and secure transactions. With features like
            personalized recommendations, exclusive deals, and reliable customer
            support, shopping becomes convenient and enjoyable. Discover the
            convenience of shopping everything you need in one place with One
            App Plus.
          </p>
        </div>

        {/* Right Side */}
        <div className="md:w-1/3 md:h-80  bg-gray-200 p-6 rounded shadow-lg md:mr-36">
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
                <p className="text-gray-200 text-center text-[18px] my-4 md:my-0">
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
      <div className=" text-white font-sans mt-20 md:mt-0 min-h-screen">
        <div
          className="w-full md:relative bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/564x/3f/67/8e/3f678e4d9c1b467ac5755766e88b2ac9.jpg')",
          }}
        >
          <div className="bg-black bg-opacity-50 p-8">
            <h2 className="text-4xl font-bold mt-8 text-left md:ml-24">
              The Need
            </h2>
            <p className="text-lg mt-8  text-justify md:ml-24">
              In today's dynamic and fast-paced world, consumers increasingly{" "}
              <br /> seek convenience and reliability in their shopping
              experiences.
              <br /> They desire a platform that offers a wide array of products
              and services
              <br /> conveniently accessible from one place. The demand for
              personalized <br /> shopping experiences, where users can easily
              find products tailored to their
              <br /> preferences, is on the rise. People are looking for a
              trustworthy e-commerce <br />
              solution that not only offers a diverse selection of goods but
              also ensures <br />
              seamless transactions and excellent customer service. Recognizing
              this demand,
              <br /> our client launched One App Plus, an innovative e-commerce
              app designed to <br />
              provide users with a comprehensive shopping experience.
            </p>

            <div className="md:relative space-y-4 md:space-y-0 md:h-36">
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
        <p className="text-lg mt-6 text-center max-w-4xl mx-auto">
          Our client's goal in launching One App Plus was to swiftly introduce
          an e-commerce platform that offers users seamless access to a wide
          range of products and services.
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

        <ul className="list-disc list-inside text-lg mt-4 max-w-4xl md:ml-24 ">
          <li className="text-black">Offer Diverse Product Range</li>
          <li className="text-black">Enhance User Engagement</li>
          <li className="text-black">Improve Accessibility to Shopping</li>
          <li className="text-black">Provide personalized recommendations</li>
          <li className="text-black">Streamline Shopping Experience</li>
          <li className="text-black">
            Ensure Secure and Convenient Transactions
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
            <p className="text-lg mt-8 md:ml-24 text-center">
              Our UI/UX team developed hi-fi prototype after low-fi approval,
              through intuitive interfaces and aesthetically appealing layouts.
            </p>

            <div className="md:relative mr-9 md:mr-0 space-y-4 md:space-y-0 md:h-36">
              <img
                loading="lazy"
                src="https://i.pinimg.com/564x/d4/eb/36/d4eb36a2c23fddad9c00f61dc458d67c.jpg"
                alt="Image 1"
                className="md:absolute rounded-md w-[29rem] h-[30rem] left-[44rem] bottom-[27rem] transform translate-x-4 translate-y-4"
              />
              <img
                loading="lazy"
                src="https://i.pinimg.com/564x/7b/66/27/7b6627c0ab36a356e1952cc9098911d8.jpg"
                alt="Image 2"
                className="md:absolute rounded-md w-[30rem] h-[26rem] left-24 top-[-35rem] transform translate-x-4 translate-y-4"
              />
              <img
                loading="lazy"
                src={brobo4}
                alt="Image 3"
                className="md:absolute w-[16rem] h-[34rem] left-[5rem] top-66 transform translate-x-4 translate-y-4"
              />
              <img
                loading="lazy"
                src={brobo5}
                alt="Image 3"
                className="md:absolute w-[16rem] h-[34rem] left-[30rem] top-[4rem] transform translate-x-4 translate-y-4"
              />
              <img
                loading="lazy"
                src={brobo6}
                alt="Image 3"
                className="md:absolute w-[16rem] h-[34rem] left-[54rem] top-[0rem] transform translate-x-4 translate-y-4"
              />
              <img
                loading="lazy"
                src={brobo7}
                alt="Image 4"
                className="md:absolute w-[16rem] h-[34rem] left-[5rem] top-[37rem] transform translate-x-4 translate-y-4"
              />
              <img
                loading="lazy"
                src={brobo8}
                alt="Image 5"
                className="md:absolute w-[16rem] h-[34rem] left-[30rem] top-[40rem] transform translate-x-4 translate-y-4"
              />
              <img
                loading="lazy"
                src={brobo9}
                alt="Image 6"
                className="md:absolute w-[16rem] h-[34rem] left-[54rem] top-[36.6rem] transform translate-x-4 translate-y-4"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 md:mt-[70rem] px-4 md:px-0">
        <h2 className="md:text-4xl font-bold text-3xl mt-4">
          Admin Visual Design
        </h2>
        <p className="text-lg mt-4 text-center">
          We’ve designed the Admin Visual Panel for the implementation of user
          interface elements and aesthetics for administrative interfaces, with
          a focus on clarity and functionality.
        </p>
        <CaseSlider9 />
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
              class="relative inline-flex items-center justify-center h-6 md:h-16 mt-5 md:mt-0 p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-3 border-red-500 rounded-full shadow-md group"
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
