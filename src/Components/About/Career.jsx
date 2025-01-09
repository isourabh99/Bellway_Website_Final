import React, { useEffect } from 'react'
import './Career.css'
import { Link } from 'react-router-dom';
import CNavbar from '../../CNavbar';
import Msg from '../../assets/msgBox.png'
import Footer from '../../Footer';
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Rings } from 'react-loader-spinner'
import foundation11 from "../../assets/foundation11.png"
import { useRef, useState } from 'react'
import axios from 'axios';
const Career = () => {
  const formRef = useRef(null);

  const scriptUrl = "https://script.google.com/macros/s/AKfycbzckZW1mHTSrr-aBpHebW5HWytdihVaslTJdXA6hmiGlcPTO_CRs3w6M-OI3eQhZvT6/exec";

  const [loading, setLoading] = useState(false)

  const [submit, setsubmit] = useState(false);

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      title: 'Image Title 1',
      description: 'This is the description for image 1.',
      bottomText: 'Trainees, your dedication today shapes the leaders of tomorrow. Embrace every lesson, seek every opportunity, and let your passion drive you to excellence.'
    },


    {
      src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHwwhttps://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      title: 'Image Title 3',
      description: 'This is the description for image 3.',
      bottomText: 'Professionals, your expertise paves the way for innovation. Embrace new challenges, seize opportunities, and let your experience drive you to new heights.'

    },
    {
      src: 'https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Image Title 2',
      description: 'This is the description for image 2.',
      bottomText: 'Students, your potential is limitless. Embrace your learning journey, seize every opportunity, and let your curiosity guide you to a brilliant future.'

    },

    {
      src: 'https://images.unsplash.com/photo-1616701318247-e87eb43e79e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGdyYWR1YXRlfGVufDB8fDB8fHww?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      title: 'Image Title 4',
      description: 'This is the description for image 4.',
      bottomText: 'Graduates, your journey begins now. Embrace every challenge, chase every opportunity, and let your passion guide you to greatness.'

    },
  ];
  const handleSubmit2 = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const formData = {
        name: formRef.current.name.value,
        phone_no: formRef.current.phone_no.value,
        email: formRef.current.email.value,
        service: formRef.current.service.value,
        message: formRef.current.message.value,
        resume_link: formRef.current.resume_link.value
      }
      // console.log("formData", formData);
      const response = await axios.post("https://admin.bellwayinfotech.com/api/admin/open-vacancies", formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      // console.log("postedData",response.data);
      setsubmit(true)

    } catch (error) {
      if (error.response) {
        // Server responded with an error
        console.log("Error response:", error.response.data);
        console.log("Error status:", error.response.status);
      } else if (error.request) {
        // No response from server
        console.log("No response from server:", error.request);
      } else {
        // Error setting up the request
        console.log("Request error:", error.message);
      }
    }


  }

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);

  }


  //   const [hirings, sethirings] = useState([])
  //   const getHiring = async () => {
  //     try {
  //       const response = await fetch("https://admin.bellwayinfotech.com/api/admin/hirings")
  //       if(!response.ok){
  //        throw new Error("Hirings not found");

  //       }
  //       sethirings(await response.json());

  //     } catch (error) {
  //       console.log("Error fetching data",error);
  //     }
  //   }

  // useEffect(()=>{
  // getHiring()
  // },[])
  return (
    <>
      <Helmet>
        <title>BELLWAY INFOTECH - Career With Us</title>
        <meta
          name="description"
          content="At Bellway Infotech we have great career opportunities which includes UI/UX designing, software, cloud & app developments & many more for a great career building"
        />
      </Helmet>
      <CNavbar />
      <div className="mybg">
        <div className="containerx mx-auto  bg-black p-4 mt-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-left mb-4 md:mb-0 md:p-8">
              <h1 className="md:text-6xl text-3xl font-bold mb-4 text-white">
                Career With Us...
              </h1>
              <p className="text-sm  my-6 text-left text-zinc-500 hover:text-zinc-50 transition-all duration-300">
                At Bellway Infotech, we’re not just a company; we’re a community
                of forward-thinkers, innovators, and problem-solvers. We believe
                in nurturing talent and providing our team members with an
                environment where they can thrive, grow, and make an impact. If
                you're passionate about technology and eager to work on exciting
                projects that drive real business value, Bellway Infotech could
                be the perfect place for you.
              </p>

              <div className="mt-10">
                <a
                  href="/contact"
                  className="relative inline-flex items-center justify-center h-6 md:h-14 p-5 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-3 border-red-500 rounded-full shadow-md group"
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
                    Let's Talk
                  </span>
                  <span className="relative invisible">Button Text</span>
                </a>
              </div>
            </div>
            <div className="md:w-1/2 text-right  ">
              <img
                src={foundation11}
                alt=" Office Employee"
                className="w-full  h-auto rounded-md"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <h2 className="md:text-4xl text-3xl font-bold mb-2 text-center mt-4 hover:text-red-600 pt-8 ">
          Open Vacancies
        </h2>
        <div className="relative min-h-screen flex items-center justify-center bg-black mt-14">
          <div className="absolute md:top-28 top-8 md:left-72 transform -rotate-12 z-50">
            <img
              src={Msg} // Replace with your image URL or import
              alt="Decorative"
              className="md:w-60 w-30"
              loading="lazy"
            />
          </div>{" "}
          <div className="formC bg-opacity-75 p-8 rounded-lg shadow-md w-full max-w-6xl flex flex-wrap relative z-10 text-white ">
            <div className="w-full md:w-1/2 p-4 mt-20 md:mt-60">
              <h6 className="text-xl mt-20 mb-4">
                Hiring for Business development executive?
              </h6>
              <p className="mb-6">Having 0 to 1 Years Experience !!</p>
              <div className="mt-6">
                <h3 className="text-5xl font-semibold mt-20">
                  <i>Send Your Work Summary</i>
                </h3>
              </div>
            </div>
            <div className={` w-full md:w-1/2 p-4 mt-4`}>
              <div
                className={`bg-white/90 ${submit ? "block" : "hidden"
                  } backdrop-blur-md   rounded-md md:py-2  text-black`}
              >
                <iframe
                  className="  md:m-auto"
                  src="https://lottie.host/embed/044ba384-905c-4b75-8596-54c113df19f1/pYuAhzDInA.json"
                ></iframe>
                <h3 className="text-center  text-2xl font-semibold">
                  Thank You!
                </h3>
                <p className="text-center my-6 md:mx-20 mx-5 text-lg">
                  Your Details Has Been Successfully Submitted
                </p>
                <Link to={"/"}>
                  <div className=" my-3 inline-flex justify-center w-full ">
                    <button className="bg-red-600 inline-flex md:flex gap-2 text-white py-2 px-4 rounded-md">
                      <svg
                        width={"1.3rem"}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20ZM12 11H16V13H12V16L8 12L12 8V11Z"></path>
                      </svg>
                      Home
                    </button>
                  </div>
                </Link>

                <p></p>
              </div>
              <form
                className={`${submit ? "hidden" : "block"}`}
                ref={formRef}
                onSubmit={handleSubmit2}
              >
                <div className="flex flex-wrap ">
                  <div className="w-full md:w-1/2 px-2  md:mb-0  text-left">
                    <label
                      className="block text-sm font-medium mb-1 "
                      htmlFor="name"
                    >
                      Name *
                    </label>
                    <input
                      className="w-full px-3 py-2 border rounded formC"
                      type="text"
                      id="name"
                      name="name"
                      required
                    />
                  </div>

                  <div className="w-full md:w-1/2 px-2">
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="phone_no"
                    >
                      Phone *
                    </label>
                    <input
                      className="w-full px-3 py-2 border rounded formC"
                      type="tel"
                      id="phone_no"
                      name="phone_no"
                      required
                    />
                  </div>
                </div>

                <div className="  flex flex-wrap   ">
                  <div className="w-full md:w-1/2 px-2  md:mb-0 ">
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="email"
                    >
                      Email *
                    </label>
                    <input
                      className="w-full px-3 py-2 border rounded formC"
                      type="email"
                      id="email"
                      name="email"
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-2">
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="service"
                    >
                      Service *
                    </label>
                    <select
                      className="w-full h-10 px-2  border rounded formC"
                      id="service"
                      name="service"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="Developer">Developer</option>
                      <option value="Tester">Tester</option>
                      <option value="Manager">Manager</option>
                      <option value="Designer">Designer</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="px-2">
                  <label
                    className="block text-sm font-medium"
                    htmlFor="message"
                  >
                    Message *
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border rounded formC"
                    id="message"
                    name="message"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <div className="px-2">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="resume_link"
                  >
                    Resume Link*
                  </label>
                  <input
                    className="w-full px-3 py-2 border rounded formC"
                    type="text"
                    id="resume_link"
                    name="resume_link"
                    required
                  />
                </div>
                <div className="flex items-center justify-center mt-10">
                  <button
                    type="submit"
                    className="w-1/2 bg-white flex items-center justify-center text-black py-2 rounded"
                  >
                    <Rings
                      visible={loading}
                      height="30"
                      width="100"
                      color="red"
                      ariaLabel="rings-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                    />
                    <span className={`${loading ? "hidden" : "block"}`}>
                      Submit
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className=" mx-auto py-10 sm:mt-0">
          <h2 className="md:text-4xl text-3xl md:mx-0 font-bold  text-center mt-6 hover:text-red-600">
            Explore Opportunities
          </h2>


          <div className="container mx-auto  p-4 mt-12">
            <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-lg group"
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full  md:h-full object-cover"
                  />
                  <div className="absolute  inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h2 className="text-white text-2xl">{image.title}</h2>
                    <p className="text-white mt-2 text-lg text-center">
                      {image.description}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-white bg-opacity-75 text-black text-center">
                    {image.bottomText}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h1 className="md:text-4xl text-3xl text-black font-bold text-center mb-8 hover:text-red-600 p-8 sm:mx-6">
          "Welcome to the Team"
        </h1>
        <div className="container  bg-black border-2 border-red-500 flex items-center mx-auto  rounded-3xl ">
          <div className="flex flex-col mt-10 md:mt-0 mb-10 md:mb-0 sm:flex-row justify-center items-center min-h-96 bg-black rounded-3xl">
            <div className="w-full h-1/2 sm:w-1/2 p-4 border-2 rounded-md border-white sm:mx-5 flex flex-col justify-center items-center">
              <h2 className="text-red-600 text-3xl text-center mb-4">
                Freshers Level
              </h2>
              <p className="text-white text-center text-xl mb-4">
                "Every great developer was once a beginner. Welcome to a journey
                of endless learning and innovation!"
              </p>
              <button className="bg-white text-black border-2 border-red-500 px-6 py-2 rounded transition-all duration-500 ease-in-out hover:bg-black hover:text-white">
                <Link to="/traineeForm">Apply as a Trainee</Link>
              </button>
            </div>
            <div className="h-full flex justify-center items-center">
              <hr className="border-white h-20 border-2 mx-4" />
            </div>
            <div className="w-full sm:w-1/2 p-4 border-2 rounded-md border-white h-full sm:mx-5 flex flex-col justify-center items-center">
              <h2 className="text-red-600 text-3xl text-center mb-4">
                Experience Hiring
              </h2>
              <p className="text-white text-center text-xl mb-4">
                "Your expertise is the foundation on which innovation builds.
                Welcome to your next great adventure!"
              </p>
              <button className="bg-white text-black border-2 border-red-500 px-6 py-2 rounded transition-all duration-500 ease-in-out hover:bg-black hover:text-white">
                <Link to="/experienceJoineeForm">Apply as a Employee</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-20"></div>

        <Footer />
      </div>
    </>
  );
}

export default Career
