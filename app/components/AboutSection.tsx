"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "./Button/Button"; // Importeer de Button-component
import { decode } from "html-entities"; // Install html-entities for decoding

interface WPResponse {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  class_list: string[];
  _embedded?: {
    "wp:featuredmedia"?: [
      {
        source_url: string;
      }
    ];
  };
}

interface AboutData {
  headingTitle: string;
  title: string;
  content: string;
  featuredImage: string;
}

const AboutSection = () => {
  const [aboutData, setAboutData] = useState<AboutData | null>(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const res = await fetch(
          "https://docker-image-production-cde8.up.railway.app/wp-json/wp/v2/overledeyn-home?slug=were-leading-import-export-experts-in-foods-commodities&_embed"
        );
        const data: WPResponse[] = await res.json();

        if (data.length > 0) {
          const page = data[0];
          setAboutData({
            headingTitle: page.class_list.find((item: string) =>
              item.startsWith("heading_title-")
            )?.replace("heading_title-", "").replace(/-/g, " ") || "About LEDEYN",
            title: decode(page.title.rendered) || "About LEDEYN", // Decode HTML entities
            content: page.content.rendered || "",
            featuredImage:
              page._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
          });
        }
      } catch {
        setAboutData(null);
      }
    };

    fetchAboutData();
  }, []);

  if (!aboutData) {
    return (
      <section className="bg-gray-100 py-24 lg:py-48">
        <div className="container mx-auto text-center">
          <p>Loading...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-100 py-24 lg:py-48 flex items-center justify-center">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Tekstsectie */}
        <div className="space-y-6 text-center lg:text-left">
          <h3 className="text-lg font-bold text-yellow-500">
            {aboutData.headingTitle}
          </h3>
          <h1 className="text-4xl font-bold text-black">{aboutData.title}</h1>
          <div
            className="text-gray-600 space-y-4"
            dangerouslySetInnerHTML={{ __html: aboutData.content }}
          ></div>

          {/* Buttons */}
          <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
            <Button href="/about" variant="secondary">
              Our Mission
            </Button>
            <Button href="#about">Our Vision</Button>
          </div>
        </div>

        {/* Afbeeldingsectie */}
        <div className="relative flex justify-center">
          {aboutData.featuredImage && (
            <div className="w-full h-[300px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src={aboutData.featuredImage}
                alt={aboutData.title}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
