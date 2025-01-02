import React, { useState, useEffect } from "react";
import CNavbar from "./CNavbar";
import "./ai.css";
import Footer from "./Footer";
import Solutions from "./Solutions";
import AIFaq from "./AIFaq";
import { Helmet } from "react-helmet";
const AI = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

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

  const technologies = [
    {
      id: 1,
      image:
        "https://api.otakoyi.software/uploads/content/2023/11/20/1280/best-laravel-based-cms-that-you-should-know-224x171.webp",
      name: "Tech 1",
      title: "Laravel",
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/564x/56/0c/43/560c4353b21b4948e5f0e9508ea07597.jpg",
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
        <title>BELLWAY INFOTECH - AI: Revolutionizing Modern Technology</title>
        <meta
          name="description"
          content="Bellway Infotech leverages artificial intelligence and deep learning to transform business operations and revolutionize industries. Explore AI models, subsets of artificial intelligence, and how machine learning and deep learning shape the future of data science."
        />
        <meta
          name="keywords"
          content="artificial intelligence models, subset of artificial intelligence, artificial intelligence real, deep learning is a machine learning and deep learning in data science, artificial intelligence for future"
        />
      </Helmet>

      <div className="sticky-nav">
        <CNavbar />
      </div>

      <div className="containerx bg-black px-4 py-10 sm:py-12 md:pt-10 ">
        <div className="flex flex-col md:flex-row items-center w-full justify-between">
          <div className="md:w-1/2 md:text-left ml-0 lg:ml-10">
            <h1 className="text-5xl sm:text-3xl lg:text-4xl xl:text-5xl  font-bold mb-4 mt-14 text-white">
              Artificial Intelligence...
            </h1>
            <p className="text-sm  my-6 text-left text-zinc-500 hover:text-zinc-50 transition-all duration-300">
              At Bellway Infotech, we harness the power of Artificial
              Intelligence to drive innovation and efficiency in your business.
              Our AI services are designed to help companies make data-driven
              decisions, automate workflows, and enhance customer experiences.
              From machine learning models to predictive analytics, we offer a
              wide range of AI solutions tailored to meet your specific needs.
            </p>

            <div className="mt-10">
              <a
                href="/contact"
                className="relative inline-flex items-center justify-center h-10  md:h-14 p-5 px-6 py-2 mb-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-3 border-red-500 rounded-full shadow-md group"
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
          </div>
          <div className="md:w-1/2 flex justify-center items-center ">
            <img
              loading="lazy"
              src="/images/Artific-intelligence.png"
              alt="Artific-intelligence"
              className="w-full sm:w-[60%] md:w-[80%] lg:w-[75%] xl:w-[55%] h-auto hover:scale-105 transition-all duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>

      <div className="md:w-full text-center px-4 mb-4 md:mb-0  md:p-16 ">
        <h1 className="sm:text-4xl  font-bold mb-4 mx-3 text-black mt-16">
          "Accelerate Business Growth with Our AI Services"
        </h1>

        <div className="space-y-20 mt-20 mx-auto">
          <div className="flex flex-col md:flex-row  md:pt-0 p-4 bg-black text-white">
            <img
              loading="lazy"
              src="/images/ml.png"
              alt="Machine Learning"
              className="w-full  md:w-1/3 m-auto "
              style={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.6)" }}
            />
            <div className="md:ml-10 mt-4 md:mt-0 my-4 text-left  ">
              <h2 className="md:text-4xl text-3xl font-semibold">
                Machine Learning
              </h2>
              <p
                className="mt-9 text-lg  md:px-0  "
                style={{ textAlign: "left" }}
              >
                {" "}
                Machine learning is a branch of artificial intelligence (AI)
                that focuses on the development of algorithms and statistical
                models that enable computers to perform tasks without explicit
                instructions. By using data-driven approaches, machine learning
                systems can identify patterns, make predictions, and improve
                over time based on experience. It encompasses various techniques
                such as supervised learning, unsupervised learning, and
                reinforcement learning. These techniques are applied in numerous
                fields, including natural language processing, image
                recognition, and predictive analytics, making machine learning a
                crucial area of study for advancing technology and solving
                complex problems.
                <br />
                <br />
                At our company, we leverage the power of machine learning to
                turn data into actionable insights, driving innovation and
                efficiency across industries. Our advanced algorithms and
                predictive models enable businesses to make data-driven
                decisions, optimize operations, and enhance customer
                experiences. From automating processes to uncovering hidden
                patterns in large datasets, our machine learning solutions are
                designed to meet the unique needs of each client, ensuring they
                stay ahead in a competitive market.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center mt-20 bg-black text-white p-4">
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1625314887424-9f190599bd56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJyYWluJTIwaW1hZ2UlMjByb2JvdHxlbnwwfHwwfHx8MA%3D%3D"
              alt="Deep Learning Image"
              className="w-full md:w-1/4 ]"
              style={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.6)" }}
            />
            <div className="md:mr-28 mt-4 md:mt-0 text-center md:text-left ">
              <h2 className="text-4xl font-semibold">Deep Learning</h2>
              <p className="mt-9 text-lg" style={{ textAlign: "left" }}>
                Deep learning is a subset of machine learning that focuses on
                neural networks with many layers (hence "deep") to model complex
                patterns in data. It mimics the structure and function of the
                human brain to process vast amounts of information, enabling
                systems to perform tasks such as image and speech recognition,
                natural language processing, and autonomous driving. By
                leveraging large datasets and high-performance computing, deep
                learning algorithms can learn intricate representations and
                features directly from raw data, leading to breakthroughs in
                artificial intelligence. This field of study is pivotal for
                advancing technology, as it drives innovations in various
                industries by solving problems that were previously considered
                intractable.
                <br />
                <br />
                Deep learning is revolutionizing industries by enabling
                companies to harness the full potential of their data. Our
                company leverages deep learning to develop sophisticated models
                that drive innovation and efficiency across various
                applications. From enhancing image and speech recognition
                capabilities to automating complex tasks and improving
                decision-making processes, our deep learning solutions are
                tailored to meet the specific needs of your business. By
                utilizing state-of-the-art neural networks and leveraging vast
                amounts of data, we empower your organization to achieve
                unprecedented accuracy, efficiency, and insight, keeping you at
                the forefront of technological advancement and competitive edge.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center  bg-black text-white p-4">
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1593376853899-fbb47a057fa0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHJvYm90aWMlMjBicmFpbiU1Q3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Brain Image"
              className="w-full md:w-1/4    md:pt-0 md:mt-0"
            />
            <div className="md:ml-28 mt-4  md:mt-0 text-center md:text-left">
              <h2 className="text-4xl font-semibold " >
                Natural Language Processing
              </h2>
              <p
                className="mt-9 text-lg  md:px-0 pb-3 md:pb-0 "
                style={{ textAlign: "left" }}
              >
                Natural Language Processing (NLP) is a branch of artificial
                intelligence that focuses on the interaction between computers
                and human language. At our company, we harness the power of NLP
                to develop advanced solutions that enable machines to
                understand, interpret, and respond to human language in a
                valuable way. Our NLP technologies are designed to enhance
                customer interactions, streamline operations, and provide deep
                insights from textual data. Whether it's through chatbots,
                sentiment analysis, or language translation, our cutting-edge
                NLP solutions help your business to improve communication,
                automate tasks, and gain a competitive edge in today's
                data-driven world.
                <br />
                <br />
                Natural Language Processing (NLP) is transforming the way
                companies interact with data and customers by enabling computers
                to understand and respond to human language. At our company, we
                leverage NLP to enhance customer service through intelligent
                chatbots, automate document processing, and extract valuable
                insights from unstructured text data. Our advanced NLP solutions
                improve efficiency, streamline communication, and provide a
                deeper understanding of customer sentiments and market trends.
         
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center  bg-black text-white p-4">
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1667986292516-f27450ae75a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk4fHxyb2JvdGljfGVufDB8fDB8fHww"
              alt="Robot Image"
              className="w-full md:w-1/4 "
            />
            <div className="md:mr-28 mt-4 md:mt-0 text-center md:text-left ">
              <h2 className="text-4xl font-semibold">
                Robotic Process Automation
              </h2>
              <p className="mt-9 text-lg text-left">
                Robotic Process Automation (RPA) is an emerging field of study
                focused on the use of software robots or "bots" to automate
                repetitive, rule-based tasks traditionally performed by humans.
                This discipline combines knowledge from computer science,
                artificial intelligence, and business process management to
                develop systems that can execute tasks with high precision and
                speed. RPA is applied in various domains such as finance,
                customer service, and supply chain management, where it helps in
                automating data entry, transaction processing, and report
                generation. Studying RPA involves understanding how to design,
                deploy, and manage bots, as well as exploring the ethical and
                economic implications of automation in the workforce. This field
                is essential for advancing technology and improving operational
                efficiency across industries.
                <br />
                <br />
                Robotic Process Automation (RPA) is a game-changer for
                businesses looking to streamline operations and improve
                efficiency. At our company, we harness the power of RPA to
                automate repetitive, rule-based tasks, freeing up your employees
                to focus on more strategic activities. Our RPA solutions are
                designed to enhance accuracy, reduce costs, and accelerate
                processes across various departments, including finance,
                customer service, and human resources. By implementing RPA, your
                business can achieve greater productivity, scalability, and
                agility, ensuring that you stay competitive in an increasingly
                automated world.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center bg-black text-white p-4">
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1574758519652-904df1f8df4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHZpcnR1YWwlMjByZWFsaXR5fGVufDB8fDB8fHww"
              alt="Brain Image"
              className="w-full md:w-1/4 md:mt-16 "
            />
            <div className="md:ml-28  md:mt-0 text-left">
              <h2 className="text-4xl font-semibold mt-3">Computer vision </h2>
              <p className="mt-9  md:px-0 pb-2 md:pb-0 text-lg">
                Computer vision is a field of artificial intelligence that
                focuses on enabling computers to interpret and understand visual
                information from the world, similar to how humans use their
                eyesight. This area of study involves the development of
                algorithms and models that allow machines to recognize patterns,
                objects, and scenes in images and videos. Applications of
                computer vision include facial recognition, autonomous vehicles,
                medical image analysis, and augmented reality. Studying computer
                vision requires knowledge of image processing, machine learning,
                and deep learning techniques. Researchers and practitioners in
                this field work on improving the accuracy and efficiency of
                visual recognition systems, making it possible for machines to
                analyze visual data and make informed decisions based on that
                data.
                <br />
                <br />
                Computer vision is revolutionizing industries by enabling
                businesses to extract valuable insights from visual data. At our
                company, we leverage cutting-edge computer vision technology to
                enhance operational efficiency, improve product quality, and
                drive innovation. Our solutions are designed to automate complex
                visual tasks such as quality inspection, inventory management,
                and facial recognition for security purposes. By integrating
                advanced algorithms and deep learning models, we provide
                accurate and reliable systems that can identify patterns, detect
                anomalies, and make informed decisions in real-time. With
                computer vision, your business can achieve higher precision,
                reduce manual labor, and gain a competitive edge in the market.
                Our expertise ensures that we deliver tailored solutions that
                meet your specific needs, transforming the way you interact with
                and utilize visual data.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Solutions />

      <br />
      <br />

      <AIFaq></AIFaq>
      <Footer />
    </>
  );
};

export default AI;
