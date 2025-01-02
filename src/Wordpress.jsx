import React from 'react'
import CNavbar from "./CNavbar";
import { Helmet } from "react-helmet";
import Solutions from "./Solutions";
import "./Form1.css";
import Footer from "./Footer";
import HomeSlider from "./HomeSlider";
import FaqPage from "./FaqPage";
import WordService from './WordService';
import BuildSites from './BuildSites';
import WordBenefits from './WordBenefits';
import {
    FaWordpressSimple,
    FaOpencart,
    FaBlogger,
    FaRegNewspaper,
} from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { GiPuzzle, GiQuickSlash } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { TbSpeedboat, TbSeo } from "react-icons/tb";
import { IoIosGlobe } from "react-icons/io";
import { FaShuffle, FaHandHoldingDollar } from "react-icons/fa6";
import { BsGraphUp } from "react-icons/bs";
import {
  MdOutlineAddShoppingCart,
  MdOutlineSettingsSuggest,
} from "react-icons/md";
import { AiOutlineProduct } from "react-icons/ai";
import { CgCommunity } from "react-icons/cg";
import { BsTranslate } from "react-icons/bs";
import { CiMobile3 } from "react-icons/ci";
import RotateImage from './RotateImage';




const Wordpress = () => {
      const services = [
        {
          title: "Custom Web Development",
          description: `We tailor WordPress websites to your business needs, ensuring seamless performance across devices and browsers. From engaging UI/UX to powerful functionalities, we handle every detail to bring your vision to life.`,
          icon: <CgWebsite />,
        },
        {
          title: "WordPress Theme Development",
          description:
            "Our skilled developers craft custom WordPress themes from scratch, designed specifically for your business, retina-friendly, and SEO-optimized. We’re also proficient in enhancing existing themes to suit your brand.",
          icon: <FaWordpressSimple />,
        },
        {
          title: "Plugin Development",
          description:
            "Leveraging the latest trends, we develop and integrate custom WordPress plugins to expand your website’s functionality. Our plugins are crafted to be bug-free and deliver seamless performance across all devices.",
          icon: <IoExtensionPuzzleOutline />,
        },
        {
          title: "Ecommerce Solution",
          description:
            "Transform your website into a dynamic online store with our WooCommerce integration. We add the right features and plugins to ensure a seamless, user-friendly eCommerce site that drives results.",
          icon: <FaOpencart />,
        },
        {
          title: "Feature Enhancement",
          description:
            "We enhance your website’s functionality by integrating third-party APIs for social media, maps, payments, video calls, SMS and email marketing, analytics, and more.",
          icon: <GiPuzzle />,
        },
        {
          title: "Speed Optimization",
          description:
            "With our WordPress Speed Optimization, we eliminate unnecessary scripts, optimize caching, compress images, and reduce DOM size to enhance your website’s speed, user experience, and SEO performance.",
          icon: <TbSpeedboat />,
        },
        {
          title: "Support and Maintenance",
          description:
            "Rely on our experts for ongoing website maintenance, bug fixes, version updates, and dedicated support tailored to your business needs. We’ll keep your site up-to-date, seamless, and user-friendly.",
          icon: <BiSupport />,
        },
        {
          title: "Multisite Development",
          description:
            "We specialize in building websites with multiple subdomains, unified plugins, internal networks, and separate content tables. Contact us for seamless, admin-friendly multisite development.",
          icon: <IoIosGlobe />,
        },
        {
          title: "Migration to WordPress",
          description:
            "We handle smooth migrations from any CMS to WordPress, taking all necessary steps to preserve important features and data throughout the transition.",
          icon: <FaShuffle />,
        },
      ];

      const buildSites = [
        {
          icon: <FaBlogger />,
          title: "Blogging Platform",
        },
        {
          icon: <BsGraphUp />,
          title: "Business Website",
        },
        {
          icon: <MdOutlineAddShoppingCart />,
          title: "E-commerce Website",
        },
        {
          icon: <AiOutlineProduct />,
          title: "Product Catalogue",
        },
        {
          icon: <CgCommunity />,
          title: "Online Community",
        },
        {
          icon: <BsTranslate />,
          title: "Multilingual Website",
        },
        {
          icon: <FaRegNewspaper />,
          title: "Digital Magazine",
        },
      ];

     const wordBenefits = [
       {
         icon: <CiMobile3 />,
         title: "Mobile-Friendly",
         description:
           "As mobile usage continues to dominate, our WordPress designers create fully responsive websites that deliver seamless experiences on smartphones, tablets, and desktops alike. Using optimized code and premium plugins, we ensure your site is fast, user-friendly, and designed to retain visitors on any device.",
       },
       {
         icon: <GiQuickSlash />,
         title: "Easy- Interface",
         description:
           "WordPress is ideal for non-technical writers and editors, featuring a user-friendly WYSIWYG (What You See Is What You Get) interface. This allows you to see the final look as you build and adjust layouts intuitively, without needing any coding knowledge.",
       },
       {
         icon: <MdOutlineSettingsSuggest />,
         title: "Greatly Customizable",
         description:
           "Developers can enhance WordPress layouts with user-friendly features like event calendars, live social media feeds, and image galleries. Additionally, they can integrate powerful tools like OptinMonster to boost email subscriptions, Google Analytics for user tracking, and Yoast SEO to optimize the site for search engines.",
       },
       {
         icon: <TbSeo />,
         title: "SEO Friendly",
         description:
           "Our expert WordPress developers use SEO-optimized coding structures and premium tools like Yoast SEO and All in One SEO to enhance your website’s visibility, helping it rank higher on search engine results pages (SERPs).",
       },
       {
         icon: <FaBlogger />,
         title: "Secure",
         description:
           "There are numerous paid and free options for securing your WordPress site with premium templates. Developers can leverage various plugins and themes to protect against threats like malware, DDoS attacks, SQL injections, cross-site scripting, and more.",
       },
       {
         icon: <FaHandHoldingDollar />,
         title: "Low Maintenance Cost",
         description:
           "WordPress is a budget-friendly CMS that minimizes setup, customization, and ongoing maintenance costs, making it an ideal choice for businesses looking to launch a powerful website without heavy investment.",
       },
     ];

  return (
    <div className='overflow-x-hidden'>
      <Helmet>
        <title>BELLWAY INFOTECH - Wordpress Development | Service</title>
        <meta
          name="description"
          content="Discover Bellway Infotech comprehensive MVP development services. From concept to deployment our team delivers best solutions for your business."
        />
      </Helmet>

      <CNavbar />
      <div className="containerx bg-black px-4 pt-10 sm:pt-12 md:pt-10 ">
        <div className="flex flex-col md:flex-row items-center w-full justify-between">
          <div className="md:w-1/2 md:text-left ml-0 lg:ml-10">
            <h1 className="text-5xl sm:text-3xl lg:text-4xl xl:text-5xl  font-bold mb-4 mt-14 md:mt-0 text-white">
              Wordpress Development...
            </h1>
            <p className="text-sm  my-6 text-left text-zinc-500 hover:text-zinc-50 transition-all duration-300">
              From concept to launch, Bellway Infotech offers complete WordPress
              development services tailored to your needs.
            </p>
            <p className="text-sm  my-6 text-left text-zinc-500 hover:text-zinc-50 transition-all duration-300">
              Whether you’re looking to build a brand-new website or enhance
              your current one, Bellway Infotech's developers have the
              experience and expertise to bring your vision to life. As a
              leading WordPress development company in India, we provide
              high-quality services and ensure smooth coordination across all
              phases of development and deployment.
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
          <div class="md:w-1/2  h-1/2 mb-9 flex justify-center items-center">
         
            <RotateImage></RotateImage>
          </div>
        </div>
      </div>

      <section className="p-6 sm:p-8 md:p-10 lg:p-20 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="w-full md:w-1/2 ">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-black font-bold">
            Top WordPress Developers in India
          </h1>

          <div>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-zinc-600">
              Our experienced WordPress website developers use the latest themes
              and plugins to craft spectacular business websites. We also build
              custom themes and plugins to develop advanced web applications.
              You will be in full control of your website and can easily manage
              its content and features – be it in the form of text, images,
              multimedia, or other types of data. As a leading WordPress
              development agency in India, we have delivered hundreds of custom
              WordPress websites for various businesses across the globe. Check
              out our extensive WordPress Portfolio to understand the quality of
              our work. Talk to us about your requirement or{" "}
              <b className="hover:text-red-500 transition-all duration-300">
                hire our experienced WordPress developers
              </b>{" "}
              to fast-forward your project.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <img
            loading="lazy"
            src="/images/wordpressdeveloper.webp"
            alt="no image"
            className="h-full"
          />
        </div>
      </section>

      <section className="bg-gray-100 text-black flex justify-center py-20 w-full items-center">
        <div className="w-[80%] ">
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl text-black sm:text-center lg:text-left">
            Our Range of WordPress Services
          </h1>

          <div className="flex flex-wrap gap-8 mt-10 justify-center w-full">
            {services.map((service, index) => (
              <WordService
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href="/contact"
              className="relative inline-flex items-center justify-center h-6 md:h-14 p-5 px-6 py-2 mb-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-3 border-red-500 rounded-full shadow-md group"
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
      </section>

      <section>
        <div className="p-20 ">
          <h1 className="text-black text-center text-4xl">
            Different Types of Sites We Build with WordPress
          </h1>
          <div className=" flex flex-col md:flex-row justify-evenly mt-6 items-center">
            {buildSites.map((site, index) => (
              <BuildSites key={index} icon={site.icon} title={site.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 text-black flex justify-center py-20 items-center">
        <div className="w-[80%]">
          <h1 className="text-black text-4xl">
            Benefits of WordPress Website Development?
          </h1>
          <p className="mt-4 text-lg">
            WordPress is a popular CMS choice for businesses seeking a modern,
            easily manageable website. Discover the advantages of choosing
            WordPress for your web development needs.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {wordBenefits.map((benefit, index) => (
              <WordBenefits
                key={index}
                title={benefit.title}
                description={benefit.description}
                icon={benefit.icon}
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href="/contact"
              className="relative inline-flex items-center justify-center h-6 md:h-14 p-5 px-6 py-2 mb-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-3 border-red-500 rounded-full shadow-md group"
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
      </section>

      <Solutions />
      <div className="mt-24">
        <HomeSlider />
      </div>

      <div style={{ marginTop: "90px" }}>
        <FaqPage></FaqPage>
      </div>

      <Footer />
    </div>
  );
}

export default Wordpress
