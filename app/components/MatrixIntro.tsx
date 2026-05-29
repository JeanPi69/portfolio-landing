"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CHARS =
  "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン" +
  "0123456789ABCDEF<>{}[]|/\\;:@#$%";

interface MatrixIntroProps {
  onComplete: () => void;
}

export default function MatrixIntro({ onComplete }: MatrixIntroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();
    window.addEventListener("resize", setSize);

    const FONT_SIZE = 14;
    const cols = Math.floor(canvas.width / FONT_SIZE);

    // Stagger drops so they don't all start at the top simultaneously
    const drops: number[] = Array.from({ length: cols }, () =>
      Math.floor(Math.random() * -60)
    );

    let animId: number;

    const draw = () => {
      // Overlay with bg color to create the fading trail
      ctx.fillStyle = "rgba(16, 20, 21, 0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${FONT_SIZE}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const y = drops[i] * FONT_SIZE;

        // Skip columns still offscreen
        if (y < 0) {
          drops[i]++;
          continue;
        }

        const char = CHARS[Math.floor(Math.random() * CHARS.length)];

        // Head sparkle: ~8% chance of bright white
        ctx.fillStyle = Math.random() > 0.92 ? "#ecfdf5" : "#4edea3";
        ctx.fillText(char, i * FONT_SIZE, y);

        // Reset when past bottom
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = Math.floor(Math.random() * -30);
        } else {
          drops[i]++;
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    // Begin exit after 3s of rain
    const exitTimer = setTimeout(() => setVisible(false), 3000);

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(exitTimer);
      window.removeEventListener("resize", setSize);
    };
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-[#101415] overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Canvas rain */}
          <canvas ref={canvasRef} className="block" />

          {/* Center overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col items-center gap-4"
            >
              <p className="font-[family-name:var(--font-space-grotesk)] text-primary text-[10px] tracking-[0.5em] uppercase">
                &gt; SYSTEM BOOT SEQUENCE
              </p>

              <div className="w-72 h-px bg-outline-variant" />

              <p className="font-[family-name:var(--font-space-grotesk)] text-on-background font-bold text-3xl tracking-[0.3em]">
                ARCHITECT_OS
              </p>

              <p className="font-[family-name:var(--font-space-grotesk)] text-on-surface-variant text-[10px] tracking-[0.4em] uppercase">
                v1.0.1 // PORTFOLIO_MATRIX
              </p>

              {/* Progress bar */}
              <div className="w-72 h-px bg-outline-variant relative overflow-hidden mt-2">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-primary"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 2.0, ease: "easeInOut" }}
                />
              </div>

              <motion.p
                className="font-[family-name:var(--font-space-grotesk)] text-on-surface-variant text-[10px] tracking-[0.3em] uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ delay: 0.8, duration: 2.2, times: [0, 0.1, 0.8, 1] }}
              >
                LOADING PORTFOLIO...
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
