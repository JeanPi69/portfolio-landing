"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../lib/translations";

interface Props {
  type: "private-repo" | "private-live";
  onClose: () => void;
}

export default function PrivateAccessModal({ type, onClose }: Props) {
  const { lang } = useLanguage();
  const t = translations[lang].projects;

  const icon   = type === "private-repo" ? "lock" : "security";
  const status = type === "private-repo" ? t.privateRepoStatus : t.privateLiveStatus;
  const message = type === "private-repo" ? t.privateRepoMessage : t.privateLiveMessage;

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-scrim/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <motion.div
        className="relative z-10 w-full max-w-[480px] bg-surface-container border border-outline-variant p-8 flex flex-col gap-6"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface transition-colors"
          aria-label="Close"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Icon + status */}
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-on-surface-variant text-[28px]">
            {icon}
          </span>
          <span className="font-[family-name:var(--font-space-grotesk)] text-[11px] font-bold tracking-widest uppercase text-on-surface-variant">
            {status}
          </span>
        </div>

        {/* Message */}
        <p className="font-[family-name:var(--font-space-grotesk)] text-sm text-on-surface-variant leading-relaxed">
          {message}
        </p>

        {/* Dismiss */}
        <button
          type="button"
          onClick={onClose}
          className="self-start border border-outline-variant text-on-background px-5 py-2 font-[family-name:var(--font-space-grotesk)] text-xs font-bold tracking-widest uppercase hover:border-on-background transition-colors"
        >
          Dismiss
        </button>
      </motion.div>
    </motion.div>
  );
}
