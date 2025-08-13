import { motion } from "framer-motion";
import React from "react";

const Brands = () => {

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
      {/* Clients / Brands Section */}
      <div className="w-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            className="text-center mb-10 sm:mb-12 lg:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            <motion.h2
              className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
            >
              Trusted by Leading <span className="text-[#301757]">Brands</span>
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto px-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut", delay: 0.05 },
                },
              }}
            >
              Hospitality, automotive, technology aur enterprise clients jo hum
              par bharosa karte hain
            </motion.p>
          </motion.div>

          {/* Logos Grid */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {[
              { name: "Marriott", logo: "/logos/marriott.svg" },
              { name: "Hyatt", logo: "/logos/hyatt.svg" },
              { name: "Maruti Suzuki", logo: "/logos/maruti.svg" },
              { name: "Tata", logo: "/logos/tata.svg" },
              { name: "Reliance", logo: "/logos/reliance.svg" },
              { name: "ITC Hotels", logo: "/logos/itc.svg" },
              { name: "HCL", logo: "/logos/hcl.svg" },
              { name: "Infosys", logo: "/logos/infosys.svg" },
              { name: "Amazon", logo: "/logos/amazon.svg" },
              { name: "Flipkart", logo: "/logos/flipkart.svg" },
              { name: "Swiggy", logo: "/logos/swiggy.svg" },
              { name: "Zomato", logo: "/logos/zomato.svg" },
            ].map((brand, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-sm border border-gray-100"
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.4, ease: "easeOut" },
                  },
                }}
                initial={{ scale: 1, backgroundColor: "#ffffff" }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 30px rgba(48, 23, 87, 0.08)",
                }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.2 }}
                aria-label={brand.name}
              >
                {/* If you have SVG/PNG logos */}
                <div className="flex items-center justify-center h-12 sm:h-14 lg:h-16">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-full max-w-[140px] object-contain opacity-80 hover:opacity-100 transition-opacity duration-200"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Brands;
