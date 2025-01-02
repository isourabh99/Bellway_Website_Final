import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
const FaqPage2 = () => {
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
    question: "What are the key principles of good UX/UI design?",
    answer:
      "Good UX/UI design is based on principles such as usability, accessibility, consistency, clarity, and simplicity. It focuses on understanding user needs and providing intuitive and delightful experiences."
  },
  {
    question: "How do you approach the UX/UI design process?",
    answer:
      "Our UX/UI design process typically involves research, ideation, wireframing, prototyping, user testing, and iteration. We collaborate closely with clients to understand their goals and create designs that meet their needs."
  },
  {
    question: "What tools and software do you use for UX/UI design?",
    answer:
      "We use a variety of tools and software for UX/UI design, including Adobe XD, Sketch, Figma, InVision, and prototyping tools like Marvel and Axure RP. We choose the best tools based on the specific requirements of each project."
  },
  {
    question: "Can you provide responsive design for mobile and web?",
    answer:
      "Yes, we specialize in creating responsive designs that adapt to different screen sizes and devices, including mobile phones, tablets, and desktop computers. Our designs are optimized for a seamless user experience across all platforms."
  },
  {
    question: "Do you offer usability testing services?",
    answer:
      "Yes, we offer usability testing services to evaluate the effectiveness and usability of designs. We conduct user testing sessions, gather feedback, and make iterative improvements to ensure that the final product meets user needs and expectations."
  },
  // Add more FAQ items here
];

export default FaqPage2;
