import React from 'react'
import { useState, useEffect } from 'react'
import CNavbar from './CNavbar'
import './Form1.css'
import Footer from './Footer'
import { Helmet } from "react-helmet";
import HomeSlider from './HomeSlider';
import FaqPage1 from "./FaqPage1"
import MADScard from "./Components/MADScard";
import { Link } from 'react-router-dom'
import { FiArrowUpRight } from "react-icons/fi";
import { FaApple } from "react-icons/fa";
import { IoHardwareChip } from "react-icons/io5";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaLaptopCode } from "react-icons/fa";
import { FaSteamSquare } from "react-icons/fa";
const TabHeader = ({ data, click, activeId }) => {
  return (
    <ul className="tabs-header mt-4 md:mt-20 md:mb-2 ">
      {data.map((item, index) => (

        <li key={index} className={activeId === index ? 'active' : ''}>
          <a onClick={() => click(index)} className='  '><span className=''>{item.name}</span></a>
        </li>
      ))}
    </ul>
  );
};

const TabContent = ({ data, activeId }) => {
  return (
    <div className="tabs-content  mx-3 my-4 p-4  rounded-md h-[15rem]">
      {data.map((item, index) => (
        <div key={index} className={`tabs-textItem ${activeId === index ? 'show' : ' '}`}>
          <p className='tracking-wider
'>{item.text}</p>
        </div>
      ))}
    </div>
  );
};


const Web1 = () => {
  const [activeTab, setActiveTab] = useState(0);

  const changeTabOnClick = (index) => {
    setActiveTab(index);
  };
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  }

  const cardsData = [
    { title: "React Web Development", description: "React web development involves creating dynamic, efficient, and scalable user interfaces using React, a popular JavaScript library developed by Facebook. It allows developers to build reusable UI components and manage application state effectively, enhancing the overall user experience and performance." },
    { title: "Laravel Web Development", description: "Laravel web development focuses on building robust, secure, and scalable web applications using the Laravel framework, a popular PHP-based framework. It offers an elegant syntax and a range of built-in tools for tasks such as routing, authentication, and database management, streamlining the development process." },
    { title: "MERN Stack Development", description: "MERN stack web development utilizes MongoDB, Express.js, React, and Node.js to build full-stack JavaScript applications. This stack enables developers to create efficient, scalable, and dynamic web applications, allowing seamless front-end and back-end integration." },
    { title: "Content Management System", description: "A Content Management System (CMS) is a software application that enables users to create, manage, and publish digital content on the web without requiring extensive technical knowledge. It streamlines content creation and modification processes, allowing for easy collaboration, version control, and website maintenance." },
    { title: "Ecommerce Development", description: " Ecommerce web development involves creating online platforms that facilitate buying and selling goods or services over the internet, integrating features such as shopping carts, payment gateways, and inventory management systems. It aims to provide seamless user experiences, robust security measures, and scalable infrastructure to support businesses in conducting transactions online." },
    { title: "Magento Web Development", description: "Magento web development involves building powerful, customizable, and scalable ecommerce websites using the Magento platform, known for its extensive feature set and flexibility. It empowers businesses to create unique online stores with advanced functionalities, such as product management, order processing, and customer engagement tools." }
  ];

  const testimonials = [
    {
      id: 1,
      image: 'https://bellwayinfotech.com/assets/uploads/media-uploader/gnana-prakash1693908767.png',
      name: 'Rifaul',
      text: 'Experience top-tier service with Mohit & his team! Reputed for their exceptional problem-solving skills, delivering excellence for 2 years!'
    },
    {
      id: 2,
      image: 'https://bellwayinfotech.com/assets/uploads/media-uploader/karen-agresti1694611721.jpg',
      name: 'Yachna',
      text: 'Experience exceptional software development and customer support with lightning-fast response times. Great overall experience!.'
    },
    {
      id: 3,
      image: 'https://bellwayinfotech.com/assets/uploads/media-uploader/karen-agresti1694611721.jpg',
      name: 'Sakshi',
      text: 'Appreciable efforts and customer support are very good, It is very valuable for the business to continue to improve!.'
    },
    {
      id: 4,
      image: 'https://bellwayinfotech.com/assets/uploads/media-uploader/gnana-prakash1693908767.png',
      name: 'Kuldeep',
      text: 'The team stood out because of their swift response time and patience. Bellway infotech provided one contact person!.'
    }
  ];


  const technologies = [
    { id: 1, image: 'https://api.otakoyi.software/uploads/content/2023/11/20/1280/best-laravel-based-cms-that-you-should-know-224x171.webp', name: 'Tech 1', title: 'Laravel' }, // Replace with actual URLs
    { id: 2, image: 'https://i.pinimg.com/236x/9c/65/bd/9c65bd67c0a9685a6e8121c0ad3694e3.jpg', name: 'Tech 2', title: 'Laravel' },
    { id: 3, image: 'https://w7.pngwing.com/pngs/414/85/png-transparent-nodejs-javascript-runtime-backend-node-js-logo-3d-icon.png', name: 'Tech 3', title: 'Laravel' },
    { id: 4, image: 'https://w7.pngwing.com/pngs/18/497/png-transparent-black-and-blue-atom-icon-screenshot-react-javascript-responsive-web-design-github-angularjs-github-logo-electric-blue-signage.png', name: 'Tech 4', title: 'Laravel' },
    { id: 5, image: 'https://static-00.iconduck.com/assets.00/applications-java-icon-2048x2026-4gh120pq.png', name: 'Tech 5', title: 'Laravel' },
    { id: 6, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpEy7NDZaJgOuppMzPYrA32_z6IHI777Tn9g&s', name: 'Tech 6', title: 'Laravel' },
    { id: 7, image: 'https://banner2.cleanpng.com/20190623/yp/kisspng-python-computer-icons-programming-language-executa-5d0f0aa79779a6.6143656815612668556205.jpg', name: 'Tech 7', title: 'Laravel' },
    { id: 8, image: 'https://i.pinimg.com/736x/7f/63/64/7f63644d631600cb5c3fcec87332a5a4.jpg', name: 'Tech 8', title: 'Laravel' }
  ];



  const data = [
    {
      name: 'Laravel',
      text: "Laravel is a popular PHP framework designed for building modern web applications. It follows the MVC (Model-View-Controller) architectural pattern, promoting organized and maintainable code. Laravel offers a rich set of features, including an elegant ORM (Eloquent), a powerful templating engine (Blade), and a robust routing system. Its built-in tools for tasks like authentication, caching, and session management simplify common web development tasks. Laravel's extensive documentation and vibrant community make it a user-friendly and powerful framework for PHP developers."
    },
    {
      name: 'React',
      text: "React is a popular JavaScript library developed by Facebook for building user interfaces, particularly single-page applications. It allows developers to create reusable UI components, making code more maintainable and scalable. React uses a virtual DOM to efficiently update and render components, enhancing performance. Its declarative approach makes it easy to understand and debug. The extensive ecosystem, including tools like Redux for state management and Next.js for server-side rendering, makes React a powerful choice for modern web development."
    },
    {
      name: 'Django',
      text: "Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. It follows the 'batteries-included' philosophy, providing a wide range of built-in features such as authentication, database ORM, and an admin panel. Django s robust security features, including protection against SQL injection, cross-site scripting, and cross-site request forgery, make it a preferred choice for building secure web applications. Its emphasis on reusability and the DRY (Don't Repeat Yourself) principle streamlines development, making Django ideal for both small and large-scale projects."
    },
    {
      name: 'Angular',
      text: "Angular is a comprehensive front-end framework developed by Google for building dynamic web applications. It uses TypeScript, a superset of JavaScript, which adds static typing and other features to enhance development. Angular offers a robust set of tools for building complex applications, including two-way data binding, dependency injection, and a modular architecture. Its powerful CLI simplifies project setup and development processes. Angular's strong community support and continuous updates make it a reliable framework for enterprise-level applications."
    },
    {
      name: 'Vue.js',
      text: 'Vue.js is a progressive JavaScript framework for building user interfaces. It is designed to be incrementally adoptable, meaning you can use as much or as little of the framework as you need. Vue.js is known for its simplicity and ease of integration with existing projects. It offers a reactive data binding system and a component-based architecture, making it easy to build complex applications. The official ecosystem, including tools like Vuex for state management and Vue Router for navigation, enhances its capabilities, making Vue.js a flexible and versatile choice for web development.'
    }
  ];



  return (
    <>
      <Helmet>
        <title>BELLWAY INFOTECH - Web Application Development | Service</title>
        <meta
          name="description"
          content="Discover Bellway Infotech comprehensive web application development services. From concept to deployment, our team delivers tailored solutions for your business."
        />
      </Helmet>
      <CNavbar />
      <div class="containerx bg-black px-4 py-10 sm:py-12 md:py-10 ">
        <div class="flex flex-col md:flex-row items-center w-full justify-between">
          <div class="md:w-1/2 md:text-left ml-0 lg:ml-10">
            <h1 class="text-5xl sm:text-3xl lg:text-4xl xl:text-5xl  font-bold mb-4 mt-14 text-white">
              Web Application Development...{" "}
            </h1>
            <p className="text-sm  my-6 text-left text-zinc-500 hover:text-zinc-50 transition-all duration-300">
              Our web development services include responsive websites and web
              applications that perform seamlessly across devices. Whether
              you're aiming for an elegant corporate site or a complex web
              application, we create optimized, fast-loading solutions tailored
              to your brand.
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
          <div class="md:w-1/2 h-full mb-9 text-right flex justify-center">
            <img
              loading="lazy"
              src="/images/Development-amico.png"
              alt="About Image"
              class="w-full md:w-[55%] h-auto hover:scale-95 transition-all duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>

      <div className="containerx px-4  py-10 md:py-20 flex flex-col md:flex-row justify-center bg-zinc-100  items-center  rounded overflow-hidden mb-10">
        <div className="md:w-1/2  ">
          <h1 className="text-zinc-900 text-3xl md:text-5xl leading-none mb-20">Web Application Development Services</h1>
          <p className="text-zinc-900 text-lg mt-4">A well-designed website can significantly boost your traffic and conversions. In the digital age, customers are constantly seeking top-notch products and services. If you own a website offering these, but haven't been seeing the expected number of customers or conversions, your website design might be the issue.It's time to carefully evaluate your website and make bold changes to its design. An attractive, user-friendly website can drive exponential growth for your business. At Bellway Infotech, we specialize in creating user-friendly, quick-responsive websites and web applications tailored to your business needs.
          </p>
        </div>
        <div className="md:w-1/2 ">
          <img src="/images/image46.png" alt="" className="md:w-[80%] mx-auto" />
        </div>
      </div>

      <div className="flex gap-10 flex-col md:flex-row items-center w-full px-4 my-20" >

        <div className="relative bg-zinc-100  md:w-80 w-full h-80 rounded-[70px] overflow-hidden">
          <img src="/images/freepik__candid-image-photography-natural-textures-highly-r__76168.jpeg" className="w-full h-full  object-cover object-bottom" alt="" />
          <Link to={"/contact"} className="absolute  top-0 right-10 w-fit mt-10 bg-white text-black px-2 py-2 rounded-full flex items-center justify-center gap-2 hover:scale-125 transition-all ease-linear duration-400"><FiArrowUpRight size={25} /></Link>
        </div>
        <MADScard desc={"We deliver static and dynamic websites tailored to your business needs. As a leading web and mobile app development company, we offer custom web solutions, including PHP development and CMS websites for easy content management."} />
        <MADScard desc={"Our team of app designers and developers is dedicated to providing top-quality solutions with a focus on customer satisfaction. With a broad range of technical expertise, we deliver high-quality web application development solutions that help your business thrive."}
        />
        <MADScard desc={"If you need expert assistance with web design, web applications, or mobile app development, feel free to contact Bellway Infotech. We're committed to delivering excellent results for your business."}
        />
      </div>

      <div className="flex gap-10 flex-col md:flex-row items-center   w-full px-4  my-20 " >

        <div className="md:w-1/2">
          <h1 className=' text-black text-6xl mb-10'>Offerings at Bellway Infotech</h1>
          <ul className=' list-disc px-4   md:text-xl '>
            <li>Unparalleled Website Designing Services</li>
            <li>Use of Latest and Sophisticated Technologies
            </li>
            <li>Consolidated Website Design and Development Packages</li>
            <li>Cost-Effective Solutions for Emerging Companies</li>
            <li>Custom and Highly Personalized Website Solutions</li>
            <li>Round-the-Clock Support via Email, Chat, and Phone</li>
          </ul>

        </div>
        <div className="  md:w-1/2">
          <img src="/images/image45.png" alt="" />

        </div>

      </div>

      <div className="nativeDev relative px-4   flex w-full gap-4 flex-col md:flex-row pb-20">
        <div className="left bg-zinc-800 md:w-1/2 p-4 md:p-20 rounded-3xl" >
          <Link to={"/contact"} className="w-fit mt-10 bg-white p-4 rounded-full flex items-center justify-center gap-2 hover:scale-125 transition-all ease-linear duration-400"><FiArrowUpRight size={25} /></Link>
          <p className="text-white text-3xl md:text-5xl leading-none my-10 ">Web Development & Designing</p>

          <p className='text-zinc-400 '>Innovation has come a long way in the past decade, and today, a well-designed website requires a dedicated team to bring it to life. In this article, we'll highlight two crucial roles within that team: web designers and engineers. While they often collaborate, developers and designers handle distinct responsibilities to ensure a website’s success. While it’s possible for one individual to take on both roles, these are generally two separate skill sets.</p>
        </div>
        <div className="right relative md:w-1/2 rounded-3xl flex flex-col gap-2">
          <div className=" bg-fuchsia-200 w-full p-4 md:px-20 py-2 md:h-1/2 rounded-3xl" >
            <Link to={"/contact"} className="absolute top-0 right-2 w-fit mt-10 bg-black text-white p-2 rounded-full flex items-center justify-center gap-2 hover:scale-125 transition-all ease-linear duration-400"><FiArrowUpRight size={25} /></Link>
            <p className="text-black text-3xl md:text-3xl leading-none my-4 ">Planning Your Digital Success</p>

            <p className='text-zinc-900 '>At Bellway Infotech, we don't just build websites — we plan your digital success. Our expert team works closely with you to understand your vision and create websites that deliver true value.</p>
          </div>
          <div className='relative bg-lime-300 w-full p-4 md:px-20 py-2 md:h-1/2 rounded-3xl'>
            <Link to={"/contact"} className="absolute top-0 right-2 w-fit mt-10 bg-black text-white p-2 rounded-full flex items-center justify-center gap-2 hover:scale-125 transition-all ease-linear duration-400"><FiArrowUpRight size={25} /></Link>
            <p className="text-black text-3xl md:text-3xl leading-none my-2 ">Transform Your Ideas into Dynamic Websites – Get in Touch!</p>

            <p className='text-black'>Get in touch with us to leverage our website design, E-Commerce website development, and web application development services to stay ahead of the competition in your industry. Partner with our web developers to transform your concepts into dynamic, value-driven websites.</p>
        

          </div>
        </div>
      </div>
      {/* <MobileCard/> */}
      <div className="tabs-body flex justify-center items-center flex-col">
        <TabHeader data={data} click={changeTabOnClick} activeId={activeTab} />
        <TabContent data={data} activeId={activeTab} />
      </div>



      {/* <Solutions /> */}
      <div className="mt-24">
        <HomeSlider />
      </div>




      <div style={{ marginTop: "90px" }}>
        <FaqPage1></FaqPage1>
      </div>

      <Footer />
    </>
  );
}



export default Web1;