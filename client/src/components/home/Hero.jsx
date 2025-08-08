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
    { text: "Mountain Source", icon: "🏔️" },
  ];

  return (
    <>
      {/* Hero Section */}
      <div
        className="w-full min-h-screen relative overflow-hidden flex items-center pt-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.0) 40%), url(/images/banner3.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Floating decorative elements */}
        <motion.div
          className="absolute top-20 right-20 w-20 h-20 rounded-full opacity-10 blur-2xl"
          style={{ backgroundColor: "#3c096c" }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 right-32 w-16 h-16 rounded-full opacity-10 blur-xl"
          style={{ backgroundColor: "#5a189a" }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              className="text-left space-y-6 lg:space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Main Headline */}
              <motion.h1
                className="text-slate-800 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold uppercase leading-tight tracking-wide"
                variants={slideInLeft}
              >
                Refresh With <br />
                <motion.span
                  className="block sm:inline"
                  style={{ color: "#3c096c" }}
                  variants={fadeInUp}
                  transition={{ delay: 0.3 }}
                >
                  Natural Mineral Water
                </motion.span>
              </motion.h1>

              {/* Primary Description */}
              <motion.p
                className="text-slate-700 text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed max-w-2xl "
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
                className="flex flex-wrap gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                    variants={scaleIn}
                    whileHover={{
                      scale: 1.05,
                      y: -3,
                      boxShadow: "0 10px 25px rgba(60, 9, 108, 0.2)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <motion.span
                      className="text-lg"
                      whileHover={{ rotate: 20, scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      {feature.icon}
                    </motion.span>
                    <span 
                      className="text-slate-800 text-sm sm:text-base font-semibold transition-colors group-hover:text-[#3c096c]"
                    >
                      {feature.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-4"
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <Link to="/product">
                  <motion.div
                    className="group bg-[#3c096c] text-white  py-3 px-8 rounded-full text-base sm:text-base transition-all duration-300 flex items-center justify-center gap-3 shadow-xl cursor-pointer"
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
                      className="text-xl"
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

            {/* Right side - could add additional content or keep empty for background image */}
            <motion.div
              className="hidden lg:flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            ></motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
