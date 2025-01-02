import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';

const FaqPage1 = () => {
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
  )
}

const FAQ_DATA = [
  {
    question: "What are the benefits of having a website?",
    answer:
      "Having a website can increase your online presence, improve credibility, provide accessibility to a wider audience, and serve as a platform for marketing and communication."
  },
  {
    question: "How long does it take to develop a website?",
    answer:
      "The time to develop a website varies based on its complexity, features, and design requirements. Simple websites can be developed in a few weeks, while more complex ones may take several months."
  },
  {
    question: "What technologies are commonly used in web development?",
    answer:
      "Common technologies used in web development include HTML, CSS, JavaScript, and various web development frameworks and libraries such as React, Angular, and Vue.js."
  },
  {
    question: "Do you offer e-commerce website development services?",
    answer:
      "Yes, we offer e-commerce website development services tailored to your specific business needs. Our solutions include features such as product listings, shopping carts, payment gateways, and order management systems."
  },
  {
    question: "Can you provide ongoing maintenance and support for my website?",
    answer:
      "Yes, we offer ongoing maintenance and support services to ensure your website remains up-to-date, secure, and functioning properly. Our team can assist with updates, backups, security patches, and technical support."
  },
  
];

export default FaqPage1;
