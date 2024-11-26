"use client";

import React, { useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";

const Spices: React.FC = () => {
  useEffect(() => {
    // Force body to always be scrollable
    document.body.style.overflowY = 'scroll';
    
    return () => {
      // Clean up the style when component unmounts
      document.body.style.overflowY = '';
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/spices.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center px-6 md:px-12 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Spices
          </h1>
          <p className="text-lg md:text-xl mb-6 text-white">
            A Range of Fresh Spices from Trusted Suppliers
          </p>
        </div>
      </section>

      {/* Product Overview Section */}
      <section className="py-16 px-8 md:px-16 lg:px-24 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                About Our Spices
              </h2>
              <p className="text-gray-700 mb-6">
                Spices are aromatic substances derived from various plant parts like seeds, roots, bark, or fruits, used to enhance the flavor, color, and aroma of food. They are integral to cuisines worldwide and have been traded for centuries due to their culinary, medicinal, and preservative properties. Some common spices include:
              </p>
              {/* Spices List */}
              <ol className="list-decimal list-inside text-black mb-6 font-bold">
                <li>
                  <em>Cinnamon</em> (bark)
                </li>
                <li>
                  <em>Black pepper</em> (seeds)
                </li>
                <li>
                  <em>Turmeric</em> (root)
                </li>
                <li>
                  <em>Cumin</em> (seeds)
                </li>
                <li>
                  <em>Cardamom</em> (pods)
                </li>
                <li>
                  <em>Cloves</em> (flower buds)
                </li>
                <li>
                  <em>Paprika</em> (ground peppers)
                </li>
                <li>
                  <em>Ginger</em> (root)
                </li>
              </ol>
              <p className="text-gray-700 mb-6">
                Each spice can impart a unique flavor, from sweet and warm to earthy or spicy, making them essential in both traditional and modern cooking.
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
                src="/images/spices.jpg"
                alt="Spices"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                We aim to provide the freshest and highest quality spices, sourced through ethical practices that benefit farmers and consumers alike.
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
                Our vision is to be the leading global supplier of sustainably sourced spices, promoting ethical trade and supporting local farmers.
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
            At Ledeyn, we believe that the finest spices come from a combination of ideal growing conditions, expert cultivation, and careful processing. Our commitment to quality begins in the fields, working hand-in-hand with skilled farmers who share our passion for producing exceptional spices.
          </p>
          <p className="text-gray-700 mb-6">
            Through sustainable farming practices and rigorous quality control measures, we ensure that every spice we supply meets the highest standards of flavor, aroma, and purity. Our spices are not just seasonings; they are the key to unlocking a world of culinary possibilities.
          </p>
          <p className="text-gray-700">
            Experience the vibrant flavors and enticing aromas of our premium spices. Whether you are a food manufacturer, a chef, or a home cooking enthusiast, Ledeyn is your trusted partner in sourcing the finest spices from around the world.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Spices;
