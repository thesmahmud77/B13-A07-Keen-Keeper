import React from "react";
import MainContainer from "../Container/MainContainer";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <MainContainer>
      <div className="flexBetween">
        <div>
          <NavLink>
            <h1>
              Keen <span className="bg-primary">Keeper</span>
            </h1>
          </NavLink>
        </div>
        <div>
          <NavLink>Home</NavLink>
          <NavLink>Timeline</NavLink>
          <NavLink>States</NavLink>
        </div>
      </div>
    </MainContainer>
  );
};

export default Navbar;
