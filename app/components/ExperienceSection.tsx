"use client";

import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../lib/translations";
import FadeIn from "./animations/FadeIn";

export default function ExperienceSection() {
  const { lang } = useLanguage();
  const t = translations[lang].experience;

  return (
    <section id="experience" className="py-[120px] border-t border-outline-variant">
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

        {/* Timeline */}
        <div className="flex flex-col gap-12 border-l border-outline-variant ml-4 pl-8 relative">
          {t.jobs.map((job, i) => (
            <FadeIn key={job.title} direction="left" delay={i * 0.15}>
              <div className="relative">
                {/* Bullet */}
                <div
                  className={`absolute -left-[37px] top-1 w-3 h-3 ${
                    i === 0
                      ? "bg-primary"
                      : "bg-surface-variant border border-outline-variant"
                  }`}
                />

                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-4">
                  <h3 className="font-[family-name:var(--font-space-grotesk)] font-semibold text-on-background text-[1.5rem] leading-[1.3]">
                    {job.title}
                  </h3>
                  <span className="font-[family-name:var(--font-space-grotesk)] text-sm text-primary">
                    {job.company}
                  </span>
                  <span className="font-[family-name:var(--font-space-grotesk)] text-sm text-on-surface-variant md:ml-auto">
                    {job.period}
                  </span>
                </div>

                {/* Description */}
                <p className="text-on-surface-variant text-base leading-relaxed mb-4 max-w-3xl">
                  {job.description}
                </p>

                {/* Bullets */}
                {job.bullets.length > 0 && (
                  <ul className="flex flex-col gap-2">
                    {job.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2 font-[family-name:var(--font-space-grotesk)] text-sm text-on-surface"
                      >
                        <span className="text-primary mt-px">&gt;</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
