"use client";

import React, { useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import SEO from '@/app/components/SEO'; // Import the SEO component

const Cacao: React.FC = () => {
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
        title="High-Quality Cacao Sourced from Africa | LEDEYN"
        description="Discover high-quality cacao sourced from West and Central Africa. LEDEYN ensures sustainable farming practices, empowering farmers and producing premium cacao."
        keywords="LEDEYN, cacao, high-quality cacao, sustainable cacao, African cacao, chocolate production, fair trade cacao"
        ogImage="https://ledeyn.com/images/cacao.jpg"
        ogUrl="https://ledeyn.com/our-products/cacao"
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section
          className="relative h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/cacao.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 text-center px-6 md:px-12 text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Cacao</h1>
            <p className="text-lg md:text-xl mb-6 text-white">
              High-Quality Cacao, Sourced from Africa
            </p>
          </div>
        </section>

        {/* First Section: About Our Cacao */}
        <section className="py-16 px-8 md:px-16 lg:px-24 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">About Our Cacao</h2>
                <p className="text-gray-700 mb-6">
                  Cacao beans are the seeds of the cacao tree (<em>Theobroma cacao</em>), native to tropical regions of Central and South America. These beans are the raw material used to produce chocolate and cocoa products. After harvesting, the beans are fermented, dried, roasted, and processed to create cocoa mass, cocoa butter, and cocoa powder.
                </p>
                <p className="text-gray-700 mb-6">
                  Our high-quality cacao is sourced directly from farmers in West and Central Africa. With a focus on sustainable practices, our cacao is perfect for chocolate production and a variety of other applications in the food industry.
                </p>
                <p className="text-gray-700 mb-6">
                  By working closely with local farmers, we ensure that our cacao meets the highest standards of quality while also contributing to the development of local communities.
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
                  src="/images/cacao-kop.jpg"
                  alt="Cacao"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Second Section: Key Points about Cacao Beans */}
        <section className="py-16 px-8 md:px-16 lg:px-24 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              About Cacao Beans
            </h2>
            <ol className="list-decimal list-inside text-gray-700 mb-6">
              <li className="mb-4">
                <strong>Harvesting</strong>: The beans are found inside pods, which are harvested from the cacao tree. Each pod contains around 30-50 beans.
              </li>
              <li className="mb-4">
                <strong>Fermentation and Drying</strong>: Once harvested, cacao beans undergo a fermentation process to develop flavor. After fermentation, they are dried before further processing.
              </li>
              <li className="mb-4">
                <strong>Roasting and Grinding</strong>: Dried beans are roasted to bring out their characteristic chocolate flavor. They are then ground to produce cocoa mass, a mix of cocoa solids and cocoa butter.
              </li>
              <li className="mb-4">
                <strong>Types of Cacao</strong>: There are three main varieties of cacao beans:
                <ul className="list-disc list-inside ml-6 mt-2">
                  <li><em>Forastero</em>: The most common and robust variety, comprising about 80-90% of the world's cacao production.</li>
                  <li><em>Criollo</em>: Known for its fine flavor, it's rarer and considered higher quality.</li>
                  <li><em>Trinitario</em>: A hybrid of Criollo and Forastero, offering a balance between flavor and hardiness.</li>
                </ul>
              </li>
              <li className="mb-4">
                <strong>Nutritional Value</strong>: Cacao beans are rich in antioxidants, especially flavonoids, and contain magnesium, iron, and fiber. They also have stimulants like theobromine and a small amount of caffeine.
              </li>
            </ol>
            <p className="text-gray-700 mb-6">
              Cacao beans can be used to make a variety of products, from dark chocolate to cocoa butter used in skincare products.
            </p>
          </div>
        </section>

        {/* Related Links Section */}
        <section className="py-16 px-8 md:px-16 lg:px-24 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white shadow-lg p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-gray-700 mb-6">
                  We are dedicated to providing the best quality cacao through sustainable farming practices that benefit both the environment and the local communities we work with.
                </p>
                <Link href="/mission" className="text-primary hover:underline">
                  Learn More
                </Link>
              </div>
              <div className="bg-white shadow-lg p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Our Vision</h3>
                <p className="text-gray-700 mb-6">
                  To be the leading provider of sustainable cacao, ensuring quality and fair trade practices that empower farmers and foster growth in the global market.
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Commitment to Quality</h2>
            <p className="text-gray-700 mb-6">
              At LEDEYN, we believe that the finest chocolate begins with the highest quality cacao. Our commitment to excellence starts at the source, working hand-in-hand with skilled farmers who share our passion for producing exceptional cacao beans.
            </p>
            <p className="text-gray-700 mb-6">
              Through sustainable farming practices and fair trade partnerships, we not only ensure the superior quality of our cacao but also contribute to the well-being of farming communities and the preservation of our planet's precious ecosystems.
            </p>
            <p className="text-gray-700">
              Experience the rich, complex flavors of our carefully sourced and expertly processed cacao in every product we offer. From bean to bar, we guarantee a taste of perfection in every bite.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Cacao;
