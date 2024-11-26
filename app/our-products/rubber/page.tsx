"use client";

import React, { useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import SEO from '@/app/components/SEO'; // Import the SEO component

const Rubber: React.FC = () => {
  useEffect(() => {
    // Force body to always be scrollable
    document.body.style.overflowY = 'scroll';

    return () => {
      // Clean up the style when component unmounts
      document.body.style.overflowY = '';
    };
  }, []);

  return (
    <>
      {/* SEO Component with appropriate metadata */}
      <SEO
        title="Sustainably Sourced Rubber | LEDEYN"
        description="Discover LEDEYN's high-quality rubber, sourced sustainably for a variety of industrial and manufacturing uses."
        keywords="LEDEYN, rubber, sustainable rubber, industrial rubber, manufacturing rubber, high-quality rubber"
        ogImage="https://ledeyn.com/images/rubber-grondstof.jpeg"
        ogUrl="https://ledeyn.com/our-products/rubber"
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section
          className="relative h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/rubber-grondstof.jpeg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 text-center px-6 md:px-12 text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Rubber</h1>
            <p className="text-lg md:text-xl mb-6 text-white">
              High-Quality Rubber Sourced Sustainably
            </p>
          </div>
        </section>

        {/* First Section: About Our Rubber */}
        <section className="py-16 px-8 md:px-16 lg:px-24 bg-gray-100">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">About Our Rubber</h2>
                <p className="text-gray-700 mb-6">
                  Rubber is an elastic, durable material derived from natural or synthetic sources. It's used in a wide range of products, from tires and footwear to industrial parts and medical devices, due to its flexibility, water resistance, and resilience.
                </p>
                <p className="text-gray-700 mb-6">
                  Our rubber is sourced sustainably from trusted suppliers, ensuring high quality for a wide range of industrial and manufacturing uses. We are committed to sourcing high-quality rubber through sustainable practices that benefit both the environment and the economy.
                </p>
                {/* Buttons with Spacing */}
                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                  <Link
                    href="/our-products"
                    className="inline-block bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded-lg text-center"
                  >
                    Back to Products
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-block bg-secondary hover:bg-secondary-dark text-white py-3 px-6 rounded-lg text-center"
                  >
                    Ask for an Estimate Price
                  </Link>
                </div>
              </div>
              <div className="relative w-full h-80 lg:h-full">
                <Image
                  src="/images/rubber-grondstof.jpeg"
                  alt="Rubber"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Second Section: A Closer Look at Rubber */}
        <section className="py-16 px-8 md:px-16 lg:px-24 bg-white">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              A Closer Look at Rubber
            </h2>

            {/* Types of Rubber */}
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              1. <em>Types of Rubber</em>
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>
                <strong>Natural Rubber</strong>: Derived from the sap (latex) of rubber trees (<em>Hevea brasiliensis</em>), which grow in tropical climates, mainly in Southeast Asia (Thailand, Indonesia, and Malaysia).
              </li>
              <li>
                <strong>Synthetic Rubber</strong>: Made from petroleum-based products, primarily styrene and butadiene. Examples include neoprene, styrene-butadiene rubber (SBR), and nitrile rubber.
              </li>
            </ul>

            {/* Production of Natural Rubber */}
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              2. <em>Production of Natural Rubber</em>
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>
                <strong>Tapping</strong>: The latex is collected by making incisions in the bark of rubber trees, allowing the sap to flow out into containers.
              </li>
              <li>
                <strong>Coagulation and Processing</strong>: The collected latex is treated with acids to coagulate (solidify), then pressed into sheets, washed, and dried. These sheets are further processed and vulcanized to enhance elasticity and durability.
              </li>
            </ul>

            {/* Vulcanization */}
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              3. <em>Vulcanization</em>
            </h3>
            <p className="text-gray-700 mb-6">
              This is a crucial process in making rubber usable. During vulcanization, sulfur is added to rubber, which creates cross-links between polymer chains. This enhances the material's elasticity, strength, and resistance to heat and wear. Invented by Charles Goodyear in 1839, vulcanization revolutionized the rubber industry.
            </p>

            {/* Uses of Rubber */}
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              4. <em>Uses of Rubber</em>
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>
                <strong>Automobile Industry</strong>: The largest use of rubber is in the manufacture of tires for vehicles, aircraft, and bicycles.
              </li>
              <li>
                <strong>Footwear</strong>: Rubber soles and boots are highly valued for their water resistance and durability.
              </li>
              <li>
                <strong>Industrial Applications</strong>: Used in belts, hoses, gaskets, seals, and conveyor belts in various industries.
              </li>
              <li>
                <strong>Consumer Goods</strong>: Products like gloves, balloons, elastic bands, and sports equipment.
              </li>
              <li>
                <strong>Medical and Healthcare</strong>: Used to make surgical gloves, catheters, and medical tubing due to its flexibility and ability to create airtight seals.
              </li>
            </ul>

            {/* Environmental Impact */}
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              5. <em>Environmental Impact</em>
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>
                <strong>Natural Rubber</strong>: The cultivation of rubber trees is generally less harmful to the environment than the extraction of petroleum for synthetic rubber. However, large-scale rubber plantations can contribute to deforestation and biodiversity loss.
              </li>
              <li>
                <strong>Synthetic Rubber</strong>: Made from non-renewable petroleum resources, synthetic rubber production generates significant pollution and carbon emissions.
              </li>
            </ul>

            {/* Global Trade and Economy */}
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              6. <em>Global Trade and Economy</em>
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>
                Rubber is a critical commodity in global trade. Countries like Thailand, Indonesia, and Malaysia are the largest producers of natural rubber.
              </li>
              <li>
                The synthetic rubber industry is heavily concentrated in industrialized nations, given its reliance on chemical processing and petroleum resources.
              </li>
            </ul>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-16 px-8 md:px-16 lg:px-24 bg-gray-100">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white shadow-lg p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-gray-700 mb-6">
                  We are committed to sourcing high-quality rubber through sustainable practices that benefit both the environment and the economy.
                </p>
                <Link href="/mission" className="text-primary hover:underline">Learn More</Link>
              </div>
              <div className="bg-white shadow-lg p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Our Vision</h3>
                <p className="text-gray-700 mb-6">
                  Our vision is to be the leading global supplier of sustainably sourced rubber, providing value to our partners and consumers.
                </p>
                <Link href="/vision" className="text-primary hover:underline">Learn More</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Rubber;
