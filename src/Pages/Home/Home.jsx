import React from "react";
import Navbar from "../../Components/Navbar";
import HomeHero from "./HomeHero";
import MainContainer from "../../Container/MainContainer";
import Footer from "../../Components/Footer";
import HomeFriends from "./HomeFriends";

const Home = () => {
  return (
    <MainContainer>
      <Navbar></Navbar>
      <HomeHero></HomeHero>
      <HomeFriends></HomeFriends>
      <Footer></Footer>
    </MainContainer>
  );
};

export default Home;
