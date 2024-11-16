import React from "react";
import ServiceData from "../../pages/ServicesData";

const Service = () => {
  return (
    <div className=" max-w-[1640px]  mx-auto px-4 py-16 ">
      {/* SERVICE CONTENT */}
      <div className=" flex flex-col items-center text-center">
        {/* HEADER */}
        <div>
          <h2 className=" text-2xl text-black font-bold mb-8">WHAT WE DO</h2>
        </div>
        {/* SERVICE ITEMS */}
        <div className="flex  flex-wrap justify-center items-center  gap-8">
          {ServiceData.map(({ id, img: Icon, name, description }) => {
            return (
              <div
                className=" flex flex-col text-center items-center p-6  max-w-[300px] h-auto"
                key={id}
              >
                {/* ICON */}
                <div className="rounded-lg shadow-lg py-8 px-8 w-[full] h-auto ">
                  {Icon && (
                    <Icon className=" text-gray-500 w-[300px] h-[250px]  lg:w-[130px] lg:h-[130px] " />
                  )}
                </div>
                {/* TEXT */}
                <div className="mt-4 text-left  ">
                  <h1 className=" text-lg font-semibold text-gray-800">
                    {name}{" "}
                  </h1>
                  <p className=" text-gray-600 mt-2">{description} </p>
                </div>
              </div>
            );
          })}
        </div>
        {/* BUTTON */}
        <div className=" mt-8">
          <button className="bg-black text-white py-2 px-6 rounded-lg shadow-md hover:bg-transparent hover:text-black transition">
            SEND PACKAGE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
