"use client";

import Link from "next/link";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import SEO from '@/app/components/SEO'; // Import the SEO component

const ProductsPage: React.FC = () => {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <>
      {/* SEO Component with appropriate metadata */}
      <SEO
        title="Our Products | LEDEYN"
        description="Explore LEDEYN's wide variety of products, sourced globally and sustainably. From cacao to spices, we ensure quality and ethical sourcing."
        keywords="LEDEYN products, sustainable sourcing, cacao, coffee, cotton, edible oils, spices, grain seeds, rubber"
        ogImage="https://ledeyn.com/images/cacao-kop.jpg"
        ogUrl="https://ledeyn.com/our-products/products"
      />

      {/* Hero Section with Background Image and Animated Gradient */}
      <section className="relative h-[75vh] w-full flex items-center justify-center bg-cover bg-center bg-no-repeat hero-background">
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 animated-gradient z-10"></div>

        {/* Optional Dark Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-20"></div>

        {/* Hero Content */}
        <div className="relative z-30 text-center px-6 md:px-12 text-white">
          <h1 className="text-5xl md:text-6xl text-white font-bold mb-6">Our Products</h1>
          <p className="text-lg md:text-xl text-white mb-6">
            Explore the finest selection of products, sourced globally.
          </p>
          <Link href="#product-carousel" className="inline-block bg-white text-black py-3 px-6 rounded-lg font-bold">
            See Products
          </Link>
        </div>
      </section>

      {/* Product Carousel Section */}
      <section id="product-carousel" className="w-full h-full py-20 z-10">
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
          OUR PRODUCTS
        </h2>

        <p className="max-w-7xl pl-4 mx-auto text-neutral-600 dark:text-neutral-400 text-lg md:text-2xl mt-4">
          Explore our wide variety of products, carefully sourced to provide the highest quality and diversity. From fresh produce to essential commodities, LEDEYN is a trusted supplier for global consumers.
        </p>

        {/* Carousel with Product Cards */}
        <Carousel items={cards} />
      </section>
    </>
  );
};

const data = [
  {
    category: "Learn More",
    title: "Cacao",
    slug: "cacao",
    src: "/images/cacao-kop.jpg",
    content: (
      <div>
        <p className="font-bold">Cacao</p>
        <p>Our high-quality cacao is sourced directly from farmers in West and Central Africa.</p>
        <Link href="/our-products/cacao" className="text-primary hover:underline">
          Learn more about Cacao
        </Link>
      </div>
    ),
  },
  {
    category: "Learn More",
    title: "Animal FEED & Protein",
    slug: "animal-feed-protein",
    src: "/images/animal-feed.jpg",
    content: (
      <div>
        <p className="font-bold">Animal FEED & Protein</p>
        <p>Providing the best nutrition for your animals, sourced sustainably.</p>
        <Link href="/our-products/animal-feed-protein" className="text-primary hover:underline">
          Learn more about Animal Feed & Protein
        </Link>
      </div>
    ),
  },
  {
    category: "Learn More",
    title: "Coffee",
    slug: "coffee",
    src: "/images/coffee.jpg",
    content: (
      <div>
        <p className="font-bold">Coffee</p>
        <p>Discover our premium coffee beans sourced from the finest farms.</p>
        <Link href="/our-products/coffee" className="text-primary hover:underline">
          Learn more about Coffee
        </Link>
      </div>
    ),
  },
  {
    category: "Product",
    title: "Cotton",
    slug: "cotton",
    src: "/images/cotton.jpg",
    content: (
      <div>
        <p className="font-bold">Cotton</p>
        <p>We source the highest quality cotton, ethically produced and distributed.</p>
        <Link href="/our-products/cotton" className="text-primary hover:underline">
          Learn more about Cotton
        </Link>
      </div>
    ),
  },
  {
    category: "Learn More",
    title: "Edible Oils",
    slug: "edible-oils",
    src: "/images/edible-oils.jpg",
    content: (
      <div>
        <p className="font-bold">Edible Oils</p>
        <p>Supplying a range of edible oils sourced from organic farms.</p>
        <Link href="/our-products/edible-oils" className="text-primary hover:underline">
          Learn more about Edible Oils
        </Link>
      </div>
    ),
  },
  {
    category: "Learn More",
    title: "Grain & Seeds – Sesame / Soy Beans / Wheat / Corn",
    slug: "grain-seeds",
    src: "/images/grain-seeds.jpg",
    content: (
      <div>
        <p className="font-bold">Grain & Seeds</p>
        <p>Sourcing the finest grains and seeds including sesame, soy beans, wheat, and corn.</p>
        <Link href="/our-products/grain-seeds" className="text-primary hover:underline">
          Learn more about Grain & Seeds
        </Link>
      </div>
    ),
  },
  {
    category: "Learn More",
    title: "Nuts - Cashew / Macadamia",
    slug: "nuts-cashew-macadamia",
    src: "/images/nuts-cashew-macadamia.jpg",
    content: (
      <div>
        <p className="font-bold">Nuts</p>
        <p>Our selection includes premium cashew and macadamia nuts from trusted farmers.</p>
        <Link href="/our-products/nuts-cashew-macadamia" className="text-primary hover:underline">
          Learn more about Nuts
        </Link>
      </div>
    ),
  },
  {
    category: "Learn More",
    title: "Rubber",
    slug: "rubber",
    src: "/images/rubber-grondstof.jpeg",
    content: (
      <div>
        <p className="font-bold">Rubber</p>
        <p>We provide high-quality rubber, ensuring sustainable sourcing and production.</p>
        <Link href="/our-products/rubber" className="text-primary hover:underline">
          Learn more about Rubber
        </Link>
      </div>
    ),
  },
  {
    category: "Learn More",
    title: "Spices - Black Pepper / Cumcuma / Poppies / Ginger / Turmeric / Cinnamon / Cardamom",
    slug: "spices",
    src: "/images/spices.jpg",
    content: (
      <div>
        <p className="font-bold">Spices</p>
        <p>Discover our range of fresh spices including black pepper, turmeric, cinnamon, and cardamom.</p>
        <Link href="/our-products/spices" className="text-primary hover:underline">
          Learn more about Spices
        </Link>
      </div>
    ),
  },
];

export default ProductsPage;
