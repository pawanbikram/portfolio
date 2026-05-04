import { motion } from "framer-motion";
import Container from "../components/Container";
import GlassCard from "../components/GlassCard";
import SectionHeading from "../components/SectionHeading";
import Badge from "../components/Badge";
import { projects } from "../data/profile";

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Selected work with measurable impact."
          subtitle="A mix of full ownership and leadership roles—built for performance, reliability, and real-world workflows."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, idx) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              whileHover={{ y: -4 }}
            >
              <GlassCard className="group h-full p-6 sm:p-8">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-lg font-semibold text-slate-50">
                      {p.name}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-300 sm:text-base">
                      {p.description}
                    </p>
                  </div>
                  <div className="h-10 w-10 shrink-0 rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/10 to-cyan-400/10" />
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Badge key={t} className="hover:border-white/20 hover:bg-white/10">
                      {t}
                    </Badge>
                  ))}
                </div>

                <div className="mt-6 grid gap-2">
                  {p.highlights.map((h) => (
                    <div key={h} className="text-sm text-slate-300">
                      <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-cyan-300/80 align-middle" />
                      <span className="align-middle">{h}</span>
                    </div>
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

