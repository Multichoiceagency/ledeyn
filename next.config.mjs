/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"], // Optimize for AVIF and WebP
    domains: [
      "images.unsplash.com", 
      "assets.aceternity.com", 
      "docker-image-production-cde8.up.railway.app" // Allowed domains for images
    ],
  },
};

export default nextConfig;
