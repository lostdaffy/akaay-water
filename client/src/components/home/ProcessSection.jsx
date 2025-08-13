"use client";
import React from "react";
import { motion } from "framer-motion";

// Data items
const items = [
  { title: "11-STAGE PURIFICATION PROCESS", icon: "ri-test-tube-line" },
  { title: "121 QUALITY CHECKS", icon: "ri-shield-check-line" },
  { title: "ZERO DISCHARGE", icon: "ri-recycle-line" },
  { title: "GREEN MANUFACTURING FACILITY", icon: "ri-building-4-line" },
];

// Icon Component (Remix Icons)
const Icon = ({ name, className = "" }) => {
  const sizeClass = "text-[2.75rem] sm:text-[3.25rem]";
  return (
    <i
      className={`${name} ${sizeClass} text-[#301754] ${className} leading-none`}
      aria-hidden="true"
    />
  );
};

const ProcessSection = () => {
  return (
    <section className="relative w-full flex justify-center">
      {/* Subtle pattern background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/patterns/water-pattern-light.png')] opacity-20"
      />

      <div className="relative max-w-5xl w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Card Container */}
        <div className="relative rounded-[28px] sm:rounded-[32px] border border-gray-300/60 bg-white overflow-hidden shadow-md">
          {/* Inner */}
          <div className="relative px-6 sm:px-10 lg:px-12 py-10 sm:py-14 lg:py-16">
            <ul
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${items.length} gap-10 sm:gap-12 lg:gap-8 justify-items-center`}
            >
              {items.map((it, idx) => (
                <motion.li
                  key={it.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="relative group flex flex-col items-center text-center p-4 sm:p-5 rounded-xl transition duration-300 hover:bg-gray-50"
                >
                  {/* Outlined number */}
                  <span
                    className="block text-transparent text-[68px] sm:text-[80px] leading-none font-bold font-roboto-condensed transition-transform duration-300 group-hover:translate-y-1"
                    style={{ WebkitTextStroke: "1.5px #301754" }}
                    aria-hidden="true"
                  >
                    {idx + 1}
                  </span>

                  {/* Icon */}
                  <Icon
                    className="transition-transform duration-300 group-hover:scale-110"
                    name={it.icon}
                  />

                  {/* Title */}
                  <h3 className="mt-4 sm:mt-5 text-[15px] sm:text-[16px] leading-tight font-semibold tracking-wide uppercase text-[#301754]">
                    {it.title}
                  </h3>

                  {/* Separator for desktop */}
                  {idx !== items.length - 1 && (
                    <span className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-3/4 w-px bg-gray-400/20" />
                  )}
                </motion.li>
              ))}
            </ul>

            {/* Subtle border overlay */}
            <div className="pointer-events-none absolute inset-0 rounded-[28px] sm:rounded-[32px] ring-1 ring-gray-200/80" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
