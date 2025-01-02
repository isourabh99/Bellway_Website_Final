// SaasCard3.js
import React from "react";
import { IoMdCheckmark } from "react-icons/io";

const SaasCard3 = ({ title, imageUrl, listItems }) => {
  return (
    <div className="bg-white rounded-lg p-6 m-4 w-full md:w-1/4">
      <img
        loading="lazy"
        src={imageUrl}
        alt={title}
        className="w-15 h-15 object-fit rounded-t-lg" // Ensure the image fits well
      />
      <h2 className="text-xl font-bold text-left mt-4">{title}</h2>
      <ul className="mt-4">
        {listItems.map((item, index) => (
          <li key={index} className="text-gray-600 mt-2 flex gap-2">
            <span className="text-2xl text-red-500">
              <IoMdCheckmark />
            </span>{" "}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SaasCard3;
