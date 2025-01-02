import React from "react";

const SaasCard2 = ({ title, description, imageUrl }) => {
  return (
    <div className=" flex items-center md:flex-row flex-col justify-center gap-4 rounded-lg m-4 p-2 lg:w-[30vw]">
      <div>
        {" "}
        <img
          loading="lazy"
          src={imageUrl}
          alt={title}
          className="w-20 h-15 object-fit rounded-t-lg"
        />
      </div>
      <div>
        <h2 className="text-xl  font-bold items-start lg:text-left mt-6">
          {title}
        </h2>
        <p className="text-gray-600 mt-2 text-left sm:text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SaasCard2;
