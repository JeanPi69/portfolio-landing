const skillCategories = [
  {
    icon: "desktop_windows",
    title: "Frontend Systems",
    skills: ["React.js", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "GraphQL"],
  },
  {
    icon: "dns",
    title: "Backend Infrastructure",
    skills: ["Node.js", "Python", "Go", "PostgreSQL", "Redis", "Kafka"],
  },
  {
    icon: "build",
    title: "DevOps & Tooling",
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform", "Git"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-[120px]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-16">
          <h2
            className="font-[family-name:var(--font-space-grotesk)] font-semibold text-on-background text-[2.25rem] leading-[1.2]"
          >
            Technical Matrix
          </h2>
          <div className="h-px w-24 bg-primary" />
        </div>

        {/* Skill cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="border border-outline-variant bg-surface-container p-8"
            >
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-xs font-bold tracking-widest uppercase text-primary mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">
                  {category.icon}
                </span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-outline-variant px-3 py-1 font-[family-name:var(--font-space-grotesk)] text-sm text-on-surface"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
