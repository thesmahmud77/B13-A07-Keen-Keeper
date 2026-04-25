import React from "react";
import MainContainer from "../Container/MainContainer";
import { NavLink } from "react-router";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineMoreTime } from "react-icons/md";
import { TfiStatsUp } from "react-icons/tfi";

const Navbar = () => {
  return (
    <div className="flexBetween">
      <div>
        <NavLink to={"/"} className={"text-2xl font-bold"}>
          <h1>
            Keen <span className="textPrimary">Keeper</span>
          </h1>
        </NavLink>
      </div>
      <div className="flex items-center justify-between">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "bgPrimary text-white font-semibold px-5 py-2 rounded-[5px] flex items-center justify-center gap-1"
              : "text-gray-500 font-semibold px-5 py-2 rounded-[5px] flex items-center justify-center gap-1"
          }
        >
          <IoHomeOutline className="w-5 h-5" />
          <span>Home</span>
        </NavLink>
        <NavLink
          to={"/timeline"}
          className={({ isActive }) =>
            isActive
              ? "bgPrimary text-white font-semibold px-5 py-2 rounded-[5px] flex items-center justify-center gap-1"
              : "text-gray-500 font-semibold px-5 py-2 rounded-[5px] flex items-center justify-center gap-1"
          }
        >
          <MdOutlineMoreTime className="w-5 h-5" />
          Timeline
        </NavLink>
        <NavLink
          to={"/states"}
          className={({ isActive }) =>
            isActive
              ? "bgPrimary text-white font-semibold px-5 py-2 rounded-[5px] flex items-center justify-center gap-1"
              : "text-gray-500 font-semibold px-5 py-2 rounded-[5px] flex items-center justify-center gap-1"
          }
        >
          <TfiStatsUp className="w-5 h-5" />
          States
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
