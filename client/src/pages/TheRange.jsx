import React from "react";
import GetInTouch from "../components/global/GetInTouch";
import ProductHighlight from "../components/home/ProductHighlight";
import MainHeading from "../components/global/MainHeading";

const TheRange = () => {
  return (
    <>
      <MainHeading title="Product" subtitle="Range" />
      <ProductHighlight />
      <GetInTouch />
    </>
  );
};

export default TheRange;
