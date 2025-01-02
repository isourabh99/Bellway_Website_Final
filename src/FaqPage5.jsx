import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';

const FaqPage5 = () => {
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
    question: "What is the future of ERP services?",
    answer:
      "The future of ERP services holds significant promise for advancements in various fields such as finance, human resources, supply chain management, and customer relationship management. We can expect more sophisticated and integrated ERP systems that enhance business capabilities and address complex organizational challenges. However, this also requires ongoing attention to data security, privacy concerns, and the development of robust regulatory frameworks to guide ERP development and deployment."
  },
  {
    question: "Why is financial management important for my business?",
    answer:
      "Financial management is essential for ensuring the efficient and effective use of financial resources, maintaining financial stability, and achieving long-term business success. It involves planning, organizing, directing, and controlling financial activities such as budgeting, forecasting, and managing accounts. Effective financial management helps businesses optimize resource allocation, improve cash flow, reduce costs, and make informed decisions, ultimately boosting profitability and growth. It also ensures compliance with financial regulations and provides accurate insights into the company's financial health."
  },
  {
    question: "What are the key components of CRM?",
    answer:
      "A comprehensive CRM strategy includes components such as sales force automation, marketing automation, customer service management, contact management, data analytics, and integration. These elements ensure that a business effectively manages its customer interactions, enhances customer satisfaction, and achieves its sales and marketing goals."
  },
  {
    question: "How can SCM benefit my business?",
    answer:
      "SCM (Supply Chain Management) optimizes your business's supply chain processes, enhancing efficiency and reducing costs by streamlining procurement, inventory management, logistics, and distribution. This ensures timely delivery of products, improves customer satisfaction, and increases operational agility to meet market demands effectively."
  },
  {
    question: "What is the role of social media in ERP services?",
    answer:
      "Social media in ERP services plays a crucial role in enhancing communication, collaboration, and knowledge sharing within an organization. It facilitates internal networking, enables real-time updates on project statuses, and promotes team collaboration across different departments. Social media also serves as a platform for sharing company news, updates on ERP implementations, and best practices, fostering a culture of transparency and engagement among employees."
  },
  {
    question: "How do you measure the success of mobile ERP implementations?",
    answer:
      "Success in mobile ERP implementations is measured using metrics such as user adoption rates, system uptime and availability, response times, data accuracy, cost savings through process efficiencies, and overall user satisfaction. These metrics help evaluate the effectiveness of mobile ERP solutions in improving productivity, enhancing decision-making, and achieving business objectives."
  },
  {
    question: " Can you explain the role of ERP in optimizing business processes?",
    answer:
      "ERP (Enterprise Resource Planning) integrates core business processes such as finance, HR, and supply chain management into a unified system. It streamlines operations, enhances efficiency, and provides real-time insights to support informed decision-making."
  },
  {
    question: "How does CRM enhance sales and marketing efforts?",
    answer:
      "CRM systems streamline sales processes, automate marketing campaigns, and provide analytics to optimize customer targeting and increase conversion rates."
  },
  // Add more FAQ items here
];

export default FaqPage5;
