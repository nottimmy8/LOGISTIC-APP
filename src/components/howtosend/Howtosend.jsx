import React from "react";
import HowtosendData from "../../pages/HowtosendData";

const Howtosend = () => {
  return (
    <div className=" max-w-[1640px] mx-auto ">
      <div className=" max-h-[520px] bg-gray-300 ">
        {/* HOWTOSENDPACAKGE-CONTENT */}
        <div className="p-4">
          {/* HEADER */}
          <div className=" mt-4 ">
            <h1>HOW TO SEND PACKAGE</h1>
          </div>
          {/*  */}

          <div className="  flex flex-col lg:flex-row justify-center  mt-8">
            {HowtosendData.map(({ id, img, txt }) => {
              return (
                <div className="text-center">
                  <div>
                    <img src={img} alt="" />
                  </div>
                  <div>
                    <p>{txt} </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howtosend;
