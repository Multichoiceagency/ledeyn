"use client";

import Link from "next/link";
import React, { useState } from "react";
import SEO from '../components/SEO';

// Define the types for form inputs
interface FormData {
  name: string;
  email: string;
  phone: string;
  product: string;
  message: string;
}

const ContactUs: React.FC = () => {
  // State to handle form data
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <SEO 
        title="Contact LEDEYN | Get in Touch with Import-Export Experts"
        description="Contact LEDEYN for inquiries about our high-quality foods and commodities. Reach out to our import-export experts for information on our products and services."
        keywords="LEDEYN contact, import-export inquiries, food commodities contact, LEDEYN products, contact form"
        ogImage="https://ledeyn.com/images/contact-hero.jpg"
        ogUrl="https://ledeyn.com/contact"
      />

      {/* Hero Section with Background Image and Animated Gradient */}
      <section className="relative h-[75vh] w-full flex items-center justify-center bg-cover bg-center bg-no-repeat hero-background">
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 animated-gradient z-10"></div>

        {/* Optional Dark Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-20"></div>

        {/* Hero Content */}
        <div className="relative z-30 text-center px-6 md:px-12 text-white">
          <h1 className="text-5xl md:text-6xl text-white font-bold mb-6">Contact Us</h1>
          <p className="text-lg md:text-xl text-white mb-6">
            Get in touch with LEDEYN for any inquiries or information.
          </p>
          <Link href="/our-products" className="inline-block bg-white text-black py-3 px-6 rounded-lg font-bold">
            Explore Our Products
          </Link>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 px-8 md:px-16 lg:px-24 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Get In Touch</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h3>
              <p className="text-gray-700 mb-4">KVK-nummer: 89992199</p>
              <p className="text-gray-700 mb-4">Besloten Vennootschap</p>
              <p className="text-gray-700 mb-4">Vestigingsnummer: 000055745768</p>
              <p className="text-gray-700 mb-4">
                Office Address: Stationsplein 45, 4th floor, 3013AK Rotterdam, The Netherlands
              </p>
              <p className="text-gray-700 mb-4">
                Postal Address: Edisonstraat 5B, 2652 XS Berkel en Rodenrijs
              </p>
              <p className="text-gray-700 mb-4">
                Phone:{" "}
                <Link href="tel:+31624335929" className="text-primary hover:underline">
                  +31 6 24335929
                </Link>
              </p>
              <p className="text-gray-700 mb-4">
                Email:{" "}
                <Link href="mailto:info@ledeyn.com" className="text-primary hover:underline">
                  info@ledeyn.com
                </Link>
              </p>
            </div>

            {/* Location Map */}
            <div className="relative w-full h-80 lg:h-full rounded-lg overflow-hidden">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2460.5834433441923!2d4.466585676645064!3d51.9233106719109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c434a44d94f465%3A0x955c8fa631131731!2sCIC%20Rotterdam!5e0!3m2!1snl!2snl!4v1726594596936!5m2!1snl!2snl"
                width="600"
                height="450"
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-lg p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 uppercase">Ask a free estimate</h3>
            <form action="https://formsubmit.co/info@ledeyn.com" method="POST">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email address"
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                  Your Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="product" className="block text-gray-700 font-semibold mb-2">
                  Select Product
                </label>
                <select
                  id="product"
                  name="product"
                  value={formData.product}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="" disabled>
                    Select a product
                  </option>
                  <option value="Animala FEED & Protein">Animala FEED & Protein</option>
                  <option value="Cocoa">Cocoa</option>
                  <option value="Coffee">Coffee</option>
                  <option value="Cotton">Cotton</option>
                  <option value="Edible oils">Edible oils</option>
                  <option value="Grain & Seeds">Grain & Seeds – Sesame / Soy Beans / wheat / corn</option>
                  <option value="Nuts">Nuts – Cashew / Macadamia</option>
                  <option value="Rubber">Rubber</option>
                  <option value="Spices">
                    Spices – Black Pepper / Curcuma / Poppy / Ginger / Turmeric / Cinnamon / Cardamom
                  </option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Type your message here"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={5}
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
