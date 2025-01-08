import React from "react";

const SaasCard2 = ({ title, description, imageUrl }) => {
  return (
    <div className=" flex items-center md:flex-row flex-col justify-between gap-4 rounded-lg m-4 p-2 lg:w-[35vw] ">
      <div>
        {" "}
        <img
          loading="lazy"
          src={imageUrl}
          alt={title}
          className="w-[15vh] md:w-[25vh] object-fit"
        />
      </div>
      <div>
        <h2 className="text-xl  font-bold items-start md:text-left mt-6">
          {title}
        </h2>
        <p className="text-gray-600 mt-2 md:text-left text-justify">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SaasCard2;
