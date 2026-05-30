"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn, { StaggerContainer, StaggerItem } from "./animations/FadeIn";
import ProjectDetailOverlay from "./ProjectDetailOverlay";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../lib/translations";

const filters = [
  "All",
  "React",
  "NextJS",
  "TypeScript",
  "Angular",
];

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
};

const projects: Project[] = [
  {
    title: "Alta Montaña ERP",
    category: "Enterprise Resource Planning",
    description:
      "Business management platform for bicycle sales, workshop operations, inventory, payroll, and financial administration.",
    fullDescription:
      "Alta Montaña ERP is a comprehensive business management platform developed for a bicycle sales and maintenance company. The system centralizes critical business operations including payroll management, attendance tracking, salary deductions, inventory control, workshop management, sales operations, financial records, and electronic invoicing. The platform was designed to replace disconnected manual processes with a unified solution that improves operational visibility, streamlines workflows, and provides better control across multiple business areas.",
    image: "/projects/alta-montana-erp.webp",
    imageAlt:
      "ERP dashboard for bicycle sales, workshop operations, inventory, payroll, and financial management.",
    tags: [
      "Angular",
      "TypeScript",
      "RxJS",
      "REST API",
      "ERP",
      "Business Management",
    ],
    filter: ["Angular", "TypeScript"],
    specs: [
      {
        icon: "user_attributes",
        title: "Human Resources",
        description:
          "Payroll management, attendance tracking, lateness deductions, and employee administration.",
      },
      {
        icon: "package",
        title: "Inventory Control",
        description:
          "Stock management for bicycles, spare parts, and workshop supplies.",
      },
      {
        icon: "build",
        title: "Workshop Operations",
        description:
          "Service orders, maintenance tracking, and workshop workflow management.",
      },
      {
        icon: "receipt",
        title: "Sales & Billing",
        description:
          "Electronic invoicing, sales receipts, notes of sale, and financial transaction management.",
      },
    ],
    githubUrl: "#",
    liveUrl: "#",
    status: "Beta - Pending Client Approval",
    version: "v1.0.0",
  },
  {
    title: "Gestores Empresas",

    category: "Business Services Platform",

    description:
      "Corporate website developed for a business consulting and financial advisory company, focused on service presentation, lead generation, and digital presence.",

    fullDescription:
      "Gestores Empresas is a corporate website developed for a company specialized in business consulting, financial advisory, accounting services, and tax management. The platform was designed to strengthen the company's digital presence, clearly communicate its services, and improve customer acquisition through a modern and responsive user experience. The project focused on delivering a professional corporate identity while optimizing accessibility, responsiveness, and conversion-oriented navigation.",

    image: "/projects/gestores-empresas.webp",

    imageAlt:
      "Corporate website for business consulting, accounting, and financial advisory services.",

    tags: [
      "NextJS",
      "TypeScript",
      "React",
      "Responsive Design",
      "SEO",
      "Business Website",
      "Corporate Platform"
    ],

    filter: ["NextJS", "React", "TypeScript"],

    specs: [
      {
        icon: "corporate_fare",
        title: "Corporate Presence",
        description:
          "Professional digital platform designed to showcase business and financial advisory services.",
      },
      {
        icon: "user_attributes",
        title: "Lead Generation",
        description:
          "Structured service presentation and contact flows focused on customer acquisition.",
      },
      {
        icon: "monitor",
        title: "Responsive Experience",
        description:
          "Optimized user experience across desktop, tablet, and mobile devices.",
      },
      {
        icon: "search",
        title: "SEO Foundation",
        description:
          "Built with search engine visibility and accessibility best practices in mind.",
      },
    ],

    githubUrl: "#",

    liveUrl: "https://gestoresempresas.com/",

    status: "Production",

    version: "v1.0.0",
  },
  /* {
    title: "Cloud Provisioning CLI",
    category: "DevOps & Automation",
    description:
      "Command-line interface for rapid AWS infrastructure deployment. Automates VPC setup, IAM roles, and basic container orchestration.",
    fullDescription:
      "Designed with infrastructure-as-code principles, the CLI generates deterministic Terraform plans from opinionated templates. Supports multi-environment targeting and integrates with CI/CD pipelines via structured JSON output for downstream automation.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAmtjE_ushLNZ3YSXU_WR6KcX5yp84hFlCIKGUNaQwZ3jmNpE1pqibsClJoAwt2sSew3yxgaH5UNP19B5lmKUPFKgrjdynGV11akBPtozeHQlNykJ4WF7GzzsuPGpwPrxEjrOJ6CXQzWeH2jIpRaC140-qA7YgKLK2mOazdcyYdreIGrPDJxONx2dGr831oONr9I699ctgw33m4okIlqtuF4OB-hi_SPIS8s0QFVR1OWsyAQ8HEfdxYrAbSKWP2qvqgc01_oH7v9-k",
    imageAlt: "Server rack showing technical infrastructure",
    tags: ["Python", "AWS", "Docker"],
    filter: ["Python", "Infrastructure"],
    specs: [
      {
        icon: "terminal",
        title: "Automation",
        description: "Single-command provisioning for full VPC and ECS stacks.",
      },
      {
        icon: "lock",
        title: "Security",
        description: "IAM least-privilege enforcement on all generated roles.",
      },
      {
        icon: "cloud_upload",
        title: "Portability",
        description: "Multi-region and multi-account deployment support.",
      },
      {
        icon: "integration_instructions",
        title: "CI/CD Ready",
        description: "Structured JSON output for pipeline integration.",
      },
    ],
    githubUrl: "#",
    liveUrl: "#",
    status: "Active Development",
    version: "v0.8.2",
  },
  {
    title: "FinTech Transaction Ledger",
    category: "Fintech Infrastructure",
    description:
      "Immutable ledger system designed for micro-transactions. Ensures ACID compliance across distributed database nodes with high availability.",
    fullDescription:
      "The system implements an event-sourcing model with a CQRS read/write separation, enabling independent optimization of query and command paths. Cryptographically signed audit trails ensure tamper-evident records for regulatory compliance.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB-ALm0fKiVk30vWnBo5DYJXVcnWFU8fytYZLntQ-9IiPFLjLFhNYg5ukIDXXEXoaiwbiKso44qGcrrAR75I8fBCxeKe6DXT-S6MBXH9VfXOcscLltyLbCfE3kIgToGnq1ggHrIT8_P7kLfObmW8mhDFk1cwbN59l-_Bq2lnvdgp9Fqc6JJr9PTnc_dhROyb0NzNxpI30skIfUzWakt5FWci8vPwouHD-NA7MW6aoX83y2AS3ZLiivTxKdlY4ORHBxvx_ftFyNNBPI",
    imageAlt: "Code editor screen showing complex application logic",
    tags: ["Node.js", "PostgreSQL", "Redis"],
    filter: ["Infrastructure"],
    specs: [
      {
        icon: "verified",
        title: "Data Integrity",
        description: "ACID compliance across distributed PostgreSQL nodes.",
      },
      {
        icon: "security",
        title: "Security",
        description: "Cryptographic audit trail with tamper-evident logs.",
      },
      {
        icon: "bolt",
        title: "Performance",
        description: "Sub-second query response under peak transaction load.",
      },
      {
        icon: "uptime",
        title: "Availability",
        description: "99.99% SLA with automated failover and replication.",
      },
    ],
    githubUrl: "#",
    liveUrl: "#",
    status: "Production Ready",
    version: "v3.0.1",
  }, */
];

export default function ProjectsSection() {
  const { lang } = useLanguage();
  const t = translations[lang].projects;
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
                          <a
                            href={project.liveUrl}
                            onClick={(e) => e.stopPropagation()}
                            className="border border-primary text-primary px-4 py-2 font-[family-name:var(--font-space-grotesk)] text-xs font-bold tracking-widest uppercase hover:bg-primary hover:text-on-primary transition-colors inline-flex items-center gap-2"
                          >
                            <span className="material-symbols-outlined text-sm">
                              open_in_new
                            </span>
                            {t.liveDeploy}
                          </a>
                          <a
                            href={project.githubUrl}
                            onClick={(e) => e.stopPropagation()}
                            className="border border-outline-variant text-on-background px-4 py-2 font-[family-name:var(--font-space-grotesk)] text-xs font-bold tracking-widest uppercase hover:border-on-background transition-colors inline-flex items-center gap-2"
                          >
                            <span className="material-symbols-outlined text-sm">
                              code
                            </span>
                            {t.source}
                          </a>
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
        {filtered.length > 0 && (
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
          />
        )}
      </AnimatePresence>
    </section>
  );
}
