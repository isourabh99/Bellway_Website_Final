import React from 'react'
import './AboutUs.css'
import Slider from 'react-infinite-logo-slider'
import { Link } from 'react-router-dom'
import lazyload from "react-lazyload"
import CNavbar from '../../CNavbar'
import Footer from '../../Footer'

import Img14 from '../../assets/img14.png'
import Img15 from '../../assets/img15.jpeg'
import Img3 from '../../assets/img3.jpg'
import Img16 from '../../assets/img16.png'
import Img18 from '../../assets/img18.png'
import Img13 from '../../assets/img13.jpg'
import Img99 from '../../assets/mst.png'

import { Helmet } from "react-helmet";
import Img31 from '../../assets/img31.png'
import Img32 from '../../assets/img32.png'
import Img33 from '../../assets/img33.png'
import Img34 from '../../assets/img34.png'
import Img35 from '../../assets/img35.png'
import Img36 from '../../assets/img36.png'
import Img37 from '../../assets/img37.png'
import Img38 from '../../assets/img38.png'
import Img39 from '../../assets/img39.png'
import Img40 from '../../assets/img40.png'
import Img41 from '../../assets/img41.png'
import Img42 from '../../assets/img42.png'
import Img43 from '../../assets/img43.png'
import Img44 from '../../assets/img44.png'
import Img45 from '../../assets/img45.png'
import Img46 from '../../assets/img46.png'

import image9 from '../../assets/image9.png'
import image10 from '../../assets/image10.png'
import image11 from '../../assets/image11.png'
import image12 from '../../assets/image12.png'
import image13 from '../../assets/image13.png'
import image14 from '../../assets/image14.png'
import image15 from '../../assets/image15.png'
import image16 from '../../assets/image16.png'
import image17 from '../../assets/image17.png'
import image18 from '../../assets/image18.png'
import image19 from '../../assets/image19.png'
import image20 from '../../assets/image20.png'
import image21 from '../../assets/image21.png'
import image22 from '../../assets/image22.png'

import foundation1 from "../../assets/foundation1.png";
import foundation2 from "../../assets/foundation2.png";
import foundation3 from "../../assets/foundation3.png";
import foundation4 from "../../assets/foundation4.png";
import foundation5 from "../../assets/foundation5.png";
import foundation6 from "../../assets/foundation6.png";
import foundation7 from "../../assets/foundation7.png";
import foundation8 from "../../assets/foundation8.png";
import foundation9 from "../../assets/foundation9.png";
import foundation10 from "../../assets/foundation10.png";
import new2 from "../../assets/new2.jpeg"
import new1 from "../../assets/new1.jpeg"

import Solutions from '../../Solutions';
import HomeTestimonials from '../../HomeTestimonials'
import { Suspense ,useState } from 'react'

const AboutUs = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <>
      <Helmet>
        <title>BELLWAY INFOTECH - About </title>
        <meta
          name="description"
          content="Bellway Infotech is a leading app development company and web application development agency. Our experienced team delivers innovative solutions for mobile apps, business software, and enterprise applications tailored to your needs."
        />
        <meta
          name="keywords"
          content="app development company, web app development agency, software development business, mobile app development company near me, application company, mobile app agency, business software development, web application development agency, android app development near me, app development solutions, mobile app development company services, application team"
        />
      </Helmet>
      <CNavbar />

      <div className="mybg">
        <div class="bg-black px-4 p-4 mt-20">
          <div class="flex flex-col lg:flex-row items-center lg:gap-20 sm:gap-10">
            <div class="lg:w-1/2 text-left mb-4 lg:mb-0 lg:p-8">
              <h1 class="md:text-6xl text-3xl font-bold mb-4 mt-4 text-white">
                About...
              </h1>
              {/* <h3 class="sm:text-2xl text-white">
                <Link to="/" class="text-red-600 hover:underline">Home</Link> / About Us
              </h3> */}
              <p className="text-sm  my-6 text-left text-zinc-500 hover:text-zinc-50 transition-all duration-300">
                At Bellway Infotech, we are a dynamic team of innovators,
                problem-solvers, and tech enthusiasts committed to delivering
                exceptional software solutions. Founded with a vision to empower
                businesses through technology, we specialize in custom app
                development, web development, and digital transformation
                services. Our goal is simple: to help businesses thrive by
                creating user-friendly, scalable, and high-performance
                applications.
              </p>

              <div className="mt-10">
                <a
                  href="/contact"
                  class="relative inline-flex items-center justify-center h-10 md:h-14 p-5 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-3 border-red-500 rounded-full shadow-md group"
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
                    Let's Talk
                  </span>
                  <span class="relative invisible">Button Text</span>
                </a>
              </div>
            </div>

            <div class="lg:w-1/2 text-right  ">
              <img
                src={foundation1}
                alt="About Image"
                class="w-full  h-auto rounded-md"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="containerx mx-auto py-6 px-4 ">
          <h2 class="md:text-[2.7vw] text-4xl font-bold my-20  md:text-center text-center  hover:text-red-600">
            We have 15 years of experience in IT solutions
          </h2>

          <div className="flex justify-around items-center flex-col lg:flex-row  gap-10">
            <div className=" lg:h-1/2 lg:w-1/4 lg-mx-auto sm:w-80 flex justify-center items-center">
              <img
                src={new2}
                alt="About Image"
                className=" object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
            {/* Content Section */}
            <div className="lg:w-1/2 w-full ">
              <p className="text-xl mb-4 font-sans">
                Discover BELLWAY INFOTECH, a global leader in web & app
                development. Innovating exceptional tech solutions for your
                business success.
              </p>
              <p className="text-xl mb-4  font-sans">
                With 15 years of experience in providing innovative IT
                solutions, Bellway Infotech has become a global leader in web
                and app development. We specialize in crafting exceptional
                technology solutions that drive business success. Our team of
                experts works tirelessly to deliver scalable, high-performance
                applications tailored to your unique business needs.
              </p>

              <p className="text-3xl text-center mt-10 md:mt-10 font-sans italic ">
                <span className="text-red-600 font-bold text-5xl">"</span>{" "}
                Whatever your business may be whether you run a<br /> creative
                agency, a digital studio.
                <span className="text-red-600 font-bold text-5xl">"</span>
              </p>
            </div>
          </div>
        </div>

        {/* <!-- New Blog Container --> */}
        <div class=" mx-auto px-4 py-2">
          <h2 class="md:text-5xl text-4xl font-bold my-20 text-center w-fit mx-auto border-b-4 border-red-600 hover:text-red-600">
            About Us
          </h2>

          {/* <!-- Blog Post 1 --> */}
          <div class="flex justify-around items-start flex-col lg:flex-row  gap-10 my-10">
            <div class="w-full lg:w-[35%] mb-4 lg:mb-0">
              <img
                src={new1}
                alt="Tech Future"
                class="w-full h-auto rounded-lg shadow-lg "
                loading="lazy"
              />
            </div>
            <div class="lg:w-1/2 ">
              <h3 class="text-3xl font-bold  hover:text-red-600 text-left ">
                Who We Are?
              </h3>
              <p class="text-xl mt-4">
                Bellway Infotech is a top-rated website and mobile app
                development firm specializing in Android and iOS platforms, with
                over 200+ successful projects completed.
                <br />
                <br />
                <i className="text-red-600">Our Approach</i> We follow a
                meticulous process throughout the entire mobile app development
                lifecycle, including design, development, testing, and
                deployment. We ensure high standards of quality at every stage,
                delivering apps that are functional, scalable, and
                user-friendly.
                <br /> <i className="text-red-600">Our Mission</i> Our primary
                goal is to create digital products that foster interaction,
                drive business growth, and deliver measurable success. By
                working closely with our clients, we ensure that each app we
                develop meets the specific needs of the business.
              </p>
            </div>
          </div>
          <br />
          <br />

          {/* <!-- Blog Post 2 --> */}
          <div class="flex justify-around items-start flex-col lg:flex-row  gap-10 my-10">
            <div class="w-full lg:w-[35%] mb-4 lg:mb-0">
              <img
                src={Img18}
                alt="React"
                class="w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
            <div class="lg:w-1/2 ">
              <h3 class="text-3xl font-bold  hover:text-red-600 text-left">
                Who We Can Help
              </h3>
              <p class="text-xl mb-4 mt-4">
                We have project advisors, project managers, project leaders, and
                analysts/programmers on our team.
                <br />
                <br /> All of our employees have professional qualifications in
                information technology or a related discipline, and the majority
                of them have extensive work experience on IT projects of all
                sizes, using various software tools on various hardware.
                <br />
                <br />
                We have a team of highly trained professionals who handle
                customers with extreme sensitivity and responsiveness. We
                provide the best tools to support their job functions, resulting
                in efficient customer service to the greatest extent possible.
              </p>
            </div>
          </div>
          <br />
          <br />

          {/* <!-- Blog Post 3 --> */}
          <div class="flex justify-around items-start flex-col lg:flex-row  gap-10 my-10">
            <div class="w-full lg:w-[35%] mb-4 lg:mb-0">
              <img
                src={Img16}
                alt="Laravel"
                class="w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
            <div class="lg:w-1/2 ">
              <h3 class="text-3xl font-bold  hover:text-red-600 text-left">
                Our Team and Work Environment
              </h3>
              <p class="text-xl mb-4 mt-4">
                At Bellway Infotech, our team is composed of dedicated
                professionals who bring their best to every project. Each team
                member is an expert in their field, committed to delivering
                top-notch solutions that meet our clients' needs and exceed
                expectations.
                <br />
                <br />
                To support our team’s productivity and comfort, each employee is
                provided with a personal laptop equipped with the latest
                technology to handle advanced applications seamlessly. Every
                employee also has their own private workspace, ensuring they can
                work without distractions and focus entirely on delivering
                excellence.
              </p>
            </div>
          </div>
        </div>

        {/* <Solutions /> */}

        <div className="min-h-screen flex flex-col md:flex-row mt-44">
          <div className="w-full md:w-full bg-black text-white p-8 flex flex-col justify-center items-center">
            {/* Images and Names in the Same Line */}
            <div className="flex justify-center w-full mb-8 ">
              <div className="flex flex-col items-center justify-center  text-center">
                <img
                  src={Img99}
                  alt="Founder Image"
                  className="rounded-full w-40 h-40 object-contain  mb-2"
                  loading="lazy"
                />
                <p className="text-lg">Mohit Shrivastava, CEO</p>
              </div>
              <div className="flex flex-col items-center justify-center  text-center ml-8">
                <img
                  src={Img14}
                  alt="Founder Image"
                  className="rounded-full w-40 h-40 object-contain bg-white mb-2"
                  loading="lazy"
                />
                <p className="text-lg">Aakriti Shrivastava, CMO</p>
              </div>
            </div>

            <h1 className="md:text-5xl text-3xl font-bold mb-4 text-red-600">
              Bellway Infotech
            </h1>
            <p className="text-lg mb-6 mt-8 text-center">
              Founded in 2017, Bellway Infotech has rapidly emerged as a global
              leader in the IT services industry. With headquarter in Indore,
              Madhya Pradesh and a network of offices across Dewas, Bhopal, and
              Indore, we specialize in delivering innovative technology
              solutions that drive business transformation.
              <br />
              <br /> Our core competencies include cloud computing, web/app
              development, UI/UX design, digital marketing and enterprise
              software development. Over the years, we have cultivated a diverse
              portfolio of clients, ranging from dynamic startups to Fortune
              many companies, all of whom rely on our expertise to stay ahead in
              the competitive digital landscape.
              <br />
              <br /> Our team of highly skilled professionals is committed to
              excellence, continuously pushing the boundaries of technology to
              provide bespoke solutions tailored to our clients' unique needs.
              At Bellway Infotech, we believe in the power of collaboration and
              innovation, striving to create a better, more connected world
              through cutting-edge technology.
            </p>
            <p className=" text-2xl mt-8">Thank You</p>
          </div>
        </div>

        <div className="flex items-center justify-center mybg sm:mt-0">
          <div className="mybg p-6  sm:text-center sm:w-1/2 sm:mx-auto ">
            <h1 className="text-3xl text-center font-bold  text-black mt-10">
              "Our Teams"
            </h1>
            <p className="sm:text-xl mb-4  mt-14 ">
              In a world where technology is the backbone of everything we do,
              our IT team stands as the cornerstone of our success. Day in and
              day out, they work tirelessly to keep our systems running
              smoothly, our data secure, and our digital dreams alive.{" "}
            </p>
          </div>
        </div>

        <Slider
          width="350px"
          // duration={30}
          pauseOnHover={true}
          blurBorders={false}
          blurBoderColor={"#ebf0f5"}
          duration={90}
        >
          <Slider.Slide>
            <img src={Img33} alt="any2" className="w-auto" loading="lazy" />
          </Slider.Slide>

          <Slider.Slide>
            <img
              src={foundation2}
              alt="any2"
              className="w-auto"
              loading="lazy"
            />
          </Slider.Slide>
          <Slider.Slide>
            <img src={Img39} alt="any3" className="w-auto%" loading="lazy" />
          </Slider.Slide>

          <Slider.Slide>
            <img src={Img42} className="w-auto%" loading="lazy" />
          </Slider.Slide>

          <Slider.Slide>
            <img
              src={foundation3}
              alt="any2"
              className="w-auto"
              loading="lazy"
            />
          </Slider.Slide>

          <Slider.Slide>
            <img src={Img35} className="w-auto%" loading="lazy" />
          </Slider.Slide>

          <Slider.Slide>
            <img src={Img36} className="w-auto" loading="lazy" />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src={foundation4}
              alt="any2"
              className="w-auto"
              loading="lazy"
            />
          </Slider.Slide>

          <Slider.Slide>
            <img src={Img37} className="w-auto" loading="lazy" />
          </Slider.Slide>

          <Slider.Slide>
            <img src={foundation1} className="w-auto" loading="lazy" />
          </Slider.Slide>

          <Slider.Slide>
            <img src={Img43} className="w-auto" loading="lazy" />
          </Slider.Slide>

          <Slider.Slide>
            <img
              src={foundation5}
              alt="any2"
              className="w-auto"
              loading="lazy"
            />
          </Slider.Slide>

          <Slider.Slide>
            <img src={Img41} className="w-auto" loading="lazy" />
          </Slider.Slide>

          <Slider.Slide>
            <img src={Img32} className="w-auto" loading="lazy" />
          </Slider.Slide>

          <Slider.Slide>
            <img
              src={foundation6}
              alt="any2"
              className="w-auto"
              loading="lazy"
            />
          </Slider.Slide>

          <Slider.Slide>
            <img src={Img38} className="w-auto" loading="lazy" />
          </Slider.Slide>

          <Slider.Slide>
            <img src={Img40} className="w-auto" loading="lazy" />
          </Slider.Slide>

          <Slider.Slide>
            <img
              src={foundation7}
              alt="any2"
              className="w-auto"
              loading="lazy"
            />
          </Slider.Slide>

          <Slider.Slide>
            <img src={Img44} className="w-auto" loading="lazy" />
          </Slider.Slide>

          <Slider.Slide>
            <img src={Img46} className="w-auto" loading="lazy" />
          </Slider.Slide>

          <Slider.Slide>
            <img
              src={foundation8}
              alt="any2"
              className="w-auto"
              loading="lazy"
            />
          </Slider.Slide>

          <Slider.Slide>
            <img src={Img45} className="w-auto" loading="lazy" />
          </Slider.Slide>

          <Slider.Slide>
            <img
              src={foundation10}
              alt="any2"
              className="w-auto"
              loading="lazy"
            />
          </Slider.Slide>
          <Slider.Slide>
            <img src={Img34} className="w-auto" loading="lazy" />
          </Slider.Slide>

          <Slider.Slide>
            <img
              src={foundation9}
              alt="any2"
              className="w-auto"
              loading="lazy"
            />
          </Slider.Slide>
        </Slider>
        <div className="flex items-center justify-center mt-10 mybg sm:mt-0"></div>

        {/* <div className="w-full overflow-hidden mt-20">
          <div className="w-full text-center">
            <h1 className="appreciation text-4xl font-bold mb-8">Stories From Our Clients</h1>
          </div>
          <div className="mt-10 px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8 lg:py-10 bg-gray-50 shadow-md rounded-md p-4 text-center transition duration-300 hover:bg-gray-200 hover:shadow-2xl">
            <Slider2 {...settings}>
              {boxes.map((box, index) => (
                <div key={index} className="px-2 sm:px-4">
                  <div className="bg-white rounded-md p-4 sm:p-6 md:p-8 text-center transition duration-300 hover:bg-gray-100 shadow-md hover:shadow-lg relative">
                    <div className="client-image mb-4">
                      <img src={box.image} alt={`Client ${index + 1}`} className="w-16 h-16 rounded-full mx-auto" />
                    </div>
                    <div className="text-gray-700 text-lg font-bold mb-1">{box.name}</div>
                    <div className="text-gray-600 text-sm">{box.position}</div>
                    <br />
                    <div className="text-gray-700 text-lg">{box.text}</div>
                  </div>
                </div>
              ))}
            </Slider2>
          </div>
        </div> */}
        <div className="mt-24">{/* <HomeTestimonials /> */}</div>

        <br />
        <br />
        <Footer />
      </div>
    </>
  );
}

export default AboutUs
