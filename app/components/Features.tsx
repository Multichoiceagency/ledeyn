"use client";

import React from "react";
import { FaTractor, FaSeedling, FaHandsHelping } from "react-icons/fa"; // Icons
import { motion } from "framer-motion"; // Framer Motion for animation

const features = [
  {
    icon: <FaTractor size={40} />,
    title: "Global Network & Expertise",
    description:
      "LEDEYN has a global presence and a strong position in the food industry, connecting farmers and consumers worldwide.",
  },
  {
    icon: <FaSeedling size={40} />,
    title: "High-Quality Products",
    description:
      "From small to large-scale farms, we ensure quality through stringent processes and direct communication with farmers.",
  },
  {
    icon: <FaHandsHelping size={40} />,
    title: "Sustainable & Reliable",
    description:
      "With a focus on sustainability, LEDEYN delivers cost-effective, reliable solutions in the global commodity market.",
  },
];

const FeatureCard = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center bg-white p-6 rounded-[24px] shadow-lg"
            whileHover={{ scale: 1.05 }} // Animation on hover
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="bg-yellow-400 p-4 rounded-full mb-4"
              whileHover={{ rotate: 360 }} // Icon rotation on hover
              transition={{ duration: 0.5 }}
            >
              {feature.icon}
            </motion.div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCard;
