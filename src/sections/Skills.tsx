import { motion } from "framer-motion";
import Container from "../components/Container";
import GlassCard from "../components/GlassCard";
import SectionHeading from "../components/SectionHeading";
import Badge from "../components/Badge";
import { skills } from "../data/profile";

const groups = [
  { label: "Frontend", items: skills.frontend, accent: "from-indigo-500/20 to-cyan-400/10" },
  { label: "Backend", items: skills.backend, accent: "from-fuchsia-500/20 to-indigo-400/10" },
  { label: "Databases", items: skills.databases, accent: "from-cyan-500/20 to-emerald-400/10" },
  { label: "Tools", items: skills.tools, accent: "from-pink-500/20 to-fuchsia-400/10" },
] as const;

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Stack built for modern product delivery."
          subtitle="Frontend craftsmanship, scalable backend systems, reliable data layers, and pragmatic tooling."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {groups.map((g, idx) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <GlassCard className="p-6 sm:p-8">
                <div
                  className={[
                    "mb-4 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-gradient-to-r px-3 py-1.5 text-sm font-medium text-slate-100",
                    g.accent,
                  ].join(" ")}
                >
                  {g.label}
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <Badge key={s} className="hover:border-white/20 hover:bg-white/10">
                      {s}
                    </Badge>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

