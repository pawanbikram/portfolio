import Container from "./Container";
import { profile } from "../data/profile";

function SocialIcon({
  kind,
}: {
  kind: "linkedin" | "x" | "facebook";
}) {
  const common = "h-5 w-5 text-slate-300 transition group-hover:text-slate-100";
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

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="text-sm text-slate-300">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <div className="text-slate-400">
              Built with React, TypeScript, Tailwind, Framer Motion & Three.js
            </div>
            <span className="text-slate-700">•</span>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center text-slate-300 hover:text-slate-100"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <SocialIcon kind="linkedin" />
            </a>
            <a
              href={profile.socials.x}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center text-slate-300 hover:text-slate-100"
              aria-label="X"
              title="X"
            >
              <SocialIcon kind="x" />
            </a>
            <a
              href={profile.socials.facebook}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center text-slate-300 hover:text-slate-100"
              aria-label="Facebook"
              title="Facebook"
            >
              <SocialIcon kind="facebook" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
