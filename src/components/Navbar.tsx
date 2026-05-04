import { useEffect, useMemo, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Container from "./Container";
import { profile } from "../data/profile";
import { scrollToId } from "../lib/scroll";

type NavItem = { id: string; label: string };

function Icon({ d }: { d: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={d} />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");
  const { scrollY } = useScroll();
  const y = useSpring(scrollY, { stiffness: 120, damping: 20 });
  const [elevated, setElevated] = useState(false);

  const items = useMemo<NavItem[]>(
    () => [
      { id: "about", label: "About" },
      { id: "skills", label: "Skills" },
      { id: "experience", label: "Experience" },
      { id: "projects", label: "Projects" },
      { id: "education", label: "Education" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  const mobileItems = useMemo(
    () => [
      { id: "top", label: "Home", icon: "M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z" },
      { id: "projects", label: "Work", icon: "M8 7h8M8 11h8M8 15h6M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" },
      { id: "experience", label: "XP", icon: "M9 6h6M7 9h10M7 13h10M7 17h8M6 4h12a2 2 0 0 1 2 2v14H4V6a2 2 0 0 1 2-2Z" },
      { id: "skills", label: "Stack", icon: "M12 3l9 5-9 5-9-5 9-5Zm0 10 9 5-9 5-9-5 9-5Z" },
      { id: "contact", label: "Contact", icon: "M4 7l8 6 8-6v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2" },
    ],
    []
  );

  useEffect(() => {
    const unsub = y.on("change", (v) => setElevated(v > 8));
    return () => unsub();
  }, [y]);

  useEffect(() => {
    const sectionIds = items.map((i) => i.id);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));
        if (visible[0]?.target instanceof HTMLElement) {
          setActiveId(visible[0].target.id);
        }
      },
      { root: null, rootMargin: "-25% 0px -65% 0px", threshold: [0.05, 0.1, 0.2, 0.35] }
    );

    for (const el of sections) observer.observe(el);
    return () => observer.disconnect();
  }, [items]);

  return (
    <>
      {/* Desktop top nav */}
      <div className="sticky top-0 z-50 hidden md:block">
      <motion.div
        initial={false}
        animate={elevated ? "elevated" : "flat"}
        variants={{
          elevated: { backgroundColor: "rgba(2,6,23,0.6)" },
          flat: { backgroundColor: "rgba(2,6,23,0)" },
        }}
        className="border-b border-transparent backdrop-blur-xl"
        style={{
          borderColor: elevated ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0)",
        }}
      >
        <Container>
          <div className="flex h-16 items-center justify-between">
            <button
              type="button"
              onClick={() => scrollToId("top")}
              className="group inline-flex items-center gap-2 rounded-xl px-2 py-1 text-sm font-semibold tracking-tight text-slate-50"
              aria-label="Go to top"
            >
              <span className="relative">
                <span className="absolute -inset-2 -z-10 rounded-xl bg-white/0 transition group-hover:bg-white/5" />
                {profile.name}
              </span>
            </button>

            <div className="hidden items-center gap-2 md:flex">
              {items.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToId(item.id)}
                  className={[
                    "rounded-xl px-3 py-2 text-sm transition",
                    activeId === item.id
                      ? "bg-white/10 text-slate-50"
                      : "text-slate-200 hover:bg-white/5 hover:text-slate-50",
                  ].join(" ")}
                  aria-current={activeId === item.id ? "page" : undefined}
                >
                  {item.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => scrollToId("contact")}
                className="rounded-xl bg-white/5 px-3 py-2 text-sm text-slate-50 transition hover:bg-white/10"
              >
                Let’s talk
              </button>
            </div>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-50 transition hover:bg-white/10 md:hidden"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              Menu
            </button>
          </div>

          {open ? (
            <div className="pb-4 md:hidden">
              <div className="grid gap-1 rounded-2xl border border-white/10 bg-white/5 p-2">
                {items.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setOpen(false);
                      scrollToId(item.id);
                    }}
                    className={[
                      "rounded-xl px-3 py-2 text-left text-sm transition",
                      activeId === item.id
                        ? "bg-white/10 text-slate-50"
                        : "text-slate-200 hover:bg-white/5 hover:text-slate-50",
                    ].join(" ")}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          ) : null}
        </Container>
      </motion.div>
      </div>

      {/* Mobile bottom nav */}
      <nav
        className="fixed inset-x-0 bottom-0 z-[70] md:hidden"
        aria-label="Primary"
      >
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="mb-[calc(env(safe-area-inset-bottom)+0.75rem)] rounded-2xl border border-white/10 bg-slate-950/70 p-1.5 backdrop-blur-xl">
            <div className="grid grid-cols-5">
              {mobileItems.map((item) => {
                const isActive = activeId ? activeId === item.id : item.id === "top";
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToId(item.id)}
                    className={[
                      "group flex flex-col items-center justify-center gap-1 rounded-xl px-2 py-2 text-[11px] transition",
                      isActive
                        ? "bg-white/10 text-slate-50"
                        : "text-slate-300 hover:bg-white/5 hover:text-slate-50",
                    ].join(" ")}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span className={isActive ? "text-red-300" : "text-slate-300"}>
                      <Icon d={item.icon} />
                    </span>
                    <span className="leading-none">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
