import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';

const FaqPage4 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  }

  return (
    <>
     <div className=" container mx-auto py-2 bg-gray-100 h-full shadow-lg p-6">
            <div className="max-w-full mx-auto">
                <h1 className="text-3xl font-bold mb-8 sm:mx-6 mx-9 text-black mt-8 text-center ">Frequently Asked Questions</h1>
                <div className="accordion sm:mt-12  md:mx-4 sm:mx-0">
                    {FAQ_DATA.map((faq, index) => (
                        <div
                            key={index}
                            className=" rounded-md overflow-hidden "
                        >
                            <div
                                className="accordion-title h-16 md:h-full  flex  text-center sm:text-xl font-semibold p-1 cursor-pointer bg-white hover:bg-gray-100 transition duration-300 md:flex justify-start  md:justify-between items-center"
                                onClick={() => toggleAccordion(index)}
                            >
                                <span className='py-3 pr-3'>{faq.question}</span>
                        
                                <FontAwesomeIcon icon={activeIndex === index ? faChevronUp : faChevronDown} className="text-gray-500 absolute   md:static right-7 mt-[1rem]  " />
                    
                            </div>
                            <div
                                className={`accordion-content p-3 my-2 bg-white transition-all duration-300 ${
                                    activeIndex === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                                }`}
                            >
                                <p className='text-black md:text-lg'>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
  );
}

const FAQ_DATA = [
  {
    question: "What is digital marketing?",
    answer:
      "Digital marketing refers to the use of digital channels, such as search engines, social media, email, and websites, to promote products or services and connect with target audiences."
  },
  {
    question: "Why is digital marketing important for my business?",
    answer:
      "Digital marketing is essential for reaching a broader audience, increasing brand visibility, driving website traffic, generating leads, and ultimately boosting sales and revenue."
  },
  {
    question: "What are the key components of a digital marketing strategy?",
    answer:
      "A comprehensive digital marketing strategy includes components such as search engine optimization (SEO), content marketing, social media marketing, email marketing, pay-per-click (PPC) advertising, and analytics."
  },
  {
    question: "How can SEO benefit my business?",
    answer:
      "SEO improves your website's visibility on search engines, driving organic traffic and increasing the chances of attracting potential customers who are actively searching for products or services like yours."
  },
  {
    question: "What is the role of social media in digital marketing?",
    answer:
      "Social media platforms provide a space to engage with your audience, build brand awareness, share content, and promote products or services. They are essential for creating a community and fostering customer loyalty."
  },
  {
    question: "How do you measure the success of digital marketing campaigns?",
    answer:
      "Success is measured using various metrics, including website traffic, conversion rates, click-through rates (CTR), engagement rates, return on investment (ROI), and other key performance indicators (KPIs)."
  },
  {
    question: "Can you help with email marketing campaigns?",
    answer:
      "Yes, we can help design, implement, and manage email marketing campaigns to nurture leads, retain customers, and promote your products or services effectively."
  },
  {
    question: "What is PPC advertising and how does it work?",
    answer:
      "PPC advertising is a model where advertisers pay a fee each time their ad is clicked. It involves bidding on keywords and displaying ads on search engine results pages or other platforms to drive targeted traffic to your website."
  },
  // Add more FAQ items here
];

export default FaqPage4;
