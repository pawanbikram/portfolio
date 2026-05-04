import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import ScrollProgress from "./components/ScrollProgress";

export default function App() {
  return (
    <div className="min-h-dvh bg-slate-950 text-slate-100 selection:bg-indigo-500/30 selection:text-slate-50">
      <div className="pointer-events-none fixed inset-0 -z-20 bg-topo" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-70 grain" />
      <a
        href="#main"
        className="skip-link rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 backdrop-blur"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main" className="pb-24 md:pb-0">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
