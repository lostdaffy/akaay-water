import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import GetInTouch from "../components/global/GetInTouch";
import MainHeading from "../components/global/MainHeading";

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const slideInLeft = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const slideInRight = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const scaleIn = {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

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

  return (
    <>
      <MainHeading title="About" subtitle="Akaay Water" />

      {/* Mission & Vision Section - Enhanced Responsiveness */}
      <div className="w-full bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {/* Left Side - Image */}
            <motion.div className="order-2 lg:order-1" variants={slideInLeft}>
              <motion.img
                src="/images/mission.webp"
                className="w-full h-[250px] xs:h-[300px] sm:h-[350px] md:h-[400px] lg:h-auto rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl object-cover"
                alt="Akaay Water Mission"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 20px 40px rgba(48, 23, 87, 0.2)",
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Right Side - Content */}
            <motion.div className="order-1 lg:order-2" variants={slideInRight}>
              <div className="space-y-6 sm:space-y-8">
                {/* Mission */}
                <motion.div
                  variants={fadeInUp}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="flex flex-col xs:flex-row items-start xs:items-center gap-3 mb-4"
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-[#301757] rounded-full flex items-center justify-center flex-shrink-0"
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        boxShadow: "0 5px 15px rgba(48, 23, 87, 0.3)",
                      }}
                    >
                      <i className="ri-compass-3-line text-white text-lg sm:text-xl"></i>
                    </motion.div>
                    <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold text-[#301757]">
                      Our Mission
                    </h2>
                  </motion.div>
                  <p className="text-gray-700 text-sm xs:text-base sm:text-lg leading-relaxed">
                    To revolutionize hydration by delivering ultra-pure,
                    mineral-balanced water that enhances wellness, supports
                    active lifestyles, and builds lasting trust with every sip.
                    We're committed to making premium quality accessible to all.
                  </p>
                </motion.div>

                {/* Vision */}
                <motion.div
                  variants={fadeInUp}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="flex flex-col xs:flex-row items-start xs:items-center gap-3 mb-4"
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-[#301757] rounded-full flex items-center justify-center flex-shrink-0"
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        boxShadow: "0 5px 15px rgba(48, 23, 87, 0.3)",
                      }}
                    >
                      <i className="ri-eye-line text-white text-lg sm:text-xl"></i>
                    </motion.div>
                    <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold text-[#301757]">
                      Our Vision
                    </h2>
                  </motion.div>
                  <p className="text-gray-700 text-sm xs:text-base sm:text-lg leading-relaxed">
                    To become the world's most trusted water brand, setting new
                    standards for purity, sustainability, and customer
                    satisfaction while protecting our planet's precious water
                    resources for future generations.
                  </p>
                </motion.div>

                {/* Values Preview */}
                <motion.div
                  className="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6"
                  variants={scaleIn}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 25px rgba(48, 23, 87, 0.1)",
                  }}
                >
                  <h3 className="text-base sm:text-lg font-semibold text-[#301757] mb-3">
                    What Drives Us
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Excellence",
                      "Transparency",
                      "Innovation",
                      "Sustainability",
                    ].map((value, index) => (
                      <motion.span
                        key={index}
                        className="px-2 sm:px-3 py-1 bg-[#301757] text-white text-xs sm:text-sm rounded-full"
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "#240046",
                        }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {value}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Core Values Section - Enhanced Responsiveness */}
      <div className="w-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            className="text-center mb-10 sm:mb-12 lg:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4"
              variants={fadeInUp}
            >
              Our Core <span className="text-[#301757]">Values</span>
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto px-4"
              variants={fadeInUp}
            >
              The principles that guide every decision we make and every drop we
              produce
            </motion.p>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 text-center shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300"
                variants={scaleIn}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  boxShadow: "0 20px 40px rgba(48, 23, 87, 0.15)",
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-12 h-12 sm:w-16 sm:h-16 bg-[#301757] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(48, 23, 87, 0.2)",
                  }}
                >
                  <i
                    className={`${value.icon} text-white text-xl sm:text-2xl`}
                  ></i>
                </motion.div>
                <motion.h3
                  className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4"
                  whileHover={{ color: "#301757" }}
                >
                  {value.title}
                </motion.h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Leadership Team - Enhanced Responsiveness */}
      <div className="w-full bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            className="text-center mb-10 sm:mb-12 lg:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4"
              variants={fadeInUp}
            >
              Leadership <span className="text-[#301757]">Team</span>
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto px-4"
              variants={fadeInUp}
            >
              Meet the visionary leaders driving Akaay Water's mission of
              excellence
            </motion.p>
          </motion.div>

          {/* Leadership Message */}
          <motion.div
            className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 shadow-lg sm:shadow-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scaleIn}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 25px 50px rgba(48, 23, 87, 0.1)",
            }}
          >
            <div className="text-center">
              <motion.div
                className="w-16 h-16 sm:w-20 sm:h-20 bg-[#301757] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  boxShadow: "0 10px 25px rgba(48, 23, 87, 0.3)",
                }}
              >
                <i className="ri-user-star-line text-white text-2xl sm:text-3xl"></i>
              </motion.div>
              <motion.h3
                className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6"
                variants={fadeInUp}
              >
                Message from Leadership
              </motion.h3>
              <motion.blockquote
                className="text-base sm:text-lg lg:text-xl text-gray-700 italic leading-relaxed max-w-4xl mx-auto mb-4 sm:mb-6"
                variants={fadeInUp}
              >
                "At Akaay Water, we believe that pure water is not just a
                product—it's a promise. A promise of quality, trust, and
                commitment to your wellbeing. Every decision we make, every
                process we implement, and every innovation we pursue is guided
                by our unwavering dedication to providing you with the purest
                hydration experience possible."
              </motion.blockquote>
              <motion.div className="mt-4 sm:mt-6" variants={fadeInUp}>
                <div className="font-bold text-[#301757] text-base sm:text-lg">
                  Leadership Team
                </div>
                <div className="text-gray-600 text-sm sm:text-base">
                  Akaay Water
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Get in Touch */}
      <GetInTouch />
    </>
  );
};

export default About;
