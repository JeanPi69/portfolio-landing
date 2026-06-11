"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import type { Project } from "./ProjectsSection";

interface Props {
  project: Project;
  onClose: () => void;
  onPrivateModalOpen: (type: "private-repo" | "private-live") => void;
}

export default function ProjectDetailOverlay({ project, onClose, onPrivateModalOpen }: Props) {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/90"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <motion.div
        className="relative bg-surface-container border border-surface-container-highest w-full max-w-5xl max-h-[90vh] overflow-y-auto flex flex-col shadow-2xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 text-on-surface-variant hover:text-primary transition-colors bg-surface-container/80 border border-surface-container-highest"
          aria-label="Close"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {/* Hero Image */}
        <div className="relative w-full h-[260px] md:h-[380px] border-b border-surface-container-highest flex-shrink-0 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={project.imageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent opacity-80" />
          <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col gap-2">
            <span className="font-[family-name:var(--font-space-grotesk)] text-xs font-bold tracking-widest uppercase text-primary">
              {project.category}
            </span>
            <h1 className="font-[family-name:var(--font-space-grotesk)] font-bold text-[2.25rem] leading-[1.1] text-on-background m-0">
              {project.title}
            </h1>
          </div>
        </div>

        {/* Body */}
        <div className="p-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* Overview */}
            <section className="flex flex-col gap-4">
              <h3 className="font-[family-name:var(--font-space-grotesk)] font-semibold text-on-background text-[1.5rem] leading-[1.3] border-b border-surface-container-highest pb-2">
                Overview
              </h3>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                {project.description}
              </p>
              <p className="text-on-surface-variant text-base leading-relaxed">
                {project.fullDescription}
              </p>
            </section>

            {/* Key Specifications */}
            <section className="flex flex-col gap-4">
              <h3 className="font-[family-name:var(--font-space-grotesk)] font-semibold text-on-background text-[1.5rem] leading-[1.3] border-b border-surface-container-highest pb-2">
                Key Specifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.specs.map((spec) => (
                  <div
                    key={spec.title}
                    className="p-4 border border-surface-container-highest bg-surface flex flex-col gap-2"
                  >
                    <div className="flex items-center gap-2 text-primary">
                      <span className="material-symbols-outlined">{spec.icon}</span>
                      <span className="font-[family-name:var(--font-space-grotesk)] text-xs font-bold tracking-widest uppercase">
                        {spec.title}
                      </span>
                    </div>
                    <p className="text-on-surface text-sm leading-relaxed">
                      {spec.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-8 border-t lg:border-t-0 lg:border-l border-surface-container-highest pt-8 lg:pt-0 lg:pl-8">
            {/* Actions */}
            <div className="flex flex-col gap-3">
              {project.liveUrl === "#" ? (
                <button
                  type="button"
                  onClick={() => onPrivateModalOpen("private-live")}
                  className="w-full bg-primary text-on-primary py-3 px-6 font-[family-name:var(--font-space-grotesk)] text-xs font-bold tracking-widest uppercase hover:bg-transparent hover:text-primary border border-primary transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                  Deploy Live Instance
                </button>
              ) : (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary text-on-primary py-3 px-6 font-[family-name:var(--font-space-grotesk)] text-xs font-bold tracking-widest uppercase hover:bg-transparent hover:text-primary border border-primary transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                  Deploy Live Instance
                </a>
              )}
              {project.privateRepo ? (
                <button
                  type="button"
                  onClick={() => onPrivateModalOpen("private-repo")}
                  className="w-full bg-transparent text-on-surface border border-surface-container-highest py-3 px-6 font-[family-name:var(--font-space-grotesk)] text-xs font-bold tracking-widest uppercase hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">code</span>
                  View Source Repository
                </button>
              ) : (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-transparent text-on-surface border border-surface-container-highest py-3 px-6 font-[family-name:var(--font-space-grotesk)] text-xs font-bold tracking-widest uppercase hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">code</span>
                  View Source Repository
                </a>
              )}
            </div>

            {/* Tech Stack */}
            <div className="flex flex-col gap-3">
              <h4 className="font-[family-name:var(--font-space-grotesk)] text-xs font-bold tracking-widest uppercase text-on-surface-variant">
                Architecture Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-surface-container-highest bg-surface px-3 py-1 font-[family-name:var(--font-space-grotesk)] text-xs text-on-surface"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Metadata */}
            <div className="flex flex-col gap-3 border-t border-surface-container-highest pt-4">
              <div className="flex justify-between items-center">
                <span className="font-[family-name:var(--font-space-grotesk)] text-xs text-on-surface-variant">Status</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary" />
                  <span className="font-[family-name:var(--font-space-grotesk)] text-xs text-primary">{project.status}</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-[family-name:var(--font-space-grotesk)] text-xs text-on-surface-variant">Version</span>
                <span className="font-[family-name:var(--font-space-grotesk)] text-xs text-on-surface">{project.version}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-[family-name:var(--font-space-grotesk)] text-xs text-on-surface-variant">License</span>
                <span className="font-[family-name:var(--font-space-grotesk)] text-xs text-on-surface">MIT</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="border-t border-surface-container-highest p-4 flex justify-end">
          <span className="font-[family-name:var(--font-space-grotesk)] text-xs text-on-surface-variant tracking-widest uppercase">
            ARCHITECT_OS // PROJECT_DETAILS_VIEW
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}
