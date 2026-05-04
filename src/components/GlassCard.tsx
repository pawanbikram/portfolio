import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  className?: string;
}>;

export default function GlassCard({ className, children }: Props) {
  return (
    <div
      className={[
        "rounded-2xl border border-white/10 bg-white/4 shadow-glow backdrop-blur-xl",
        "transition will-change-transform hover:border-white/20 hover:bg-white/6",
        className ?? "",
      ].join(" ")}
    >
      {children}
    </div>
  );
}
