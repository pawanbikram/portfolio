import { motion } from "framer-motion";
import Container from "../components/Container";
import Button from "../components/Button";
import Badge from "../components/Badge";
import GlassCard from "../components/GlassCard";
import { profile } from "../data/profile";
import { scrollToId } from "../lib/scroll";
import HeroBackground3D from "../components/hero/HeroBackground3D";
import avatar from "../assets/pawan.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <HeroBackground3D />
      <Container>
        <div className="grid min-h-[92dvh] items-center gap-8 py-16 sm:py-20 lg:grid-cols-12 lg:gap-10">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.08 }}
            className="lg:col-span-7"
          >
            <motion.div variants={fadeUp}>
              <div className="flex flex-wrap items-center gap-2">
                <Badge>{profile.title}</Badge>
                <Badge className="text-slate-300">{profile.location}</Badge>
                <span className="ml-1 inline-flex items-center gap-2 text-xs text-slate-400">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-300/90" />
                  Available for select builds
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-balance text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl"
            >
              I design systems that ship fast and{" "}
              <span className="flag-gradient bg-clip-text text-transparent">
                scale cleanly
              </span>
              .
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-2xl text-pretty text-base leading-7 text-slate-300 sm:text-lg"
            >
              I’m{" "}
              <span className="font-medium text-slate-100">{profile.name}</span>{" "}
              — a senior full stack developer focused on performance, security,
              and product-quality UI. I’ve built health-tech platforms, banking
              workflows, and enterprise apps end-to-end.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <Button onClick={() => scrollToId("projects")}>
                Explore Case Studies
              </Button>
              <Button variant="secondary" onClick={() => scrollToId("contact")}>
                Work With Me
              </Button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 grid gap-3 sm:grid-cols-3"
            >
              {[
                { k: "Craft", v: "DX, performance, testing" },
                { k: "Systems", v: "APIs, data, security" },
                { k: "Delivery", v: "Ownership to production" },
              ].map((stat) => (
                <div
                  key={stat.k}
                  className="rounded-2xl border border-white/10 bg-white/3 px-4 py-3 backdrop-blur-xl"
                >
                  <div className="text-xs uppercase tracking-widest text-slate-400">
                    {stat.k}
                  </div>
                  <div className="mt-1 text-sm font-medium text-slate-100">
                    {stat.v}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5"
          >
            <GlassCard className="relative overflow-hidden p-6 sm:p-8">
              <div className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rotate-12 rounded-[2.5rem] bg-linear-to-br from-red-500/20 via-blue-500/10 to-amber-300/10 blur-2xl" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-widest text-slate-400">
                    Field Notes
                  </div>
                  <div className="mt-2 text-lg font-semibold text-slate-50">
                    Building for real constraints
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    I care about reliability under load, maintainability for
                    teams, and UX details that convert.
                  </p>
                </div>
                <div className="relative h-14 w-14 shrink-0">
                  <div className="absolute inset-0 rounded-2xl border border-white/10 bg-white/5" />
                  <img
                    src={avatar}
                    alt={profile.name}
                    className="relative h-14 w-14 rounded-2xl object-cover"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { k: "Domains", v: "Health-tech + Fintech" },
                  { k: "Style", v: "Typed, tested, observable" },
                  { k: "Edge", v: "Fast iteration with guardrails" },
                  { k: "Collab", v: "Stakeholders → shipping" },
                ].map((row) => (
                  <div
                    key={row.k}
                    className="rounded-2xl border border-white/10 bg-white/3 p-4"
                  >
                    <div className="text-xs text-slate-400">{row.k}</div>
                    <div className="mt-1 text-sm font-medium text-slate-100">
                      {row.v}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => scrollToId("experience")}
                  className="text-sm font-medium text-slate-200 hover:text-white"
                >
                  View Experience →
                </button>
                <span className="text-slate-600">/</span>
                <button
                  type="button"
                  onClick={() => scrollToId("skills")}
                  className="text-sm font-medium text-slate-200 hover:text-white"
                >
                  Tech Stack →
                </button>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
