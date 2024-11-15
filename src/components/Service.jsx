import React from "react";
import ServiceData from "../pages/ServicesData";

const Service = () => {
  console.log(ServiceData);
  return (
    <div className=" max-w-[1640px]  mx-auto px-4 py-16 ">
      {/* SERVICE CONTENT */}
      <div className=" flex flex-col items-center ">
        {/*  */}
        <div>
          <h2 className=" text-2xl text-black font-bold">WHAT WE DO</h2>
        </div>
        {/*  */}
        <div>
          {ServiceData.map(({ id, img: Icon, name, description }) => {
            return (
              <div key={id}>
                <div>{Icon && <Icon />} </div>
                <div>
                  <h1>{name} </h1>
                  <p>{description} </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Service;
