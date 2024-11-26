"use client";

import React, { useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import SEO from '@/app/components/SEO'; // Import the SEO component

const EdibleOils: React.FC = () => {
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
        title="Organic Edible Oils | LEDEYN"
        description="Discover a variety of organic edible oils from LEDEYN, sourced from sustainable farms for cooking and culinary uses."
        keywords="LEDEYN, edible oils, organic oils, cooking oils, sustainable edible oils, high-quality oils"
        ogImage="https://ledeyn.com/images/edible-oils.jpg"
        ogUrl="https://ledeyn.com/our-products/edible-oils"
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section
          className="relative h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/edible-oils.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 text-center px-6 md:px-12 text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Edible Oils
            </h1>
            <p className="text-lg md:text-xl mb-6 text-white">
              Supplying a Range of Edible Oils Sourced from Organic Farms
            </p>
          </div>
        </section>

        {/* First Section: About Our Edible Oils */}
        <section className="py-16 px-8 md:px-16 lg:px-24 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  About Our Edible Oils
                </h2>
                <p className="text-gray-700 mb-6">
                  Edible oils are plant, animal, or synthetic fats used in cooking, frying, baking, and as flavor enhancers. They are essential in food preparation for their ability to transfer heat, enhance flavors, and provide nutritional benefits like essential fatty acids and vitamins.
                </p>
                <p className="text-gray-700 mb-6">
                  Our selection of edible oils is sourced from organic farms and meets the highest standards of purity and quality. Perfect for cooking and other culinary uses, we work closely with organic farmers to ensure sustainable practices are used in the cultivation and production of our oils, resulting in products that are not only delicious but also environmentally friendly.
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
                  src="/images/edible-oils.jpg"
                  alt="Edible Oils"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Second Section: Types of Edible Oils */}
        <section className="py-16 px-8 md:px-16 lg:px-24 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Types of Edible Oils
            </h2>
            <p className="text-gray-700 mb-6">
              Some common types of edible oils include:
            </p>

            {/* Vegetable Oils Section */}
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              1. <em>Vegetable Oils</em>
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>
                <strong>Olive oil</strong>: A healthy oil high in monounsaturated fats, often used in Mediterranean cooking.
              </li>
              <li>
                <strong>Canola oil</strong>: Low in saturated fat and high in omega-3 fatty acids, commonly used for frying and baking.
              </li>
              <li>
                <strong>Sunflower oil</strong>: Rich in vitamin E, ideal for frying and baking due to its light flavor.
              </li>
              <li>
                <strong>Soybean oil</strong>: Widely used in processed foods and frying, rich in polyunsaturated fats.
              </li>
              <li>
                <strong>Coconut oil</strong>: Contains medium-chain fatty acids, solid at room temperature, used in baking and frying.
              </li>
              <li>
                <strong>Palm oil</strong>: Commonly used in processed foods, high in saturated fat.
              </li>
            </ul>

            {/* Animal-Based Oils Section */}
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              2. <em>Animal-Based Oils</em>
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>
                <strong>Butter</strong>: Derived from milk fat, commonly used in baking and frying, rich in saturated fats.
              </li>
              <li>
                <strong>Lard</strong>: Rendered pork fat, used in traditional cooking for frying and baking.
              </li>
            </ul>

            {/* Nut and Seed Oils Section */}
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              3. <em>Nut and Seed Oils</em>
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>
                <strong>Almond oil</strong>: Used in salad dressings and baking, rich in monounsaturated fats.
              </li>
              <li>
                <strong>Sesame oil</strong>: Popular in Asian cuisines, with a distinctive flavor and rich in antioxidants.
              </li>
              <li>
                <strong>Flaxseed oil</strong>: High in omega-3 fatty acids, often used in dressings and cold dishes.
              </li>
            </ul>

            {/* Specialty Oils Section */}
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              4. <em>Specialty Oils</em>
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>
                <strong>Avocado oil</strong>: High smoke point, rich in monounsaturated fats, suitable for both cooking and salads.
              </li>
              <li>
                <strong>Grapeseed oil</strong>: A byproduct of winemaking, neutral flavor, good for frying and sautéing.
              </li>
            </ul>

            <p className="text-gray-700 mb-6">
              Each type of oil has different smoke points, nutritional profiles, and culinary applications, making the choice of oil important depending on the dish being prepared.
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
                  We aim to provide pure, high-quality edible oils sourced from trusted farms, promoting health and sustainability in the food industry.
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
                  Our vision is to lead the global edible oils market with a focus on quality, sustainability, and consumer health.
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
              At LEDEYN, we believe that the finest edible oils come from the purest sources. Our commitment to quality begins with carefully selected organic farms and extends through our meticulous extraction and refining processes.
            </p>
            <p className="text-gray-700 mb-6">
              Through partnerships with certified organic farmers and ongoing research into sustainable farming practices, we continually improve our production methods to deliver oils that are not only delicious and nutritious but also environmentally responsible.
            </p>
            <p className="text-gray-700">
              Experience the rich flavors and health benefits of our premium edible oils. Whether you are a home cook or a professional chef, LEDEYN oils will elevate your culinary creations while supporting sustainable agriculture.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default EdibleOils;
