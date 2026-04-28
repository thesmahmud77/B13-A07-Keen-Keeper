import React from "react";
import HomeHero from "./HomeHero";
import MainContainer from "../../Container/MainContainer";
import HomeFriends from "./HomeFriends";

const Home = () => {
  return (
    <MainContainer>
      <HomeHero></HomeHero>
      <HomeFriends></HomeFriends>
    </MainContainer>
  );
};

export default Home;
