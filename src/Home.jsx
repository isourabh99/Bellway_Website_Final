import React from "react";
import "./Home.css";
import Card from "./Card";
import Slider from "react-slick";
import FlipCard from "./Flipcard";
import Mobile from "./assets/Photo.jpeg";
import Web from "./assets/Ai.jpg";
import App from "./assets/AI2.jpg";
import Cloud from "./assets/AI5.jpg";
import App2 from "./assets/AI8.jpg";
import Dedicated from "./assets/Reduced.jpg";
import Digital from "./assets/Marketing.jpg";
import Testing from "./assets/ourprocessnew.png";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

// import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BoxSlider.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Google from "./assets/Google2.jpg";
import CNavbar from "./CNavbar";
import Header from "./Header";
import Footer from "./Footer";

import Industries from "./Industries";
import Faq from "./HomeFaq";
import Solutions from "./Solutions";
import "./cards.css";
import HomeSlider from "./HomeSlider";
import WhyBell from "./WhyBell";
import HomeServices from "./HomeServices";
import sister from "./assets/sistercom2.png";
import { Helmet } from "react-helmet";
import { Suspense } from "react";


import logo from "./assets/logo2.png";
import logo2 from "./assets/logo3.png";
import logo4 from "./assets/logo4.png";
import logo5 from "./assets/logo5.png";
import logo6 from "./assets/logo6.png";
import logo7 from "./assets/logo7.png";
import logo8 from "./assets/logo8.png";
import logo12 from "./assets/logo12.png";
import logo13 from "./assets/logo13.png";
import logo15 from "./assets/logo15.png";
import logo16 from "./assets/logo16.png";
import logo17 from "./assets/logo17.png";
import logo18 from "./assets/Instantcarfixlogo.png";
import logo19 from "./assets/cashbackcouponlogo.png";
import Homeservice from "./Homeservice";

const Wrapper = styled.div`
  justify-content: space-around;
  margin: auto;
`;

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const boxes = [
    {
      id: 1,
      text: '"Exceptional service delivery, coupled with their innovative solutions, has truly propelled our business forward. Highly recommended for their dedication and expertise!"',
      image: logo5,
      name: "Abhilash D",
      position: "( Founder, E-CouponCounter)",
    },
    {
      id: 2,
      text: '"Highly recommend tapping into their unparalleled expertise and innovative solutions for any business striving to excel and thrive in today\'s fiercely competitive landscape."',
      image: logo4,
      name: "Senthil Nathan",
      position: "( Founder, Go Connect)",
    },
    {
      id: 3,
      text: '"Their commitment to delivering outstanding service alongside groundbreaking and forward-looking solutions has been pivotal for our continued and remarkable success."',
      image: logo6,
      name: "Archit Yajnik",
      position: "( Founder, LLN)",
    },
    {
      id: 4,
      text: '"Exceptional service delivery, coupled with their innovative solutions, has truly propelled our business forward. Highly recommended for their dedication and expertise!"',
      image: logo7,
      name: "Anish",
      position: "( Founder, Maaza Munch)",
    },
    {
      id: 5,
      text: '"What stood out the most was their exceptional customer support. They resolved my issue within minutes, making the whole process stress-free. I will definitely be a returning customer!"',
      image: logo12,
      name: "Vipul Singh",
      position: "( Owner, Truely Match )",
    },
    {
      id: 6,
      text: '"If you are looking to advance your Business, this is the place to be. currently we are serving in India, USA and Australia. We chose Bellway Infotech to develop our website and mobile app...."',
      image: logo13,
      name: "Gnanaprakash A",
      position: "( Founder, OneAppPlus )",
    },
    {
      id: 7,
      text: '"The workflow improvements and organizational features have helped me become more efficient We needed a partner for our website and app development. Bellway Infotech came highly recommended, and they delivered beyond our expectations...."',
      image: logo2,
      name: "Mohammed Wasee ",
      position: "( Founder, Brobo )",
    },
    {
      id: 8,
      text: '"The Technical service is top-notch, always ready to assist with any queries. It es been a game-changer for my work Bellway Infotech came highly recommended, and they delivered beyond our expectations...."',
      image: logo,
      name: "Viren Patil ",
      position: "( Founder, DesiGro )",
    },
    {
      id: 9,
      text: '"The support team is fantastic and always available to help. I highly recommend this service to anyone looking to streamline their business operations and achieve greater efficiency!"',
      image: logo8,
      name: "Ashish Sharma ",
      position: "( Founder, Shri Jyotish)",
    },
    {
      id: 10,
      text: '"I highly recommend it to anyone looking for a reliable solution. Their exceptional customer support, innovative features, and seamless integration have significantly enhanced our business efficiency and performance"',
      image: logo17,
      name: "Afsal PY",
      position: "( Founder, Dcart )",
    },
    {
      id: 11,
      text: '"It is helped me keep track of my tasks and manage my time better. The insights provided are invaluable, and the customer service is always ready to help. This software has been a lifesaver!"',
      image: logo16,
      name: "Yashua Group of Companies",
      position: "( Founder, YML  )",
    },
    {
      id: 12,
      text: '"Impressed with their app development skills! The app is intuitive and performs flawlessly. Excellent communication and support throughout the process. Highly recommended for anyone needing top-quality development!"',
      image: logo15,
      name: "Vageesh Kumar BC",
      position: "( Founder, OnlineStoreWeb )",
    },
    {
      id: 13,
      text: '"Using the Instant Car Fix Mechanic app has transformed the way we operate our business. As an admin, assigning jobs to our mechanics has never been easier. With just a few taps, I can send out job details directly to our team. Our mechanics receive all the necessary information, pick up the required parts, and head straight to the customer’s location."',
      image: logo18,
      name: "Rajeev Gupta",
      position: "( Founder, InstantCar Fix )",
    },
    {
      id: 14,
      text: '"The CashbackCoupon platform has greatly streamlined our business processes. As an admin, managing and promoting exclusive offers has become incredibly efficient. With just a few clicks, I can upload new coupons and deals for our users. They can easily browse through these offers, find the best discounts, and save significantly while shopping. This intuitive system not only improves user experience but also drives higher engagement and satisfaction with our platform."',
      image: logo19,
      name: "Mr. Ajay Singh",
      position: "( Founder, cashbackcoupon.in )",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>BELLWAY INFOTECH - Web & App Development Company in India</title>
        <meta
          name="description"
          content="Bellway Infotech offers IT services, app development, web development, and digital marketing. As one of the top mobile app development companies in India and the USA, we specialize in creating mobile applications for businesses, AI app development services, and more."
        />
        <meta
          name="keywords"
          content="IT services, app development, web development, digital marketing, create app for business, top mobile app development companies in India, mobile development company in USA, mobile application software, application creation software, AI app development services, mobile app developers, get an app for my business"
        />
      </Helmet>

      <CNavbar />

      <Header />

      <WhyBell />

      <Homeservice/>
{/* <HomeServices/> */}
      <Industries />

      <div className="flex flex-col items-center">
        <h1 className="our-process">Our Process</h1>
        <div className="flex justify-center">
          <img
            loading="lazy"
            src={Testing}
            alt="Process representation"
            className="img-fluid w-120 h-120"
          
          />
        </div>
      </div>

      <HomeSlider />

      <Solutions />

      <div className="w-full  overflow-hidden">
        <div className="w-full text-center">
          <h1 className="appreciation  text-4xl md:text-5xl font-bold mb-8 mt-28">
            Stories From Our Clients
          </h1>
        </div>
        <div className="mt-10 px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8 lg:py-10 bg-gray-50 shadow-md rounded-md p-4 text-center transition duration-300 hover:bg-gray-200 hover:shadow-2xl">
          <Slider {...settings}>
            {boxes.map((box, index) => (
              <div key={index} className="px-2  sm:px-4">
                <div className="bg-white rounded-md p-4  sm:p-6 md:p-8 text-center transition duration-300 hover:bg-gray-100 shadow-md hover:shadow-lg relative">
                  <div className=" mb-4">
                    <img
                      src={box.image}
                      alt={`Client ${index + 1}`}
                      className="w-18 h-16  bg-contain  mx-auto my-10"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-gray-700 text-lg  font-bold mb-1">
                    {box.name}
                  </div>
                  <div className="text-gray-600 font-semibold text-sm">
                    {box.position}
                  </div>
                  <div className="text-gray-700 my-8 line-clamp-3  text-pretty  text-md ">
                    {box.text}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <br />
      <br />

      <Faq />

      <Footer />
    </div>
  );
};

export default Home;
