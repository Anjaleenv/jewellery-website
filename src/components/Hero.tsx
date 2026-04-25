"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "./MagneticButton";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  const handleExploreClick = () => {
    const section = document.getElementById("featured-categories");
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden bg-deepblack flex items-center justify-center"
    >
      <div className="absolute inset-0 w-full h-full">
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 h-[115%] w-full will-change-transform"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?q=80&w=2070&auto=format&fit=crop"
            className="h-full w-full object-cover"
            aria-label="Luxury jewelry cinematic background"
          >
            <source
              src="https://videos.pexels.com/video-files/7796058/7796058-hd_1920_1080_25fps.mp4"
              type="video/mp4"
            />
          </video>
        </motion.div>
        <div className="absolute inset-0 z-10 bg-black/40" />
      </div>

      <div className="relative z-20 text-center px-4 flex flex-col items-center">
        <ScrollReveal>
          <h2 className="luxury-heading-shimmer font-heading text-5xl md:text-7xl lg:text-8xl mb-6 tracking-[0.1em] drop-shadow-lg bg-gradient-to-r from-gold to-[#e5d0a5] bg-clip-text text-transparent">
            Elegance, Eternalized
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-ivory/90 text-lg md:text-xl font-body font-light tracking-widest max-w-2xl mb-12 drop-shadow-md">
            Discover our exclusive collection of timeless masterpieces, meticulously crafted for the modern connoisseur.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <MagneticButton
            type="button"
            onClick={handleExploreClick}
            data-luxury-cursor-expand="true"
            className="bg-ivory text-deepblack px-10 py-4 font-body tracking-widest uppercase text-sm font-semibold shadow-xl hover:bg-gold hover:text-ivory transition-colors duration-300"
          >
            Explore the Collection
          </MagneticButton>
        </ScrollReveal>
      </div>
    </section>
  );
}
