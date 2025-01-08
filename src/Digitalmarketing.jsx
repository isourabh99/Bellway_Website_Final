import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Helmet } from "react-helmet";
// import image9 from './assets/image9.png'
// import image10 from './assets/image10.png'
// import image11 from './assets/image11.png'
// import image12 from './assets/image12.png'
// import image13 from './assets/image13.png'
// import image14 from './assets/image14.png'
// import image15 from './assets/image15.png'
// import image16 from './assets/image16.png'
// import image17 from './assets/image17.png'
// import image18 from './assets/image18.png'
// import image19 from './assets/image20.png'
// import image20 from './assets/image21.png'
// import image21 from './assets/image22.png'
// import image22 from './assets/image23.png'
// import image23 from './assets/image24.png'
// import image24 from './assets/image25.png'
import CNavbar from './CNavbar'
import './Form1.css'


import Footer from './Footer'

// import FaqPage4 from './FaqPage4';
import PopupForm from './PopupForm';
import Slider from 'react-slick';
import Solutions from './Solutions'
import HomeTestimonials from './HomeTestimonials'
import HomeFaq from './HomeFaq'
import HomeSlider from './HomeSlider'
import MobileCard from './MobileCard';

import laravel from './assets/laravel.png';
import flutter from './assets/flutter.png';
import js from './assets/js.png';
import php from './assets/php.png';
import magneto from './assets/magneto.png';
import react from './assets/react.png';
import vue from './assets/vue.png';
import python from './assets/python.png';
import net from './assets/net.png';
import android from './assets/androidapp.png';
import crm from './assets/apple.png';
import apple from './assets/node1.jpeg';
import FaqPage4 from './FaqPage4';

const data = [
  {
      name: 'SEO',
      text: "Search Engine Optimization (SEO) involves strategically enhancing a website or online content to boost its visibility and ranking in search engine results pages (SERPs). Key features of SEO include keyword research to identify relevant search terms, on-page optimization such as improving meta tags and content quality, and off-page optimization involving backlinks from authoritative sites. Technical SEO focuses on improving site speed, mobile-friendliness, and overall user experience. Unique aspects of SEO also encompass local SEO to target geographic-specific searches and utilizing analytics to continuously refine strategies. Effective SEO helps attract organic traffic, increasing a website's reach and potential for conversions."
  },
  {
      name: 'Facebook Advertising ',
      text: "Facebook Advertising is a powerful digital marketing platform developed by Facebook that allows businesses to reach their target audience through highly targeted and engaging advertisements. This platform leverages Facebook’s extensive user data, enabling businesses to create ads that are tailored to specific demographics, interests, behaviors, and even locations. This precise targeting ensures that ads are shown to users who are most likely to be interested in the product or service being advertised, increasing the chances of conversion and maximizing the return on investment (ROI) for businesses."
  },
  {
      name: "Google Ad's",
      text: "Google Ads, previously known as Google AdWords, is an online advertising platform created by Google. It enables businesses to display ads on Google's search engine results pages (SERPs), websites, YouTube, and other platforms within the Google Network. Key features include pay-per-click (PPC) advertising, where businesses only pay when users click on their ads, and extensive targeting options such as keywords, demographics, location, and device type. Google Ads also offers various ad formats, including text, display, video, and shopping ads. With comprehensive analytics and reporting tools, businesses can track and optimize their ad performance, making Google Ads a versatile and powerful tool for digital marketing."
  },
{
  name: 'Email Marketing',
      text: "Email marketing is a highly effective digital marketing strategy that involves sending targeted emails to prospects and customers. Its main goals are to promote products or services, build relationships, and enhance customer loyalty. Key components include personalized content, segmented email lists, compelling subject lines, and clear calls-to-action. Strategies for success involve regular newsletters, promotional offers, and automated email campaigns such as welcome series, cart abandonment reminders, and post-purchase follow-ups. By leveraging analytics and A/B testing, businesses can continuously optimize their email marketing efforts, ensuring higher engagement rates and a stronger connection with their audience."
},
{
  name: 'SMO',
      text: 'Social Media Optimization (SMO) is the process of enhancing a website and its content to encourage sharing and engagement across social media platforms. As a crucial aspect of digital marketing, SMO aims to generate publicity and drive traffic by creating engaging, shareable content. Key components include optimizing social media profiles, using relevant keywords, and integrating social sharing buttons. Effective strategies involve posting regularly, using visual content, interacting with followers, and leveraging analytics to measure performance. By fostering active social media presence and encouraging user participation, SMO helps increase brand awareness and reach a wider audience.'
}
];

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

const Digitalmarketing = () => {

  const [activeTab, setActiveTab] = useState(0);

  const changeTabOnClick = (index) => {
      setActiveTab(index);
  };

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  }


  const cardsData = [
    { title: "Search Engine Optimization", description: "Our SEO experts are working continuously on the latest strategies so that your business ranks on top. We follow every strategy that can be relevant to your business." },
    { title: "Social Media Management", description: "We will handle all your social media profiles and respond to customers 24/7 for any query. Experts in social media marketing strategies and crafting interesting content that goes with the trend and aligns with the customer." },
    { title: "Google My Business", description: "Google My Business listing is a free tool that small businesses can use to create and manage their Google business information when customers find a business in Google Search and Maps. It helps companies attract new customers and share what makes them special." },
    { title: "Paid Marketing", description: "A paid ad helps you to target a selected demographic, and you could be as unique or as vast as you’d like to. When making an ad, you set a budget and bid for every click or thousand impressions that your ad can receive." },
    { title: "Pay-Per-Click", description: "In an ideal world, combined SEO and PPC advertising strategies work best at driving targeted results. Integrated SEO and PPC campaigns offer maximum visibility, drive relevant traffic and deliver long-term benefits. However, if you have a short window to promote your brand offerings and make an impact on your niche market, pay per click internet marketing might be the best option for you." },

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

  const solutionsData = [
    { image: "https://lh3.googleusercontent.com/nupo3HWMIUeuul9r2IBSfpBo568bL-STG9nA71dUuW97DnhAXFgm2WWjczhTFqRHQZRf5VA-_PmxIZaIAXhOUrzfr5unPjFuW9za=w1200", alt: "Laravel", title: "Keyword planner" },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZNDcc0OZ4X80cGb1fY-ajApTIll1f13jtow&s", alt: "Flutter", title: "Semrush" },
    { image: "https://static.vecteezy.com/system/resources/thumbnails/008/506/590/small_2x/3d-seo-search-engine-optimization-concept-3d-rendering-png.png", alt: "JavaScript", title: "seo optimer" },
    { image: "https://w7.pngwing.com/pngs/47/910/png-transparent-google-analytics-hd-logo-thumbnail.png", alt: "PHP", title: "Google Analytics (GA4)" },
    { image: "https://logowik.com/content/uploads/images/google-search-console4537.logowik.com.webp", alt: "Magneto", title: "Google Search Console" },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDyCbxbpGPYSb74UDspcXFpT3GLtCW3uBDjQ&s", alt: "React", title: "Google Tag Manager" },
    { image: "https://e7.pngegg.com/pngimages/373/519/png-clipart-bing-ads-yahoo-search-bing-webmaster-tools-web-search-engine-nun-angle-bing-thumbnail.png", alt: "Python", title: "Microsoft Bing Webmaster " },
    { image: "https://ps.w.org/schema/assets/icon-256x256.png?rev=1750173", alt: ".NET", title: "Schema Markup" },
    { image: "https://e7.pngegg.com/pngimages/322/408/png-clipart-orange-computer-icon-logo-blogger-computer-icons-google-website-blogger-logo-svg-icon-miscellaneous-text-thumbnail.png", alt: "Android App", title: "Blog Submission " },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGfRhffl9ZF7dvuEaGULvwiyUeexEVXGrQTQ&s", alt: "CRM", title: "Infographic Creation " },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPOAeej0zchqIX7-el2iL63jgPJq363TPVMA&s", alt: "Vue.js", title: "Infographics Submissions" },
    { image: "https://www.seocheckin.com/wp-content/uploads/2016/09/PDF-Submission-list.jpg", alt: "iOS", title: "PDF Submissions" },
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





  return (
    <>
      <Helmet>
        <title>
          BELLWAY INFOTECH - Digital Business Transformation| Service
        </title>
        <meta
          name="description"
          content="At Bellway Infotech, a digital transformation strategy is essential for modern businesses to innovate, streamline operations, and enhance customer experiences effectively."
        />
      </Helmet>
      <CNavbar />
      <div class="containerx bg-black px-4 py-10 sm:py-12 md:py-10 ">
        <div class="flex flex-col md:flex-row items-center w-full justify-between">
          <div class="md:w-1/2 md:text-left ml-0 lg:ml-10">
            <h1 class="text-5xl sm:text-3xl lg:text-4xl xl:text-5xl  font-bold mb-4 mt-14 text-white">
              Digital Marketing...
            </h1>
            <p className="text-sm  my-6 text-left text-zinc-500 hover:text-zinc-50 transition-all duration-300">
              At Bellway Infotech, our digital marketing services are crafted to
              boost your brand visibility, engage your target audience, and
              drive measurable results. We offer a strategic mix of search
              engine optimization (SEO), social media marketing, content
              creation, pay-per-click advertising (PPC), and email marketing.
              Our team analyzes your market and tailors campaigns to deliver
              impactful growth and ROI. Whether you’re looking to enhance brand
              awareness, increase leads, or engage with a specific audience
              segment, we bring expertise and creativity to elevate your brand’s
              online presence. Partner with us to transform your digital
              strategy and drive meaningful growth.
            </p>

            <a
              href="/contact"
              class="relative inline-flex items-center justify-center h-10 mt-8 md:h-14 p-5 px-6 py-2  overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-3 border-red-500 rounded-full shadow-md group"
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
            {/* <h3 class="sm:text-2xl text-white">
              <Link to="/" class="text-red-600 hover:underline">Home</Link> /Digital Marketing
            </h3> */}
          </div>
          <div class="md:w-1/2  mb-9 flex justify-center items-center mt-10 text-right">
            <img
              loading="lazy"
              src="/images/digmark.png"
              alt="About Image"
              class="w-full md:w-[55%] hover:scale-105 transition-all duration-500 ease-in-out h-auto"
            />
          </div>
        </div>
      </div>

      <div className="se">
        <h1 className="tag4 md:text-5xl text-3xl font-bold">
          Digital Marketing{" "}
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
            consistently acumen into latest Digital Marketing Technologies for
            providing nothing <br />
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

   

      <div className="mt-16">{/* <HomeTestimonials /> */}</div>

      <div style={{ marginTop: "90px" }}>
        <FaqPage4></FaqPage4>
      </div>

      <Footer />
    </>
  );
}

export default Digitalmarketing
