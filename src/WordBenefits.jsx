import React from 'react'

const WordBenefits = ({ title, description, icon} ) => {
  return (
    <div className=" lg:w-[25vw]  p-2">
      <div className="flex items-center gap-4">
        <div className="text-2xl text-red-500 border-1 bg-white border-red-500 p-6 rounded-full hover:shadow-2xl  transition-all duration-500 ease ">
          {icon}
        </div>
        <h2 className="text-xl text-red-500 ">{title}</h2>
      </div>
      <p className="text-gray-500 mt-2 hover:text-black">{description}</p>
    </div>
  );
};

export default WordBenefits
