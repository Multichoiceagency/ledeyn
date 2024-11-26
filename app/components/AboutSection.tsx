"use client";

import Image from "next/image";
import Button from "./Button/Button"; // Import your Button component

const AboutSection = () => {
  return (
    <section className="bg-gray-100 py-24 lg:py-48">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Text Section */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-yellow-500">About LEDEYN</h3>
          <h1 className="text-4xl font-bold text-black">
            We’re Leading Import-Export Experts in Foods & Commodities
          </h1>
          <p className="text-gray-600">
            LEDEYN is a commercial company based in Rotterdam, Netherlands, specializing in the import and export of foods and commodities. With deep expertise in distribution, we continuously evolve to meet market trends.
          </p>
          <p className="text-gray-600">
            Known for our product diversity and quality, LEDEYN is a global player serving consumers worldwide. We cater to customer needs and expectations by offering a variety of products and commodity solutions in the food sector.
          </p>

          {/* Mission & Vision Buttons */}
          <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 mb-6">
            <Button href="/about" variant="secondary">
              Our Mission
            </Button>
            <Button href="#about">
              Our Vision
            </Button>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center py-32 ">
        {/* First Image (Cow) */}
        <div className="w-full h-[300px] md:h-[500px] absolute top-0 left-0 rounded-lg overflow-hidden">
        <Image
              src="/images/cacao-grondstof.jpg"
              alt="cacao-grondstof"
              fill
              style={{ objectFit: "cover" }} // Modern way to ensure full coverage
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive sizes for performance
              />
          </div>
 
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
