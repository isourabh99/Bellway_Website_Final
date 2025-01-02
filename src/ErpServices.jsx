import React, { useState } from "react";
import CNavbar from "./CNavbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Solutions from "./Solutions";
import AIFaq from "./AIFaq";
import FaqPage5 from "./FaqPage5";
import "./ErpServices.css";
const ErpServices = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };
  return (
    <>
      <CNavbar></CNavbar>
      <div className="">
        <div className="sticky-nav">
          <CNavbar />
        </div>

        <div className="containerx bg-black px-4 py-10 sm:py-12 md:pt-10 ">
          <div className="flex flex-col md:flex-row items-center w-full justify-between">
            <div className="md:w-1/2 md:text-left ml-0 lg:ml-10">
              <h1 className="text-5xl sm:text-3xl lg:text-4xl xl:text-5xl  font-bold mb-4 mt-14 text-white">
                ERP Service...
              </h1>
              <p className="text-sm  my-6 text-left text-zinc-500 hover:text-zinc-50 transition-all duration-300">
                At Bellway Infotech, our ERP services are designed to streamline
                your business operations, enhance productivity, and drive
                data-driven decision-making. We provide comprehensive ERP
                solutions that centralize your data and integrate key business
                processes, including finance, human resources, inventory, and
                customer relationship management. Our team analyzes your unique
                business needs to deliver a tailored ERP system that scales with
                your growth.
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
            <div class="md:w-1/2  mt-10 flex justify-center">
              <img
                src="/images/ERP-services.png"
                alt="About Image"
                class="w-full md:w-[55%] hover:scale-110 transition-all duration-500 ease-in-out"
              />
            </div>
          </div>
        </div>

        <div class="md:w-full text-center mb-4 md:mb-0 mx-4 md:p-16">
          <h1 class="sm:text-5xl  font-bold  mx-3 text-black mt-20">
            "Optimize Your Manufacturing Processes with Our Advanced ERP
            Solutions"
          </h1>

          <div className="space-y-10 mt-10 mx-auto overflow-x-hidden">
            <div className="flex flex-col md:flex-row p-4 justify-center items-center bg-black text-white">
              <img
                loading="lazy"
                src="https://plus.unsplash.com/premium_photo-1679936310859-bb50897c4c89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SFJ8ZW58MHwxfDB8fHww"
                alt="Machine Learning"
                className="w-full md:w-1/4 rounded-md mb-4 md:mb-0"
              />
              <div className="md:ml-28 mt-4 md:mt-0 my-4  md:text-left  md:px-0">
                <h2 className="md:text-3xl text-2xl font-semibold">
                  Customer Relationship Management (CRM)
                </h2>
                <p className="mt-9 text-lg">
                  Customer Relationship Management (CRM) is a strategic approach
                  that focuses on managing and optimizing a company's
                  interactions with current and potential customers. By using
                  CRM systems, businesses can streamline their sales, marketing,
                  and customer service processes, ensuring a unified and
                  efficient approach to customer management. CRM encompasses
                  various functionalities such as contact management, sales
                  automation, marketing automation, and customer support. These
                  tools are applied across industries to enhance customer
                  satisfaction, improve retention, and drive business growth,
                  making CRM a vital area for maintaining competitive advantage.
                 
                </p>
               
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center mt-20">
              <img
                loading="lazy"
                src="https://plus.unsplash.com/premium_photo-1679936310312-5071de38df5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEhSfGVufDB8MXwwfHx8MA%3D%3D"
                className="w-full md:w-1/4 rounded-md"
                alt="Human Resources"
              />
              <div className="md:mr-28 mt-4 md:mt-0 text-center md:text-left mx-3 md:mx-9">
                <h2 className="md:text-4xl text-xl font-semibold">
                  Human Resources Management (HRM)
                </h2>
                <p className="mt-9 text-lg ">
                  Human Resource Management (HRM) plays a vital role in the
                  organization by focusing on recruiting, managing, and
                  nurturing the workforce. The effectiveness of HRM lies in
                  keeping employees motivated, skilled, and aligned with the
                  company's objectives to boost productivity and drive growth.
                  HRM covers various aspects such as talent acquisition,
                  employee onboarding, performance evaluation, payroll
                  management, and compliance. These tools and procedures are
                  crucial for cultivating a positive work environment, improving
                  employee contentment, and optimizing human resource management
                  to establish a strong foundation for organizational triumph.
                
                </p>
              
              </div>
            </div>

            <div className="flex flex-col md:flex-row p-4 justify-center items-center bg-black text-white">
              <img
                loading="lazy"
                src="https://i.pinimg.com/564x/4f/49/a4/4f49a464951831117bd645282a2658ff.jpg"
                alt="Brain Image"
                className="w-full md:w-1/4 rounded-md"
              />
              <div className="md:ml-28 mt-4 md:mt-0 my-4 text-center">
                <h2 className="text-3xl font-semibold text-center">
                  Supply Chain Management (SCM)
                </h2>
                <p className="mt-9 text-lg  md:px-0 pb-3 md:pb-0">
                  Supply Chain Management (SCM) plays a crucial role in
                  supervising and enhancing the movement of goods, services, and
                  information from their raw form to reaching the end consumer.
                  It involves overseeing procurement, production, distribution,
                  and logistics to boost efficiency, cut down costs, and elevate
                  customer satisfaction levels. This field incorporates various
                  strategies like inventory control, order completion, and
                  nurturing relationships with suppliers. Having an efficient
                  SCM is key to staying competitive and meeting customer needs
                  promptly.
                
                </p>
         
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <img
                loading="lazy"
                src="https://i.pinimg.com/564x/0a/8b/cf/0a8bcf8b1ac7f2b85c7164b477661e00.jpg"
                alt="Robot Image"
                className="w-full md:w-1/4 rounded-md"
              />
              <div className="md:mr-28 mt-4 md:mt-0 text-center md:text-left">
                <h2 className="text-3xl font-semibold ">
                  {" "}
                  Mobile ERP solutions
                </h2>
                <p className="mt-9 text-lg ">
                  Mobile ERP solutions are transforming the way businesses
                  manage their operations by providing real-time access to
                  enterprise resource planning (ERP) systems from mobile
                  devices. These solutions enable employees to stay connected
                  and productive, whether they are in the office or on the go.
                  Mobile ERP encompasses various functionalities such as
                  inventory management, sales tracking, financial reporting, and
                  human resource management, all accessible through smartphones
                  and tablets. By leveraging mobile technology, businesses can
                  ensure that critical information is always at their
                  fingertips, leading to improved decision-making and
                  operational efficiency.
                
                </p>
          
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center p-4 bg-black text-white">
              <img
                loading="lazy"
                src="https://img.freepik.com/premium-photo/financial-insights-stock-market-investment-trading-coin-graph-vertical-mobile-wallpaper_892776-20418.jpg"
                alt="Brain Image"
                className="w-full h-full md:w-1/4 rounded-md"
              />
              <div className="md:ml-28 md:mt-0 text-center md:text-left">
                <h2 className="text-3xl text-center font-semibold mt-3">
                  Financial Management
                </h2>
                <p className="mt-9 text-lg  md:px-0 pb-2 md:pb-0">
                  Financial Management plays a vital role in overseeing
                  financial activities by planning, organizing, directing, and
                  controlling to reach organizational objectives. It covers
                  managing finances, budgeting, forecasting, and upholding
                  financial regulations. Financial management includes tasks
                  like handling the general ledger, accounts payable/receivable,
                  managing fixed assets, and preparing financial reports.
                  Through effective financial management systems, companies can
                  obtain precise insights into their financial well-being,
                  optimize resource distribution, and make well-informed
                  choices.
                 
                </p>
       
              </div>
            </div>
          </div>
        </div>

        <div className="md:mx-20 mx-5  leading-7">
          <h3 className="text-red-500 my-4 text-center text-xl  md:text-3xl">
            Manufacturing Industries We Serve
          </h3>
          <p className="text-center   md:text-xl">
            With our 15+ years of experience, we have covered ample industries
            by fulfilling each tailored needs of clients.
          </p>
          <div class="flex flex-wrap justify-center justify-items-center grid-cols-7 gap-4">
            <div class="col-span-1 text-center  p-4">
              <div class="m-auto  ring-gray-200 ring-4 h-32 w-32 industry-img bg-cover">
                <img
                  loading="lazy"
                  class="industry-img mb-9"
                  src="https://www.absolutewebtek.com/production/assets/images/steel.jpg"
                  alt="Steel"
                />
              </div>
              <div className="mt-4">
                <span class="mt-4 text-xl font-semibold">Steel</span>
              </div>
            </div>
            <div class="col-span-1 text-center bg-white p-4">
              <div class="m-auto ring-gray-200  ring-4  h-32 w-32 industry-img bg-cover">
                <img
                  loading="lazy"
                  class="industry-img mb-3 h-full w-full "
                  src="https://i.pinimg.com/564x/d9/8a/67/d98a6703d0258fea04281dff582cd07f.jpg"
                  alt="Steel"
                />
              </div>
              <div className="mt-4">
                <span class="mt-4 text-xl font-semibold">Garments</span>
              </div>
            </div>
            <div class="col-span-1 text-center bg-white p-4">
              <div class="m-auto ring-gray-200 ring-4 h-32 w-32 industry-img bg-cover">
                <img
                  loading="lazy"
                  class="industry-img mb-3 h-full w-full"
                  src="https://i.pinimg.com/564x/f7/21/c3/f721c39310a4d6da9726a1a142565ad3.jpg"
                  alt="Steel"
                />
              </div>
              <div className="mt-4">
                <span class="mt-4 text-xl font-semibold">Electrical</span>
              </div>
            </div>
            <div class="col-span-1 text-center bg-white p-4">
              <div class="m-auto ring-gray-200 ring-4 h-32 w-32 industry-img bg-cover">
                <img
                  loading="lazy"
                  class="industry-img mb-3 h-full w-full"
                  src="https://i.pinimg.com/564x/15/c4/0a/15c40aafa735cae02d3b4a9036815c60.jpg"
                  alt="Steel"
                />
              </div>
              <div className="mt-4">
                <span class="mt-4 text-xl font-semibold">Mining</span>
              </div>
            </div>
            <div class="col-span-1 text-center bg-white p-4">
              <div class="m-auto ring-gray-200 ring-4 h-32 w-32 industry-img bg-cover">
                <img
                  loading="lazy"
                  class="industry-img mb-3 h-full w-full"
                  src="https://i.pinimg.com/564x/c6/60/bf/c660bfb9028398eb0aef5d0cef801d9d.jpg"
                  alt="Steel"
                />
              </div>
              <div className="mt-4">
                <span class="mt-4 text-xl font-semibold">Printing</span>
              </div>
            </div>
            <div class="col-span-1 text-center bg-white p-4">
              <div class="m-auto ring-gray-200 ring-4 h-32 w-32 industry-img bg-cover">
                <img
                  loading="lazy"
                  class="industry-img mb-3 w-full h-full"
                  src="https://i.pinimg.com/564x/0c/14/c8/0c14c8b2458ef78413e547b327b4aae5.jpg"
                  alt="Steel"
                />
              </div>
              <div className="mt-4">
                <span class="mt-4 text-xl font-semibold">Wood</span>
              </div>
            </div>
            <div class="col-span-1 text-center bg-white p-4">
              <div class="m-auto ring-gray-200 ring-4 h-32 w-32 industry-img bg-cover">
                <img
                  loading="lazy"
                  class="industry-img mb-3 h-full w-full"
                  src="https://i.pinimg.com/564x/58/a1/67/58a1675fc51624ba75e519f7a7d1634f.jpg"
                  alt="Steel"
                />
              </div>
              <div className="mt-4">
                <span class="mt-4 text-xl font-semibold">Leather</span>
              </div>
            </div>
            <div class="col-span-1 text-center bg-white p-4">
              <div class="m-auto ring-gray-200 ring-4 h-32 w-32 industry-img bg-cover">
                <img
                  loading="lazy"
                  class="industry-img mb-3 h-full w-full"
                  src="https://i.pinimg.com/564x/3b/da/7f/3bda7f167c094d7a88ac3565db0ae461.jpg"
                  alt="Steel"
                />
              </div>
              <div className="mt-4">
                <span class="mt-4 text-xl font-semibold">Footwear</span>
              </div>
            </div>
            <div class="col-span-1 text-center bg-white p-4">
              <div class="m-auto ring-gray-200 ring-4 h-32 w-32 industry-img bg-contain">
                <img
                  loading="lazy"
                  class="industry-img mb-3 h-full w-full"
                  src="https://i.pinimg.com/564x/7b/be/8b/7bbe8b3870b75d4d9d191c3bb944b501.jpg"
                  alt="Steel"
                />
              </div>
              <div className="mt-4">
                <span class="mt-4 text-xl font-semibold">Pharma</span>
              </div>
            </div>
            <div class="col-span-1 text-center bg-white p-4">
              <div class="m-auto ring-gray-200 ring-4 h-32 w-32 industry-img bg-cover">
                <img
                  loading="lazy"
                  class="industry-img mb-3"
                  src="https://www.absolutewebtek.com/production/assets/images/cable.jpg"
                  alt="Steel"
                />
              </div>
              <div className="mt-4">
                <span class="mt-4 text-xl font-semibold">Cable</span>
              </div>
            </div>
            <div class="col-span-1 text-center bg-white p-4">
              <div class="m-auto ring-gray-200 ring-4 h-32 w-32 industry-img bg-cover">
                <img
                  loading="lazy"
                  class="industry-img mb-3"
                  src="https://www.absolutewebtek.com/production/assets/images/rubber.jpg"
                  alt="Steel"
                />
              </div>
              <div className="mt-4">
                <span class="mt-4 text-xl font-semibold">Rubber</span>
              </div>
            </div>
            <div class="col-span-1 text-center bg-white p-4">
              <div class="m-auto ring-gray-200 ring-4 h-32 w-32 industry-img bg-cover">
                <img
                  loading="lazy"
                  class="industry-img mb-3 h-full w-full"
                  src="https://i.pinimg.com/564x/07/23/4b/07234b3f3e57d59608f476fd6fa54794.jpg"
                  alt="Steel"
                />
              </div>
              <div className="mt-4">
                <span class="mt-4 text-xl font-semibold">Plastic</span>
              </div>
            </div>
            <div class="col-span-1 text-center bg-white p-4">
              <div class="m-auto ring-gray-200 ring-4 h-32 w-32 industry-img bg-cover">
                <img
                  loading="lazy"
                  class="industry-img mb-3"
                  src="https://www.absolutewebtek.com/production/assets/images/fmcg.jpg"
                  alt="Steel"
                />
              </div>
              <div className="mt-4">
                <span class="mt-4 text-xl font-semibold">FMCG</span>
              </div>
            </div>
            <div class="col-span-1 text-center bg-white p-4">
              <div class="m-auto ring-gray-200 ring-4 h-32 w-32 industry-img bg-cover">
                <img
                  loading="lazy"
                  class="industry-img mb-3 bg-cover h-full w-full"
                  src="https://i.pinimg.com/564x/77/00/3a/77003a89af063546cafc9f58c62b3ed5.jpg"
                  alt="Steel"
                />
              </div>
              <div className="mt-4">
                <span class="mt-4 text-xl font-semibold">Chemicals</span>
              </div>
            </div>

            <div class="col-span-1  text-center bg-white p-4">
              <div class="m-auto ring-gray-200 ring-4 h-32 w-32 industry-img bg-cover">
                <img
                  loading="lazy"
                  class="industry-img mb-3 bg-cover h-full w-full"
                  src="https://i.pinimg.com/564x/40/2d/92/402d92407070d25e650ff6254b0a982a.jpg"
                  alt="Steel"
                />
              </div>
              <div className="mt-4">
                <span class="mt-4 text-xl font-semibold">Concrete</span>
              </div>
            </div>
            <div class="col-span-1 text-center bg-white p-4">
              <div class="m-auto ring-gray-200 ring-4 h-32 w-32 industry-img bg-cover">
                <img
                  loading="lazy"
                  class="industry-img mb-3 bg-cover h-full w-full"
                  src="https://i.pinimg.com/564x/e4/39/1e/e4391e3c9d48599f15c7be6308808d2d.jpg"
                  alt="Steel"
                />
              </div>
              <div className="mt-4">
                <span class="mt-4 text-xl font-semibold">Automobile</span>
              </div>
            </div>
          </div>
        </div>
        <Solutions />

        <br />
        <br />

        {/* <HomeTestimonials /> */}
        {/* <HomeFaq /> */}

        <FaqPage5></FaqPage5>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ErpServices;
