import React from "react";
import { motion } from "framer-motion";

const Brands = () => {
  const BRANDS = [
    { name: "Marriott", logo: "/images/marriott.png" },
    { name: "Maruti", logo: "/images/maruti.png" },
    { name: "Solitaire", logo: "/images/solitaire.webp" },
    { name: "Hometel", logo: "/images/hometel.png" },
    { name: "Radisson Blu", logo: "/images/radisson-blu.jpeg" },
    { name: "Vice Roy Inn", logo: "/images/viceroy.jpeg" },
    { name: "Kalsang", logo: "/images/Kalsang.jpeg" },
    { name: "Ambrosia", logo: "/images/Ambrosia.png" },
    { name: "Blue Sapphire", logo: "/images/Blue-Sapphire.jpeg" },
    { name: "Vedantam", logo: "/images/Vedantam.jpeg" },
    { name: "Golden Leaf", logo: "/images/gold-leaf.jpg" },
    { name: "Royal Aroma", logo: "/images/Royal-Aroma.png" },
  ];

  // Parent container animation (stagger children)
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, // delay between children
      },
    },
  };

  // Individual item animation
  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="w-full bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.h2
            className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Trusted by Leading <span className="text-[#301757]">Brands</span>
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          >
            Hospitality, automotive, technology aur enterprise clients jo hum
            par bharosa karte hain
          </motion.p>
        </motion.div>

        {/* Images Grid with staggered motion */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {BRANDS.map((brand) => (
            <motion.div
              key={brand.name}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                rotate: 1,
                boxShadow: "0 12px 25px rgba(48, 23, 87, 0.15)",
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-sm border border-gray-100 cursor-pointer"
              aria-label={brand.name}
            >
              <motion.div
                className="flex items-center justify-center h-12 sm:h-14 lg:h-16"
                animate={{
                  y: [0, -4, 0], // floating effect
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-full max-w-[140px] object-contain opacity-80 hover:opacity-100 transition-opacity duration-200"
                  loading="lazy"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Brands;
