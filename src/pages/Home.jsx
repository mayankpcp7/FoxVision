import React from "react";
import HowWeWork from "../components/common/HowWeWork";
import Hero from "../components/common/Hero";
import Angebot from "../components/Angebot";
import WhatWeDo from "../components/WhatWeDo";
import Strategy from "../components/Strategy";
const Home = () => {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <Strategy/>
      <HowWeWork />
      <Angebot />
    </>
  );
};

export default Home;
