"use client";

export default function NavBar() {
  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0d0e]/80 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between gap-8">
        {/* Logo */}
        <a
          href="#about"
          className="font-[family-name:var(--font-space-grotesk)] font-black text-sm tracking-widest uppercase text-primary"
        >
          DEV_ARCHITECT
        </a>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-on-surface-variant hover:text-primary transition-colors text-sm font-[family-name:var(--font-space-grotesk)] tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-1 border border-outline-variant">
            <button className="px-3 py-1 text-xs font-[family-name:var(--font-space-grotesk)] font-bold tracking-widest uppercase text-primary bg-surface-container">
              EN
            </button>
            <button className="px-3 py-1 text-xs font-[family-name:var(--font-space-grotesk)] font-bold tracking-widest uppercase text-on-surface-variant hover:text-primary transition-colors">
              ES
            </button>
          </div>
          <button
            aria-label="Toggle theme"
            className="text-on-surface-variant hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-xl">light_mode</span>
          </button>
          <button
            aria-label="Terminal"
            className="hidden sm:block text-on-surface-variant hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-xl">terminal</span>
          </button>
          <button
            aria-label="Code"
            className="hidden sm:block text-on-surface-variant hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-xl">code</span>
          </button>
          <button
            aria-label="Hub"
            className="hidden sm:block text-on-surface-variant hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-xl">hub</span>
          </button>
        </div>
      </div>
    </header>
  );
}
