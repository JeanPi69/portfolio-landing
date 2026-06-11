"use client";

import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../lib/translations";
import FadeIn, { StaggerContainer, StaggerItem } from "./animations/FadeIn";

const skillIcons = ["desktop_windows", "dns", "build"];
const skillLists = [
  ["Angular", "Ionic", "TypeScript", "Javascript", "RxJS", "HTML5", "CSS/SCSS"],
  ["Node.js", "PostgreSQL", "Express.js", "Rest API"],
  ["Git", "GitHub", "Agile", "Github Copilot", "Google Stitch", "Github Actions", "Claude Code"],
];

export default function SkillsSection() {
  const { lang } = useLanguage();
  const t = translations[lang].skills;
  return (
    <section id="skills" className="py-[120px] border-t border-outline-variant">
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

        {/* Skill cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" delayStart={0.1}>
          {t.categories?.map((category, i) => (
            <StaggerItem key={i}>
              <div className="border border-outline-variant bg-surface-container p-8 h-full">
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-xs font-bold tracking-widest uppercase text-primary mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">
                    {skillIcons[i]}
                  </span>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillLists[i].map((skill) => (
                    <span
                      key={skill}
                      className="border border-outline-variant px-3 py-1 font-[family-name:var(--font-space-grotesk)] text-sm text-on-surface"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
