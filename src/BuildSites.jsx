import React from 'react';


const BuildSites = ({ icon, title }) => {
  return (
    <div className="bg-gray-100 flex gap-2 m-4 p-2 rounded-lg items-center lg:w-[10vw] justify-center hover:shadow-2xl transition-all duration-500 ease">
      <div className="text-red-500 text-5xl">{icon}</div>
      <h1 className="text-black text-md break-words">{title}</h1>
    </div>
  );
};

export default BuildSites;
