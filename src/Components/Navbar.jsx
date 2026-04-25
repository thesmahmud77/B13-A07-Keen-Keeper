import React from "react";
import MainContainer from "../Container/MainContainer";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <MainContainer>
      <div className="flexBetween">
        <div>
          <NavLink to={"/"} className={"text-2xl font-bold"}>
            <h1>
              Keen <span className="textPrimary">Keeper</span>
            </h1>
          </NavLink>
        </div>
        <div>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "bgPrimary text-white font-semibold px-5 py-2 rounded-[5px]"
                : "text-gray-500 font-semibold px-5 py-2 rounded-[5px]"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/timeline"}
            className={({ isActive }) =>
              isActive
                ? "bgPrimary text-white font-semibold px-5 py-2 rounded-[5px]"
                : "text-gray-500 font-semibold px-5 py-2 rounded-[5px]"
            }
          >
            Timeline
          </NavLink>
          <NavLink
            to={"/states"}
            className={({ isActive }) =>
              isActive
                ? "bgPrimary text-white font-semibold px-5 py-2 rounded-[5px]"
                : "text-gray-500 font-semibold px-5 py-2 rounded-[5px]"
            }
          >
            States
          </NavLink>
        </div>
      </div>
    </MainContainer>
  );
};

export default Navbar;
