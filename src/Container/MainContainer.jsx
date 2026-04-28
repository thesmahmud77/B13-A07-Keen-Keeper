import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainContainer = ({ children }) => {
  return (
    <div className="max-w-7xl min-h-screen mx-auto">
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default MainContainer;
