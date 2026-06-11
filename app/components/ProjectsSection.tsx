"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn, { StaggerContainer, StaggerItem } from "./animations/FadeIn";
import ProjectDetailOverlay from "./ProjectDetailOverlay";
import PrivateAccessModal from "./PrivateAccessModal";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../lib/translations";

const filters = ["All", "React", "NextJS", "TypeScript", "Angular"];

export type Project = {
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  imageAlt: string;
  tags: string[];
  filter: string[];
  specs: { icon: string; title: string; description: string }[];
  githubUrl: string;
  liveUrl: string;
  status: string;
  version: string;
  privateRepo?: boolean;
};

const projectsMeta = [
  {
    image:       "/projects/alta-montana-erp.webp",
    tags:        ["Angular", "TypeScript", "RxJS", "REST API", "ERP", "Business Management"],
    filter:      ["Angular", "TypeScript"],
    specIcons:   ["user_attributes", "package", "build", "receipt"],
    githubUrl:   "#",
    liveUrl:     "#",
    version:     "v1.0.0",
    privateRepo: true,
  },
  {
    image:       "/projects/gestores-empresas.webp",
    tags:        ["NextJS", "TypeScript", "React", "Responsive Design", "SEO", "Business Website", "Corporate Platform"],
    filter:      ["NextJS", "React", "TypeScript"],
    specIcons:   ["corporate_fare", "user_attributes", "monitor", "search"],
    githubUrl:   "#",
    liveUrl:     "https://gestoresempresas.com/",
    version:     "v1.0.0",
    privateRepo: true,
  },
  {
    image:      "/projects/mini-personal-crm.webp",
    tags:       ["Angular 20", "TypeScript", "RxJS", "JWT Auth", "TailwindCSS", "CRM"],
    filter:     ["Angular", "TypeScript"],
    specIcons:  ["shield", "flowchart", "architecture", "bar_chart"],
    githubUrl:  "https://github.com/JeanPi69/mini-personal-crm",
    liveUrl:    "https://mini-crm.jpierredev.cloud",
    version:    "v1.0.0",
  },
];

export default function ProjectsSection() {
  const { lang } = useLanguage();
  const t = translations[lang].projects;
  const projects: Project[] = t.projectList.map((p, i) => ({
    ...p,
    ...projectsMeta[i],
    specs: p.specs.map((s, j) => ({ ...s, icon: projectsMeta[i].specIcons[j] })),
  }));
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeModal, setActiveModal] = useState<"private-repo" | "private-live" | null>(null);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.filter.includes(activeFilter));

  return (
    <section id="projects" className="py-[120px] bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <FadeIn>
          <div className="flex flex-col gap-4 mb-16">
            <h2 className="font-[family-name:var(--font-space-grotesk)] font-semibold text-on-background text-[2.25rem] leading-[1.2]">
              {t.sectionTitle}
            </h2>
            <div className="h-px w-24 bg-primary" />
          </div>
        </FadeIn>

        {/* Filter bar */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap gap-4 mb-12 border-b border-outline-variant pb-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`font-[family-name:var(--font-space-grotesk)] text-xs font-bold tracking-widest uppercase border-b-2 pb-2 px-2 transition-all ${
                  activeFilter === filter
                    ? "text-primary border-primary"
                    : "text-on-surface-variant border-transparent hover:text-primary hover:border-primary/50"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Grid or Empty State */}
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center min-h-[500px] border border-outline-variant bg-surface-container-low/50 relative overflow-hidden group mb-12"
              style={{
                backgroundImage:
                  "radial-gradient(#86948a 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            >
              <div className="relative z-10 flex flex-col items-center text-center px-8">
                {/* Icon with scan animation */}
                <div className="mb-8 relative w-[120px] h-[120px] flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-surface-variant group-hover:text-outline transition-colors duration-500"
                    style={{
                      fontSize: "120px",
                      fontVariationSettings:
                        "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 48",
                    }}
                  >
                    database_off
                  </span>
                  <motion.div
                    className="absolute left-0 w-full h-[2px] bg-primary/50 blur-[1px]"
                    animate={{ top: ["0%", "100%", "0%"] }}
                    transition={{
                      duration: 3,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }}
                  />
                </div>

                <h3 className="font-[family-name:var(--font-space-grotesk)] font-semibold text-on-surface text-[1.5rem] leading-[1.3] mb-4 uppercase tracking-wide">
                  {t.emptyTitle}
                </h3>
                <p className="text-on-surface-variant text-base leading-relaxed max-w-md mb-8">
                  Query for{" "}
                  <span className="font-[family-name:var(--font-space-grotesk)] text-sm text-primary tracking-widest">
                    tag=&quot;{activeFilter}&quot;
                  </span>{" "}
                  yielded no architectural constructs within the current
                  repository parameters.
                </p>

                <button
                  onClick={() => setActiveFilter("All")}
                  className="border border-outline-variant text-on-surface px-6 py-3 font-[family-name:var(--font-space-grotesk)] text-xs font-bold tracking-widest uppercase hover:border-primary hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    refresh
                  </span>
                  {t.resetQuery}
                </button>
              </div>

              {/* Technical decoration */}
              <div className="absolute bottom-4 left-4 font-[family-name:var(--font-space-grotesk)] text-[10px] text-outline-variant opacity-50">
                {t.statusLabel}
                <br />
                EXEC_TIME: 0.042ms
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={`grid-${activeFilter}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <StaggerContainer
                className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12"
                delayStart={0.05}
              >
                {filtered.map((project) => (
                  <StaggerItem key={project.title}>
                    <div
                      className="border border-outline-variant bg-surface-container group flex flex-col h-full cursor-pointer hover:border-primary/50 transition-colors"
                      onClick={() => setSelectedProject(project)}
                    >
                      {/* Image */}
                      <div className="h-64 border-b border-outline-variant overflow-hidden relative">
                        <div className="absolute inset-0 bg-background/50 group-hover:bg-transparent transition-colors z-10" />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={project.image}
                          alt={project.imageAlt}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-8 flex flex-col flex-grow">
                        <h3 className="font-[family-name:var(--font-space-grotesk)] font-semibold text-on-background text-[1.5rem] leading-[1.3] mb-4">
                          {project.title}
                        </h3>
                        <p className="text-on-surface-variant text-base leading-relaxed mb-6 flex-grow">
                          {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-8">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="border border-outline-variant px-2 py-1 font-[family-name:var(--font-space-grotesk)] text-xs text-on-surface"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Actions */}
                        <div className="flex gap-4 mt-auto">
                          {project.liveUrl === "#" ? (
                            <button
                              type="button"
                              onClick={(e) => { e.stopPropagation(); setActiveModal("private-live"); }}
                              className="border border-primary text-primary px-4 py-2 font-[family-name:var(--font-space-grotesk)] text-xs font-bold tracking-widest uppercase hover:bg-primary hover:text-on-primary transition-colors inline-flex items-center gap-2"
                            >
                              <span className="material-symbols-outlined text-sm">open_in_new</span>
                              {t.liveDeploy}
                            </button>
                          ) : (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="border border-primary text-primary px-4 py-2 font-[family-name:var(--font-space-grotesk)] text-xs font-bold tracking-widest uppercase hover:bg-primary hover:text-on-primary transition-colors inline-flex items-center gap-2"
                            >
                              <span className="material-symbols-outlined text-sm">open_in_new</span>
                              {t.liveDeploy}
                            </a>
                          )}
                          {project.privateRepo ? (
                            <button
                              type="button"
                              onClick={(e) => { e.stopPropagation(); setActiveModal("private-repo"); }}
                              className="border border-outline-variant text-on-background px-4 py-2 font-[family-name:var(--font-space-grotesk)] text-xs font-bold tracking-widest uppercase hover:border-on-background transition-colors inline-flex items-center gap-2"
                            >
                              <span className="material-symbols-outlined text-sm">code</span>
                              {t.source}
                            </button>
                          ) : (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="border border-outline-variant text-on-background px-4 py-2 font-[family-name:var(--font-space-grotesk)] text-xs font-bold tracking-widest uppercase hover:border-on-background transition-colors inline-flex items-center gap-2"
                            >
                              <span className="material-symbols-outlined text-sm">code</span>
                              {t.source}
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Load more — only when projects are visible */}
        {filtered.length > 4 && (
          <div className="flex justify-center">
            <button className="border border-outline-variant text-on-background px-8 py-4 font-[family-name:var(--font-space-grotesk)] text-xs font-bold tracking-widest uppercase hover:border-primary hover:text-primary transition-colors inline-flex items-center gap-2">
              {t.loadMore}
              <span className="material-symbols-outlined text-sm">
                expand_more
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Project Detail Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailOverlay
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onPrivateModalOpen={(type) => setActiveModal(type)}
          />
        )}
      </AnimatePresence>

      {/* Private access modals */}
      <AnimatePresence>
        {activeModal && (
          <PrivateAccessModal
            type={activeModal}
            onClose={() => setActiveModal(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
