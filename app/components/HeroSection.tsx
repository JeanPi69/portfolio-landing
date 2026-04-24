export default function HeroSection() {
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
                  Alex Mercer
                </h2>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="font-[family-name:var(--font-space-grotesk)] text-xs tracking-widest uppercase text-primary">
                    System Ready
                  </span>
                </div>
              </div>
            </div>

            {/* H1 */}
            <h1
              className="font-[family-name:var(--font-space-grotesk)] font-bold text-on-background text-[3.5rem] leading-[1.1]"
            >
              Crafting scalable solutions through{" "}
              <span className="text-primary">precise code architecture.</span>
            </h1>

            {/* Body */}
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl">
              Full-stack software engineer specializing in distributed systems,
              cloud architecture, and high-performance applications. I build
              systems that scale, perform, and endure.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="bg-primary text-on-primary px-6 py-3 font-[family-name:var(--font-space-grotesk)] text-xs font-bold tracking-widest uppercase hover:bg-primary-fixed transition-colors inline-flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">
                  rocket_launch
                </span>
                Initialize Projects
              </a>
              <a
                href="#contact"
                className="border border-primary text-primary px-6 py-3 font-[family-name:var(--font-space-grotesk)] text-xs font-bold tracking-widest uppercase hover:bg-primary/10 transition-colors inline-flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">
                  wifi_tethering
                </span>
                Ping Server
              </a>
              <a
                href="#"
                className="border border-outline-variant text-on-background px-6 py-3 font-[family-name:var(--font-space-grotesk)] text-xs font-bold tracking-widest uppercase hover:border-on-surface-variant transition-colors inline-flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">
                  download
                </span>
                Download CV
              </a>
            </div>
          </div>

          {/* Side column — system info */}
          <div className="col-span-12 lg:col-span-4 hidden lg:flex flex-col gap-4 justify-center">
            <div className="border border-outline-variant bg-surface-container p-6 font-[family-name:var(--font-space-grotesk)]">
              <div className="text-primary text-xs tracking-widest uppercase mb-4">
                System Status
              </div>
              {[
                { label: "Status", value: "ONLINE", highlight: true },
                { label: "Location", value: "Remote / Global" },
                { label: "Availability", value: "Open to Offers" },
                { label: "Response", value: "&lt; 24h" },
              ].map((item) => (
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

            <div className="border border-outline-variant bg-surface-container p-6 font-[family-name:var(--font-space-grotesk)]">
              <div className="text-primary text-xs tracking-widest uppercase mb-4">
                Core Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {["Go", "Node.js", "React", "TypeScript", "AWS", "Kubernetes"].map(
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
          </div>
        </div>
      </div>
    </section>
  );
}
