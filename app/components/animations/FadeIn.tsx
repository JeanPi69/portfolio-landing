"use client";

import { motion, type Variants } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "none";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: Direction;
  className?: string;
  once?: boolean;
}

function getVariants(direction: Direction, distance = 32): Variants {
  const offsets: Record<Direction, { x: number; y: number }> = {
    up:    { x: 0,         y: distance  },
    down:  { x: 0,         y: -distance },
    left:  { x: distance,  y: 0         },
    right: { x: -distance, y: 0         },
    none:  { x: 0,         y: 0         },
  };

  const { x, y } = offsets[direction];

  return {
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  direction = "up",
  className,
  once = true,
}: FadeInProps) {
  const variants = getVariants(direction);

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}

/** Stagger container — wraps FadeIn children with a stagger effect */
export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.08,
  delayStart = 0,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  delayStart?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delayStart,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/** Single item to be used inside StaggerContainer */
export function StaggerItem({
  children,
  className,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
}) {
  const variants = getVariants(direction);
  return (
    <motion.div
      className={className}
      variants={variants}
      transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
