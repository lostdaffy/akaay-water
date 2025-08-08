import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Banner = () => {
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
      scale: 0.8,
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

  return (
    <>
      <div className="bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <motion.div
            className="text-center mx-auto pb-12 md:pb-16 lg:pb-20 max-w-4xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h4
              className="uppercase text-[#3c096c] text-sm sm:text-base lg:text-2xl font-semibold mb-3 md:mb-4"
              variants={fadeInUp}
            >
              Our Service
            </motion.h4>
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold capitalize mb-4 md:mb-6 text-gray-900"
              variants={fadeInUp}
            >
              Pure Mineral Water Solutions for Healthy Living
            </motion.h1>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {/* Left Column */}
            <motion.div
              className="order-1 lg:order-1 space-y-4 md:space-y-6"
              variants={containerVariants}
            >
              {/* Service 1 */}
              <motion.div
                className="service-item rounded-lg p-4 md:p-6 mb-4"
                variants={slideInLeft}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="flex items-center flex-col sm:flex-row lg:flex-row">
                  <div className="service-content text-center sm:text-right lg:text-right flex-1 mb-4 sm:mb-0 lg:mb-0">
                    <h3 className="text-lg md:text-xl font-semibold inline-block mb-2 md:mb-3 text-gray-900 transition-colors duration-500">
                      1. Home Mineral Water Delivery
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 mb-0 transition-colors duration-500">
                      Premium quality mineral water delivered to your doorstep.
                    </p>
                  </div>
                  <div className="pl-0 sm:pl-4 lg:pl-4">
                    <motion.div
                      className="service-btn w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center bg-[#3c096c] transition-all duration-500 hover:bg-white mx-auto sm:mx-0 lg:mx-0 group"
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        boxShadow: "0 10px 25px rgba(60, 9, 108, 0.3)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="ri-home-4-line text-white text-xl md:text-2xl group-hover:text-[#3c096c] transition-colors duration-500"></i>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Service 2 */}
              <motion.div
                className="service-item rounded-lg p-4 md:p-6 mb-4"
                variants={slideInLeft}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="flex items-center flex-col sm:flex-row lg:flex-row">
                  <div className="service-content text-center sm:text-right lg:text-right flex-1 mb-4 sm:mb-0 lg:mb-0">
                    <h3 className="text-lg md:text-xl font-semibold inline-block mb-2 md:mb-3 text-gray-900 transition-colors duration-500">
                      2. Corporate Mineral Water Supply
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 mb-0 transition-colors duration-500">
                      Bulk mineral water solutions for offices and businesses.
                    </p>
                  </div>
                  <div className="pl-0 sm:pl-4 lg:pl-4">
                    <motion.div
                      className="service-btn w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center bg-[#3c096c] transition-all duration-500 hover:bg-white mx-auto sm:mx-0 lg:mx-0 group"
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        boxShadow: "0 10px 25px rgba(60, 9, 108, 0.3)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="ri-building-line text-white text-xl md:text-2xl group-hover:text-[#3c096c] transition-colors duration-500"></i>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Service 3 */}
              <motion.div
                className="service-item rounded-lg p-4 md:p-6"
                variants={slideInLeft}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="flex items-center flex-col sm:flex-row lg:flex-row">
                  <div className="service-content text-center sm:text-right lg:text-right flex-1 mb-4 sm:mb-0 lg:mb-0">
                    <h3 className="text-lg md:text-xl font-semibold inline-block mb-2 md:mb-3 text-gray-900 transition-colors duration-500">
                      3. Advanced Mineral Enhancement
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 mb-0 transition-colors duration-500">
                      Purification with essential minerals like calcium and
                      magnesium.
                    </p>
                  </div>
                  <div className="pl-0 sm:pl-4 lg:pl-4">
                    <motion.div
                      className="service-btn w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center bg-[#3c096c] transition-all duration-500 hover:bg-white mx-auto sm:mx-0 lg:mx-0 group"
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        boxShadow: "0 10px 25px rgba(60, 9, 108, 0.3)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="ri-flask-line text-white text-xl md:text-2xl group-hover:text-[#3c096c] transition-colors duration-500"></i>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Center Image */}
            <motion.div
              className="order-2 lg:order-2 bg-transparent px-4 lg:px-8 py-8 lg:py-0"
              variants={scaleIn}
            >
              <motion.img
                src="/images/345646.jpg"
                className="w-full h-auto max-w-md mx-auto"
                alt="Pure mineral water services illustration"
                whileHover={{
                  scale: 1.05,
                  rotate: [0, 1, -1, 0],
                  transition: { duration: 0.3 },
                }}
              />
            </motion.div>

            {/* Right Column */}
            <motion.div
              className="order-3 lg:order-3 space-y-4 md:space-y-6"
              variants={containerVariants}
            >
              {/* Service 4 */}
              <motion.div
                className="service-item rounded-lg p-4 md:p-6 mb-4"
                variants={slideInRight}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="flex items-center flex-col sm:flex-row lg:flex-row">
                  <div className="pr-0 sm:pr-4 lg:pr-4 order-2 sm:order-1 lg:order-1">
                    <motion.div
                      className="service-btn w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center bg-[#3c096c] transition-all duration-500 hover:bg-white mx-auto sm:mx-0 lg:mx-0 mb-4 sm:mb-0 lg:mb-0 group"
                      whileHover={{
                        scale: 1.1,
                        rotate: -5,
                        boxShadow: "0 10px 25px rgba(60, 9, 108, 0.3)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="ri-test-tube-line text-white text-xl md:text-2xl group-hover:text-[#3c096c] transition-colors duration-500"></i>
                    </motion.div>
                  </div>
                  <div className="service-content flex-1 text-center sm:text-left lg:text-left order-1 sm:order-2 lg:order-2">
                    <h3 className="text-lg md:text-xl font-semibold inline-block mb-2 md:mb-3 text-gray-900 transition-colors duration-500">
                      4. Water Quality Testing
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 mb-0 transition-colors duration-500">
                      Laboratory testing for optimal mineral content and purity.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Service 5 */}
              <motion.div
                className="service-item rounded-lg p-4 md:p-6 mb-4"
                variants={slideInRight}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="flex items-center flex-col sm:flex-row lg:flex-row">
                  <div className="pr-0 sm:pr-4 lg:pr-4 order-2 sm:order-1 lg:order-1">
                    <motion.div
                      className="service-btn w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center bg-[#3c096c] transition-all duration-500 hover:bg-white mx-auto sm:mx-0 lg:mx-0 mb-4 sm:mb-0 lg:mb-0 group"
                      whileHover={{
                        scale: 1.1,
                        rotate: -5,
                        boxShadow: "0 10px 25px rgba(60, 9, 108, 0.3)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="ri-recycle-line text-white text-xl md:text-2xl group-hover:text-[#3c096c] transition-colors duration-500"></i>
                    </motion.div>
                  </div>
                  <div className="service-content flex-1 text-center sm:text-left lg:text-left order-1 sm:order-2 lg:order-2">
                    <h3 className="text-lg md:text-xl font-semibold inline-block mb-2 md:mb-3 text-gray-900 transition-colors duration-500">
                      5. Eco-Friendly Packaging
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 mb-0 transition-colors duration-500">
                      Sustainable and recyclable BPA-free bottles.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Service 6 */}
              <motion.div
                className="service-item rounded-lg p-4 md:p-6"
                variants={slideInRight}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="flex items-center flex-col sm:flex-row lg:flex-row">
                  <div className="pr-0 sm:pr-4 lg:pr-4 order-2 sm:order-1 lg:order-1">
                    <motion.div
                      className="service-btn w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center bg-[#3c096c] transition-all duration-500 hover:bg-white mx-auto sm:mx-0 lg:mx-0 mb-4 sm:mb-0 lg:mb-0 group"
                      whileHover={{
                        scale: 1.1,
                        rotate: -5,
                        boxShadow: "0 10px 25px rgba(60, 9, 108, 0.3)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="ri-timer-2-line text-white text-xl md:text-2xl group-hover:text-[#3c096c] transition-colors duration-500"></i>
                    </motion.div>
                  </div>
                  <div className="service-content flex-1 text-center sm:text-left lg:text-left order-1 sm:order-2 lg:order-2">
                    <h3 className="text-lg md:text-xl font-semibold inline-block mb-2 md:mb-3 text-gray-900 transition-colors duration-500">
                      6. Same-Day Delivery
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 mb-0 transition-colors duration-500">
                      Fast delivery service with subscription options.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Banner;
