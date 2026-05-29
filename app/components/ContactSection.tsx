"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FadeIn from "./animations/FadeIn";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../lib/translations";

type Status = "idle" | "submitting" | "success" | "error";
type Errors = { name?: string; email?: string; message?: string };

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactSection() {
  const { lang } = useLanguage();
  const t = translations[lang].contact;
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
    // Clear error on change
    if (errors[id as keyof Errors]) {
      setErrors((prev) => ({ ...prev, [id]: undefined }));
    }
  };

  function validate(): Errors {
    const e: Errors = {};
    if (!form.name.trim()) e.name = t.errorName;
    if (!form.email.trim()) e.email = t.errorEmail;
    else if (!validateEmail(form.email)) e.email = t.errorEmailInvalid;
    if (!form.message.trim()) e.message = t.errorMessage;
    return e;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Send failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  function handleReset() {
    setForm({ name: "", email: "", message: "" });
    setErrors({});
    setStatus("idle");
  }

  return (
    <section id="contact" className="py-[120px] border-t border-outline-variant">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: contact info */}
        <FadeIn direction="up">
          <div>
            <div className="flex flex-col gap-4 mb-8">
              <h2 className="font-[family-name:var(--font-space-grotesk)] font-semibold text-on-background text-[2.25rem] leading-[1.2]">
                {t.sectionTitle}
              </h2>
              <div className="h-px w-24 bg-primary" />
            </div>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-12 max-w-md">
              {t.subtitle}
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:jeanpierrehuapaya@gmail.com"
                className="flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors font-[family-name:var(--font-space-grotesk)] text-sm"
              >
                <span className="material-symbols-outlined border border-outline-variant p-2">mail</span>
                jeanpierrehuapaya@gmail.com
              </a>
              <a
                href="https://www.github.com/JeanPi69" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors font-[family-name:var(--font-space-grotesk)] text-sm"
              >
                <span className="material-symbols-outlined border border-outline-variant p-2">code</span>
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/walter-jean-pierre-huapaya-ch%C3%A1vez-51ba479b/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors font-[family-name:var(--font-space-grotesk)] text-sm"
              >
                <span className="material-symbols-outlined border border-outline-variant p-2">group</span>
                Linkedin
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Right: form / success */}
        <FadeIn direction="up" delay={0.15}>
          <div className="bg-surface-container border border-outline-variant p-8 min-h-[420px] flex flex-col">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35 }}
                  className="flex-1"
                >
                  {/* Terminal container */}
                  <div
                    className="border border-outline-variant bg-surface-dim"
                    style={{ boxShadow: "0 0 15px rgba(16, 185, 129, 0.2)" }}
                  >
                    {/* Terminal header bar */}
                    <div className="bg-surface-variant flex items-center px-4 py-2 border-b border-outline-variant">
                      <div className="flex gap-2 mr-4">
                        <div className="w-3 h-3 bg-surface-bright" />
                        <div className="w-3 h-3 bg-surface-bright" />
                        <div
                          className="w-3 h-3 bg-primary"
                          style={{ boxShadow: "0 0 6px rgba(16,185,129,0.4)" }}
                        />
                      </div>
                      <span className="font-[family-name:var(--font-space-grotesk)] text-xs text-on-surface-variant tracking-wide">
                        root@dev_architect: ~/logs/transmission_success.log
                      </span>
                    </div>

                    {/* Terminal body */}
                    <div className="p-6 font-[family-name:var(--font-space-grotesk)] text-xs bg-surface">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 flex items-center justify-center border-2 border-primary text-primary flex-shrink-0">
                          <span className="material-symbols-outlined" style={{ fontSize: "28px" }}>check</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-primary uppercase tracking-widest text-sm mb-1">
                            {t.successTitle}
                          </h3>
                          <p className="text-on-surface-variant text-xs">
                            {t.successSubtitle}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-1 text-on-surface-variant">
                        {t.successLines.map((line, i) => (
                          <motion.p
                            key={line}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + i * 0.12 }}
                          >
                            &gt; {line}... <span className="text-primary">[OK]</span>
                          </motion.p>
                        ))}
                        <motion.p
                          className="mt-3 text-primary"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.65 }}
                        >
                          &gt; {t.successTerminated}
                        </motion.p>
                        <motion.p
                          className="mt-3"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.8 }}
                        >
                          &gt;{" "}
                          <motion.span
                            className="inline-block w-2 h-3.5 bg-primary align-middle"
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                        </motion.p>
                      </div>

                      {/* Button */}
                      <div className="mt-8">
                        <button
                          onClick={handleReset}
                          className="bg-primary text-on-primary font-[family-name:var(--font-space-grotesk)] text-xs font-bold tracking-widest uppercase px-6 py-3 hover:bg-transparent hover:text-primary border border-primary transition-colors inline-flex items-center gap-2"
                        >
                          <span className="material-symbols-outlined text-sm">refresh</span>
                          {t.sendAnother}
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col gap-6 flex-1"
                  onSubmit={handleSubmit}
                  noValidate
                  suppressHydrationWarning
                >
                  {/* Name */}
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="name"
                      className="font-[family-name:var(--font-space-grotesk)] text-xs font-bold tracking-widest uppercase text-primary"
                    >
                      {t.labelName}
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder={t.placeholderName}
                      value={form.name}
                      onChange={handleChange}
                      className={`bg-background border-0 border-b focus:outline-none focus:ring-0 px-0 py-2 font-[family-name:var(--font-space-grotesk)] text-sm text-on-background placeholder:text-on-surface-variant/50 transition-colors ${
                        errors.name ? "border-error" : "border-outline-variant focus:border-primary"
                      }`}
                    />
                    {errors.name && (
                      <span className="text-xs text-error font-[family-name:var(--font-space-grotesk)] tracking-wide">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="email"
                      className="font-[family-name:var(--font-space-grotesk)] text-xs font-bold tracking-widest uppercase text-primary"
                    >
                      {t.labelEmail}
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder={t.placeholderEmail}
                      value={form.email}
                      onChange={handleChange}
                      className={`bg-background border-0 border-b focus:outline-none focus:ring-0 px-0 py-2 font-[family-name:var(--font-space-grotesk)] text-sm text-on-background placeholder:text-on-surface-variant/50 transition-colors ${
                        errors.email ? "border-error" : "border-outline-variant focus:border-primary"
                      }`}
                    />
                    {errors.email && (
                      <span className="text-xs text-error font-[family-name:var(--font-space-grotesk)] tracking-wide">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1 mb-4">
                    <label
                      htmlFor="message"
                      className="font-[family-name:var(--font-space-grotesk)] text-xs font-bold tracking-widest uppercase text-primary"
                    >
                      {t.labelMessage}
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder={t.placeholderMessage}
                      value={form.message}
                      onChange={handleChange}
                      className={`bg-background border-0 border-b focus:outline-none focus:ring-0 px-0 py-2 font-[family-name:var(--font-space-grotesk)] text-sm text-on-background placeholder:text-on-surface-variant/50 transition-colors resize-none ${
                        errors.message ? "border-error" : "border-outline-variant focus:border-primary"
                      }`}
                    />
                    {errors.message && (
                      <span className="text-xs text-error font-[family-name:var(--font-space-grotesk)] tracking-wide">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {status === "error" && (
                    <p className="text-xs text-error font-[family-name:var(--font-space-grotesk)] tracking-wide -mb-2">
                      {t.errorSend ?? "Transmission failed. Try again."}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="bg-primary text-on-primary px-8 py-4 font-[family-name:var(--font-space-grotesk)] text-xs font-bold tracking-widest uppercase hover:bg-primary-fixed transition-colors self-start inline-flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                          className="material-symbols-outlined text-sm"
                        >
                          sync
                        </motion.span>
                        {t.submitSending}
                      </>
                    ) : (
                      t.submitIdle
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
