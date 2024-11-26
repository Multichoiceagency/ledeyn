"use client";

import React, { useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import SEO from '@/app/components/SEO'; // Import the SEO component

const Cotton: React.FC = () => {
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
        title="Ethically Produced Cotton | LEDEYN"
        description="Discover ethically produced cotton from LEDEYN, supporting sustainable farming and high-quality textiles for global markets."
        keywords="LEDEYN, cotton, sustainable cotton, ethical cotton, cotton farming, high-quality cotton, textile cotton"
        ogImage="https://ledeyn.com/images/cotton.jpg"
        ogUrl="https://ledeyn.com/our-products/cotton"
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section
          className="relative h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/cotton.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 text-center px-6 md:px-12 text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Cotton
            </h1>
            <p className="text-lg md:text-xl mb-6 text-white">
              Ethically Produced and Distributed Cotton
            </p>
          </div>
        </section>

        {/* First Section: About Our Cotton */}
        <section className="py-16 px-8 md:px-16 lg:px-24 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  About Our Cotton
                </h2>
                <p className="text-gray-700 mb-6">
                  Cotton is a soft, fluffy fiber that grows in a protective case, known as a boll, around the seeds of cotton plants. It is one of the most important natural fibers used in the textile industry and has been cultivated for thousands of years for its versatility, breathability, and comfort.
                </p>
                <p className="text-gray-700 mb-6">
                  Our cotton is sourced from sustainable farms, ensuring high-quality fibers that meet the needs of textile manufacturers around the world. We work closely with farmers to implement ethical farming practices, ensuring the production of premium cotton while supporting local communities and preserving the environment.
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
                  src="/images/cotton.jpg"
                  alt="Cotton"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Second Section: Key Points about Cotton */}
        <section className="py-16 px-8 md:px-16 lg:px-24 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              About Cotton
            </h2>

            {/* Cultivation and Growth */}
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              1. <em>Cultivation and Growth</em>
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>
                Cotton comes from plants in the genus <em>Gossypium</em>, primarily grown in tropical and subtropical regions.
              </li>
              <li>
                The major cotton-producing countries include the United States, China, India, Brazil, and Pakistan.
              </li>
              <li>
                Cotton plants require a warm climate, plenty of sunshine, and moderate rainfall. The plants are harvested once the bolls mature and split open, revealing the white fibers inside.
              </li>
            </ul>

            {/* Processing */}
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              2. <em>Processing</em>
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>
                <strong>Harvesting</strong>: Cotton is harvested either by hand or using machines, depending on the region.
              </li>
              <li>
                <strong>Ginning</strong>: After harvesting, the cotton fibers are separated from the seeds using a machine called a cotton gin. This process produces raw cotton (lint) and cottonseed.
              </li>
              <li>
                <strong>Spinning and Weaving</strong>: The lint is spun into yarn or thread, which is then woven or knitted into fabric.
              </li>
            </ul>

            {/* Types of Cotton */}
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              3. <em>Types of Cotton</em>
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>
                <strong>Upland Cotton</strong>: The most widely grown type, accounting for about 90% of the world’s production.
              </li>
              <li>
                <strong>Pima Cotton</strong>: Known for its long, smooth fibers and superior softness. It's often used in higher-end textiles.
              </li>
              <li>
                <strong>Egyptian Cotton</strong>: A luxurious, high-quality cotton known for its long fibers and used in premium products, particularly bed linens.
              </li>
            </ul>

            {/* Uses */}
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              4. <em>Uses</em>
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>
                <strong>Textiles</strong>: Cotton is commonly used to make clothing, bedsheets, towels, and other fabrics due to its softness, breathability, and durability.
              </li>
              <li>
                <strong>Industrial Use</strong>: Cotton is also used in products like medical gauze, bandages, cotton balls, and filters.
              </li>
              <li>
                <strong>Cottonseed Oil</strong>: The seeds are pressed to extract cottonseed oil, which is used in cooking and food processing.
              </li>
            </ul>

            {/* Environmental Impact */}
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              5. <em>Environmental Impact</em>
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>
                Cotton is a water-intensive crop, and its cultivation can have significant environmental effects if not managed sustainably. In some regions, the use of pesticides and excessive water use has led to environmental challenges.
              </li>
              <li>
                However, organic cotton, which is grown without synthetic chemicals, is becoming more popular for its reduced environmental footprint.
              </li>
            </ul>

            {/* Cultural and Economic Importance */}
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              6. <em>Cultural and Economic Importance</em>
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>
                Cotton has played a significant role in global history, particularly during the Industrial Revolution, when cotton textiles fueled the growth of the textile industry.
              </li>
              <li>
                Cotton remains a vital economic crop in many countries, supporting millions of farmers and workers worldwide.
              </li>
            </ul>
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
                  We aim to offer high-quality, ethically produced cotton that supports both farmers and the global textile industry.
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
                  Our vision is to lead the cotton industry with sustainability and ethical practices, ensuring quality cotton for years to come.
                </p>
                <Link href="/vision" className="text-primary hover:underline">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment to Sustainability Section */}
        <section className="py-16 px-8 md:px-16 lg:px-24 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Our Commitment to Sustainability
            </h2>
            <p className="text-gray-700 mb-6">
              At LEDEYN, we believe that the finest cotton is produced through sustainable and ethical practices. Our commitment to excellence begins in the fields, working hand-in-hand with skilled farmers who share our passion for producing exceptional cotton fibers.
            </p>
            <p className="text-gray-700 mb-6">
              Through sustainable farming techniques and fair trade partnerships, we not only ensure the superior quality of our cotton but also contribute to the well-being of farming communities and the preservation of our planet's delicate ecosystems.
            </p>
            <p className="text-gray-700">
              Experience the soft, durable, and versatile nature of our carefully sourced and ethically produced cotton in every product. From field to fabric, we guarantee quality and sustainability in every fiber.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Cotton;
