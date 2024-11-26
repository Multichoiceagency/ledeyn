"use client";

import Link from "next/link";
import Image from "next/image";
import SEO from "../components/SEO";


const AboutUs: React.FC = () => {
  return (
    <>
          <SEO 
        title="About LEDEYN | Leading Import-Export Experts in Foods & Commodities"
        description="Learn about LEDEYN, a key player in the import-export of high-quality foods and commodities. Discover our expertise, global network, mission, and vision."
        keywords="LEDEYN, import-export, foods, commodities, global network, sustainability, quality products, Rotterdam"
        ogImage="https://ledeyn.com/images/logo.png"
        ogUrl="https://ledeyn.com/about"
      />
      {/* Hero Section with Background Image and Animated Gradient */}
      <section className="relative h-[75vh] w-full flex items-center justify-center bg-cover bg-center bg-no-repeat hero-background">
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 animated-gradient z-10"></div>

        {/* Optional Dark Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-20"></div>

        {/* Hero Content */}
        <div className="relative z-30 text-center px-6 md:px-12 text-white">
          <h1 className="text-5xl md:text-6xl text-white font-bold mb-6">About LEDEYN</h1>
          <p className="text-lg md:text-xl text-white mb-6">
            Leading Import-Export Experts in Foods & Commodities
          </p>
          <Link href="/our-products" className="inline-block bg-white text-black py-3 px-6 rounded-lg font-bold">
            Explore Our Products
          </Link>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-16 px-8 md:px-16 lg:px-24 bg-gray-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Expertise & Global Network</h2>
              <p className="text-gray-700 mb-6">
                LEDEYN, based in Rotterdam, Netherlands, is a key player in the import-export of high-quality foods and
                commodities. With decades of experience in distribution, our company continually evolves to keep pace
                with changing market trends.
              </p>
              <p className="text-gray-700 mb-6">
                We have established a global presence by consistently offering diverse, top-quality products that meet
                the needs of consumers worldwide. At LEDEYN, we pride ourselves on providing customized solutions to
                satisfy the ever-changing demands of our customers in the food sector.
              </p>
              <p className="text-gray-700 mb-6">
                Our roots trace back to West and Central Africa, where we initially focused on cost-sharing synergies
                within our product portfolio. Over the years, LEDEYN expanded its reach across regions and markets,
                growing into a trusted supplier for some of the largest food and commodity companies globally.
              </p>
              <p className="text-gray-700 mb-6">
                LEDEYN works closely with farmers at all levels, including small-scale and large-scale operations,
                cooperatives, and collectors. Our extensive network allows us to maintain competitive pricing while
                ensuring direct communication with farmers, which enhances product quality through continuous feedback.
              </p>
              <Link href="/our-products" className="inline-block bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded-lg">
                Explore Our Products
              </Link>
            </div>

            {/* Image Section */}
            <div className="relative w-full h-80 lg:h-full">
              <Image
                src="/images/cacao-kop.jpg"
                alt="LEDEYN Company Overview"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Mission and Vision Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white shadow-lg p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-6">
                LEDEYN is committed to connecting farmers and consumers worldwide through sustainable and high-quality
                products. We aim to promote a healthy lifestyle while contributing to global food security, ensuring
                excellence in every aspect of our business.
              </p>
              <Link href="/mission" className="text-primary hover:underline">
                Learn More
              </Link>
            </div>

            <div className="bg-white shadow-lg p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-700 mb-6">
                We envision a future where sustainability and quality form the foundation of the global food and
                commodity industry. By maintaining strong relationships with our partners and prioritizing
                environmentally responsible practices, LEDEYN aims to drive positive change in food production and
                distribution worldwide.
              </p>
              <Link href="/vision" className="text-primary hover:underline">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
