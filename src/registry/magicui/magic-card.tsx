"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

export function MagicCard({
  children,
  className,
  gradientColor = "#D9D9D955",
}: {
  children: React.ReactNode;
  className?: string;
  gradientColor?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      element.style.setProperty("--magic-card-x", `${x}px`);
      element.style.setProperty("--magic-card-y", `${y}px`);
    };

    element.addEventListener("pointermove", handlePointerMove);
    return () => {
      element.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "group relative overflow-hidden rounded-[inherit]",
        className
      )}
      style={{
        backgroundImage: `radial-gradient(320px circle at var(--magic-card-x, 50%) var(--magic-card-y, 50%), ${gradientColor}, transparent 65%)`,
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(420px_circle_at_var(--magic-card-x,50%)_var(--magic-card-y,50%),rgba(255,255,255,0.22),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-[1px] rounded-[inherit] bg-card/95" />
      <div className="relative">{children}</div>
    </div>
  );
}