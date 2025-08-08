import React from "react";
import { motion } from "framer-motion";
import GetInTouch from "../components/global/GetInTouch";

const PrivateLabel = () => {
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

  const benefits = [
    "Build Your Brand Identity",
    "Perfect for Corporate Events",
    "Wedding & Special Occasions",
    "Restaurant & Hotel Chains",
    "Promotional Campaigns",
    "Gift & Corporate Packages",
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
              <h1 className="text-gray-900 text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold uppercase leading-tight tracking-wide">
                Private/Custom <br />
                <span className="text-[#301757] block">Label</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-20 lg:py-24 relative overflow-hidden">
        {/* Background decorative elements */}
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 bg-[#3c096c] rounded-full opacity-10 blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-16 h-16 bg-cyan-400 rounded-full opacity-10 blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
          <motion.div
            className="text-center mx-auto pb-12 md:pb-16 lg:pb-20 max-w-4xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h4
              className="uppercase text-[#3c096c] text-sm sm:text-base lg:text-xl font-semibold mb-3 md:mb-4"
              variants={fadeInUp}
            >
              Private Label Services
            </motion.h4>
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold capitalize mb-4 md:mb-6 text-gray-900"
              variants={fadeInUp}
            >
              Custom Label Water Bottles
            </motion.h1>
            <motion.p
              className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Create your own branded mineral water bottles with our premium
              private label services. Perfect for businesses, events, and
              special occasions.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              className="order-2 lg:order-1 space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInLeft}
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Why Choose Our Private Label Service?
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                  Transform our premium mineral water into your personalized
                  brand. We offer complete customization services from design to
                  delivery, ensuring your vision comes to life on every bottle.
                </p>
              </div>

              {/* Benefits List */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Perfect For:
                </h4>
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-3"
                  variants={containerVariants}
                >
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-[#3c096c] rounded-full flex-shrink-0"></div>
                      <span className="text-base text-gray-700">{benefit}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Right Image - Simplified */}
            <motion.div
              className="order-1 lg:order-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInRight}
            >
              <div className="relative">
                {/* Main Image Container */}
                <motion.div
                  className="relative "
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image */}
                  <motion.img
                    src="/images/11.jpg"
                    alt="Custom Label Water Bottles"
                    className="w-full h-auto max-w-md mx-auto "
                    whileHover={{
                      scale: 1.05,
                      rotate: [0, 1, -1, 0],
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <GetInTouch />
    </>
  );
};

export default PrivateLabel;
