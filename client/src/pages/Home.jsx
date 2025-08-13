import React from "react";
import Hero from "../components/home/Hero";
import AboutUs from "../components/home/AboutUs";
import GetInTouch from "../components/global/GetInTouch";
import NaturalWaterSection from "../components/home/NaturalWaterSection";
import Service from "../components/home/Service";
import ProductHighlight from "../components/home/ProductHighlight";
import ProcessSection from "../components/home/ProcessSection";
import Brands from "../components/about/brands";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Service />
      <ProcessSection />
      <ProductHighlight />
      <NaturalWaterSection />
      <Brands />
      <GetInTouch />
    </>
  );
};

export default Home;
