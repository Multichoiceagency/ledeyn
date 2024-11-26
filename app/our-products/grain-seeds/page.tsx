"use client";

import React, { useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import SEO from '@/app/components/SEO'; // Import the SEO component

const GrainSeeds: React.FC = () => {
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
        title="Premium Grain & Seeds | LEDEYN"
        description="LEDEYN supplies high-quality grains and seeds, including sesame, soy beans, wheat, and corn, sourced sustainably for the food industry."
        keywords="LEDEYN, grain seeds, sesame seeds, soy beans, wheat, corn, sustainable grains, food industry"
        ogImage="https://ledeyn.com/images/grain-seeds.jpg"
        ogUrl="https://ledeyn.com/our-products/grain-seeds"
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section
          className="relative h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/grain-seeds.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 text-center px-6 md:px-12 text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Grain & Seeds
            </h1>
            <p className="text-lg md:text-xl mb-6 text-white">
              Supplying Sesame, Soy Beans, Wheat, Corn, and More
            </p>
          </div>
        </section>

        {/* Product Overview Section */}
        <section className="py-16 px-8 md:px-16 lg:px-24 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  About Our Grain & Seeds
                </h2>
                <p className="text-gray-700 mb-6">
                  Grains and seeds are essential components of diets and agricultural systems around the world. Here's a brief overview of each:
                </p>

                {/* Grains Section */}
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Grains
                </h3>
                <p className="text-gray-700 mb-6">
                  Grains are the small, hard seeds harvested from cereal crops, primarily grown for food. They form the base of the global food supply and include:
                </p>
                {/* Grains List */}
                <ol className="list-decimal list-inside text-black font-bold mb-6">
                  <li>
                    <em>Wheat</em> – Used to make flour for bread, pasta, and pastries.
                  </li>
                  <li>
                    <em>Rice</em> – A staple food for over half of the world's population.
                  </li>
                  <li>
                    <em>Corn (Maize)</em> – Used in human consumption, animal feed, and biofuels.
                  </li>
                  <li>
                    <em>Barley</em> – Commonly used in brewing and animal feed.
                  </li>
                  <li>
                    <em>Oats</em> – Eaten as porridge or used in baked goods and animal feed.
                  </li>
                </ol>
                <p className="text-gray-700 mb-6">
                  Grains are rich in carbohydrates and provide essential nutrients such as fiber, vitamins (especially B vitamins), and minerals.
                </p>

                {/* Seeds Section */}
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Seeds
                </h3>
                <p className="text-gray-700 mb-6">
                  Seeds are the reproductive units of plants, capable of growing into new plants. While all grains are technically seeds, not all seeds are considered grains. Seeds consumed by humans for nutrition include:
                </p>
                {/* Seeds List */}
                <ol className="list-decimal list-inside text-black font-bold mb-6">
                  <li>
                    <em>Chia seeds</em> – Rich in omega-3 fatty acids, fiber, and antioxidants.
                  </li>
                  <li>
                    <em>Flax seeds</em> – Known for their omega-3 content and fiber.
                  </li>
                  <li>
                    <em>Sunflower seeds</em> – A good source of healthy fats, protein, and vitamin E.
                  </li>
                  <li>
                    <em>Pumpkin seeds</em> – High in magnesium, zinc, and protein.
                  </li>
                  <li>
                    <em>Sesame seeds</em> – Often used in cooking and rich in calcium and healthy fats.
                  </li>
                </ol>
                <p className="text-gray-700 mb-6">
                  Both grains and seeds provide significant nutritional benefits, playing a major role in human diets across the globe.
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
              <div className="relative w-full aspect-square h-50">
                <Image
                  src="/images/grain-seeds.jpg"
                  alt="Grain & Seeds"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* Related Links Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white shadow-lg p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-700 mb-6">
                  We strive to offer the best quality grains and seeds, supporting farmers and businesses around the world through sustainable practices.
                </p>
                <Link href="/mission" className="text-primary hover:underline">
                  Learn More
                </Link>
              </div>
              <div className="bg-white shadow-lg p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-700 mb-6">
                  Our vision is to ensure sustainable and high-quality sourcing of grains and seeds, helping feed the world.
                </p>
                <Link href="/vision" className="text-primary hover:underline">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Extra content to ensure scrollability */}
        <section className="py-16 px-8 md:px-16 lg:px-24 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Our Commitment to Quality
            </h2>
            <p className="text-gray-700 mb-6">
              At LEDEYN, we believe that the foundation of great food starts with exceptional grains and seeds. Our commitment to quality begins in the fields, working hand-in-hand with skilled farmers who share our passion for producing the finest agricultural products.
            </p>
            <p className="text-gray-700 mb-6">
              Through sustainable farming techniques and rigorous quality control measures, we ensure that every grain and seed we supply meets the highest standards of purity, nutrition, and taste. Our products are not just ingredients; they are the building blocks of countless culinary creations around the world.
            </p>
            <p className="text-gray-700">
              Experience the difference that premium grains and seeds can make in your products. From hearty whole grains to versatile oilseeds, LEDEYN is your trusted partner in sourcing the best that nature has to offer.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default GrainSeeds;
