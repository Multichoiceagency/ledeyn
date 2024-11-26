"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
<footer className="animated-gradient mx-7 mb-7 text-white py-16 rounded-3xl">
<div className="container mx-auto px-4">
        {/* Logo Section */}
        <div className="flex justify-center mb-12">
            <Link href="https://ledeyn.com">
                <Image
                src="/logo.png" // Replace with your logo path
                alt="ledeyn Logo"
                width={200}
                height={80}
                className="object-contain bg-white mb-9 p-4 rounded-2xl"
                />
            </Link>
            </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-1xl md:text-left text-white">
          
          {/* First Section: Main Navigation */}
          <div>
            <h3 className="font-bold text-xl mb-4 text-white">Menu</h3>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/our-products">Our Products</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Second Section: Our Products */}
          <div>
            <h3 className="font-bold text-xl mb-4 text-white">Our Products</h3>
            <ul>
              <li>
                <Link href="/our-products/animal-feed-protein">Animala FEED & Protein</Link>
              </li>
              <li>
                <Link href="/our-products/cacao">Cocoa</Link>
              </li>
              <li>
                <Link href="/our-products/coffee">Coffee</Link>
              </li>
              <li>
                <Link href="/our-products/cotton">Cotton</Link>
              </li>
              <li>
                <Link href="/our-products/edible-oils">Edible Oils</Link>
              </li>
              <li>
                <Link href="/our-products/grain-seeds">Grain & Seeds – Sesame / Soy Beans / Wheat / Corn</Link>
              </li>
              <li>
                <Link href="/our-products/nuts-cashew-macadamia">Nuts – Cashew / Macademia</Link>
              </li>
              <li>
                <Link href="/our-products/rubber">Rubber</Link>
              </li>
              <li>
                <Link href="/our-products/spices">Spices – Black Pepper / Cumcuma / Ginger / Turmeric / Cinnamon / Cardamom</Link>
              </li>
            </ul>
          </div>

          {/* Third Section: Contact Information */}
          <div>
            <h3 className="font-bold text-xl mb-4 text-white">Contact</h3>
            <ul>
                <li>
                <Link href="mailto:info@ledeyn.com" className="hover:underline text-white">
                    info@ledeyn.com
                </Link>
                </li>
                <li>
                <Link href="tel:+31624335929" className="hover:underline text-white">
                    +31 6 24 33 59 29
                </Link>
                </li>
                <li>Monday–Friday: 10:00 to 17:00</li>
                <li>Saturday: 13:00 to 17:00</li>
                <li>Sunday: Closed</li>
            </ul>
            </div>


          {/* Fourth Section: Legal and Information */}
          <div>
            <h3 className="font-bold text-xl mb-4 text-white">Info</h3>
            <ul>
              <li>
                <Link href="/sitemap.xml">Sitemap</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="mt-12 text-center text-sm text-gray-300">
            Ledeyn B.V. © Copyright 2024{" "}
            <Link href="https://multichoiceagency.nl" className="text-white hover:underline">
                Multichoiceagency
            </Link>
            </div>
      </div>
    </footer>
  );
};

export default Footer;
