"use client";

import { useState } from "react";

const filters = ["All", "React", "Go", "Python", "Infrastructure"];

const projects = [
  {
    title: "DataStream Protocol",
    description:
      "High-throughput data ingestion engine capable of processing 10k events/sec. Built with Go and Apache Kafka for real-time analytics processing.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCgQgfE7UBcr0TyhrfWD3u8pXeNLbZQy6izvBJHbJyQMWWxnvSjwohvmoXVGgk7k07t9_9u_uG0Mg444tSC76vDseT70Q4WgKErkwSSe32nx_OraiESjnaG4eChHXZ3UhPcDDh8kslSH3AMfDcLmbykk_m2iK4OhAU8OD65_g54A05VlkHKekWUX4sdxkrjOIGj8lWemP9w33BQFufpOtiT4640nv1ggv1dGezo66DwMyhpFLamGmVcRgWyxtnYTkx2LQhBf-9CiK8",
    imageAlt: "Abstract data visualization showing glowing network nodes on dark background",
    tags: ["Go", "Kafka", "gRPC"],
    filter: ["Go", "Infrastructure"],
  },
  {
    title: "Nexus UI Framework",
    description:
      "Component library built for internal tooling. Implements strict brutalist design principles while maintaining accessibility standards.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBqO561mWFuB5pmet0onZdQh740Cp2edAbLgFCTSqlDGkS0s6fjtkdYkmtCr-cGqQXdqc4TetvwPnAFUwX86_pknXhMoe-T4uZ_0-KNhz3ElyoxgKo1iTWxpukqCIlrf7zKWrkcFN_0Qf3zzlONzw0wm4cYmkTFa5xuZqMURmwsA-6uFHH68WhnEKPYQ7vB2As_PwCg2dFi58b8VdDCTQx3AgFcfOHXhxMAjMb1YRTa66gQU2vbTyNRBw3zENBYbjOYH4ikLTeuRic",
    imageAlt: "Minimalist dark dashboard interface showing server metrics",
    tags: ["React", "TypeScript", "Tailwind"],
    filter: ["React"],
  },
  {
    title: "Cloud Provisioning CLI",
    description:
      "Command-line interface for rapid AWS infrastructure deployment. Automates VPC setup, IAM roles, and basic container orchestration.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAmtjE_ushLNZ3YSXU_WR6KcX5yp84hFlCIKGUNaQwZ3jmNpE1pqibsClJoAwt2sSew3yxgaH5UNP19B5lmKUPFKgrjdynGV11akBPtozeHQlNykJ4WF7GzzsuPGpwPrxEjrOJ6CXQzWeH2jIpRaC140-qA7YgKLK2mOazdcyYdreIGrPDJxONx2dGr831oONr9I699ctgw33m4okIlqtuF4OB-hi_SPIS8s0QFVR1OWsyAQ8HEfdxYrAbSKWP2qvqgc01_oH7v9-k",
    imageAlt: "Server rack showing technical infrastructure",
    tags: ["Python", "AWS", "Docker"],
    filter: ["Python", "Infrastructure"],
  },
  {
    title: "FinTech Transaction Ledger",
    description:
      "Immutable ledger system designed for micro-transactions. Ensures ACID compliance across distributed database nodes with high availability.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB-ALm0fKiVk30vWnBo5DYJXVcnWFU8fytYZLntQ-9IiPFLjLFhNYg5ukIDXXEXoaiwbiKso44qGcrrAR75I8fBCxeKe6DXT-S6MBXH9VfXOcscLltyLbCfE3kIgToGnq1ggHrIT8_P7kLfObmW8mhDFk1cwbN59l-_Bq2lnvdgp9Fqc6JJr9PTnc_dhROyb0NzNxpI30skIfUzWakt5FWci8vPwouHD-NA7MW6aoX83y2AS3ZLiivTxKdlY4ORHBxvx_ftFyNNBPI",
    imageAlt: "Code editor screen showing complex application logic",
    tags: ["Node.js", "PostgreSQL", "Redis"],
    filter: ["Infrastructure"],
  },
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.filter.includes(activeFilter));

  return (
    <section id="projects" className="py-[120px] bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-16">
          <h2
            className="font-[family-name:var(--font-space-grotesk)] font-semibold text-on-background text-[2.25rem] leading-[1.2]"
          >
            Deployment Output
          </h2>
          <div className="h-px w-24 bg-primary" />
        </div>

        {/* Filter bar */}
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

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {filtered.map((project) => (
            <div
              key={project.title}
              className="border border-outline-variant bg-surface-container group flex flex-col h-full"
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
                <h3
                  className="font-[family-name:var(--font-space-grotesk)] font-semibold text-on-background text-[1.5rem] leading-[1.3] mb-4"
                >
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
                    href="#"
                    className="border border-primary text-primary px-4 py-2 font-[family-name:var(--font-space-grotesk)] text-xs font-bold tracking-widest uppercase hover:bg-primary hover:text-on-primary transition-colors inline-flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-sm">
                      open_in_new
                    </span>
                    Live Deploy
                  </a>
                  <a
                    href="#"
                    className="border border-outline-variant text-on-background px-4 py-2 font-[family-name:var(--font-space-grotesk)] text-xs font-bold tracking-widest uppercase hover:border-on-background transition-colors inline-flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-sm">
                      code
                    </span>
                    Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load more */}
        <div className="flex justify-center">
          <button className="border border-outline-variant text-on-background px-8 py-4 font-[family-name:var(--font-space-grotesk)] text-xs font-bold tracking-widest uppercase hover:border-primary hover:text-primary transition-colors inline-flex items-center gap-2">
            Load More Projects
            <span className="material-symbols-outlined text-sm">
              expand_more
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
