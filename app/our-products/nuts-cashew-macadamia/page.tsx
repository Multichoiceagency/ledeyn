"use client";

import React, { useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import SEO from '@/app/components/SEO'; // Import the SEO component

const NutsCashewMacadamia: React.FC = () => {
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
        title="Premium Cashew & Macadamia Nuts | LEDEYN"
        description="Discover LEDEYN's premium cashew and macadamia nuts, sourced globally from sustainable farms. Perfect for culinary uses and ethically produced."
        keywords="LEDEYN, cashew nuts, macadamia nuts, premium nuts, sustainable farming, ethically sourced nuts"
        ogImage="https://ledeyn.com/images/nuts-cashew-macadamia.jpg"
        ogUrl="https://ledeyn.com/our-products/nuts-cashew-macadamia"
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section
          className="relative h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/nuts-cashew-macadamia.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 text-center px-6 md:px-12 text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Nuts - Cashew & Macadamia
            </h1>
            <p className="text-lg md:text-xl mb-6 text-white">
              Premium Cashew and Macadamia Nuts, Sourced Globally
            </p>
          </div>
        </section>

        {/* First Section: About Our Nuts - Cashew & Macadamia */}
        <section className="py-16 px-8 md:px-16 lg:px-24 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  About Our Nuts - Cashew & Macadamia
                </h2>
                <p className="text-gray-700 mb-6">
                  Nuts are hard-shelled seeds or fruits that come from a variety of trees and plants. They are known for being nutrient-dense, providing a rich source of healthy fats, proteins, vitamins, and minerals. Nuts are often consumed as snacks, added to dishes, or used in making oils and nut butters.
                </p>
                <p className="text-gray-700 mb-6">
                  Our premium cashew and macadamia nuts are sourced from trusted farmers, ensuring quality and sustainability. We work closely with our partner farms to implement sustainable practices, ensuring that our nuts are not only delicious but also environmentally responsible and ethically sourced.
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
                  src="/images/nuts-cashew-macadamia.jpg"
                  alt="Nuts - Cashew & Macadamia"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Second Section: Overview of Nuts */}
        <section className="py-16 px-8 md:px-16 lg:px-24 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              About Nuts
            </h2>

            {/* Common Types of Nuts */}
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              1. <em>Common Types of Nuts</em>
            </h3>
            {/* ... rest of the content ... */}
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
                  We aim to provide premium-quality nuts while ensuring ethical practices in our supply chain.
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
                  Our vision is to be the global leader in supplying premium nuts with a focus on sustainability and fair trade.
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
              At LEDEYN, we believe that the finest cashew and macadamia nuts come from a combination of ideal growing conditions and expert care. Our commitment to quality begins in the orchards, working hand-in-hand with skilled farmers who share our passion for producing exceptional nuts.
            </p>
            <p className="text-gray-700 mb-6">
              Through sustainable farming practices and rigorous quality control measures, we ensure that every nut we supply meets the highest standards of flavor, texture, and nutritional value. Our cashews and macadamias are not just snacks; they are versatile ingredients that elevate a wide range of culinary creations.
            </p>
            <p className="text-gray-700">
              Experience the rich, buttery flavor and satisfying crunch of our premium cashews and macadamias. Whether you are a food manufacturer, a chef, or a discerning consumer, LEDEYN is your trusted partner in sourcing the finest nuts nature has to offer.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default NutsCashewMacadamia;
