import React from "react";
import "./HomeServices.css";

function HomeServices() {
  return (
    <>
      <div className=" relative app-main-home  overflow-x-hidden   bg-antiquewhite md:h-screen flex items-center   justify-start">
        <div className="text-center absolute top-0 left-1/2 -translate-x-1/2 lg:left-0 lg:-translate-x-44 lg:translate-y-72  lg:-rotate-90  ">
          <h1 className="md:transform  text-4xl   pt-4 md:pt-4 text-center md:text-8xl lg:text-9xl text-black font-bold">
            BELLWAY
          </h1>
          <div className="flex flex-col  items-center ">
            {/* <p className="transform  md:-rotate-90 text-2xl md:text-5xl lg:text-6xl font-medium text-black">S</p>
                        <p className="transform  md:-rotate-90 text-2xl md:text-4xl lg:text-5xl font-medium text-black">E</p>
                        <p className="transform md:-rotate-90 text-2xl md:text-4xl lg:text-5xl font-medium text-black">C</p>
                        <p className="transform md:-rotate-90 text-2xl md:text-4xl lg:text-5xl font-medium text-black">I</p>
                        <p className="transform md:-rotate-90 text-2xl md:text-4xl lg:text-5xl font-medium text-black">V</p>
                        <p className="transform md:-rotate-90 text-2xl md:text-4xl lg:text-5xl font-medium text-black">R</p>
                        <p className="transform md:-rotate-90 text-2xl md:text-4xl lg:text-5xl font-medium text-black">E</p>
                        <p className="transform md:-rotate-90 text-2xl md:text-4xl lg:text-5xl font-medium text-black">S</p> */}

            <p className="transform tracking-[1.2rem] pt-3 md:pt-0   text-2xl md:text-4xl lg:text-5xl font-medium text-black">
              SERVICES
            </p>
          </div>
        </div>
      </div>

      <div className="app-main4-home">

        <div className="container-home">

          <div className="container-item-home">
            <div className="heading mt-20 ">Artificial Intelligence</div>

            <div className="content">
              <h2>Artificial Intelligence</h2>
              <br />
              <span>
                Our AI specialists harness the power of cutting-edge
                technologies to develop intelligent systems that revolutionize
                processes and drive transformative outcomes across industries.
              </span>
            </div>

          </div>

          <div className="container-item-home">
            <div className="heading mt-20">
              Mobile Application <br /> Development
            </div>
            <div className="content">
              <h2>Mobile Application Development</h2>
              <br />
              <span>
                Our mobile application development team combines innovation and
                expertise to create user-centric apps that seamlessly integrate
                with modern mobile platforms.
              </span>
            </div>
          </div>

          <div className="container-item-home">
            <div className="heading mt-20">
              Web Application <br /> Development
            </div>
            <div className="content">
              <h2>Web Application Development</h2>
              <br />
              <span>
                Our dedicated team of designers and web app developers
                specializes in creating seamless, browser-optimized
                applications.
              </span>
            </div>
          </div>

          <div className="container-item-home">
            <div className="heading mt-20">UI / UX Design</div>
            <div className="content">
              <h2>UI / UX Design</h2>
              <br />
              <span>
                Our UI/UX design team crafts intuitive and engaging user
                experiences, ensuring every interaction is both aesthetically
                pleasing and highly functional.
              </span>
            </div>
          </div>

          <div className="container-item-home">
            <div className="heading mt-20">Digital Marketing</div>
            <div className="content">
              <h2>Digital Marketing</h2>
              <br />
              <span>
                Our digital marketing experts leverage cutting-edge strategies
                to boost your online presence, drive engagement, and maximize
                conversions across all digital platforms.
              </span>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default HomeServices;
