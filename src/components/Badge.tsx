import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{ className?: string }>;

export default function Badge({ className, children }: Props) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full border border-white/12 bg-white/5 px-2.5 py-1 text-xs text-slate-200",
        className ?? "",
      ].join(" ")}
    >
      {children}
    </span>
  );
}
