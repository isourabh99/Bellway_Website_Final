import React from "react";

const SaasCards = ({ title, description, imageUrl }) => {
  return (
    <div className=" m-4  rounded-lg  p-4 lg:w-[25vw]">
      <img
        loading="lazy"
        src={imageUrl}
        alt={title}
        className="w-15 h-15 object-fit rounded-t-lg"
      />
      <h2 className="text-xl font-bold items-start text-left mt-6">{title}</h2>
      <p className="text-gray-600 mt-2 ">{description}</p>
    </div>
  );
};

export default SaasCards;
