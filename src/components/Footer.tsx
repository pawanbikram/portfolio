import Container from "./Container";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="text-sm text-slate-300">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </div>
          <div className="text-sm text-slate-400">
            Built with React, TypeScript, Tailwind, Framer Motion & Three.js
          </div>
        </div>
      </Container>
    </footer>
  );
}

