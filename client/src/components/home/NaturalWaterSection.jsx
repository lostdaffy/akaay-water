import React from "react";
import { motion } from "framer-motion";

const NaturalWaterSection = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const fadeInLeft = {
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

  const fadeInRight = {
    hidden: {
      opacity: 0,
      x: 100,
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

  const features = [
    {
      number: "01",
      title: "Balance of taste and natural purity",
      description:
        "Perfect harmony between refreshing taste and natural mineral content",
    },
    {
      number: "02",
      title: "Your daily source of energy and freshness",
      description:
        "Revitalize your body with essential minerals and pure hydration",
    },
    {
      number: "03",
      title: "Drink easily. Drink naturally",
      description:
        "Simple, pure, and naturally refreshing water for everyday life",
    },
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements - Responsive positioning and sizing */}
      <motion.div
        className="absolute top-10 sm:top-15 md:top-20 left-5 sm:left-8 md:left-10 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-blue-200/20 rounded-full blur-2xl sm:blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-10 sm:bottom-15 md:bottom-20 right-5 sm:right-8 md:right-10 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-cyan-200/20 rounded-full blur-2xl sm:blur-3xl"
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

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Right Content - Water Glass Image */}
          <motion.div
            className="relative flex justify-center items-center order-2 lg:order-1"
            variants={fadeInRight}
          >
            <img src="/images/natural-water.webp" alt="" />
          </motion.div>

          {/* Left Content */}
          <motion.div
            className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 order-2 lg:order-1"
            variants={fadeInLeft}
          >
            {/* Main Heading */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <motion.h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-800 leading-tight"
                variants={fadeInUp}
              >
                Natural water with{" "}
                <span className="text-[#3c096c]">no additives</span>
              </motion.h1>
            </div>

            {/* Features List */}
            <motion.div
              className="space-y-4 sm:space-y-6 md:space-y-8"
              variants={containerVariants}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 sm:gap-4 md:gap-6 group"
                  variants={fadeInUp}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#301757] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span className="text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl">
                      {feature.number}
                    </span>
                  </motion.div>

                  <div className="flex-1 pt-0.5 sm:pt-1">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-slate-800 mb-1 sm:mb-2  transition-colors leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-xs sm:text-sm md:text-base">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default NaturalWaterSection;
