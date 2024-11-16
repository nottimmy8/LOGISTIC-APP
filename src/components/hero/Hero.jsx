import React from "react";

const Hero = () => {
  return (
    <div className=" max-w-[1640px]  mx-auto ">
      <div className=" max-h-[620px] relative ">
        {/* overlay */}
        <div className=" absolute w-full h-full max-h-[620px] bg-black/40 flex flex-col justify-center items-center">
          {/* HERO CONTENT */}
          <div className=" text-gray-200">
            <h1 className=" px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ">
              DELIVERIES, <span>SIMPLIFIED.</span>
            </h1>
          </div>
          {/* TRACKING MENU */}
          <div></div>
        </div>
        <img
          className="w-full max-h-[620px] object-cover "
          src="https://images.pexels.com/photos/7843955/pexels-photo-7843955.jpeg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
