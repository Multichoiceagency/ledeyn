"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button/Button";
import { IconBrandWhatsapp } from "@tabler/icons-react";

// Hamburger Icon component for mobile menu
const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke={isOpen ? "#EB4E1E" : "currentColor"} // Active color when open
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="cursor-pointer"
  >
    {/* Middle line fades out */}
    <motion.line
      x1="3"
      y1="12"
      x2="21"
      y2="12"
      animate={isOpen ? { opacity: 0 } : { opacity: 1 }} // Middle line disappears when open
      transition={{ duration: 0.2 }}
    />
    {/* Top line moves down and rotates */}
    <motion.line
      x1="3"
      y1="6"
      x2="21"
      y2="6"
      animate={isOpen ? { rotate: 45, y1: 12, y2: 12 } : { rotate: 0, y1: 6, y2: 6 }}
      transition={{ duration: 0.2 }}
    />
    {/* Bottom line moves up and rotates */}
    <motion.line
      x1="3"
      y1="18"
      x2="21"
      y2="18"
      animate={isOpen ? { rotate: -45, y1: 12, y2: 12 } : { rotate: 0, y1: 18, y2: 18 }}
      transition={{ duration: 0.2 }}
    />
  </motion.svg>
);

export const FloatingNav = () => {
  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Define navigation items inside the component
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Our Products", link: "/our-products" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <>
      {/* Mobile Logo and Hamburger Icon */}
      <div className="lg:hidden px-5 bg-white px-3 py-3 rounded-2xl fixed top-5 left-5 right-5 z-[6000] flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="relative w-[120px] h-[60px]">
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              priority
              sizes="(max-width: 768px) 120px, (min-width: 1024px) 120px"
              className="object-contain"
            />
          </div>
        </Link>

        {/* Hamburger Icon */}
        <button className="z-[6000]" onClick={() => setIsOpen(!isOpen)}>
          <HamburgerIcon isOpen={isOpen} />
        </button>
      </div>

{/* Fullscreen Mobile Menu */}
<AnimatePresence>
  {isOpen && (
    <motion.div
      className="fixed inset-0 text-black z-[5000] flex flex-col justify-between p-8 bg-white"
      initial={{ opacity: 0, rotateX: -90 }}
      animate={{
        opacity: 1,
        rotateX: 0,
      }}
      exit={{ opacity: 0, rotateX: 90 }}
      transition={{ duration: 1.0, ease: [0.68, -0.55, 0.27, 1.55] }}
    >
      {/* Left-aligned Navigation Links */}
      <div className="flex flex-col items-start justify-center flex-grow space-y-8">
        {navItems.map((navItem, idx) => (
          <Link
            key={`mobile-link-${idx}`}
            href={navItem.link}
            className="block text-left text-2xl font-bold uppercase"
            onClick={() => setIsOpen(false)}
          >
            {navItem.name}
          </Link>
        ))}
      </div>

      {/* Contact Info, Button, and WhatsApp Icon at the bottom */}
      <div className="flex flex-col items-center space-y-8 mt-12 w-full">
        {/* Mailto Link for Email Address */}
        <a href="mailto:info@ledeyn.com" className="text-center text-lg font-medium lowercase">
          info@ledeyn.com
        </a>

        {/* Full-width Button */}
        <Link
          href="/contact"
          className="block w-full bg-primary text-white px-6 py-3 rounded-lg text-center uppercase"
          onClick={() => setIsOpen(false)}
        >
          Ask an Estimate
        </Link>

        {/* Full-width WhatsApp Button */}
        <a
          href="https://wa.me/<YOUR_PHONE_NUMBER>" // Replace <YOUR_PHONE_NUMBER> with your actual number
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-green-500 text-white px-6 py-3 rounded-lg text-center hover:bg-green-600 transition-all duration-300"
        >
          <IconBrandWhatsapp className="inline w-6 h-6 mr-2 text-white" /> {/* WhatsApp Icon */}
          WhatsApp
        </a>
      </div>
    </motion.div>
  )}
</AnimatePresence>


      {/* Desktop Floating Nav */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
            className={cn(
              "hidden lg:flex w-full max-w-screen-2xl fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-md dark:bg-black bg-white shadow-lg z-[5000] py-3 items-center justify-between px-3"
            )}
          >
            {/* Logo Section with Link */}
            <Link href="/" className="flex items-center space-x-4">
              <div className="relative w-[200px] h-[80px]">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  fill
                  priority
                  sizes="(max-width: 768px) 120px, (min-width: 1024px) 120px"
                  className="object-contain cursor-pointer"
                />
              </div>
            </Link>

            {/* Navigation and Button Section */}
            <div className="flex items-center justify-center space-x-12">
              {/* Navigation Items */}
              {navItems.map((navItem, idx) => (
                <Link
                  key={`link-${idx}`}
                  href={navItem.link}
                  className={cn(
                    "relative text-l font-bold uppercase dark:text-neutral-50 text-black dark:hover:text-neutral-300 hover:text-neutral-500"
                  )}
                >
                  {navItem.name}
                </Link>
              ))}

              {/* Button Component for "Ask an Estimate" */}
              <Button className="h-12" href="/contact" variant="secondary">
                <p className="text-white">Ask an Estimate</p>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
