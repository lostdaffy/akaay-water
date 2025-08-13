import React from "react";
import GetInTouch from "../components/global/GetInTouch";
import MainHeading from "../components/global/MainHeading";
import MissionVision from "../components/about/MissionVision";
import Brands from "../components/about/brands";
import Leadership from "../components/about/Leadership";

const About = () => {
  return (
    <>
      <MainHeading title="About" subtitle="Akaay Water" />
      <MissionVision />
      <Brands />
      <Leadership />
      <GetInTouch />
    </>
  );
};

export default About;
