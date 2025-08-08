import React from "react";
import { motion } from "framer-motion";

const ProductHighlight = () => {
  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const products = [
    {
      id: 1,
      name: "Premium Natural",
      subtitle: "250ml Bottle",
      description:
        "Perfect single serving size for personal hydration. Pure mineral water with natural pH balance.",
      image: "/images/250ml.webp",
      size: "500ml",
      features: ["Natural pH 7.4", "Rich in Minerals", "BPA Free"],
    },
    {
      id: 2,
      name: "Premium Natural",
      subtitle: "500ml Bottle",
      description:
        "Ideal family size for shared consumption. Advanced purification with essential minerals for wellness.",
      image: "/images/500ml.webp",
      size: "1L",
      features: ["Natural pH 7.4", "Family Size", "Premium Quality"],
    },
    {
      id: 3,
      name: "Premium Natural",
      subtitle: "1 Liter Bottle",
      description:
        "Large capacity for active lifestyle and daily hydration needs. Perfect for office and home use.",
      image: "/images/1000ml.webp",
      size: "1.5L",
      features: ["Natural pH 7.4", "Large Capacity", "Eco-Friendly"],
    },
  ];

  return (
    <div className="bg-gray-50 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Featured Products
          </motion.h4>
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold capitalize mb-4 md:mb-6 text-gray-900"
            variants={fadeInUp}
          >
            Premium Mineral Water Collection
          </motion.h1>
          <motion.p
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Choose the perfect size for your hydration needs. Same premium quality, different sizes.
          </motion.p>
        </motion.div>

        {/* Product Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              {/* Product Image */}
              <div className="relative h-80 md:h-96 lg:h-80 bg-gradient-to-br from-blue-50 to-cyan-50 overflow-hidden flex items-center justify-center p-6">
                
                
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Product Content */}
              <div className="p-6 md:p-7">
                <div className="mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 group-hover:text-[#3c096c] transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-sm md:text-base text-[#3c096c] font-semibold uppercase tracking-wide">
                    {product.subtitle}
                  </p>
                </div>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: featureIndex * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-[#3c096c] rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>

              
              </div>
            </motion.div>
          ))}
        </motion.div>

       
      </div>
    </div>
  );
};

export default ProductHighlight;
