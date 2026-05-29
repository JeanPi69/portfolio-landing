"use client";

import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../lib/translations";
import FadeIn from "./animations/FadeIn";

export default function HeroSection() {
  const { lang } = useLanguage();
  const t = translations[lang].hero;
  return (
    <section
      id="about"
      className="geometric-bg min-h-[921px] flex items-center pt-16"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 w-full py-24">
        <div className="grid grid-cols-12 gap-6">
          {/* Main content */}
          <div className="col-span-12 lg:col-span-8 flex flex-col gap-8">
            {/* Profile row */}
            <FadeIn direction="up" delay={0.05}>
              <div className="flex items-center gap-6">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full border-2 border-primary overflow-hidden bg-surface-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-5xl text-on-surface-variant">
                      person
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold text-xl text-on-background">
                    Jean Pierre Huapaya
                  </h2>
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="font-[family-name:var(--font-space-grotesk)] text-xs tracking-widest uppercase text-primary">
                      {t.statusLabel}
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* H1 */}
            <FadeIn direction="up" delay={0.15}>
              <h1 className="font-[family-name:var(--font-space-grotesk)] font-bold text-on-background text-[3.5rem] leading-[1.1]">
                {t.headline}{" "}
                <span className="text-primary">{t.headlineAccent}</span>
              </h1>
            </FadeIn>

            {/* Body */}
            <FadeIn direction="up" delay={0.25}>
              <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl">
                {t.body}
              </p>
            </FadeIn>

            {/* CTAs */}
            <FadeIn direction="up" delay={0.35}>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#projects"
                  className="bg-primary text-on-primary px-6 py-3 font-[family-name:var(--font-space-grotesk)] text-xs font-bold tracking-widest uppercase hover:bg-primary-fixed transition-colors inline-flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">rocket_launch</span>
                  {t.ctaProjects}
                </a>
                <a
                  href="#contact"
                  className="border border-primary text-primary px-6 py-3 font-[family-name:var(--font-space-grotesk)] text-xs font-bold tracking-widest uppercase hover:bg-primary/10 transition-colors inline-flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">wifi_tethering</span>
                  {t.ctaContact}
                </a>
                <a
                  href="#"
                  className="border border-outline-variant text-on-background px-6 py-3 font-[family-name:var(--font-space-grotesk)] text-xs font-bold tracking-widest uppercase hover:border-on-surface-variant transition-colors inline-flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">download</span>
                  {t.ctaCV}
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Side column — system info */}
          <div className="col-span-12 lg:col-span-4 hidden lg:flex flex-col gap-4 justify-center">
            <FadeIn direction="left" delay={0.3}>
              <div className="border border-outline-variant bg-surface-container p-6 font-[family-name:var(--font-space-grotesk)]">
                <div className="text-primary text-xs tracking-widest uppercase mb-4">
                  {t.systemStatus}
                </div>
                {t.statusItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-center border-b border-outline-variant py-2 last:border-0"
                  >
                    <span className="text-on-surface-variant text-xs tracking-wider uppercase">
                      {item.label}
                    </span>
                    <span
                      className={`text-xs font-bold tracking-wider uppercase ${item.highlight ? "text-primary" : "text-on-surface"}`}
                      dangerouslySetInnerHTML={{ __html: item.value }}
                    />
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.4}>
              <div className="border border-outline-variant bg-surface-container p-6 font-[family-name:var(--font-space-grotesk)]">
                <div className="text-primary text-xs tracking-widest uppercase mb-4">
                  {t.coreStack}
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Angular", "Ionic", "TypeScript", "RxJS", "REST APIs", "Git"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="border border-outline-variant px-2 py-1 text-xs text-on-surface"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
