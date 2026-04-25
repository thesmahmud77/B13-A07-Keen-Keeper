import React from "react";
import Navbar from "../../Components/Navbar";
import HomeHero from "./HomeHero";
import MainContainer from "../../Container/MainContainer";
import Footer from "../../Components/Footer";

const Home = () => {
  return (
    <MainContainer>
      <Navbar></Navbar>
      <HomeHero></HomeHero>
      <Footer></Footer>
    </MainContainer>
  );
};

export default Home;
