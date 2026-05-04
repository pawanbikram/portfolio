import { motion } from "framer-motion";
import Container from "../components/Container";
import GlassCard from "../components/GlassCard";
import SectionHeading from "../components/SectionHeading";
import { experience } from "../data/profile";

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Roles that sharpened delivery and ownership."
          subtitle="Health-tech, banking, and enterprise contexts—shipping features with performance and reliability in mind."
        />

        <div className="grid gap-6">
          {experience.map((job, idx) => (
            <motion.div
              key={`${job.company}-${job.role}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <GlassCard className="p-6 sm:p-8">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="text-lg font-semibold text-slate-50">
                      {job.role}
                    </div>
                    <div className="mt-0.5 text-sm text-slate-300">
                      {job.company}
                    </div>
                  </div>
                  <div className="text-sm text-slate-400">{job.range}</div>
                </div>
                <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-300 sm:text-base">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-300/80" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

