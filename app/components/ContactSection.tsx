"use client";

import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <section id="contact" className="py-[120px] border-t border-outline-variant">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: contact info */}
        <div>
          <div className="flex flex-col gap-4 mb-8">
            <h2
              className="font-[family-name:var(--font-space-grotesk)] font-semibold text-on-background text-[2.25rem] leading-[1.2]"
            >
              Establish Connection
            </h2>
            <div className="h-px w-24 bg-primary" />
          </div>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-12 max-w-md">
            System ready to receive input. Reach out for technical
            collaborations, architecture consultation, or general inquiries.
          </p>

          <div className="flex flex-col gap-4">
            <a
              href="mailto:hello@devarchitect.sys"
              className="flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors font-[family-name:var(--font-space-grotesk)] text-sm"
            >
              <span className="material-symbols-outlined border border-outline-variant p-2">
                mail
              </span>
              hello@devarchitect.sys
            </a>
            <a
              href="#"
              className="flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors font-[family-name:var(--font-space-grotesk)] text-sm"
            >
              <span className="material-symbols-outlined border border-outline-variant p-2">
                code
              </span>
              github.com/devarchitect
            </a>
            <a
              href="#"
              className="flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors font-[family-name:var(--font-space-grotesk)] text-sm"
            >
              <span className="material-symbols-outlined border border-outline-variant p-2">
                group
              </span>
              linkedin.com/in/devarchitect
            </a>
          </div>
        </div>

        {/* Right: form */}
        <div className="bg-surface-container border border-outline-variant p-8">
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="font-[family-name:var(--font-space-grotesk)] text-xs font-bold tracking-widest uppercase text-primary"
              >
                Identity
              </label>
              <input
                id="name"
                type="text"
                placeholder="ENTER_NAME"
                value={form.name}
                onChange={handleChange}
                className="bg-background border-0 border-b border-outline-variant focus:border-primary focus:outline-none focus:ring-0 px-0 py-2 font-[family-name:var(--font-space-grotesk)] text-sm text-on-background placeholder:text-on-surface-variant/50 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-[family-name:var(--font-space-grotesk)] text-xs font-bold tracking-widest uppercase text-primary"
              >
                Return Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="ENTER_EMAIL"
                value={form.email}
                onChange={handleChange}
                className="bg-background border-0 border-b border-outline-variant focus:border-primary focus:outline-none focus:ring-0 px-0 py-2 font-[family-name:var(--font-space-grotesk)] text-sm text-on-background placeholder:text-on-surface-variant/50 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2 mb-4">
              <label
                htmlFor="message"
                className="font-[family-name:var(--font-space-grotesk)] text-xs font-bold tracking-widest uppercase text-primary"
              >
                Payload
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="ENTER_MESSAGE_DATA"
                value={form.message}
                onChange={handleChange}
                className="bg-background border-0 border-b border-outline-variant focus:border-primary focus:outline-none focus:ring-0 px-0 py-2 font-[family-name:var(--font-space-grotesk)] text-sm text-on-background placeholder:text-on-surface-variant/50 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-primary text-on-primary px-8 py-4 font-[family-name:var(--font-space-grotesk)] text-xs font-bold tracking-widest uppercase hover:bg-primary-fixed transition-colors self-start"
            >
              Transmit Data
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
