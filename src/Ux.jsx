import React from "react";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import AdobeIllustrator from "./assets/Adobe Illustrator.png";
import AdobePhotoshop from "./assets/Adobe Photoshop.png";
import AdobeXD from "./assets/Adobe XD.png";
import AxureRP from "./assets/Axure RP.png";
import Balasmiq from "./assets/Balasmiq.png";
import Canva from "./assets/Canva.png";
import CoralDRAW from "./assets/Coral DRAW.png";
import Figma from "./assets/Figma.png";
import Framer from "./assets/Framer.png";
import InVision from "./assets/In Vision.png";
import Marvel from "./assets/Marvel.png";
import Sketch from "./assets/Sketch.png";

import CNavbar from "./CNavbar";
import "./Form1.css";

import Footer from "./Footer";

import HomeSlider from "./HomeSlider";
import FaqPage2 from "./FaqPage2";

const data = [
  {
    name: "UI Design",
    text: "UI design focuses on creating intuitive, visually appealing interfaces for digital products. It involves crafting layouts, selecting colors, typography, and interactive elements that enhance user experience. Designers prioritize consistency, clarity, and ease of use while balancing aesthetic appeal with functionality. They consider user behavior, accessibility, and responsiveness across devices. UI design incorporates principles like visual hierarchy, whitespace utilization, and feedback mechanisms to guide users through tasks efficiently. It requires a deep understanding of user needs, current design trends, and technical constraints. Effective UI design seamlessly blends form and function, creating interfaces that are not only attractive but also empower users to achieve their goals with minimal friction.",
  },
  {
    name: "UX Design",
    text: "UX design, or User Experience design, is the process of creating products that provide meaningful and relevant experiences to users. It involves the entire journey of acquiring and integrating the product, including aspects of branding, design, usability, and function. UX designers focus on understanding users' needs, behaviors, and motivations through research, testing, and iteration. They aim to improve user satisfaction by enhancing the usability, accessibility, and pleasure provided in the interaction with the product. UX design encompasses various disciplines, including interaction design, information architecture, visual design, and content strategy, all working together to create intuitive, efficient, and enjoyable user experiences across digital platforms and physical products.",
  },
  {
    name: "Branding Design",
    text: "Branding design is the strategic process of creating and managing a unique visual identity for a company, product, or individual. It encompasses the development of distinctive logos, color palettes, typography, and imagery that consistently represent the brand's values, personality, and promise across various touchpoints. Effective branding design goes beyond aesthetics to evoke specific emotions and perceptions in the target audience, fostering recognition, trust, and loyalty. It involves careful consideration of market positioning, competitor analysis, and consumer psychology to craft a cohesive visual language that resonates with the intended audience. Ultimately, successful branding design helps differentiate a business in a crowded marketplace and creates lasting impressions that drive customer engagement and brand equity.",
  },
  {
    name: "App Design",
    text: "App design is the process of creating visually appealing and user-friendly mobile applications. It encompasses both aesthetic and functional aspects, focusing on intuitive navigation, engaging visuals, and seamless user experiences. Designers consider factors such as layout, color schemes, typography, and iconography to create a cohesive and branded interface. They prioritize accessibility, ensuring the app is usable across various devices and for users with different abilities. User research and iterative testing play crucial roles in refining the design. The goal is to develop an app that not only looks attractive but also efficiently meets user needs, encourages engagement, and achieves its intended purpose, whether for productivity, entertainment, or information delivery.",
  },
  {
    name: "Web Design",
    text: "Web design is the art and science of creating visually appealing and functional websites. It encompasses various elements including layout, color scheme, typography, and user interface design. Designers focus on crafting intuitive navigation, responsive layouts that adapt to different screen sizes, and engaging visual content. They must balance aesthetics with usability, ensuring fast load times and accessibility for all users. Web design also involves understanding user behavior, implementing effective calls-to-action, and optimizing for search engines. As technology evolves, designers incorporate new trends like minimalism, micro-interactions, and immersive experiences. Ultimately, successful web design creates a seamless, enjoyable experience that helps businesses achieve their online goals.",
  },
];

const solutionsData = [
  { image: AdobeIllustrator, alt: "Laravel", title: "Adobe Illustrator" },
  { image: AdobePhotoshop, alt: "Flutter", title: "Adobe Photoshop" },
  { image: AdobeXD, alt: "JavaScript", title: "Adobe XD" },
  { image: AxureRP, alt: "PHP", title: "Axure RP" },
  { image: Balasmiq, alt: "Magneto", title: "Balasmiq" },
  { image: Canva, alt: "React", title: "Canva" },
  { image: CoralDRAW, alt: "Python", title: "Coral DRAW" },
  { image: Figma, alt: ".NET", title: "Figma" },
  { image: Framer, alt: "Android App", title: "Framer" },
  { image: InVision, alt: "CRM", title: "In Vision" },
  { image: Marvel, alt: "Vue.js", title: "Marvel" },
  { image: Sketch, alt: "iOS", title: "Sketch" },
];

const TabHeader = ({ data, click, activeId }) => {
  return (
    <ul className="tabs-header   ">
      {data.map((item, index) => (
        <li key={index} className={activeId === index ? "active" : ""}>
          <a onClick={() => click(index)} className="  ">
            <span className="">{item.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

const TabContent = ({ data, activeId }) => {
  return (
    <div className="tabs-content  mx-3  rounded-md h-[15rem]">
      {data.map((item, index) => (
        <div
          key={index}
          className={`tabs-textItem ${activeId === index ? "show" : " "}`}
        >
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

const Ux = () => {
  const [activeTab, setActiveTab] = useState(0);

  const changeTabOnClick = (index) => {
    setActiveTab(index);
  };

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const cardsData = [
    {
      title: "User Interface Design",
      description:
        "Interface designs for Web, Mobile, and Custom Applications by being creative and incorporating best design practices and standards.User interface design focuses on creating visually appealing and intuitive interfaces that enhance user interaction and experience with a digital product.",
    },
    {
      title: "Digital Prototyping",
      description:
        "Building a prototype for real-time User Testing and Feedback for improvements before actual development.Digital prototyping involves creating interactive, functional models of a digital product to test and refine design concepts before full-scale development. ",
    },
    {
      title: "Logo Design",
      description:
        "Your logo design is essential to your brand’s identity. Get 100% tailor made logo designs and distinguish your brand.Logo design is the process of creating a unique, memorable symbol or graphic that represents a brand's identity and values.",
    },
    {
      title: "Flow & Wireframe Designs",
      description:
        "Drawing Flows, design Wireframes, and UML Diagrams to critically understand the User Journey and System Requirements.Flow and wireframe designs are crucial in mapping out the structure and navigation of a digital product, providing a blueprint for user experience and interface development.",
    },
    {
      title: "Product Overview Video",
      description:
        "Product overview videos effectively communicate your product’s features, uses, and success stories, spotlighting its uniqueness and sparking interest and excitement among your audience. ",
    },
    {
      title: "2D Explainer Video",
      description:
        "we simplify complex concepts with creative 2D explainer videos, blending graphics, illustrations, and storytelling for an engaging and comprehensible message.A 2D explainer video uses animated graphics and narration to simplify and convey complex ideas or messages in an engaging and easily understandable way.",
    },
  ];

  const testimonials = [
    {
      id: 1,
      image:
        "https://bellwayinfotech.com/assets/uploads/media-uploader/gnana-prakash1693908767.png",
      name: "Rifaul",
      text: "Experience top-tier service with Mohit & his team! Reputed for their exceptional problem-solving skills, delivering excellence for 2 years!",
    },
    {
      id: 2,
      image:
        "https://bellwayinfotech.com/assets/uploads/media-uploader/karen-agresti1694611721.jpg",
      name: "Yachna",
      text: "Experience exceptional software development and customer support with lightning-fast response times. Great overall experience!.",
    },
    {
      id: 3,
      image:
        "https://bellwayinfotech.com/assets/uploads/media-uploader/karen-agresti1694611721.jpg",
      name: "Sakshi",
      text: "Appreciable efforts and customer support are very good, It is very valuable for the business to continue to improve!.",
    },
    {
      id: 4,
      image:
        "https://bellwayinfotech.com/assets/uploads/media-uploader/gnana-prakash1693908767.png",
      name: "Kuldeep",
      text: "The team stood out because of their swift response time and patience. Bellway infotech provided one contact person!.",
    },
  ];
  const technologies = [
    {
      id: 1,
      image:
        "https://api.otakoyi.software/uploads/content/2023/11/20/1280/best-laravel-based-cms-that-you-should-know-224x171.webp",
      name: "Tech 1",
      title: "Laravel",
    }, // Replace with actual URLs
    {
      id: 2,
      image:
        "https://i.pinimg.com/236x/9c/65/bd/9c65bd67c0a9685a6e8121c0ad3694e3.jpg",
      name: "Tech 2",
      title: "Laravel",
    },
    {
      id: 3,
      image:
        "https://w7.pngwing.com/pngs/414/85/png-transparent-nodejs-javascript-runtime-backend-node-js-logo-3d-icon.png",
      name: "Tech 3",
      title: "Laravel",
    },
    {
      id: 4,
      image:
        "https://w7.pngwing.com/pngs/18/497/png-transparent-black-and-blue-atom-icon-screenshot-react-javascript-responsive-web-design-github-angularjs-github-logo-electric-blue-signage.png",
      name: "Tech 4",
      title: "Laravel",
    },
    {
      id: 5,
      image:
        "https://static-00.iconduck.com/assets.00/applications-java-icon-2048x2026-4gh120pq.png",
      name: "Tech 5",
      title: "Laravel",
    },
    {
      id: 6,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpEy7NDZaJgOuppMzPYrA32_z6IHI777Tn9g&s",
      name: "Tech 6",
      title: "Laravel",
    },
    {
      id: 7,
      image:
        "https://banner2.cleanpng.com/20190623/yp/kisspng-python-computer-icons-programming-language-executa-5d0f0aa79779a6.6143656815612668556205.jpg",
      name: "Tech 7",
      title: "Laravel",
    },
    {
      id: 8,
      image:
        "https://i.pinimg.com/736x/7f/63/64/7f63644d631600cb5c3fcec87332a5a4.jpg",
      name: "Tech 8",
      title: "Laravel",
    },
  ];
  return (
    <>
      <Helmet>
        <title>BELLWAY INFOTECH | UI/UX Designing - Digital Experiences</title>
        <meta
          name="description"
          content="Bellway Infotech specializes in ui/ux designing, creating exceptional digital experiences. User experience (UX) design & user interface (UI) design in this full guide."
        />
      </Helmet>
      <CNavbar />

      <div className="containerx bg-black px-4 py-10 sm:py-12 md:py-20 ">
        <div className="flex flex-col md:flex-row items-center w-full justify-between">
          <div className="md:w-1/2 md:text-left ml-0 lg:ml-10">
            <h1 className="text-5xl sm:text-3xl lg:text-4xl xl:text-5xl  font-bold mb-4 mt-14 text-white">
              UI/UX Designing...{" "}
            </h1>
            <p className="text-sm  my-6 text-left text-zinc-500 hover:text-zinc-50 transition-all duration-300">
              Our UI/UX development services are designed to create intuitive,
              visually appealing, and highly functional interfaces that align
              perfectly with user needs and business goals. We focus on
              enhancing the user experience through a thoughtful blend of design
              aesthetics and seamless usability. From wireframing and
              prototyping to user testing and final design, we use cutting-edge
              tools and techniques to deliver engaging digital experiences that
              drive user satisfaction and brand loyalty. Let us transform your
              vision into a responsive, user-friendly, and impactful digital
              solution.
            </p>
            <a
              href="/contact"
              class="relative inline-flex items-center justify-center h-10 mt-8 md:h-14 p-5 px-6 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-3 border-red-500 rounded-full shadow-md group"
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
          <div class="md:w-1/2 h-full  flex justify-center items-center">
            <img
              loading="lazy"
         
              src="/images/UIUX.png"
              className="w-full md:w-[60%] h-auto hover:scale-110 transition-all duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>

      <div className="se">
        <h1 className="tag4 text-3xl m-0 md:text-5xl font-bold">
          UX/UI Designing
        </h1>
      </div>
      {/* <MobileCard /> */}

      <div className="tabs-body flex justify-center items-center flex-col">
        <TabHeader data={data} click={changeTabOnClick} activeId={activeTab} />

        <TabContent data={data} activeId={activeTab} />
      </div>

      {/* <Solutions /> */}

      <div className="containerx mx-auto py-15 px-4 sm:px-6 lg:px-8">
        <div className="text-center mt-24">
          <h2 className="md:text-5xl text-4xl font-bold mb-4">Solutions</h2>
          <p className="text-lg text-gray-600 mb-14">
            Being a Mobile App development and web development company Bellway
            consistently acumen into latest Technologies for providing nothing{" "}
            <br />
            less than best to our Clients and Prospects.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
          {solutionsData.map((solution, index) => (
            <div
              key={index}
              className="bg-gray-50 shadow-md rounded-md p-2 text-center transition duration-300 hover:bg-gray-200 hover:shadow-2xl"
            >
              <img
                loading="lazy"
                src={solution.image}
                alt={solution.alt}
                className="w-10 h-10 mx-auto mb-2"
              />
              <h3 className="text-base font-semibold">{solution.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <HomeSlider />
      </div>

      {/* <div className='se' style={{ marginTop: "100px" }} >
        <h1 className='tag' >We Have Worked For</h1>
      </div> */}

      {/* <div class="container8" style={{ marginTop: "60px" }}>

        <div class="card"><img src={image9} alt="Image 1" /></div>
        <div class="card"><img src={image10} alt="Image 2" /></div>
        <div class="card"><img src={image11} alt="Image 3" /></div>
        <div class="card"><img src={image12} alt="Image 4" /></div>
        <div class="card"><img src={image13} alt="Image 5" /></div>
        <div class="card"><img src={image14} alt="Image 6" /></div>
        <div class="card"><img src={image15} alt="Image 7" /></div>
        <div class="card"><img src={image16} alt="Image 8" /></div>
        <div class="card"><img src={image17} alt="Image 8" /></div>
        <div class="card"><img src={image18} alt="Image 8" /></div>
        <div class="card"><img src={image19} alt="Image 8" /></div>
        <div class="card"><img src={image20} alt="Image 8" /></div>
        <div class="card"><img src={image21} alt="Image 8" /></div>
        <div class="card"><img src={image22} alt="Image 8" /></div>
      </div> */}

      <div className="mt-16">{/* <HomeTestimonials /> */}</div>
      {/* <div className="w-full overflow-hidden mt-8">
        <div className="w-full text-center">
          <h1 className="appreciation text-4xl font-bold mb-8">Stories From Our Clients</h1>
        </div>
        <div className="mt-10 px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8 lg:py-10 bg-gray-50 shadow-md rounded-md p-4 text-center transition duration-300 hover:bg-gray-200 hover:shadow-2xl">
          <Slider {...settings}>
            {boxes.map((box, index) => (
              <div key={index} className="px-2 sm:px-4">
                <div className="bg-white rounded-md p-4 sm:p-6 md:p-8 text-center transition duration-300 hover:bg-gray-100 shadow-md hover:shadow-lg relative">
                  <div className="client-image mb-4">
                    <img src={box.image} alt={`Client ${index + 1}`} className="w-16 h-16 rounded-full mx-auto" />
                  </div>
                  <div className="text-gray-700 text-lg mb-4">{box.text}</div>
                  <div className="absolute bottom-2 left-2 text-left">
                    <p className="text-gray-800 font-bold mb-1">{box.name}</p>
                    <p className="text-gray-600 text-sm">{box.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div> */}

      <div style={{ marginTop: "90px" }}>
        <FaqPage2></FaqPage2>
      </div>

      <Footer />
    </>
  );
};

export default Ux;
