import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const slideInLeft = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const slideInRight = {
    hidden: {
      opacity: 0,
      x: 100,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
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
        duration: 0.8,
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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const features = [
    { text: "100% Pure", icon: "💧" },
    { text: "Rich Minerals", icon: "⚡" },
    { text: "Natural Source", icon: "🏔️" },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="w-full min-h-screen relative overflow-hidden flex items-center pt-16 sm:pt-20 lg:pt-24 bg-[#fff]">
        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              className="text-center lg:text-left space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Main Headline */}
              <motion.h1
                className="text-slate-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase leading-tight tracking-wide"
                variants={slideInLeft}
              >
                Refresh With <br />
                <motion.span
                  className="block sm:inline text-[#3c096c]"
                  variants={fadeInUp}
                  transition={{ delay: 0.3 }}
                >
                  Natural Mineral Water
                </motion.span>
              </motion.h1>

              {/* Primary Description */}
              <motion.p
                className="text-slate-700 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-full lg:max-w-2xl mx-auto lg:mx-0"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                Experience the perfect blend of purity, taste, and energy. Every
                drop is crafted to revitalize your body and elevate your
                performance.
              </motion.p>

              {/* Key Features */}
              <motion.div
                className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 sm:gap-3 bg-white/30 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                    variants={scaleIn}
                    whileHover={{
                      scale: 1.05,
                      y: -3,
                      boxShadow: "0 10px 25px rgba(60, 9, 108, 0.2)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <motion.span
                      className="text-base sm:text-lg"
                      whileHover={{ rotate: 20, scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      {feature.icon}
                    </motion.span>
                    <span className="text-slate-800 text-xs sm:text-sm md:text-base font-semibold transition-colors group-hover:text-[#3c096c]">
                      {feature.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 items-center lg:items-start"
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <Link to="/product" className="w-full sm:w-auto">
                  <motion.div
                    className="group bg-[#3c096c] text-white py-3 sm:py-3 px-6 sm:px-8 rounded-full text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-3 shadow-xl cursor-pointer w-full sm:w-auto"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 15px 35px rgba(60, 9, 108, 0.4)",
                      backgroundColor: "#240046",
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span>Explore Products</span>
                    <motion.span
                      className="text-lg sm:text-xl"
                      whileHover={{ x: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      →
                    </motion.span>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right side - Hero Image */}
            <motion.div
              className="flex justify-center items-center relative order-1 lg:order-2"
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Main Hero Image */}
              <motion.div
                className="relative z-10 w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl"
                whileHover={{
                  scale: 1.02,
                  rotateY: 2,
                }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/images/banner-new.jpg"
                  alt="Natural Mineral Water"
                  className="w-full h-auto max-h-64 sm:max-h-80 md:max-h-96 lg:max-h-[400px] xl:max-h-[800px] object-contain rounded-lg "
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
