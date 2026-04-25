"use client";

import { motion } from "framer-motion";

const rates = [
  { label: "22K", price: "INR 6,745 / g" },
  { label: "24K", price: "INR 7,358 / g" },
];

export default function GoldRateTicker() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[70] border-b border-gold/35 bg-deepblack/90 backdrop-blur-md">
      <div className="mx-auto flex h-9 max-w-7xl items-center overflow-hidden px-6">
        <motion.div
          className="flex min-w-max items-center gap-8 text-[11px] uppercase tracking-[0.28em] text-gold"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 16, ease: "linear", repeat: Infinity }}
        >
          {Array.from({ length: 2 }).map((_, groupIndex) => (
            <div key={groupIndex} className="flex items-center gap-8">
              <span className="text-ivory/85">Today&apos;s Gold Rate</span>
              {rates.map((rate) => (
                <span key={`${groupIndex}-${rate.label}`}>
                  <span className="text-ivory/70">{rate.label}</span> {rate.price}
                </span>
              ))}
              <span className="text-ivory/65">Navaratna Jewellers</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
