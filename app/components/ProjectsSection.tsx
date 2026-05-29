"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn, { StaggerContainer, StaggerItem } from "./animations/FadeIn";
import ProjectDetailOverlay from "./ProjectDetailOverlay";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../lib/translations";

const filters = ["All", "React", "Go", "Python", "Infrastructure", "Typescript", "Angular"];

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
    title: "DataStream Protocol",
    category: "Data Infrastructure",
    description:
      "High-throughput data ingestion engine capable of processing 10k events/sec. Built with Go and Apache Kafka for real-time analytics processing.",
    fullDescription:
      "The architecture leverages a partitioned log model with consumer groups, providing durable, ordered message delivery at massive scale. The system is designed for zero-downtime deployments using rolling upgrades and supports exactly-once semantics via idempotent producers.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCgQgfE7UBcr0TyhrfWD3u8pXeNLbZQy6izvBJHbJyQMWWxnvSjwohvmoXVGgk7k07t9_9u_uG0Mg444tSC76vDseT70Q4WgKErkwSSe32nx_OraiESjnaG4eChHXZ3UhPcDDh8kslSH3AMfDcLmbykk_m2iK4OhAU8OD65_g54A05VlkHKekWUX4sdxkrjOIGj8lWemP9w33BQFufpOtiT4640nv1ggv1dGezo66DwMyhpFLamGmVcRgWyxtnYTkx2LQhBf-9CiK8",
    imageAlt: "Abstract data visualization showing glowing network nodes on dark background",
    tags: ["Go", "Kafka", "gRPC"],
    filter: ["Go", "Infrastructure"],
    specs: [
      { icon: "bolt", title: "Throughput", description: "10k+ events/sec with consistent sub-10ms latency." },
      { icon: "security", title: "Reliability", description: "At-least-once delivery with idempotent producer support." },
      { icon: "network_node", title: "Scalability", description: "Horizontal partition scaling across distributed brokers." },
      { icon: "monitoring", title: "Observability", description: "Prometheus metrics and distributed tracing built in." },
    ],
    githubUrl: "#",
    liveUrl: "#",
    status: "Production Ready",
    version: "v1.3.0",
  },
  {
    title: "Nexus UI Framework",
    category: "Frontend Architecture",
    description:
      "Component library built for internal tooling. Implements strict brutalist design principles while maintaining accessibility standards.",
    fullDescription:
      "Built as a headless-first system with optional styled layers, enabling teams to adopt incrementally. Every component ships with ARIA roles, keyboard navigation, and focus management baked in — meeting WCAG 2.1 AA standards out of the box.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBqO561mWFuB5pmet0onZdQh740Cp2edAbLgFCTSqlDGkS0s6fjtkdYkmtCr-cGqQXdqc4TetvwPnAFUwX86_pknXhMoe-T4uZ_0-KNhz3ElyoxgKo1iTWxpukqCIlrf7zKWrkcFN_0Qf3zzlONzw0wm4cYmkTFa5xuZqMURmwsA-6uFHH68WhnEKPYQ7vB2As_PwCg2dFi58b8VdDCTQx3AgFcfOHXhxMAjMb1YRTa66gQU2vbTyNRBw3zENBYbjOYH4ikLTeuRic",
    imageAlt: "Minimalist dark dashboard interface showing server metrics",
    tags: ["React", "TypeScript", "Tailwind"],
    filter: ["React"],
    specs: [
      { icon: "accessibility_new", title: "Accessibility", description: "WCAG 2.1 AA compliant with full keyboard navigation." },
      { icon: "view_module", title: "Modularity", description: "Composable headless-first component architecture." },
      { icon: "speed", title: "Performance", description: "Tree-shakable exports, minimal runtime overhead." },
      { icon: "auto_stories", title: "Documentation", description: "Full Storybook coverage with live playground." },
    ],
    githubUrl: "#",
    liveUrl: "#",
    status: "Stable",
    version: "v2.1.4",
  },
  {
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
      { icon: "terminal", title: "Automation", description: "Single-command provisioning for full VPC and ECS stacks." },
      { icon: "lock", title: "Security", description: "IAM least-privilege enforcement on all generated roles." },
      { icon: "cloud_upload", title: "Portability", description: "Multi-region and multi-account deployment support." },
      { icon: "integration_instructions", title: "CI/CD Ready", description: "Structured JSON output for pipeline integration." },
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
      { icon: "verified", title: "Data Integrity", description: "ACID compliance across distributed PostgreSQL nodes." },
      { icon: "security", title: "Security", description: "Cryptographic audit trail with tamper-evident logs." },
      { icon: "bolt", title: "Performance", description: "Sub-second query response under peak transaction load." },
      { icon: "uptime", title: "Availability", description: "99.99% SLA with automated failover and replication." },
    ],
    githubUrl: "#",
    liveUrl: "#",
    status: "Production Ready",
    version: "v3.0.1",
  },
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
                backgroundImage: "radial-gradient(#86948a 1px, transparent 1px)",
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
                      fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 48",
                    }}
                  >
                    database_off
                  </span>
                  <motion.div
                    className="absolute left-0 w-full h-[2px] bg-primary/50 blur-[1px]"
                    animate={{ top: ["0%", "100%", "0%"] }}
                    transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
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
                  yielded no architectural constructs within the current repository parameters.
                </p>

                <button
                  onClick={() => setActiveFilter("All")}
                  className="border border-outline-variant text-on-surface px-6 py-3 font-[family-name:var(--font-space-grotesk)] text-xs font-bold tracking-widest uppercase hover:border-primary hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">refresh</span>
                  {t.resetQuery}
                </button>
              </div>

              {/* Technical decoration */}
              <div className="absolute bottom-4 left-4 font-[family-name:var(--font-space-grotesk)] text-[10px] text-outline-variant opacity-50">
                {t.statusLabel}<br />
                EXEC_TIME: 0.042ms
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12" delayStart={0.05}>
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
                            <span className="material-symbols-outlined text-sm">open_in_new</span>
                            {t.liveDeploy}
                          </a>
                          <a
                            href={project.githubUrl}
                            onClick={(e) => e.stopPropagation()}
                            className="border border-outline-variant text-on-background px-4 py-2 font-[family-name:var(--font-space-grotesk)] text-xs font-bold tracking-widest uppercase hover:border-on-background transition-colors inline-flex items-center gap-2"
                          >
                            <span className="material-symbols-outlined text-sm">code</span>
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
              <span className="material-symbols-outlined text-sm">expand_more</span>
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
