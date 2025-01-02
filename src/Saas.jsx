import React from "react";
import CNavbar from "./CNavbar";
import { Helmet } from "react-helmet";
import Solutions from "./Solutions";
import "./Form1.css";
import Footer from "./Footer";
import HomeSlider from "./HomeSlider";
import FaqPage from "./FaqPage";
import SaasCards from "./SaasCards";
import SaasCard2 from "./SaasCard2";
import SaasCard3 from "./SaasCard3";
import { Link, NavLink } from "react-router-dom";
const Saas = () => {
  const listData = [
    {
      title: "Key Features of SaaS Development",
      imageUrl:
        "https://cdn-cjmik.nitrocdn.com/UjszoEMIGzQLBmRYICliaPmdTnvQlovN/assets/images/optimized/rev-b7b1dec/www.aalpha.net/wp-content/uploads/2021/07/technology.png",
      items: [
        "Customizable Solutions",
        "Scalable Architecture",
        "High Security Standards",
        "User-Friendly Interface",
        "24/7 Customer Support",
        "Cost-Effective Pricing",
      ],
    },
    {
      title: "Advantages of Cloud Services",
      imageUrl:
        "https://cdn-cjmik.nitrocdn.com/UjszoEMIGzQLBmRYICliaPmdTnvQlovN/assets/images/optimized/rev-b7b1dec/www.aalpha.net/wp-content/uploads/2021/07/database.png",
      items: [
        "Increased Accessibility",
        "Automatic Updates",
        "Disaster Recovery",
        "Improved Collaboration",
        "Remote Work Capability",
        "Enhanced Data Security",
      ],
    },
    {
      title: "Benefits of Custom Software",
      imageUrl:
        "https://cdn-cjmik.nitrocdn.com/UjszoEMIGzQLBmRYICliaPmdTnvQlovN/assets/images/optimized/rev-b7b1dec/www.aalpha.net/wp-content/uploads/2021/07/technology.png",
      items: [
        "Tailored to Business Needs",
        "Increased Efficiency",
        "Integration with Existing Systems",
        "Scalability",
        "Competitive Advantage",
        "Better ROI",
      ],
    },
    {
      title: "Integration Solutions",
      imageUrl:
        "https://cdn-cjmik.nitrocdn.com/UjszoEMIGzQLBmRYICliaPmdTnvQlovN/assets/images/optimized/rev-b7b1dec/www.aalpha.net/wp-content/uploads/2021/07/technology.png",
      items: [
        "API Integration",
        "Data Migration Services",
        "Third-Party Service Integration",
        "Automation of Processes",
        "Real-Time Data Access",
        "Support for Legacy Systems",
      ],
    },
    {
      title: "Support and Maintenance",
      imageUrl:
        "https://cdn-cjmik.nitrocdn.com/UjszoEMIGzQLBmRYICliaPmdTnvQlovN/assets/images/optimized/rev-b7b1dec/www.aalpha.net/wp-content/uploads/2021/07/technology.png",
      items: [
        "Regular Updates",
        "Performance Monitoring",
        "Technical Support",
        "User Training",
        "Bug Fixing",
        "Feature Enhancements",
      ],
    },
    {
      title: "Deployment Strategies",
      imageUrl:
        "https://cdn-cjmik.nitrocdn.com/UjszoEMIGzQLBmRYICliaPmdTnvQlovN/assets/images/optimized/rev-b7b1dec/www.aalpha.net/wp-content/uploads/2021/07/technology.png",
      items: [
        "On-Premise Deployment",
        "Cloud-Based Deployment",
        "Hybrid Solutions",
        "Containerization",
        "Continuous Deployment",
        "Rollback Mechanisms",
      ],
    },
  ];
  return (
    <div>
      <>
        <Helmet>
          <title>BELLWAY INFOTECH - Saas Development | Service</title>
          <meta
            name="description"
            content="Discover Bellway Infotech comprehensive Saas development services. From concept to deployment our team delivers best solutions for your business."
          />
        </Helmet>
        <CNavbar />

        <div className="containerx bg-black px-4 py-10 sm:py-12 md:pt-10 ">
          <div className="flex flex-col md:flex-row items-center w-full justify-between">
            <div className="md:w-1/2 md:text-left ml-0 lg:ml-10">
              <h1 className="text-5xl sm:text-3xl lg:text-4xl xl:text-5xl  font-bold mb-4 mt-14 text-white">
                Saas Development...
              </h1>
              <p className="text-sm  my-6 text-left text-zinc-500 hover:text-zinc-50 transition-all duration-300">
                At Bellway Infotech, we specialize in developing robust,
                scalable, and secure Software as a Service (SaaS) applications
                that empower businesses to grow. Our team builds custom SaaS
                solutions tailored to your business needs, focusing on seamless
                integration, cloud scalability, and user-friendly interfaces.
                Whether you're launching a new product or improving an existing
                one, we help you achieve faster time-to-market, enhance
                operational efficiency, and provide your users with a reliable
                service.
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
            <div class="md:w-1/2 h-full mb-9 flex justify-center">
              <img
                loading="lazy"
                src="https://cdn-icons-png.flaticon.com/512/4860/4860992.png"
                alt="About Image"
                class="w-80 md:w-[40%] mt-20 h-auto hover:scale-110 transition-all duration-500 ease-in-out"
              />
            </div>
          </div>
        </div>

        <div className="se">
          <h1 className="tag4 text-2xl mx-4 md:text-5xl font-bold ">
            Our SaaS Development Services
          </h1>
        </div>
        <p className="text-lg mx-4 mt-6 text-center">
          Our company provides a diverse range of services beyond just SaaS
          development, catering to startups and large enterprises across the
          globe. We offer a complete range of services, from conceptualization
          and design to development and maintenance. With a focus on
          scalability, security, and performance, we empower your business with
          innovative SaaS applications that drive growth and efficiency.
        </p>
        {/* <div className="flex mt-20 justify-center items-center lg:w-[70vw] w-full  mx-auto">
          <SaasCards
            title="SaaS Development Consultation"
            description="Our skilled team of SaaS consultants is dedicated to guiding you in selecting the ideal development methodology and lifecycle tailored to your SaaS product needs. We'll assist you in choosing the optimal technology stack and a robust cloud-based platform for your development journey."
            imageUrl="https://cdn-cjmik.nitrocdn.com/UjszoEMIGzQLBmRYICliaPmdTnvQlovN/assets/images/optimized/rev-b7b1dec/www.aalpha.net/wp-content/uploads/2021/07/saas_consult.png" // Replace with actual image URL
          />
          <SaasCards
            title="Multi-Tenant Application Upgrades"
            description="Enhance your current SaaS application by adopting a multi-tenant architecture to deliver top-tier services to your users. This upgrade will not only boost your revenue potential but also help lower maintenance costs, ensuring a more efficient and scalable solution for your business"
            imageUrl="https://cdn-cjmik.nitrocdn.com/UjszoEMIGzQLBmRYICliaPmdTnvQlovN/assets/images/optimized/rev-b7b1dec/www.aalpha.net/wp-content/uploads/2021/07/multi_tenant.png" // Replace with actual image URL
          />
          <SaasCards
            title="Development of SaaS Applications"
            description="We have a dedicated SaaS development team who has years of experience in the respective domain to develop a top-performing SaaS application for your business."
            imageUrl="https://cdn-cjmik.nitrocdn.com/UjszoEMIGzQLBmRYICliaPmdTnvQlovN/assets/images/optimized/rev-b7b1dec/www.aalpha.net/wp-content/uploads/2021/07/saas_application.png" // Replace with actual image URL
          />
        </div> */}
        
        {/* <div className="se">
          <h1 className="tag4 text-2xl  md:text-5xl font-bold ">
            Our Services
          </h1>
        </div>
        <p className="text-lg mx-4 mt-6 text-center">
          As a leading SaaS development company in India, Vellway Infotech is
          dedicated to delivering comprehensive SaaS development services to
          clients worldwide. Elevate your business beyond boundaries with our
          innovative SaaS solutions.
        </p> */}

        <div className="w-[70vw] mx-auto flex flex-wrap justify-center items-center m-4">
          <SaasCard2
            title="Integration with Third Part APIs"
            description="We have a dedicated SaaS development team who has years of experience in the respective domain to develop a top-performing SaaS application for your business."
            imageUrl="https://cdn-cjmik.nitrocdn.com/UjszoEMIGzQLBmRYICliaPmdTnvQlovN/assets/images/optimized/rev-b7b1dec/www.aalpha.net/wp-content/uploads/2021/07/third_api.png"
          />
          <SaasCard2
            title="Security and Compliance Requirements"
            description="We have a dedicated SaaS development team who has years of experience in the respective domain to develop a top-performing SaaS application for your business."
            imageUrl="https://cdn-cjmik.nitrocdn.com/UjszoEMIGzQLBmRYICliaPmdTnvQlovN/assets/images/optimized/rev-b7b1dec/www.aalpha.net/wp-content/uploads/2021/07/security.png"
          />
          <SaasCard2
            title="Optimizing SaaS Applications"
            description="We have a dedicated SaaS development team who has years of experience in the respective domain to develop a top-performing SaaS application for your business."
            imageUrl="https://cdn-cjmik.nitrocdn.com/UjszoEMIGzQLBmRYICliaPmdTnvQlovN/assets/images/optimized/rev-b7b1dec/www.aalpha.net/wp-content/uploads/2021/07/optimizing.png"
          />
          <SaasCard2
            title="Optimizing SaaS Applications"
            description="We have a dedicated SaaS development team who has years of experience in the respective domain to develop a top-performing SaaS application for your business."
            imageUrl="https://cdn-cjmik.nitrocdn.com/UjszoEMIGzQLBmRYICliaPmdTnvQlovN/assets/images/optimized/rev-b7b1dec/www.aalpha.net/wp-content/uploads/2021/07/saas_design.png"
          />
          <SaasCard2
            title="Maintenance and Support Services"
            description="We have a dedicated SaaS development team who has years of experience in the respective domain to develop a top-performing SaaS application for your business."
            imageUrl="https://cdn-cjmik.nitrocdn.com/UjszoEMIGzQLBmRYICliaPmdTnvQlovN/assets/images/optimized/rev-b7b1dec/www.aalpha.net/wp-content/uploads/2021/07/support_service.png"
          />
          <SaasCard2
            title="Testing"
            description="We have a dedicated SaaS development team who has years of experience in the respective domain to develop a top-performing SaaS application for your business."
            imageUrl="https://cdn-cjmik.nitrocdn.com/UjszoEMIGzQLBmRYICliaPmdTnvQlovN/assets/images/optimized/rev-b7b1dec/www.aalpha.net/wp-content/uploads/2021/07/testing-1.png"
          />
        </div>
        <div className="px-20 bg-zinc-950 text-white py-20">
          <h2 className="text-4xl font-bold my-6">
            Ready to Get Started for SaaS Development?
          </h2>
          <p className="text-lg text-center text-zinc-400 ">
            As a prominent SaaS development company in India, Bellway Infotech
            is committed to providing complete SaaS development services to
            clients around the globe. Propel your business to new heights with
            our cutting-edge SaaS solutions.
          </p>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "block w-fit mx-auto mt-20 bg-red-500 rounded-sm px-2 py-2 text-white hover:bg-red-400 transition duration-300 ease-in-out no-underline"
                : "block w-fit mx-auto mt-20 bg-red-500 rounded-sm px-2 py-2 text-white hover:bg-red-400 transition duration-300 ease-in-out"
            }
          >
            Estimate Project
          </NavLink>
        </div>

        <div className="se">
          <h1 className="tag4 text-2xl mx-4 md:text-5xl font-bold ">
            Expertise Of Our Developers in SaaS Application
          </h1>
        </div>
        <p className="text-lg mx-10 mt-6 lg:text-center">
          At Bellway Infotech, we provide exceptional projects designed to
          enhance the value of our clients' businesses. Reach out to us to
          discuss your SaaS product development needs!
        </p>

        <div className="flex flex-wrap justify-center items-center mt-10">
          {listData.map((list, index) => (
            <SaasCard3
              key={index}
              title={list.title}
              imageUrl={list.imageUrl}
              listItems={list.items}
            />
          ))}
        </div>

        <Solutions />
        <div className="mt-24">
          <HomeSlider />
        </div>

        <div style={{ marginTop: "90px" }}>
          <FaqPage></FaqPage>
        </div>

        <Footer />
      </>
    </div>
  );
};

export default Saas;
