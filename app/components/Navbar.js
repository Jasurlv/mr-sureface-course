"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Play, Pause, Menu, X } from "lucide-react";
import TransitionLink from "./utils/TransitionLink";

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
      <nav className="bg-black/10 text-white shadow-lg fixed w-full z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold">
              SureFace
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <TransitionLink href="/" className="hover:text-gray-400">Home</TransitionLink>
              <TransitionLink href="/about" className="hover:text-gray-400">About</TransitionLink>
              <TransitionLink href="/services" className="hover:text-gray-400">Services</TransitionLink>
              <TransitionLink href="/contact" className="hover:text-gray-400">Contact</TransitionLink>
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
                className="md:hidden text-white text-xl p-2 transition-transform transform"
              >
                {isOpen ? <X className="rotate-180 transition-transform duration-300" /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full-Screen Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/90 backdrop-blur-md z-[999] flex flex-col items-center justify-center space-y-6 transition-all duration-500 ${
          isOpen ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-90"
        }`}
      >
        <ul className="text-2xl font-semibold text-white space-y-5">
          <li className="hover:text-gray-300 transition"><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li className="hover:text-gray-300 transition"><Link href="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li className="hover:text-gray-300 transition"><Link href="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li className="hover:text-gray-300 transition"><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-white text-3xl"
        >
          <X />
        </button>
      </div>

      {/* Hidden Audio Element */}
      <audio ref={audioRef} src="/music/love.mp3" loop />
    </>
  );
}
