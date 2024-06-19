import React from "react";
import Design from "../components/Design";
import DesignStrategy from "../components/DesignStrategy";
import Frequently from "../components/Frequently";
import CorporateIdentity from "../components/CorporateIdentity";
import Hero from "../components/common/Hero";

const Offer = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <CorporateIdentity />
      <Design />
      <DesignStrategy />
      <Frequently />
    </div>
  );
};

export default Offer;
