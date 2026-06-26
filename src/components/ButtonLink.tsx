import type { ReactNode } from "react";
import { cn } from "../utils/cn";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", className }: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] px-5 text-sm font-bold transition duration-200 ease-premium will-change-transform hover:-translate-y-0.5 focus-visible:outline-forsythia",
        variant === "primary"
          ? "bg-oceanic text-arctic shadow-panel hover:bg-nocturnal"
          : "border border-nocturnal/20 bg-white/55 text-oceanic backdrop-blur hover:border-nocturnal/40 hover:bg-white/80",
        className,
      )}
    >
      {children}
    </a>
  );
}
