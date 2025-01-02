import React from 'react'
import './Career.css'
import CNavbar from './CNavbar';
import Footer from './Footer';




const Career = () => {
    const testimonials = [
        {
          name: 'Graduates',
          review: 'Graduates, your journey begins now. Embrace every challenge, chase every opportunity, and let your passion guide you to greatness.',
          image: 'https://images.unsplash.com/photo-1616701318247-e87eb43e79e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGdyYWR1YXRlfGVufDB8fDB8fHww?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {
          name: 'Professionals',
          review: 'Professionals, your expertise paves the way for innovation. Embrace new challenges, seize opportunities, and let your experience drive you to new heights.',
          image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {
          name: 'Students',
          review: 'Students, your potential is limitless. Embrace your learning journey, seize every opportunity, and let your curiosity guide you to a brilliant future.',
          image: 'https://plus.unsplash.com/premium_photo-1683880731020-83b984105a72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {
          name: 'Trainees',
          review: 'Trainees, your dedication today shapes the leaders of tomorrow. Embrace every lesson, seek every opportunity, and let your passion drive you to excellence.',
          image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        }
      ];


  
  return (
    <>
      <CNavbar />
      <div className="w-screen ml-[-34px]">
        <div class="mx-auto sm:my-5 bg-black p-8">
          <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 text-left mb-4 md:mb-0">
              <h1 class="text-8xl font-bold mb-4 text-white">
                Career With Us...
              </h1>
              <h3 class="text-2xl text-white">
                <a href="/faq-page" class="text-red-600 hover:underline">
                  Home
                </a>{" "}
                / Career With Us
              </h3>
            </div>
            <div class="md:w-1/2 text-right">
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1459180129673-eefb56f79b45?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team"
                class="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-2 text-center sm:mt-32 hover:text-red-600">
            Job Categories
          </h2>

          <div className="container mt-20 sm:mx-auto p-4 flex justify-center items-center sm:min-h-48 mybg ">
            <div
              className="sm:max-w-full sm:w-2/3  bg-white rounded-lg shadow-md overflow-hidden"
              style={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.6)" }}
            >
              <div className="p-4">
                <h2 className="text-3xl font-bold mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Software Engineer
                </h2>
              </div>
              <img
                loading="lazy"
                className="w-full h-72 object-cover"
                src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260
          "
                alt="Job Description"
              />
              <div className="p-4 box">
                <p className="text-gray-700 mb-4 text-center text-xl">
                  We are looking for a passionate Software Engineer to design,
                  develop, and install software solutions. The successful
                  candidate will be able to build high-quality, innovative, and
                  fully performing software in compliance with coding standards
                  and technical design.
                </p>
                <div className="border-2 text-gray-300  mt-10">
                  <hr />
                </div>
                <div className="text-black mt-10">
                  <span className=":text-lg text-center">Company Name :</span>
                  <b className="text-xl"> Bellway Infotech</b>
                  <br />
                  <span className="text-lg text-center">Apply By :</span>
                  <b> 2024-08-30</b>
                  <br />
                  <span className="text-xl text-center">Location :</span>
                  <b> Indore, M.P</b>
                </div>
              </div>
            </div>
          </div>

          <div className="container mt-14 sm:mx-auto p-4 flex justify-center items-center sm:min-h-48 mybg ">
            <div
              className="max-w-full sm:w-2/3  bg-white rounded-lg shadow-md overflow-hidden"
              style={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.6)" }}
            >
              <div className="p-4">
                <h2 className="text-3xl font-bold mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Business Development
                </h2>
              </div>
              <img
                loading="lazy"
                className="w-full h-72 object-cover"
                src="https://images.pexels.com/photos/3184164/pexels-photo-3184164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260
          "
                alt="Job Description"
              />
              <div className="p-4">
                <p className="text-gray-700 mb-4 text-center text-xl">
                  "Drive growth and forge strategic partnerships as a Business
                  Development professional. Your expertise will shape our future
                  success. Identify new business opportunities, develop
                  strategies, and build lasting relationships. Join us to expand
                  horizons, unlock potential, and achieve new milestones. Apply
                  now to be a key player in our growth journey!"
                </p>
                <div className="border-2 text-gray-300  mt-10">
                  <hr />
                </div>
                <div className="text-black mt-10">
                  <span className="text-lg text-center">Company Name :</span>
                  <b className="text-xl"> Bellway Infotech</b>
                  <br />
                  <span className="text-lg text-center">Apply By :</span>
                  <b> 2024-08-30</b>
                  <br />
                  <span className="text-xl text-center">Location :</span>
                  <b> Indore, M.P</b>
                </div>
              </div>
            </div>
          </div>

          <div className="container mt-14 sm:mx-auto p-4 flex justify-center items-center sm:min-h-48 mybg ">
            <div
              className="max-w-full sm:w-2/3  bg-white rounded-lg shadow-md overflow-hidden"
              style={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.6)" }}
            >
              <div className="p-4">
                <h2 className="text-3xl font-bold mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  UI/ UX Designer
                </h2>
              </div>
              <img
                loading="lazy"
                className="w-full h-72 object-cover"
                src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260
          "
                alt="Job Description"
              />
              <div className="p-4">
                <p className="text-gray-700 mb-4 text-center text-xl">
                  "Join us to create intuitive and visually stunning user
                  experiences. Your design skills will shape the future of
                  digital interaction and innovation. Collaborate with a dynamic
                  team to bring cutting-edge ideas to life. Apply now to make a
                  significant impact and elevate user satisfaction to new
                  heights!"
                </p>
                <div className="border-2 text-gray-300  mt-10">
                  <hr />
                </div>
                <div className="text-black mt-10">
                  <span className="text-lg text-center">Company Name :</span>
                  <b className="text-xl"> Bellway Infotech</b>
                  <br />
                  <span className="text-lg text-center">Apply By :</span>
                  <b> 2024-08-30</b>
                  <br />
                  <span className="text-xl text-center">Location :</span>
                  <b> Indore, M.P</b>
                </div>
              </div>
            </div>
          </div>

          <div className="container mt-14 sm:mx-auto p-4 flex justify-center items-center sm:min-h-48 mybg ">
            <div
              className="max-w-full sm:w-2/3  bg-white rounded-lg shadow-md overflow-hidden"
              style={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.6)" }}
            >
              <div className="p-4">
                <h2 className="text-3xl font-bold mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Office Management
                </h2>
              </div>
              <img
                loading="lazy"
                className="w-full h-72 object-cover"
                src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Job Description"
              />
              <div className="p-4">
                <p className="text-gray-700 mb-4 text-center text-xl">
                  "Become an essential part of our team by streamlining office
                  operations and enhancing productivity. Your organizational
                  skills will drive efficiency and success. Manage
                  administrative tasks, coordinate events, and ensure smooth
                  daily operations. Apply now to lead our office management and
                  contribute to a well-structured, efficient workplace
                  environment!"
                </p>
                <div className="border-2 text-gray-300  mt-10">
                  <hr />
                </div>
                <div className="text-black mt-10">
                  <span className="text-lg text-center">Company Name :</span>
                  <b className="text-xl"> Bellway Infotech</b>
                  <br />
                  <span className="text-lg text-center">Apply By :</span>
                  <b> 2024-08-30</b>
                  <br />
                  <span className="text-xl text-center">Location :</span>
                  <b> Indore, M.P</b>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-4xl text-black font-bold text-center mb-8 hover:text-red-600 p-14 sm:mt-20 sm:mx-6">
          "Welcome to the Team"
        </h1>
        <div className="container  bg-black border-2 border-red-500 flex items-center mx-auto  rounded-3xl">
          <div className="flex flex-col sm:flex-row justify-center items-center min-h-96 bg-black rounded-3xl">
            <div className="w-full h-1/2 sm:w-1/2 p-4 border-2 border-white sm:mx-5 flex flex-col justify-center items-center">
              <h2 className="text-red-600 text-3xl text-center mb-4">
                Freshers Level
              </h2>
              <p className="text-white text-center text-xl mb-4">
                "Every great developer was once a beginner. Welcome to a journey
                of endless learning and innovation!"
              </p>
              <button className="bg-white text-black border-2 border-red-500 px-6 py-2 rounded transition-all duration-500 ease-in-out hover:bg-black hover:text-white">
                <a href="/traineeForm">Apply as a Trainee</a>
              </button>
            </div>
            <div className="h-full flex justify-center items-center">
              <hr className="border-white h-20 border-2 mx-4" />
            </div>
            <div className="w-full sm:w-1/2 p-4 border-2 border-white h-full sm:mx-5 flex flex-col justify-center items-center">
              <h2 className="text-red-600 text-3xl text-center mb-4">
                Immediate Hiring
              </h2>
              <p className="text-white text-center text-xl mb-4">
                "Your expertise is the foundation on which innovation builds.
                Welcome to your next great adventure!"
              </p>
              <button className="bg-white text-black border-2 border-red-500 px-6 py-2 rounded transition-all duration-500 ease-in-out hover:bg-black hover:text-white">
                <a href="/experienceJoineeForm">Apply as a Employee</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Career
