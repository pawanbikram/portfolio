import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Container from "../components/Container";
import GlassCard from "../components/GlassCard";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import { profile } from "../data/profile";

type FormState = { name: string; email: string; message: string };

function SocialIcon({
  kind,
}: {
  kind: "linkedin" | "x" | "facebook";
}) {
  const common =
    "h-5 w-5 text-slate-200 transition group-hover:text-slate-50";
  if (kind === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={common} fill="currentColor">
        <path d="M4.98 3.5A2.49 2.49 0 0 1 7.5 6a2.5 2.5 0 0 1-5 0 2.49 2.49 0 0 1 2.48-2.5ZM3 8.25h3.96V21H3V8.25ZM9.1 8.25h3.8v1.74h.06c.53-1 1.83-2.06 3.76-2.06 4.02 0 4.76 2.65 4.76 6.1V21h-3.96v-6c0-1.43-.03-3.26-1.99-3.26-1.99 0-2.3 1.55-2.3 3.15V21H9.1V8.25Z" />
      </svg>
    );
  }
  if (kind === "x") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={common} fill="currentColor">
        <path d="M18.9 2H22l-6.77 7.74L23 22h-6.1l-4.77-6.34L6.57 22H2l7.3-8.35L1.8 2H8l4.3 5.7L18.9 2Zm-1.07 18h1.7L7.08 3.9H5.25L17.83 20Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={common} fill="currentColor">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-7h-2.5V12h2.5V9.8c0-2.46 1.47-3.82 3.72-3.82 1.08 0 2.2.2 2.2.2v2.4h-1.24c-1.22 0-1.6.76-1.6 1.54V12h2.72l-.44 2.88h-2.28v7A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

export default function Contact() {
  const [state, setState] = useState<FormState>({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const mailto = useMemo(() => {
    const subject = encodeURIComponent("Portfolio Contact");
    const body = encodeURIComponent(
      `Name: ${state.name}\nEmail: ${state.email}\n\n${state.message}`
    );
    return `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }, [state.email, state.message, state.name]);

  return (
    <section id="contact" className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something great."
          subtitle="Send a message and I’ll get back to you as soon as possible."
        />

        <div className="grid gap-6 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <GlassCard className="p-6 sm:p-8">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                  window.location.href = mailto;
                }}
                className="grid gap-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-1.5 text-sm text-slate-300">
                    Name
                    <input
                      value={state.name}
                      onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
                      required
                      className="h-11 rounded-xl border border-white/10 bg-white/5 px-3 text-slate-100 placeholder:text-slate-500 focus:border-indigo-400/40"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="grid gap-1.5 text-sm text-slate-300">
                    Email
                    <input
                      type="email"
                      value={state.email}
                      onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))}
                      required
                      className="h-11 rounded-xl border border-white/10 bg-white/5 px-3 text-slate-100 placeholder:text-slate-500 focus:border-indigo-400/40"
                      placeholder="you@example.com"
                    />
                  </label>
                </div>
                <label className="grid gap-1.5 text-sm text-slate-300">
                  Message
                  <textarea
                    value={state.message}
                    onChange={(e) => setState((s) => ({ ...s, message: e.target.value }))}
                    required
                    rows={6}
                    className="resize-none rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-slate-100 placeholder:text-slate-500 focus:border-indigo-400/40"
                    placeholder="Tell me about your project..."
                  />
                </label>
                <div className="flex flex-wrap items-center gap-3">
                  <Button type="submit">Send Message</Button>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-sm text-slate-300 hover:text-slate-100"
                  >
                    Or email directly
                  </a>
                  {sent ? (
                    <span className="text-sm text-emerald-300">
                      Opening your email client…
                    </span>
                  ) : null}
                </div>
              </form>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="lg:col-span-2"
          >
            <GlassCard className="p-6 sm:p-8">
              <div className="space-y-5">
                <div>
                  <div className="text-xs uppercase tracking-widest text-slate-400">
                    Email
                  </div>
                  <a
                    className="mt-2 block text-sm font-medium text-indigo-200 hover:text-indigo-100"
                    href={`mailto:${profile.email}`}
                  >
                    {profile.email}
                  </a>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-slate-400">
                    Phone
                  </div>
                  <a
                    className="mt-2 block text-sm font-medium text-slate-100 hover:text-slate-50"
                    href={`tel:${profile.phone}`}
                  >
                    {profile.phone}
                  </a>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-slate-400">
                    Website
                  </div>
                  <a
                    className="mt-2 block text-sm font-medium text-slate-100 hover:text-slate-50"
                    href={`https://${profile.website}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {profile.website}
                  </a>
                </div>

                <div>
                  <div className="text-xs uppercase tracking-widest text-slate-400">
                    Social
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <a
                      href={profile.socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 transition hover:bg-white/10"
                      aria-label="LinkedIn"
                      title="LinkedIn"
                    >
                      <SocialIcon kind="linkedin" />
                    </a>
                    <a
                      href={profile.socials.x}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 transition hover:bg-white/10"
                      aria-label="X"
                      title="X"
                    >
                      <SocialIcon kind="x" />
                    </a>
                    <a
                      href={profile.socials.facebook}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 transition hover:bg-white/10"
                      aria-label="Facebook"
                      title="Facebook"
                    >
                      <SocialIcon kind="facebook" />
                    </a>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/15 via-fuchsia-500/10 to-cyan-400/10 p-5 text-sm text-slate-200">
                  Available for senior full stack roles, product builds, and long-term collaborations.
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
