import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Container from "../components/Container";
import GlassCard from "../components/GlassCard";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import { profile } from "../data/profile";

type FormState = { name: string; email: string; message: string };

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

