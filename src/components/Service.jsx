import React from "react";
import ServiceData from "../pages/ServicesData";

const Service = () => {
  return (
    <div className=" max-w-[1640px]  mx-auto px-4 py-16 ">
      {/* SERVICE CONTENT */}
      <div className=" flex flex-col items-center ">
        {/*  */}
        <div>
          <h2 className=" text-2xl text-black font-bold">WHAT WE DO</h2>
        </div>
        {/*  */}
        <div className="flex flex-wrap justify-center items-center  gap-4">
          {ServiceData.map(({ id, img: Icon, name, description }) => {
            return (
              <div
                className=" flex flex-col items-start w-[300px] h-auto"
                key={id}
              >
                <div className="rounded-lg shadow-lg py-8 px-8 w-[full] h-auto ">
                  {Icon && (
                    <Icon className=" text-black w-[250px] h-[250px]  md:w-[170px] md:h-[170px] lg:w-[170px] lg:h-[170px] " />
                  )}
                </div>
                <div className=" py-4 w-full h-auto ">
                  <h1>{name} </h1>
                  <p>{description} </p>
                </div>
              </div>
            );
          })}
          {/* BUTTON */}
          <div>
            <button>SEND PACKAGE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
