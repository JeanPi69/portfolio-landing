"use client";

import { useEffect, useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { AnimatePresence, motion } from "framer-motion";
import { translations } from "../lib/translations";

const sectionIds = ["about", "skills", "experience", "projects", "contact"];

export default function NavBar() {
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang } = useLanguage();
  const t = translations[lang].nav;
  const [activeSection, setActiveSection] = useState<string>("about");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: t.about,      href: "#about"      },
    { label: t.skills,     href: "#skills"     },
    { label: t.experience, href: "#experience" },
    { label: t.projects,   href: "#projects"   },
    { label: t.contact,    href: "#contact"    },
  ];

  /* ── Active section via IntersectionObserver ── */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* ── Scroll opacity ── */
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* ── Close mobile menu on resize ── */
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  function handleNavClick(href: string) {
    setMobileOpen(false);
    // Small delay so AnimatePresence can close overlay before scroll
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b border-slate-800 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0d0e]/95 backdrop-blur-md"
            : "bg-[#0a0d0e]/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between gap-8">
          {/* Logo */}
          <a
            href="#about"
            onClick={(e) => { e.preventDefault(); handleNavClick("#about"); }}
            className="font-[family-name:var(--font-space-grotesk)] font-black text-sm tracking-widest uppercase text-primary"
          >
            DEV_ARCHITECT
          </a>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`relative text-sm font-[family-name:var(--font-space-grotesk)] tracking-wide transition-colors ${
                    isActive ? "text-primary" : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-primary"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <div className="hidden sm:flex items-center gap-0 border border-outline-variant overflow-hidden">
              {(["en", "es"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1 text-xs font-[family-name:var(--font-space-grotesk)] font-bold tracking-widest uppercase transition-colors ${
                    lang === l
                      ? "text-primary bg-surface-container"
                      : "text-on-surface-variant hover:text-primary bg-transparent"
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Theme toggle */}
            <button
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="text-on-surface-variant hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-xl">
                {theme === "dark" ? "light_mode" : "dark_mode"}
              </span>
            </button>

            <button
              aria-label="GitHub"
              onClick={() => window.open("https://www.github.com/JeanPi69", "_blank")}
              className="hidden sm:block text-on-surface-variant hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-xl">code</span>
            </button>

            {/* Mobile hamburger */}
            <button
              aria-label="Open menu"
              onClick={() => setMobileOpen((v) => !v)}
              className="flex md:hidden text-on-surface-variant hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-xl">
                {mobileOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 bg-[#0a0d0e]/98 backdrop-blur-sm flex flex-col px-8 pt-10 gap-6"
          >
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`font-[family-name:var(--font-space-grotesk)] text-xl font-bold tracking-widest uppercase border-b border-outline-variant pb-4 transition-colors ${
                    isActive ? "text-primary" : "text-on-background hover:text-primary"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            {/* Language toggle in mobile */}
            <div className="flex items-center gap-0 border border-outline-variant w-fit mt-4">
              {(["en", "es"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-4 py-2 text-xs font-[family-name:var(--font-space-grotesk)] font-bold tracking-widest uppercase transition-colors ${
                    lang === l
                      ? "text-primary bg-surface-container"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
