// WordService.js
import React from "react";

const WordService = ({ title, description, icon} ) => {
  return (
    <div className="lg:w-[30%] sm:w-full  p-2 ">
      <div className="flex items-left gap-4">
        <div className="text-2xl text-red-500">{icon}</div>
        <h2 className="text-xl text-left ">{title}</h2>
      </div>
      <p className="text-gray-500 mt-2 hover:text-black">{description}</p>
    </div>
  );
};

export default WordService;
