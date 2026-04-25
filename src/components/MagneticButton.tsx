"use client";

import { MotionValue, motion, useMotionValue, useSpring } from "framer-motion";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";

type MagneticSharedProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

type MagneticButtonProps = MagneticSharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
    as?: "button";
  };

type MagneticLinkProps = MagneticSharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> & {
    as: "a";
  };

type MagneticProps = MagneticButtonProps | MagneticLinkProps;

function useMagnet(strength: number) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 280, damping: 20 });
  const springY = useSpring(y, { stiffness: 280, damping: 20 });

  const onMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - (rect.left + rect.width / 2);
    const offsetY = event.clientY - (rect.top + rect.height / 2);
    x.set(offsetX * strength);
    y.set(offsetY * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { springX, springY, onMove, onLeave };
}

export default function MagneticButton({
  children,
  className,
  strength = 0.22,
  as = "button",
  ...props
}: MagneticProps) {
  const { springX, springY, onMove, onLeave } = useMagnet(strength);
  const style = { x: springX as MotionValue<number>, y: springY as MotionValue<number> };

  if (as === "a") {
    const anchorProps = props as MagneticLinkProps;
    return (
      <motion.a
        {...anchorProps}
        className={className}
        style={style}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        {children}
      </motion.a>
    );
  }

  const buttonProps = props as MagneticButtonProps;
  return (
    <motion.button
      {...buttonProps}
      className={className}
      style={style}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.button>
  );
}
