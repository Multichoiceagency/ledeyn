"use client"; // This makes it a client component

import { useEffect } from "react";

export default function TabVisibilityHandler() {
  useEffect(() => {
    const originalTitle = document.title; // Save the original title

    // Listen to visibility change
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // User leaves the tab
        document.title = "Come back please and check our products 😊";
      } else {
        // User returns to the tab
        document.title = originalTitle; // Restore original title
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return null; // This component doesn’t need to render anything
}
