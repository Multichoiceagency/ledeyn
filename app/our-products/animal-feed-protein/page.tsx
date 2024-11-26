"use client";

import React, { useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import SEO from '@/app/components/SEO'; // Using your specified import path

const AnimalFeedProtein: React.FC = () => {
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
        title="Animal Feed & Protein | LEDEYN"
        description="Discover high-quality animal feed and protein products from LEDEYN, supporting sustainable farming and optimal livestock health."
        keywords="LEDEYN, animal feed, protein, livestock nutrition, sustainable farming, animal nutrition"
        ogImage="https://ledeyn.com/images/animal-feed.jpg"
        ogUrl="https://ledeyn.com/our-products/animal-feed-protein"
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section
          className="relative h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/animal-feed.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 text-center px-6 md:px-12 text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Animal Feed & Protein
            </h1>
            <p className="text-lg md:text-xl mb-6 text-white">
              High-Quality Animal Feed for Sustainable Farming
            </p>
          </div>
        </section>

        {/* First Section: About Our Animal Feed & Protein */}
        <section className="py-16 px-8 md:px-16 lg:px-24 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  About Our Animal Feed & Protein
                </h2>
                <p className="text-gray-700 mb-6">
                  Animal feed refers to the food given to domesticated animals, especially livestock like cattle, poultry, pigs, and fish, to promote growth, health, and productivity. Proper animal feed formulation is crucial to optimizing productivity, ensuring animal health, and contributing to sustainable agriculture.
                </p>
                <p className="text-gray-700 mb-6">
                  Our animal feed is carefully formulated to provide the best nutrition for your livestock, ensuring healthy and sustainable farming practices. We work closely with nutritionists and farmers to develop high-quality feed that supports optimal growth, health, and productivity of various livestock species.
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
              <div className="relative w-full aspect-square">
                <Image
                  src="/images/animal-feed.jpg"
                  alt="Animal Feed & Protein"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Second Section: Types of Animal Feed */}
        <section className="py-16 px-8 md:px-16 lg:px-24 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Types of Animal Feed
            </h2>

            {/* Forages (Roughages) Section */}
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              1. <em>Forages (Roughages)</em>
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>
                <strong>Examples</strong>: Grass, hay, silage, legumes, and straw.
              </li>
              <li>
                <strong>Description</strong>: High-fiber content feeds that are typically fed to ruminants (like cows and sheep). These are often bulky but low in energy and protein.
              </li>
            </ul>

            {/* Concentrates Section */}
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              2. <em>Concentrates</em>
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>
                <strong>Examples</strong>: Grains (corn, barley, oats), oilseeds (soybean, canola), and byproducts like bran and meals.
              </li>
              <li>
                <strong>Description</strong>: Rich in energy and protein, these feeds are lower in fiber compared to forages. Concentrates are used to boost growth, milk production, and overall animal health.
              </li>
            </ul>

            {/* Categories of Animal Feed */}
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Categories of Animal Feed
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>
                <strong>Energy Feeds</strong>: Corn, wheat, sorghum, and barley that supply animals with the energy required for daily activities and production.
              </li>
              <li>
                <strong>Protein Feeds</strong>: Soybean meal, fish meal, and legumes provide essential amino acids for muscle development, milk production, and overall growth.
              </li>
              <li>
                <strong>Minerals and Vitamins</strong>: Supplements that address any nutritional gaps in an animal's diet to prevent deficiencies and promote health.
              </li>
              <li>
                <strong>Additives</strong>: Probiotics, enzymes, and other supplements added to enhance digestion, nutrient absorption, or overall performance.
              </li>
            </ul>

            <p className="text-gray-700 mb-6">
              Proper animal feed formulation is crucial to optimizing productivity, ensuring animal health, and contributing to sustainable agriculture.
            </p>
          </div>
        </section>

        {/* Related Links Section */}
        <section className="py-16 px-8 md:px-16 lg:px-24 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white shadow-lg p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-700 mb-6">
                  We aim to provide sustainable and high-quality animal feed that supports healthy growth and development of livestock worldwide.
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
                  Our vision is to ensure sustainable farming practices globally by offering premium animal feed sourced from responsible suppliers.
                </p>
                <Link href="/vision" className="text-primary hover:underline">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment to Quality Section */}
        <section className="py-16 px-8 md:px-16 lg:px-24 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Our Commitment to Quality
            </h2>
            <p className="text-gray-700 mb-6">
              At LEDEYN, we believe that the health and productivity of livestock start with high-quality feed. Our commitment to excellence begins with careful ingredient selection and extends through our rigorous quality control processes.
            </p>
            <p className="text-gray-700 mb-6">
              Through partnerships with leading nutritionists and ongoing research, we continually improve our feed formulations to meet the evolving needs of modern farming while maintaining our commitment to sustainability and animal welfare.
            </p>
            <p className="text-gray-700">
              Experience the difference that scientifically formulated, responsibly sourced animal feed can make in your livestock's health and your farm's productivity. With LEDEYN, you're choosing a partner dedicated to the success of your farming operation.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default AnimalFeedProtein;
