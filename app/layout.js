"use client"; 

import { useState, useEffect } from "react";
import { useProgress } from "@react-three/drei"; // Hook to track loading progress
import Navbar from "./components/Navbar";
import GlobalLoader from "./components/GlobalLoader";
import "./globals.css";

export default function RootLayout({ children }) {
  const [isLoaded, setIsLoaded] = useState(false); 
  const { progress } = useProgress(); 

  useEffect(() => {
    if (progress === 100) {
      setIsLoaded(true);
    }
  }, [progress]);

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* Show GlobalLoader while loading */}
        {!isLoaded && <GlobalLoader />}

        {/* Render Navbar and Children after loading */}
        {isLoaded && (
          <>
            <Navbar />
            {children}
          </>
        )}
      </body>
    </html>
  );
}