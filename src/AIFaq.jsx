import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';

const FaqPage = () => {
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
        question: "What is the future of AI?",
        answer:
            "The future of AI holds significant promise for advancements in various fields such as healthcare, education, transportation, and entertainment. We can expect more sophisticated and integrated AI systems that enhance human capabilities and address complex global challenges. However, this also requires ongoing attention to ethical implications and the development of robust regulatory frameworks to guide AI development and deployment."
    },
    {
        question: "How can AI benefit my business?",
        answer:
            " AI can benefit your business by enhancing efficiency, reducing operational costs, improving customer experiences, and providing valuable insights through data analysis. For example, AI can automate repetitive tasks, personalize customer interactions, and predict market trends, helping you make more informed decisions."
    },

    {
        question: "What is the implementation process for AI solutions in my company?",
        answer:
            "The implementation process typically involves several steps: initial consultation to understand your business needs, data collection and preparation, model development and training, integration of the AI solution into your existing systems, and continuous monitoring and optimization to ensure optimal performance."
    },

    {
        question: "Can your AI solutions be customized for my specific business needs?",
        answer:
            "Yes, our AI solutions are highly customizable. We work closely with you to understand your unique business requirements and tailor our AI models and services to fit your specific needs. This includes customizing algorithms, integrating with your existing infrastructure, and providing personalized support and training.."
    },

    {
        question: "How secure are your AI solutions?",
        answer:
            "We prioritize the security and privacy of our AI solutions. Our systems comply with industry standards and regulations, and we employ robust encryption methods, access controls, and regular security audits to protect your data. Additionally, we ensure transparency and provide detailed information about how our AI models make decisions."
    },
    {
        question: "What kind of support and maintenance do you offer post-implementation?",
        answer:
            "We offer comprehensive support and maintenance services post-implementation. This includes regular updates, performance monitoring, troubleshooting, and ongoing optimization to ensure your AI solutions continue to deliver value. Our support team is available to address any issues and provide assistance as needed to ensure the smooth operation of our AI systems."
    },
    {
        question: "What AI services does your company offer?",
        answer:
            "Our company offers a range of AI services, including natural language processing (NLP), computer vision, machine learning model development, predictive analytics, and AI-powered automation solutions. We cater to various industries such as healthcare, finance, retail, and manufacturing."
    },
];

export default FaqPage;