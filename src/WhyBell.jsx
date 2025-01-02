import React, { useState } from "react";

const WhyBell = () => {
  const [selectedButton, setSelectedButton] = useState(1);

  const buttonClickHandler = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  };

  return (
    <div className="mt-2 w-[100vw] px-4 lg:px-8 py-4 overflow-hidden">
      {/* Main Flex Container */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Part */}
        <div className="p-4 lg:p-8 rounded-md flex-1">
          <h1 className="text-left text-xl font-bold text-gray-800 mb-4 md:text-3xl lg:text-4xl xl:text-5xl">
            Why should you hire Bellway Infotech?
          </h1>

          {/* Button Group */}
          <div className="flex flex-col md:flex-row gap-2">
            {[
              "Skilled Professional",
              "Innovative Strategy",
              "Consumer Help Service",
            ].map((text, index) => (
              <button
                key={index}
                onClick={() => buttonClickHandler(index + 1)}
                aria-pressed={selectedButton === index + 1}
                className={`bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  selectedButton === index + 1 && "bg-black"
                }`}
              >
                {text}
              </button>
            ))}
          </div>

          {/* Content Section */}
          <div className="mt-4 text-sm md:text-base text-gray-700 overflow-y-auto max-h-[130px]">
            {selectedButton === 1 && (
              <p>
                As a premier application development company, we ensure that our
                proficient mobile app developers are with you every step of the
                way, from inception to completion. Our approach begins with a
                deep understanding of your specific demands and requirements. We
                then identify the most suitable resources, devise potential
                solutions, and implement effective methods to enhance your
                business through our comprehensive app development services.
              </p>
            )}
            {selectedButton === 2 && (
              <p>
                With our deep understanding of our clients' goals, we bring a
                high level of expertise to our designs. We are committed to
                crafting unique user interfaces that are not only visually
                captivating but also perfectly aligned with the specific needs
                of our clients' businesses.
              </p>
            )}
            {selectedButton === 3 && (
              <p>
                We provide support and maintenance via email and 24/7 phone
                calls. Our team is always ready to assist you, ensuring your
                application operates seamlessly and efficiently, even
                post-launch.
              </p>
            )}
          </div>
        </div>

        {/* Right Part */}
        <div className="flex justify-center items-center  w-full lg:w-1/2">
          <img
            loading="lazy"
            src="https://images.unsplash.com/photo-1610097453820-0c3c8aac0202?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Professional team working at Bellway Infotech"
            className="w-full xl:w-[70%] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyBell;
