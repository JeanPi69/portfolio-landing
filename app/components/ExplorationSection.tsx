import FadeIn, { StaggerContainer, StaggerItem } from "./animations/FadeIn";

const explorations = [
  {
    icon: "view_in_ar",
    title: "React & Next.js",
    description:
      "Learning modern React ecosystem to expand opportunities in global frontend roles.",
  },
  {
    icon: "phone_android",
    title: "Flutter",
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
        <FadeIn>
          <div className="flex flex-col gap-4 mb-16">
            <h2 className="font-[family-name:var(--font-space-grotesk)] font-semibold text-on-background text-[2.25rem] leading-[1.2]">
              Current Explorations
            </h2>
            <div className="h-px w-24 bg-primary" />
          </div>
        </FadeIn>

        {/* Cards */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6" delayStart={0.1}>
          {explorations.map((item) => (
            <StaggerItem key={item.title}>
              <div className="border border-outline-variant bg-surface p-6 flex flex-col items-center text-center gap-4 hover:border-primary transition-colors h-full">
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
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
