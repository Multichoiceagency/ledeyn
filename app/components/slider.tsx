"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable"; // Import useSwipeable
import Image from "next/image";
import { Handlee } from "next/font/google";
import Button from "./Button/Button";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";

const handleeFont = Handlee({ weight: "400", subsets: ["latin"] });

interface SliderData {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

interface WPResponse {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  _embedded?: {
    "wp:featuredmedia"?: [
      {
        source_url: string;
      }
    ];
  };
}

const Slideshow: React.FC = () => {
  const [slides, setSlides] = useState<SliderData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchSliders = async () => {
      try {
        const res = await fetch(
          "https://docker-image-production-cde8.up.railway.app/wp-json/wp/v2/slider?_embed"
        );
        const data: WPResponse[] = await res.json();

        const formattedSlides: SliderData[] = data.map((slide) => ({
          id: slide.id,
          title: slide.title?.rendered || "Untitled",
          subtitle: slide.content?.rendered || "No content available",
          image:
            slide._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            "/placeholder.jpg",
        }));

        setSlides(formattedSlides);
      } catch (error) {
        console.error("Error fetching sliders:", error);
      }
    };

    fetchSliders();
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }, [slides.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  }, [slides.length]);

  // Configure Swipeable
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext, // Swipe left for next slide
    onSwipedRight: handlePrev, // Swipe right for previous slide
    trackTouch: true, // Enable touch tracking
    trackMouse: false, // Disable mouse tracking (only for touch)
  });

  return (
    <div
      className="relative w-full h-screen max-h-[100vh] overflow-hidden"
      {...swipeHandlers} // Attach swipe handlers to the container
    >
      <AnimatePresence>
        {slides.length > 0 && (
          <motion.div
            key={slides[currentIndex].id}
            className="absolute w-full h-full"
            initial={{ opacity: 0, x: 100 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, ease: "easeInOut" },
            }}
            exit={{
              opacity: 0,
              x: -100,
              transition: { duration: 0.8, ease: "easeInOut" },
            }}
          >
            <Image
              src={slides[currentIndex].image}
              alt={`slide-${slides[currentIndex].id}`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              className="w-full h-full object-cover"
            />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-black bg-opacity-50 px-4">
          <h1
  className={`text-[28px] sm:text-[36px] md:text-[48px] lg:text-[72px] xl:text-[120px] font-bold text-white leading-tight md:leading-none ${handleeFont.className}`}
>
                {slides[currentIndex].title}
              </h1>
              <p
                className="mt-2 md:mt-4 pb-6 md:pb-8 text-sm md:text-xl text-white"
                dangerouslySetInnerHTML={{
                  __html: slides[currentIndex].subtitle,
                }}
              />
                  <div className="mt-10 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                  <Button
                    href="/our-products"
                    variant="secondary"
                    icon={false}
                    className="extra-class flex-1" // Flex item for equal width
                  >
                    Our Products
                  </Button>
                  <Button
                    href="/contact"
                    className="px-6 py-2 bg-transparent border border-white text-white rounded-lg hover:bg-white hover:text-black transition-colors flex-1"
                  >
                    Contact Us
                  </Button>
                </div>  
            </div>  
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition"
        onClick={handlePrev}
      >
        <IconArrowNarrowLeft className="h-8 w-8 text-white" />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition"
        onClick={handleNext}
      >
        <IconArrowNarrowRight className="h-8 w-8 text-white" />
      </button>
    </div>
  );
};

export default Slideshow;
