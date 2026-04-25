import React from "react";
import Navbar from "../../Components/Navbar";
import HomeHero from "./HomeHero";
import MainContainer from "../../Container/MainContainer";

const Home = () => {
  return (
    <MainContainer>
      <Navbar></Navbar>
      <HomeHero></HomeHero>
    </MainContainer>
  );
};

export default Home;
