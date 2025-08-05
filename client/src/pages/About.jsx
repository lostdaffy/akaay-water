import React from "react";
import { Link } from "react-router-dom";
import GetInTouch from "../components/global/GetInTouch";

const About = () => {
  const coreValues = [
    {
      icon: "ri-drop-line",
      title: "Purity First",
      description:
        "Every drop undergoes rigorous testing and multi-stage purification to ensure the highest quality standards.",
    },
    {
      icon: "ri-leaf-line",
      title: "Sustainability",
      description:
        "We're committed to eco-friendly practices, from sourcing to packaging, protecting our planet's future.",
    },
    {
      icon: "ri-heart-line",
      title: "Wellness Focus",
      description:
        "Our water is designed to support your health and vitality with balanced minerals and optimal pH levels.",
    },
    {
      icon: "ri-shield-check-line",
      title: "Trust & Safety",
      description:
        "ISO certified facilities and transparent processes ensure you can trust every bottle we produce.",
    },
  ];

  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description:
        "Started with a vision to provide premium purified water to health-conscious consumers.",
    },
    {
      year: "2019",
      title: "ISO Certification",
      description:
        "Achieved international quality standards certification for our manufacturing processes.",
    },
    {
      year: "2021",
      title: "Sustainable Initiative",
      description:
        "Launched comprehensive environmental programs and eco-friendly packaging solutions.",
    },
    {
      year: "2023",
      title: "Market Leadership",
      description:
        "Became the #1 premium water brand trusted by thousands of customers nationwide.",
    },
  ];

  const qualityStandards = [
    {
      icon: "ri-microscope-line",
      title: "Advanced Testing",
      description:
        "State-of-the-art laboratory testing ensures every batch meets our strict quality parameters.",
    },
    {
      icon: "ri-award-line",
      title: "ISO 22000 Certified",
      description:
        "International food safety management system certification guarantees consistent quality.",
    },
    {
      icon: "ri-shield-star-line",
      title: "HACCP Compliant",
      description:
        "Hazard Analysis Critical Control Points system ensures food safety at every stage.",
    },
    {
      icon: "ri-checkbox-circle-line",
      title: "BIS Approved",
      description:
        "Bureau of Indian Standards approval confirms adherence to national quality norms.",
    },
  ];

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
              <h1 className="text-gray-900 text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold uppercase leading-tight tracking-wide">
                About <br />
                <span className="text-[#301757] block">
                  Akaay Water
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section - Enhanced Responsiveness */}
      <div className="w-full bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
            {/* Left Side - Image */}
            <div className="order-2 lg:order-1">
              <img
                src="/images/235435.jpeg"
                className="w-full h-[250px] xs:h-[300px] sm:h-[350px] md:h-[400px] lg:h-auto rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl object-cover"
                alt="Akaay Water Mission"
              />
            </div>

            {/* Right Side - Content */}
            <div className="order-1 lg:order-2">
              <div className="space-y-6 sm:space-y-8">
                {/* Mission */}
                <div>
                  <div className="flex flex-col xs:flex-row items-start xs:items-center gap-3 mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#301757] rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="ri-compass-3-line text-white text-lg sm:text-xl"></i>
                    </div>
                    <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold text-[#301757]">
                      Our Mission
                    </h2>
                  </div>
                  <p className="text-gray-700 text-sm xs:text-base sm:text-lg leading-relaxed">
                    To revolutionize hydration by delivering ultra-pure,
                    mineral-balanced water that enhances wellness, supports
                    active lifestyles, and builds lasting trust with every sip.
                    We're committed to making premium quality accessible to all.
                  </p>
                </div>

                {/* Vision */}
                <div>
                  <div className="flex flex-col xs:flex-row items-start xs:items-center gap-3 mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#301757] rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="ri-eye-line text-white text-lg sm:text-xl"></i>
                    </div>
                    <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold text-[#301757]">
                      Our Vision
                    </h2>
                  </div>
                  <p className="text-gray-700 text-sm xs:text-base sm:text-lg leading-relaxed">
                    To become the world's most trusted water brand, setting new
                    standards for purity, sustainability, and customer
                    satisfaction while protecting our planet's precious water
                    resources for future generations.
                  </p>
                </div>

                {/* Values Preview */}
                <div className="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-[#301757] mb-3">
                    What Drives Us
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 sm:px-3 py-1 bg-[#301757] text-white text-xs sm:text-sm rounded-full">
                      Excellence
                    </span>
                    <span className="px-2 sm:px-3 py-1 bg-[#301757] text-white text-xs sm:text-sm rounded-full">
                      Transparency
                    </span>
                    <span className="px-2 sm:px-3 py-1 bg-[#301757] text-white text-xs sm:text-sm rounded-full">
                      Innovation
                    </span>
                    <span className="px-2 sm:px-3 py-1 bg-[#301757] text-white text-xs sm:text-sm rounded-full">
                      Sustainability
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section - Enhanced Responsiveness */}
      <div className="w-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Core <span className="text-[#301757]">Values</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto px-4">
              The principles that guide every decision we make and every drop we
              produce
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 text-center shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#301757] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <i className={`${value.icon} text-white text-xl sm:text-2xl`}></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quality & Certifications - Enhanced Responsiveness */}
      <div className="w-full bg-[#301757] py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
              Quality Assurance & Certifications
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto px-4">
              Our commitment to excellence is validated by international
              standards and certifications
            </p>
          </div>

          {/* Standards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {qualityStandards.map((standard, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <i className={`${standard.icon} text-[#301757] text-2xl sm:text-3xl`}></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                  {standard.title}
                </h3>
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                  {standard.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Team - Enhanced Responsiveness */}
      <div className="w-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Leadership <span className="text-[#301757]">Team</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto px-4">
              Meet the visionary leaders driving Akaay Water's mission of
              excellence
            </p>
          </div>

          {/* Leadership Message */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 shadow-lg sm:shadow-xl">
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#301757] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <i className="ri-user-star-line text-white text-2xl sm:text-3xl"></i>
              </div>
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Message from Leadership
              </h3>
              <blockquote className="text-base sm:text-lg lg:text-xl text-gray-700 italic leading-relaxed max-w-4xl mx-auto mb-4 sm:mb-6">
                "At Akaay Water, we believe that pure water is not just a
                product—it's a promise. A promise of quality, trust, and
                commitment to your wellbeing. Every decision we make, every
                process we implement, and every innovation we pursue is guided
                by our unwavering dedication to providing you with the purest
                hydration experience possible."
              </blockquote>
              <div className="mt-4 sm:mt-6">
                <div className="font-bold text-[#301757] text-base sm:text-lg">
                  Leadership Team
                </div>
                <div className="text-gray-600 text-sm sm:text-base">Akaay Water</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action - Enhanced Responsiveness */}
      <div className="w-full bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Ready to Experience{" "}
            <span className="text-[#301757] block xs:inline">Pure Excellence?</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed px-4">
            Join thousands of satisfied customers who trust Akaay Water for
            their daily hydration needs. Discover the difference that pure,
            premium water can make in your life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Link
              to="/contact"
              className="group border-2 border-[#301757] text-[#301757] font-bold py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-[#301757] hover:text-white flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Contact Us
              <i className="ri-phone-line text-lg sm:text-xl"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* Get in Touch */}
      <GetInTouch />
    </>
  );
};

export default About;
