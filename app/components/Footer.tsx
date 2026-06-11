"use client";

import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../lib/translations";
import FadeIn from "./animations/FadeIn";

const socialLinks = [
  { label: "GitHub", icon: "code", href: "https://www.github.com/JeanPi69", external: true },
  {
    label: "LinkedIn",
    icon: "group",
    href: "https://www.linkedin.com/in/walter-jean-pierre-huapaya-ch%C3%A1vez/",
    external: true,
  },
  { label: "Terminal", icon: "terminal", href: "#contact", external: false },
  { label: "System_Status", icon: "monitoring", href: "#about", external: false },
];

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang].footer;

  return (
    <FadeIn>
      <footer className="bg-surface-container-lowest w-full py-12 border-t border-outline-variant">
        <div className="flex flex-col md:flex-row justify-between items-center px-6 lg:px-12 max-w-[1280px] mx-auto gap-6">
          <p className="font-[family-name:var(--font-space-grotesk)] text-xs tracking-widest uppercase text-primary">
            {t.copyright}
          </p>
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                className="text-on-surface-variant hover:text-primary transition-colors inline-flex items-center gap-2 font-[family-name:var(--font-space-grotesk)] text-xs tracking-widest uppercase"
              >
                <span className="material-symbols-outlined text-base">
                  {link.icon}
                </span>
                <span className="hidden sm:inline">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </FadeIn>
  );
}
