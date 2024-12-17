import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Repair from "../Repair/Repair";
import EletricalServices from "../ServicePages/EletricalRepairServices/EletricalServices";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <Repair />
      <EletricalServices/>
    </div>
  );
};

export default Home;
