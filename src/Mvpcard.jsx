import React, { useState } from "react";
import "./Mobile.css"; // Assuming you have some basic styling

const data = [
  {
    name: "In-Depth Discovery",
    text: "We start with an extensive research phase to deeply understand your business goals, user expectations, and the competitive landscape. This ensures that every feature we prioritize is aligned with market demands, user needs, and your overall vision. Our discovery process also identifies potential risks and opportunities, laying the foundation for a strategic and impactful MVP development. By focusing on comprehensive insights, we ensure the final product addresses current challenges while being adaptable to future trends.",
  },
  {
    name: "Collaborative Development",
    text: "We believe in building partnerships, not just products. Through open dialogue and consistent feedback loops, we empower you to make informed decisions throughout the development process. From concept ideation to feature integration, our collaborative approach ensures your vision is seamlessly translated into a functional, market-ready MVP. This synergy between our teams fosters innovation, minimizes misunderstandings, and keeps the project aligned with your strategic objectives and evolving user needs.",
  },
  {
    name: "Agile Process",
    text: "Our development workflow is driven by agility, enabling us to adapt quickly to changing requirements and incorporate real-time feedback. By breaking the project into manageable sprints, we deliver incremental progress and maintain transparency, ensuring alignment with your business objectives at every stage. This approach reduces time-to-market, enhances collaboration, and ensures a high-quality product that meets dynamic business demands efficiently.",
  },
  {
    name: "Broad Tech Capabilities",
    text: "Leveraging expertise across diverse technologies, including web, mobile, AI, IoT, and cloud computing, we create innovative and reliable solutions tailored to your unique needs. Whether it's building scalable architecture or integrating advanced features, our technical prowess ensures a robust and future-ready MVP. We continuously explore emerging trends and tools to provide forward-thinking solutions that keep you ahead in the competitive landscape.",
  },
  {
    name: "Business-Focused Approach",
    text: "We align every decision with your business goals, ensuring the MVP isn't just a product but a strategic tool to accelerate growth. Our team works closely with you to craft a solution that balances user needs, technical feasibility, and cost-effectiveness, delivering value without compromise. By prioritizing outcomes over outputs, we help you achieve sustainable success and foster long-term innovation within your organization.",
  },
];



const Mvpcard = () => {
  const [activeTab, setActiveTab] = useState(0);

  const changeTabOnClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs-body ">
      <div className="flex w-100 justify-center items-center">
        <TabHeader data={data} click={changeTabOnClick} activeId={activeTab} />
      </div>
      <div className>
        <TabContent data={data} activeId={activeTab} />
      </div>
    </div>
  );
};

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

export default Mvpcard;
