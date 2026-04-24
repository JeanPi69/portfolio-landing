const socialLinks = [
  { label: "GitHub", icon: "code", href: "#" },
  { label: "LinkedIn", icon: "group", href: "#" },
  { label: "Terminal", icon: "terminal", href: "#" },
  { label: "System_Status", icon: "monitoring", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0d0e] w-full py-12 border-t border-slate-800">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 lg:px-12 max-w-[1280px] mx-auto gap-6">
        <p className="font-[family-name:var(--font-space-grotesk)] text-xs tracking-widest uppercase text-primary">
          © 2024 ARCHITECT_OS. BUILT FOR PRECISION.
        </p>
        <div className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
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
  );
}
