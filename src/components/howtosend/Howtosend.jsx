import React from "react";
import HowtosendData from "../../pages/HowtosendData";

const Howtosend = () => {
  return (
    <div className=" max-w-[1640px] mx-auto  bg-gray-300 text-center py-16">
      {/* HOWTOSENDPACAKGE-CONTENT */}
      <div className=" flex flex-col justify-center items-center">
        {/* HEADER */}
        <div className=" mt-8 mb-8 ">
          <h1 className=" font-semibold text-lg">HOW TO SEND PACKAGE</h1>
        </div>
        {/*  */}

        <div className="  flex flex-col md:flex-row lg:flex-row justify-center  text-center p-4  mt-8 gap-8">
          {HowtosendData.map(({ id, img, txt }) => {
            return (
              <div className="" key={id}>
                <div>
                  <img src={img} alt="" />
                </div>
                <div className="mt-4">
                  <p>{txt} </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* BUTTON */}
      <div className=" mt-8 ">
        <button className="bg-black text-white py-2 px-6 rounded-lg shadow-md hover:bg-transparent hover:text-black transition">
          SEND PACKAGE
        </button>
      </div>
    </div>
  );
};

export default Howtosend;
