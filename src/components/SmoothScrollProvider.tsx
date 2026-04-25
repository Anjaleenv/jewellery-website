"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

type SmoothScrollProviderProps = {
  children: ReactNode;
};

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 0.9,
    });

    let animationFrame = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    };

    animationFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrame);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
