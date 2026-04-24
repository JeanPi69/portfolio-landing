const explorations = [
  {
    icon: "view_in_ar",
    title: "Web3 & Rust",
    description:
      "Exploring smart contract development and Solana ecosystem.",
  },
  {
    icon: "memory",
    title: "Machine Learning",
    description:
      "Integrating LLMs and vector databases into modern applications.",
  },
  {
    icon: "architecture",
    title: "Event-Driven Arch",
    description:
      "Deep diving into Apache Kafka and stream processing patterns.",
  },
  {
    icon: "speed",
    title: "WebAssembly",
    description:
      "Evaluating WASM for high-performance frontend modules.",
  },
];

export default function ExplorationSection() {
  return (
    <section className="py-[120px] bg-surface-container-low border-t border-outline-variant">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-16">
          <h2
            className="font-[family-name:var(--font-space-grotesk)] font-semibold text-on-background text-[2.25rem] leading-[1.2]"
          >
            Current Explorations
          </h2>
          <div className="h-px w-24 bg-primary" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {explorations.map((item) => (
            <div
              key={item.title}
              className="border border-outline-variant bg-surface p-6 flex flex-col items-center text-center gap-4 hover:border-primary transition-colors"
            >
              <span className="material-symbols-outlined text-4xl text-primary">
                {item.icon}
              </span>
              <h3 className="font-[family-name:var(--font-space-grotesk)] font-semibold text-on-background text-lg">
                {item.title}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
