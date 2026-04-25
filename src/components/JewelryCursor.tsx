"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const EXPAND_TARGET = "[data-luxury-cursor-expand='true']";

export default function JewelryCursor() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const dotX = useSpring(x, { stiffness: 700, damping: 45, mass: 0.18 });
  const dotY = useSpring(y, { stiffness: 700, damping: 45, mass: 0.18 });
  const ringX = useSpring(x, { stiffness: 240, damping: 28, mass: 0.55 });
  const ringY = useSpring(y, { stiffness: 240, damping: 28, mass: 0.55 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }
    document.body.classList.add("luxury-cursor-active");

    const updateCursor = (event: MouseEvent) => {
      setIsVisible(true);
      x.set(event.clientX);
      y.set(event.clientY);
    };

    const updateState = (event: Event) => {
      const target = event.target as HTMLElement | null;
      setIsExpanded(Boolean(target?.closest(EXPAND_TARGET)));
    };

    window.addEventListener("mousemove", updateCursor);
    window.addEventListener("mouseover", updateState);

    return () => {
      document.body.classList.remove("luxury-cursor-active");
      window.removeEventListener("mousemove", updateCursor);
      window.removeEventListener("mouseover", updateState);
    };
  }, [x, y]);

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-gold"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible && !isExpanded ? 1 : 0,
          scale: isVisible && !isExpanded ? 1 : 0.4,
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full border border-gold/85 bg-transparent"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isExpanded ? 68 : 30,
          height: isExpanded ? 68 : 30,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 240, damping: 26 }}
      />
    </>
  );
}
