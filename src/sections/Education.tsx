import { motion } from "framer-motion";
import Container from "../components/Container";
import GlassCard from "../components/GlassCard";
import SectionHeading from "../components/SectionHeading";
import { education } from "../data/profile";

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation."
          subtitle="Formal education that supports consistent problem-solving and long-term growth."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {education.map((e, idx) => (
            <motion.div
              key={`${e.title}-${e.year}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <GlassCard className="h-full p-6 sm:p-8">
                <div className="text-sm text-slate-400">{e.year}</div>
                <div className="mt-2 text-lg font-semibold text-slate-50">
                  {e.title}
                </div>
                <div className="mt-1 text-sm text-slate-300">{e.org}</div>
                {e.detail ? (
                  <div className="mt-4 text-sm text-slate-300">{e.detail}</div>
                ) : null}
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
