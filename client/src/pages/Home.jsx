import React from "react";
import Hero from "../components/home/Hero";
import AboutUs from "../components/home/AboutUs";
import GetInTouch from "../components/global/GetInTouch";
import NaturalWaterSection from "../components/home/NaturalWaterSection";
import Service from "../components/home/Service";
import ProductHighlight from "../components/home/ProductHighlight";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Service />
      <NaturalWaterSection />
      <ProductHighlight />
      <GetInTouch />
    </>
  );
};

export default Home;
