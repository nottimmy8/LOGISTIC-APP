import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="fixed top-0 w-full z-10 bg-white shadow-md">
      <div className=" max-w-[1640px] h-20 mx-auto flex justify-between items-center p-4 px-10 ">
        {/* LOGO  */}
        <div className=" text-2xl font-bold ">LOGISTIC</div>
        {/*USER PAGE  */}
        <div className="space-x-2 hidden lg:flex items-center ">
          <button className=" bg-black text-white hover:bg-transparent hover:text-black  ">
            LOGIN
          </button>
          <button className="bg-white text-black hover:bg-black hover:text-white ">
            SIGNUP
          </button>
        </div>
        {/* MENU-ICON */}
        <div onClick={() => setNav(!nav)} className=" flex lg:hidden">
          <FiMenu />
        </div>
      </div>

      {/* MOBILE MENU */}

      {/* SIDE DRAWER MENU */}
      <div
        className={
          nav
            ? "fixed top-20 right-0 w-full h-[150px] bg-white z-10  duration-500 py-4 shadow-md lg:hidden "
            : "fixed top-[-100%] right-0 w-full h-[150px] bg-white z-10  duration-500 py-4 shadow-md lg:hidden "
        }
      >
        <div className=" flex flex-col items-center justify-between gap-4 ">
          <button className=" bg-black text-white hover:bg-transparent hover:text-black shadow-md ">
            LOGIN
          </button>
          <button className="bg-white text-black hover:bg-black hover:text-white shadow-md">
            SIGNUP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
