"use client";

import { IconBrandWhatsapp } from "@tabler/icons-react"; // Import WhatsApp icon from tabler icons

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/+31624335929" // Replace with your phone number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 ease-in-out"
    >
      {/* Ping animation effect */}
      <span className="relative flex h-16 w-16">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex items-center justify-center w-full h-full bg-green-500 rounded-full">
          <IconBrandWhatsapp className="w-8 h-8 text-white" />
        </span>
      </span>
    </a>
  );
};

export default WhatsAppButton;
