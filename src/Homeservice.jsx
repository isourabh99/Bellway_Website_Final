import React from "react";
import "./Homeservice.css"
function Homeservice() {
  return (
    <div className="relative min-h-[90vh] bg-[antiquewhite] overflow-hidden  ">
      <div className="heading">
        <h1 className="text-black text-center text-[8vh] lg:text-[16vh] font-bold  ">
          BELLWAY
        </h1>
        <h1 className="text-black text-center text-[5vh] lg:text-[7vh] tracking-[1.5vw] ">
          SERVICES
        </h1>
      </div>

      <div className="app-main4-home overflow-hidden ">
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
    </div>
  );
}

export default Homeservice;
