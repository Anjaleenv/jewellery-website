"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, Search, User } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-9 left-0 right-0 z-50 border-b border-[rgba(197,160,89,0.2)] backdrop-blur-[10px] transition-all duration-500 ease-in-out ${
        scrolled ? "bg-deepblack/40 py-4" : "bg-deepblack/20 py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <MagneticButton className="text-deepblack hover:text-gold transition-colors">
            <Menu className="w-6 h-6" />
          </MagneticButton>
          <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-medium">
            <Link
              href="#featured-categories"
              data-luxury-cursor-expand="true"
              className="relative text-ivory/90 hover:text-gold transition-colors after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-px after:w-full after:bg-gold after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              Collections
            </Link>
            <Link
              href="#heritage"
              className="relative text-ivory/90 hover:text-gold transition-colors after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-px after:w-full after:bg-gold after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              Heritage
            </Link>
          </nav>
        </div>

        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <h1 className="font-heading text-4xl md:text-5xl tracking-[0.22em] text-center text-ivory font-semibold">
            NAVARATNA
          </h1>
        </Link>

        <div className="flex items-center space-x-6">
          <MagneticButton className="text-ivory/90 hover:text-gold transition-colors hidden md:block">
            <Search className="w-5 h-5" />
          </MagneticButton>
          <MagneticButton className="text-ivory/90 hover:text-gold transition-colors">
            <User className="w-5 h-5" />
          </MagneticButton>
        </div>
      </div>
    </motion.header>
  );
}
