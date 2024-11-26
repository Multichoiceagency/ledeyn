"use client";

import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image from "next/image";
import { Handlee } from "next/font/google";
import Button from "./Button/Button";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import SEO from "@/app/components/SEO"; // Import the SEO component

const handleeFont = Handlee({ weight: "400", subsets: ["latin"] });

const images = [
  { url: "/images/agro.jpg", title: "Welcome to Ledeyn", subtitle: "Organic Farms" },
  { url: "/images/cacao.jpg", title: "Quality Cacao", subtitle: "Our Best Products" },
  { url: "/images/coffee-tree.jpg", title: "Delicious Coffee", subtitle: "Premium Coffee Beans" },
];

const properties = {
  prevArrow: (
    <div className="bg-black bg-opacity-50 p-2 ml-12 rounded-full cursor-pointer hover:bg-opacity-75 transition">
      <IconArrowNarrowLeft className="h-8 w-8 text-white" />
    </div>
  ),
  nextArrow: (
    <div className="bg-black bg-opacity-50 p-2 mr-12 rounded-full cursor-pointer hover:bg-opacity-75 transition">
      <IconArrowNarrowRight className="h-8 w-8 text-white" />
    </div>
  ),
  duration: 3000, // Time before next slide (in ms)
  transitionDuration: 1000, // Duration of slide animation (1 second)
  cssEase: "cubic-bezier(0.68, -0.55, 0.27, 1.55)", // Custom cubic-bezier for smooth animation
  indicators: false, // Show slide indicators
};

const Slideshow: React.FC = () => {
  return (
    <>
      {/* SEO Component with appropriate metadata */}
      <SEO
        title="Welcome to Ledeyn | Explore Our Organic Farms & Quality Products"
        description="Explore premium quality products including organic cacao and coffee from Ledeyn. Discover sustainable farms and top-notch products."
        keywords="Ledeyn, organic farms, quality cacao, premium coffee, sustainable products"
        ogImage="https://ledeyn.com/logo.png"
        ogUrl="https://ledeyn.com"
      />

      <div className="relative w-full h-screen max-h-[100vh]"> {/* Enforced height for layout stability */}
        <Slide {...properties}>
          {images.map((each, index) => (
            <div className="relative w-full h-screen" key={index}> {/* Set fixed height for layout stability */}
              <Image
                src={each.url}
                alt={`slide-${index}`}
                fill
                priority={index === 0} // Prioritize loading of the first image
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw" // Proper sizing for different screen sizes
                className="w-full h-full object-cover" // Ensure full coverage
                quality={100} // Set image quality to 100%
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-black bg-opacity-50">
                <h1
                  className={`text-[40px] pb-8 md:text-[120px] font-bold text-white ${handleeFont.className}`}
                >
                  {each.title}
                </h1>
                <p className="mt-4 pb-8 md:text-xl text-white pt-5">{each.subtitle}</p>
                <div className="mt-6 flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
                  <Button href="/our-products" variant="secondary" icon={false} className="extra-class">
                    Our Products
                  </Button>
                  <Button href="/contact" className="px-6 py-2 bg-transparent border border-white text-white rounded-lg hover:bg-white hover:text-black transition-colors">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </>
  );
};

export default Slideshow;
