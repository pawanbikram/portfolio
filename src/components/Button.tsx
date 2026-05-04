import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

type Variant = "primary" | "secondary";
type Props = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }
>;

export default function Button({
  variant = "primary",
  className,
  children,
  ...props
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition focus-visible:outline-none";
  const variants: Record<Variant, string> = {
    primary:
      "flag-gradient text-white shadow-glow hover:opacity-95",
    secondary:
      "border border-white/12 bg-white/5 text-slate-100 hover:bg-white/10",
  };

  return (
    <button className={[base, variants[variant], className ?? ""].join(" ")} {...props}>
      {children}
    </button>
  );
}
