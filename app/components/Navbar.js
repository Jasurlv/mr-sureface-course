"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Play, Pause, Menu, X } from "lucide-react"; // Install: npm install lucide-react

export default function Navbar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const audioRef = useRef(null);

  useEffect(() => {
    const playMusic = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.warn("Autoplay blocked. Waiting for user interaction.");
        }
      }
    };

    playMusic();

    const enableAudio = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().catch(err => console.warn("Playback failed:", err));
        setIsPlaying(true);
      }
      document.removeEventListener("click", enableAudio);
    };

    document.addEventListener("click", enableAudio);
    return () => document.removeEventListener("click", enableAudio);
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.warn("Playback error:", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <nav className="bg-black text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold">
              SureFace
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="hover:text-gray-400">Home</Link>
              <Link href="/about" className="hover:text-gray-400">About</Link>
              <Link href="/services" className="hover:text-gray-400">Services</Link>
              <Link href="/contact" className="hover:text-gray-400">Contact</Link>
            </div>

            {/* Music Control Button & Mobile Menu Icon */}
            <div className="flex items-center space-x-4">
              {/* Music Button */}
              <button onClick={toggleMusic} className="text-white text-xl p-2">
                {isPlaying ? <Pause /> : <Play />}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-white text-xl p-2"
              >
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-gray-800 p-4`}>
          <ul className="space-y-3 text-center">
            <li><Link href="/" className="block py-2">Home</Link></li>
            <li><Link href="/about" className="block py-2">About</Link></li>
            <li><Link href="/services" className="block py-2">Services</Link></li>
            <li><Link href="/contact" className="block py-2">Contact</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hidden Audio Element */}
      <audio ref={audioRef} src="/music/love.mp3" loop />
    </>
  );
}
