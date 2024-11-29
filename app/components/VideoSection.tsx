"use client";

import React from 'react';
import { FaDrumstickBite, FaSeedling, FaCoffee, FaCottonBureau, FaPepperHot, FaTree } from 'react-icons/fa';
import { GiPeanut } from 'react-icons/gi';
import Image from 'next/image';
import { CiDroplet } from "react-icons/ci";


const services = [
  { icon: <FaDrumstickBite size={30} />, title: "Animal Feed & Protein" },
  { icon: <FaSeedling size={30} />, title: "Cocoa" },
  { icon: <FaCoffee size={30} />, title: "Coffee" },
  { icon: <FaCottonBureau size={30} />, title: "Cotton" },
  { icon: <CiDroplet  size={30} />, title: "Edible Oils" },
  { icon: <FaSeedling size={30} />, title: "Grain & Seeds - Sesame / Soy Beans / Wheat / Corn" },
  { icon: <GiPeanut size={30} />, title: "Nuts - Cashew / Macadamia" },
  { icon: <FaTree size={30} />, title: "Rubber" },
  {
    icon: <FaPepperHot size={30} />,
    title: "Spices",
    // Removed the 'list' property
  },
];

const VideoSection = () => {
  return (
    <section className="bg-gray-700 py-16 text-white relative overflow-hidden">
      {/* SVG Cocoa Leaves on Top */}
      <div className="absolute top-0 left-0 w-full h-40">
        <Image 
          src="/images/blad-rechts.png" 
          alt="Cocoa Leaves Top" 
          width={385} 
          height={666} 
          className="absolute right-0 top-0 animate-float object-cover" 
        />
      </div>

      {/* Section Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <h3 className="text-secondary font-bold mb-2">Healthy Foods</h3>
        <h2 className="text-3xl text-white md:text-5xl font-bold mb-8">What We Provide For Your Better Health</h2>

        {/* Service Icons */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 justify-center">
          {services.slice(0, 5).map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center group transform transition-all duration-300 hover:scale-110"
            >
              <div className="bg-secondary p-4 rounded-lg mb-2 group-hover:shadow-xl transform transition-transform duration-300">
                {service.icon}
              </div>
              <p className="text-white text-center">{service.title}</p>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center mt-6">
          {services.slice(5).map((service, index) => (
            <div
              key={index + 5}
              className="flex flex-col items-center justify-center group transform transition-all duration-300 hover:scale-110"
            >
              <div className="bg-secondary p-4 rounded-lg mb-2 group-hover:shadow-xl transform transition-transform duration-300">
                {service.icon}
              </div>
              <p className="text-white text-center">{service.title}</p>

              {/* Removed the spice list rendering */}
            </div>
          ))}
        </div>
          </div>
      {/* SVG Cocoa Leaves on Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-120">
        <Image 
          src="/images/blad-links.png" 
          alt="Cocoa Leaves Bottom" 
          width={385}
          height={666}
          className="animate-float object-cover"
        />
      </div>
    </section>
  );
};

export default VideoSection;
