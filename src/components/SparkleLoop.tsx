"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const loopVideo =
  "https://videos.pexels.com/video-files/7796058/7796058-hd_1920_1080_25fps.mp4";

export default function SparkleLoop() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = async () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    try {
      await video.play();
    } catch {
      // Browser autoplay policies can block play; hover can retry safely.
    }
  };

  const handleMouseLeave = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  };

  return (
    <section className="bg-ivory py-24">
      <div className="container mx-auto px-6">
        <ScrollReveal className="mb-10 text-center">
          <h2 className="mb-4 font-heading text-4xl text-deepblack md:text-5xl">The Sparkle Loop</h2>
          <div className="mx-auto mb-6 h-0.5 w-16 bg-gold" />
          <p className="mx-auto max-w-2xl font-body tracking-wide text-deepblack/70">
            Hover to preview an editorial 5-second jewelry motion loop designed to mimic in-store
            brilliance.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <motion.div
            className="group relative mx-auto max-w-4xl overflow-hidden border border-gold/25 bg-deepblack shadow-2xl"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 0.995 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            data-jewelry-hover="true"
          >
            <video
              ref={videoRef}
              src={loopVideo}
              muted
              loop
              playsInline
              preload="metadata"
              className="h-[420px] w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
              data-jewelry-hover="true"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deepblack/70 via-transparent to-deepblack/10" />
            <div className="absolute left-0 right-0 bottom-0 p-8">
              <p className="font-heading text-3xl text-ivory">Navaratna Signature Sparkle</p>
              <p className="mt-2 font-body text-sm uppercase tracking-[0.2em] text-ivory/75">
                Hover to play the crafted loop
              </p>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
