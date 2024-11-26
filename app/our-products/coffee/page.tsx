"use client";

import React, { useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import SEO from '@/app/components/SEO'; // Import the SEO component

const Coffee: React.FC = () => {
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
        title="Premium Coffee Beans | LEDEYN"
        description="Explore premium coffee beans sourced globally by LEDEYN. Enjoy rich and bold flavors while supporting sustainable and fair trade practices."
        keywords="LEDEYN, coffee beans, premium coffee, sustainable coffee, fair trade coffee, global coffee sourcing"
        ogImage="https://ledeyn.com/images/coffee.jpg"
        ogUrl="https://ledeyn.com/our-products/coffee"
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section
          className="relative h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/coffee.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 text-center px-6 md:px-12 text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Coffee
            </h1>
            <p className="text-lg md:text-xl mb-6 text-white">
              Premium Coffee Beans, Sourced Globally
            </p>
          </div>
        </section>

        {/* First Section: About Our Coffee */}
        <section className="py-16 px-8 md:px-16 lg:px-24 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  About Our Coffee
                </h2>
                <p className="text-gray-700 mb-6">
                  Coffee is a beloved beverage made from roasted coffee beans, offering a range of flavors depending on the bean type, roast level, and brewing method. People enjoy coffee for its rich taste and caffeine, which provides a boost of energy and focus. It comes in many forms, like espresso, latte, cappuccino, and cold brew. Coffee has a rich history, originating in Ethiopia and spreading globally to become a cultural staple in many societies.
                </p>
                <p className="text-gray-700 mb-6">
                  Discover our premium coffee beans sourced from the finest farms around the world. With a focus on sustainability and quality, our coffee offers a rich and bold flavor that coffee enthusiasts love globally. We work closely with farmers to ensure the highest quality beans while supporting sustainable farming practices and fair trade.
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
                  src="/images/coffee.jpg"
                  alt="Coffee"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Second Section: Types of Coffee Beans */}
        <section className="py-16 px-8 md:px-16 lg:px-24 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Types of Coffee Beans
            </h2>
            <p className="text-gray-700 mb-6">
              There are four main types of coffee beans, each with unique characteristics in terms of flavor, acidity, and caffeine content:
            </p>

            {/* Arabica */}
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              1. <em>Arabica (Coffea Arabica)</em>
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>
                <strong>Flavor</strong>: Mild, sweet, and complex with a wide range of flavors, often fruity or floral. Sometimes with hints of nuts or chocolate.
              </li>
              <li>
                <strong>Caffeine</strong>: Lower caffeine content compared to other beans.
              </li>
              <li>
                <strong>Where it's grown</strong>: Mostly in high-altitude regions like Latin America, Africa, and parts of Asia.
              </li>
              <li>
                <strong>Popularity</strong>: It’s the most popular coffee bean, accounting for about 60-70% of global coffee production.
              </li>
            </ul>

            {/* Robusta */}
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              2. <em>Robusta (Coffea Canephora)</em>
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>
                <strong>Flavor</strong>: Strong, bold, and often more bitter with earthy, nutty flavors. Can have a grainy or harsh taste.
              </li>
              <li>
                <strong>Caffeine</strong>: Higher caffeine content than Arabica, which gives it a more bitter taste.
              </li>
              <li>
                <strong>Where it's grown</strong>: Mainly in low-altitude regions, especially in Africa, Southeast Asia (Vietnam is the largest producer), and parts of Brazil.
              </li>
              <li>
                <strong>Uses</strong>: Often used in espresso blends or instant coffee due to its strong flavor and crema production.
              </li>
            </ul>

            {/* Liberica */}
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              3. <em>Liberica (Coffea Liberica)</em>
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>
                <strong>Flavor</strong>: Smoky, woody, and slightly floral with a full-bodied, bold flavor. Sometimes described as having a fruity or spicy aftertaste.
              </li>
              <li>
                <strong>Caffeine</strong>: Moderate caffeine content.
              </li>
              <li>
                <strong>Where it's grown</strong>: Primarily in the Philippines, Malaysia, and parts of West Africa.
              </li>
              <li>
                <strong>Rarity</strong>: It’s rarer than Arabica and Robusta, and often considered a niche bean due to its unique taste.
              </li>
            </ul>

            {/* Excelsa */}
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              4. <em>Excelsa (Coffea Excelsa)</em>
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>
                <strong>Flavor</strong>: Tends to be tart, fruity, and slightly tangy, with a complex flavor profile that can include both light and dark roast characteristics.
              </li>
              <li>
                <strong>Caffeine</strong>: Moderate caffeine content.
              </li>
              <li>
                <strong>Where it's grown</strong>: Primarily in Southeast Asia.
              </li>
              <li>
                <strong>Uses</strong>: Often blended with other beans to add complexity and depth to the coffee flavor.
              </li>
            </ul>

            <p className="text-gray-700 mb-6">
              Each type of coffee bean brings its own unique qualities to the cup, and the way they are roasted and brewed can further enhance or change their flavors.
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
                  We aim to connect coffee farmers with consumers globally, ensuring high-quality coffee through ethical and sustainable practices.
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
                  Our vision is to provide premium coffee to coffee lovers worldwide while supporting the farmers who produce our coffee beans.
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
              At LEDEYN, we believe that exceptional coffee starts with carefully selected beans. Our commitment to quality begins at the source, partnering with skilled farmers who share our passion for producing outstanding coffee beans.
            </p>
            <p className="text-gray-700 mb-6">
              Through sustainable farming practices and fair trade partnerships, we ensure not only the superior quality of our coffee but also contribute to the well-being of farming communities and the preservation of our planet's diverse coffee-growing regions.
            </p>
            <p className="text-gray-700">
              Experience the rich, complex flavors of our meticulously sourced and expertly roasted coffee in every cup. From bean to brew, we guarantee a taste of excellence in every sip.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Coffee;
