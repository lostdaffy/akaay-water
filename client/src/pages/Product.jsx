import React, { useState } from "react";
import { Link } from "react-router-dom";
import GetInTouch from "../components/global/GetInTouch";

const Products = () => {
  const [activeProduct, setActiveProduct] = useState("500ml");

  const products = {
    "500ml": {
      id: "500ml",
      name: "Akaay Water 500ml",
      title: "Smart Hydration Choice",
      subtitle: "Perfect for On-the-Go Lifestyle",
      image: "/images/500ml-b.png",
      heroImage: "/images/500ml.png",
      icon: "ri-goblet-line", // Added icon
      description:
        "Our 500ml bottle is perfectly sized for individual hydration needs. Whether you're at the office, gym, or traveling, this convenient size ensures you stay refreshed throughout your day.",
      features: [
        {
          text: "Ideal portion size for quick hydration",
          icon: "ri-water-flash-line",
        },
        {
          text: "Perfect for office, school & travel",
          icon: "ri-briefcase-line",
        },
        {
          text: "Lightweight and portable design",
          icon: "ri-flight-takeoff-line",
        },
        { text: "Easy-grip ergonomic bottle", icon: "ri-hand-heart-line" },
        { text: "Tamper-evident safety cap", icon: "ri-shield-check-line" },
        { text: "BPA-free food-grade packaging", icon: "ri-leaf-line" },
      ],
      // ... rest of your 500ml product data
    },
    "1000ml": {
      id: "1000ml",
      name: "Akaay Water 1000ml",
      title: "Complete Hydration Solution",
      subtitle: "Extended Refreshment for Active Lives",
      image: "/images/1000ml-b.png",
      heroImage: "/images/1000ml.png",
      icon: "ri-goblet-fill", // Added icon
      description:
        "Our 1000ml bottle provides extended hydration coverage for active individuals and families. Perfect for longer activities, workouts, and sharing moments with loved ones.",
      features: [
        {
          text: "Extended hydration for longer activities",
          icon: "ri-time-line",
        },
        { text: "Perfect for workouts and sports", icon: "ri-football-line" },
        { text: "Family-friendly sharing size", icon: "ri-group-line" },
        { text: "Durable wide-mouth design", icon: "ri-tools-line" },
        { text: "Enhanced grip technology", icon: "ri-hand-heart-fill" },
        { text: "Eco-friendly larger volume option", icon: "ri-recycle-line" },
      ],
      // ... rest of your 1000ml product data
    },
  };

  // Enhanced quality features with more specific icons
  const qualityFeatures = [
    {
      icon: "ri-drop-line",
      title: "7-Stage Purification",
      description:
        "Advanced multi-stage filtration removes impurities while retaining essential minerals",
      bgColor: "from-blue-500 to-blue-600",
    },
    {
      icon: "ri-shield-check-line",
      title: "Quality Assured",
      description:
        "Every batch undergoes rigorous testing and quality control processes",
      bgColor: "from-green-500 to-green-600",
    },
    {
      icon: "ri-seedling-line",
      title: "Natural Source",
      description:
        "Sourced from pristine locations and naturally filtered through mineral layers",
      bgColor: "from-emerald-500 to-emerald-600",
    },
    {
      icon: "ri-award-line",
      title: "Certified Safe",
      description:
        "ISO certified facilities with HACCP compliance and BIS approval",
      bgColor: "from-purple-500 to-purple-600",
    },
  ];

  // Add more benefits with icons
  const additionalBenefits = [
    {
      icon: "ri-truck-line",
      title: "Fast Delivery",
      desc: "Quick nationwide shipping",
    },
    {
      icon: "ri-customer-service-line",
      title: "24/7 Support",
      desc: "Round-the-clock customer service",
    },
    {
      icon: "ri-shield-check-line",
      title: "Secure Payment",
      desc: "Safe and encrypted transactions",
    },
    {
      icon: "ri-arrow-go-back-line",
      title: "Easy Returns",
      desc: "Hassle-free return policy",
    },
  ];

  const currentProduct = products[activeProduct];

  return (
    <>
      {/* Hero Section - Enhanced Responsiveness */}
      <div
        className="w-full h-[300px] xs:h-[350px] sm:h-[400px] md:h-[450px] lg:h-[400px] relative overflow-hidden flex items-center pt-16 sm:pt-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url(/images/56688.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left space-y-4 sm:space-y-6">
              <h1 className="text-gray-900 text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold uppercase leading-tight tracking-wide">
                About <br />
                <span className="text-[#301757] block">
                 Our Products
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Product Selector Section - Enhanced */}
      <div id="products" className="w-full bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with icon */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex justify-center mb-4">
              <i className="ri-bottle-line text-[#301757] text-5xl"></i>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Choose Your <span className="text-[#301757]">Perfect Size</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Select from our two premium bottle sizes, each designed for
              specific hydration needs and lifestyles.
            </p>
          </div>

          {/* Enhanced Product Tabs with icons */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-full p-2 inline-flex">
              <button
                onClick={() => setActiveProduct("500ml")}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeProduct === "500ml"
                    ? "bg-[#301757] text-white shadow-lg"
                    : "text-gray-600 hover:text-[#301757]"
                }`}
              >
                500ml Bottle
              </button>
              <button
                onClick={() => setActiveProduct("1000ml")}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeProduct === "1000ml"
                    ? "bg-[#301757] text-white shadow-lg"
                    : "text-gray-600 hover:text-[#301757]"
                }`}
              >
                1000ml Bottle
              </button>
            </div>
          </div>

          {/* Product Details */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Product Image */}
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="">
                <img
                  src={currentProduct.image}
                  alt={currentProduct.name}
                  className="w-full max-w-xs lg:max-w-sm mx-auto rounded-3xl"
                  style={{
                    filter: "drop-shadow(0 0.5rem 1rem rgba(0, 0, 0, 0.1))",
                  }}
                />
              </div>
            </div>

            {/* Product Info - Enhanced with icons */}
            <div className="order-1 lg:order-2 space-y-6">
              <div>
                <span className="inline-flex items-center gap-2 bg-[#301757] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  {currentProduct.specifications?.volume || "Premium"} • Premium
                  Quality
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                  {currentProduct.title}
                </h3>
                <p className="text-xl text-[#301757] font-semibold mb-4">
                  {currentProduct.subtitle}
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {currentProduct.description}
                </p>
              </div>

              {/* Enhanced Features with individual icons */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <i className="ri-checkbox-circle-line text-[#301757]"></i>
                  Key Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentProduct.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <i
                        className={`${
                          feature.icon || "ri-check-line"
                        } text-[#301757] text-xl mt-0.5`}
                      ></i>
                      <span className="text-gray-700">
                        {feature.text || feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Benefits Section */}
      <div className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-[#301757]">Akaay Water</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalBenefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#301757] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${benefit.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Your existing sections with enhanced icons... */}
      {/* (Include all your other sections here - Technical Specifications, Product Comparison, etc.) */}

      {/* Enhanced Quality Assurance Section */}
      <div className="w-full bg-[#301757] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Quality You Can Trust
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto">
              Every bottle of Akaay Water meets the highest standards of purity,
              safety, and quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div
                  className={`w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}
                >
                  <i className={`${feature.icon} text-[#301757] text-3xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Your existing GetInTouch component */}
      <GetInTouch />
    </>
  );
};

export default Products;
