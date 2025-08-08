import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
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
        duration: 0.8,
        ease: "easeOut",
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

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "50M+", label: "Bottles Delivered" },
    { number: "1000+", label: "Happy Customers" },
    { number: "99.9%", label: "Purity Standard" },
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-16 bg-white relative overflow-hidden min-h-screen">
      {/* Background decorative elements - Responsive positioning */}
      <motion.div
        className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 lg:top-10 lg:left-10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-[#301757] rounded-full opacity-5 blur-xl sm:blur-2xl md:blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left Content */}
          <motion.div
            className="space-y-4 sm:space-y-6 md:space-y-8 order-2 lg:order-1"
            variants={slideInLeft}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-slate-800 leading-tight">
                About <span className="text-[#3c096c]">Akaay Water</span>
              </h2>
            </motion.div>

            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-700 leading-relaxed"
              variants={fadeInUp}
            >
              For over 15 years, we have been committed to delivering the
              purest, most refreshing mineral water straight from pristine
              mountain sources. Our journey began with a simple mission: to
              provide families with access to clean, healthy, and naturally
              enriched water.
            </motion.p>

            <motion.div
              className="bg-gradient-to-br from-white/80 to-purple-50/50 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-white/20"
              variants={fadeInUp}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg sm:text-xl font-bold text-[#3c096c]">
                Our Promise
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                We promise to deliver water that not only quenches your thirst
                but nourishes your body with essential minerals, ensuring every
                sip contributes to your health and vitality.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Content - Company Image */}
          <motion.div
            className="relative order-1 lg:order-2"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <img
                src="/images/654554.jpg"
                alt="Our water production facility"
                className="w-full h-64 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
