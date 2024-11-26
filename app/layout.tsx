import type { Metadata } from "next";
import { Manrope } from "next/font/google"; // Import Manrope font
import "./globals.css";
import { FloatingNav } from "./components/FloatingNav";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import TabVisibilityHandler from "./components/TabVisibilityHandler";

// Load Manrope from Google Fonts
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope", // Add it as a CSS variable
});

export const metadata: Metadata = {
  title: "Ledeyn B.V. - Raw Materials Import & Export",
  description: "Ledeyn B.V. specializes in the import and export of food products and raw materials.",
  
  metadataBase: new URL("https://www.ledeyn.com"), // Add this line to resolve the base URL

  openGraph: {
    title: "Ledeyn B.V. - Raw Materials Import & Export",
    description: "Ledeyn B.V. is a global leader in the import and export of food products and raw materials.",
    url: "https://www.ledeyn.com",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Ledeyn Logo",
      },
    ],
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Ledeyn B.V. - Import & Export",
    description: "Ledeyn B.V. is a global leader in food products and raw materials import/export.",
    images: ["/logo.png"],
  },

  icons: {
    icon: "/favicon.ico", // Only include favicon here
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Meta tags not covered by the `metadata` object */}
        <meta name="viewport" content="width=device-width, initial-scale=1" /> {/* Moved viewport here */}
        <meta name="keywords" content="raw materials, import export, food products, Ledeyn B.V." />
        <meta name="author" content="Ledeyn B.V." />
        <meta name="format-detection" content="telephone=no" /> {/* Prevents auto-linking phone numbers */}
        <link rel="canonical" href="https://www.ledeyn.com" /> {/* Canonical URL */}
        
        {/* Favicon and Apple Touch Icon links */}
      </head>
      
      <body className={`${manrope.variable} antialiased`}>
        <TabVisibilityHandler />
        <FloatingNav />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
