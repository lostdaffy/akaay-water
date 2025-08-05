import React from "react";
import { Link } from "react-router-dom";
import GetInTouch from "../components/global/GetInTouch";

const Home = () => {
  const productFeatures = [
    {
      title: "Advanced Purification Technology",
      description:
        "Multi-stage filtration ensures crisp, ultra-pure water with essential minerals for natural taste and wellness.",
    },
    {
      title: "Pure & Refreshing Hydration",
      description:
        "Balanced mineral content and quality processing deliver a naturally energizing, refreshing drink every time.",
    },
  ];

  const qualityStandards = [
    {
      icon: "ri-shield-check-line",
      title: "7-Stage Purification",
      description:
        "Advanced filtration removes impurities while retaining essential minerals for optimal health benefits.",
    },
    {
      icon: "ri-microscope-line",
      title: "Lab Tested Quality",
      description:
        "Every batch undergoes rigorous testing to ensure purity, safety, and consistent quality standards.",
    },
    {
      icon: "ri-leaf-line",
      title: "Natural Source",
      description:
        "Sourced from pristine mountain springs, naturally filtered through layers of rock and minerals.",
    },
    {
      icon: "ri-award-line",
      title: "ISO Certified",
      description:
        "Our facility meets international quality standards with proper certifications and compliance.",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Fitness Enthusiast",
      image: "/images/user1.jpg",
      rating: 5,
      text: "Akaay Water has become my go-to hydration choice during workouts. The taste is crisp and refreshing, and I love knowing it's properly purified.",
    },
    {
      name: "Rajesh Kumar",
      role: "Corporate Professional",
      image: "/images/user2.jpg",
      rating: 5,
      text: "I keep Akaay Water bottles at my office. The quality is consistent, and the 500ml size is perfect for meetings and daily hydration needs.",
    },
    {
      name: "Anita Desai",
      role: "Mother of Two",
      image: "/images/user3.jpg",
      rating: 5,
      text: "As a mom, I'm particular about what my family drinks. Akaay Water gives me peace of mind with its purity and safety standards.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div
        className="w-full min-h-screen relative overflow-hidden flex items-center pt-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)), url(/images/564655.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-left space-y-6 lg:space-y-6">
              {/* Badge/Tag */}
              <div className="inline-flex items-center px-4 py-2 bg-[#301757] bg-opacity-10 rounded-full">
                <span className="text-white text-sm font-semibold tracking-wide">
                  #1 PREMIUM WATER BRAND
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-gray-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold uppercase leading-tight tracking-wide">
                Fuel Your Life with{" "}
                <span className="text-[#301757] block sm:inline">
                  Pure HYDRATION
                </span>
              </h1>

              {/* Primary Description */}
              <p className="text-gray-800 text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-2xl">
                Experience the perfect blend of purity, taste, and energy. Every
                drop is crafted to revitalize your body and elevate your
                performance.
              </p>

              {/* Key Features */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#301757] rounded-full"></span>
                  <span className="text-gray-700 text-sm font-medium">
                    100% Pure
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#301757] rounded-full"></span>
                  <span className="text-gray-700 text-sm font-medium">
                    Rich Minerals
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#301757] rounded-full"></span>
                  <span className="text-gray-700 text-sm font-medium">
                    Mountain Source
                  </span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/product"
                  className="group bg-[#301757] text-white font-bold py-3 px-8 rounded-full text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-[#402060] flex items-center justify-center gap-2"
                >
                  Explore Products
                  <span className="text-xl group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Content - Images */}
            <div className="flex items-end justify-center lg:justify-end mt-8 lg:mt-0">
              <img
                src="/images/500ml.png"
                className="w-32 sm:w-40 md:w-48 lg:w-56"
                style={{
                  height: "auto",
                  filter: "drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.2))",
                }}
                alt="500ml bottle"
              />
              <img
                src="/images/1000ml.png"
                className="w-40 sm:w-48 md:w-56 lg:w-64"
                style={{
                  height: "auto",
                  filter: "drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.2))",
                }}
                alt="1000ml bottle"
              />
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="w-full min-h-screen bg-white flex items-center py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-10 lg:gap-20">
            {/* Left Side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src="/images/09889.jpeg"
                className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-lg rounded-xl shadow-lg object-cover"
                alt="Akaay Water Pure Hydration"
              />
            </div>

            {/* Right Side - Content */}
            <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-0">
              <div
                className="text-lg sm:text-xl font-bold mb-4"
                style={{ color: "#472185" }}
              >
                About Akaay Water
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Discover the Essence of Hydration
              </h1>
              <p className="text-base sm:text-lg lg:text-lg text-gray-700 mb-5 leading-relaxed">
                <span className="font-semibold" style={{ color: "#472185" }}>
                  Akaay Water
                </span>{" "}
                is dedicated to delivering ultra-pure, refreshing hydration that
                fits your active and modern lifestyle. Our water is carefully
                sourced and meticulously purified, ensuring every sip inspires
                wellness, clarity, and energy.
                <br />
                <br />
                We believe that great water is the foundation of a healthier,
                more vibrant you. Whether you're pursuing your fitness goals,
                working hard, or seeking balance, Akaay Water is crafted to be
                your daily companion—pure, reliable, and revitalizing.
              </p>

              {/* Features/Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
                <div className="flex items-start space-x-4">
                  <div>
                    <h3
                      className="font-semibold text-lg sm:text-xl mb-2"
                      style={{ color: "#472185" }}
                    >
                      <i className="ri-arrow-right-s-fill"></i> Ultra-Purified
                      Filtration
                    </h3>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div>
                    <h3
                      className="font-semibold text-lg sm:text-xl mb-2"
                      style={{ color: "#472185" }}
                    >
                      <i className="ri-arrow-right-s-fill"></i> Energizing
                      Hydration
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Environmental Commitment */}
      <div className="w-full bg-[#301757] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Environmental Process */}
          <div className="">
            <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
              Our Environmental Commitment Process
            </h3>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">
              {[
                "Sustainable Sourcing",
                "Eco-Friendly Processing",
                "Recyclable Packaging",
                "Carbon Footprint Reduction",
                "Water Conservation",
                "Waste Management",
                "Green Distribution",
              ].map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mb-2 sm:mb-3">
                      <span className="text-[#301757] font-bold text-sm sm:text-lg">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-white text-xs sm:text-sm font-medium text-center max-w-20 sm:max-w-24">
                      {step}
                    </p>
                  </div>
                  {index < 6 && (
                    <div className="hidden lg:block w-8 sm:w-12 h-0.5 bg-white bg-opacity-50 mx-2 sm:mx-4"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product Highlights */}
      <div className="bg-gray-100 min-h-screen py-8 sm:py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-12">
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4"
              style={{ color: "#301757" }}
            >
              Akaay Water
            </h1>
            <p className="text-lg sm:text-xl text-gray-700">
              Premium Purified Drinking Water Range
            </p>
          </div>

          {/* Cards Container */}
          <div className="flex flex-col xl:flex-row gap-6 lg:gap-8 justify-center items-center">
            {/* 500ml Water Bottle Card */}
            <div
              className="bg-[#f8f9fa] rounded-2xl lg:rounded-3xl p-4 sm:p-6 shadow-xl overflow-hidden w-full max-w-lg xl:max-w-2xl xl:w-1/2 border"
              style={{ borderColor: "#301757" }}
            >
              <div className="flex flex-col md:flex-row-reverse gap-4 sm:gap-6">
                {/* Image Container */}
                <div className="md:w-1/2 flex justify-center">
                  <div className="w-full max-w-xs sm:max-w-none">
                    <img
                      src="/images/500ml-b.png"
                      alt="Akaay Water 500ml"
                      className="w-full h-64 sm:h-72 lg:h-80 xl:h-96 object-cover rounded-xl"
                    />
                  </div>
                </div>

                {/* Content Container */}
                <div className="md:w-1/2 flex flex-col justify-between">
                  <div>
                    <span
                      className="inline-block text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4"
                      style={{ backgroundColor: "#301757" }}
                    >
                      500ml • Perfect Portion
                    </span>
                    <h2
                      className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 leading-tight"
                      style={{ color: "#301757" }}
                    >
                      Smart Hydration Choice
                    </h2>
                    <ul className="text-gray-600 text-sm sm:text-base space-y-2 mb-4">
                      <li className="flex items-start">
                        <span className="text-[#301757] mr-2">✓</span>
                        Ideal for on-the-go hydration
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#301757] mr-2">✓</span>
                        Perfect for office & school
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#301757] mr-2">✓</span>
                        7-stage purification process
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#301757] mr-2">✓</span>
                        BPA-free packaging
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#301757] mr-2">✓</span>
                        Balanced mineral content
                      </li>
                    </ul>
                    <div className="text-sm text-[#301757]">
                      <p className="font-medium">Best for:</p>
                      <p>Quick refreshment, travel, lunch breaks</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 1000ml Water Bottle Card */}
            <div
              className="bg-[#f8f9fa] rounded-2xl lg:rounded-3xl p-4 sm:p-6 shadow-xl overflow-hidden w-full max-w-lg xl:max-w-2xl xl:w-1/2 border"
              style={{ borderColor: "#301757" }}
            >
              <div className="flex flex-col md:flex-row-reverse gap-4 sm:gap-6">
                {/* Image Container */}
                <div className="md:w-1/2 flex justify-center">
                  <div className="w-full max-w-xs sm:max-w-none">
                    <img
                      src="/images/1000ml-b.png"
                      alt="Akaay Water 1000ml"
                      className="w-full h-64 sm:h-72 lg:h-80 xl:h-96 object-cover rounded-xl"
                    />
                  </div>
                </div>

                {/* Content Container */}
                <div className="md:w-1/2 flex flex-col justify-between">
                  <div>
                    <span
                      className="inline-block text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4"
                      style={{ backgroundColor: "#301757" }}
                    >
                      1000ml • Family Size
                    </span>
                    <h2
                      className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 leading-tight"
                      style={{ color: "#301757" }}
                    >
                      Complete Hydration Solution
                    </h2>
                    <ul className="text-gray-600 text-sm sm:text-base space-y-2 mb-4">
                      <li className="flex items-start">
                        <span className="text-[#301757] mr-2">✓</span>
                        Extended hydration coverage
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#301757] mr-2">✓</span>
                        Perfect for workouts & sports
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#301757] mr-2">✓</span>
                        7-stage purification process
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#301757] mr-2">✓</span>
                        BPA-free packaging
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#301757] mr-2">✓</span>
                        Balanced mineral content
                      </li>
                    </ul>
                    <div className="text-sm text-[#301757]">
                      <p className="font-medium">Best for:</p>
                      <p>Fitness activities, long journeys, family sharing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose us */}
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 py-8 lg:py-0">
            {/* Left Side - Content */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="max-w-2xl lg:max-w-none">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                  Why Choose{" "}
                  <span style={{ color: "#301757" }}>Akaay Water</span>
                  <br />
                  <span className="text-xl sm:text-2xl lg:text-3xl xl:text-3xl text-gray-600 font-normal block mt-2">
                    Purity You Can Taste. Trust You Deserve.
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                  Akaay Water is more than hydration—it's your daily dose of
                  clarity and wellness. Our premium process and commitment to
                  safety ensure every bottle delivers clean, refreshing water
                  you can feel good about, whether at home, work, or play.
                </p>

                {/* Key Benefits */}
                <div className="mb-6 sm:mb-8">
                  <h3
                    className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4"
                    style={{ color: "#301757" }}
                  >
                    What Sets Us Apart:
                  </h3>

                  <div className="space-y-3 sm:space-y-4">
                    {productFeatures.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-[#f8f9fa] rounded-lg hover:bg-[#e9ecef] transition-colors"
                      >
                        <div
                          className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: "#301757" }}
                        >
                          <i className="ri-check-line text-white text-sm sm:text-lg font-bold"></i>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4
                            className="font-bold mb-1 text-base sm:text-lg"
                            style={{ color: "#301757" }}
                          >
                            {feature.title}
                          </h4>
                          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="flex items-end bg-gray-100 rounded-3xl p-4 sm:p-6 lg:p-8">
                <img
                  src="/images/500ml.png"
                  className="w-32 sm:w-40 md:w-48 lg:w-56"
                  style={{
                    height: "auto",
                    filter: "drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.2))",
                  }}
                  alt="500ml bottle"
                />
                <img
                  src="/images/1000ml.png"
                  className="w-40 sm:w-48 md:w-56 lg:w-64"
                  style={{
                    height: "auto",
                    filter: "drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.2))",
                  }}
                  alt="1000ml bottle"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quality Standards & Process */}
      <div className="w-full bg-[#301757] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Process Flow */}
          <div className="">
            <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
              Our 7-Stage Purification Process
            </h3>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">
              {[
                "Source Water Collection",
                "Pre-Filtration",
                "Multi-Media Filtration",
                "Activated Carbon",
                "Reverse Osmosis",
                "UV Sterilization",
                "Final Quality Check",
              ].map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mb-2 sm:mb-3">
                      <span className="text-[#301757] font-bold text-sm sm:text-lg">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-white text-xs sm:text-sm font-medium text-center max-w-20 sm:max-w-24">
                      {step}
                    </p>
                  </div>
                  {index < 6 && (
                    <div className="hidden lg:block w-8 sm:w-12 h-0.5 bg-white bg-opacity-50 mx-2 sm:mx-4"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Customer Testimonials */}
      <div className="w-full bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#301757] bg-opacity-10 rounded-full mb-4">
              <span className="text-white text-sm font-semibold tracking-wide">
                CUSTOMER LOVE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              What Our Customers
              <span className="text-[#301757] block sm:inline">
                {" "}
                Say About Us
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Join thousands of satisfied customers who have made Akaay Water
              their trusted hydration partner.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i
                      key={i}
                      className="ri-star-fill text-yellow-400 text-lg"
                    ></i>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Customer Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#301757] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg sm:text-xl">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base sm:text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Get in Touch */}
      <GetInTouch />
    </>
  );
};

export default Home;
