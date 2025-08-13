import React from "react";
import { motion } from "framer-motion";

const Leadership = () => {
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

  return (
    <>
      {/* Leadership */}
      <div className="w-full bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
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
                initial={{ backgroundColor: "#301757" }}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  boxShadow: "0 10px 25px rgba(48, 23, 87, 0.3)",
                }}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6"
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
    </>
  );
};

export default Leadership;
