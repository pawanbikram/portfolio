import { motion } from "framer-motion";
import Container from "../components/Container";
import GlassCard from "../components/GlassCard";
import SectionHeading from "../components/SectionHeading";
import { about, profile } from "../data/profile";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="About"
          title={about.headline}
          subtitle="A senior engineer mindset: ship thoughtfully, iterate quickly, and keep systems maintainable."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <GlassCard className="p-6 sm:p-8">
              <div className="space-y-4 text-sm leading-7 text-slate-300 sm:text-base">
                {about.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            <GlassCard className="p-6 sm:p-8">
              <div className="text-sm text-slate-300">
                <div className="text-xs uppercase tracking-widest text-slate-400">
                  Quick info
                </div>
                <div className="mt-4 space-y-3">
                  <div>
                    <div className="text-xs text-slate-400">Name</div>
                    <div className="text-sm font-medium text-slate-100">
                      {profile.name}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Role</div>
                    <div className="text-sm font-medium text-slate-100">
                      {profile.title}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Location</div>
                    <div className="text-sm font-medium text-slate-100">
                      {profile.location}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Website</div>
                    <a
                      className="text-sm font-medium text-indigo-200 hover:text-indigo-100"
                      href={`https://${profile.website}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {profile.website}
                    </a>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

