import React from "react";
import HowWeWork from "../components/common/HowWeWork";
import Angebot from "../components/Angebot";
import WhatWeDo from "../components/WhatWeDo";
import Strategy from "../components/Strategy";
const Home = () => {
  return (
    <>
      <WhatWeDo />
      <Strategy/>
      <HowWeWork />
      <Angebot />
    </>
  );
};

export default Home;
