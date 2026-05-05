"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

type NumberTickerProps = {
  value: number;
  className?: string;
  duration?: number;
};

export function NumberTicker({ value, className, duration = 1200 }: NumberTickerProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const startValue = displayValue;
    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const nextValue = startValue + (value - startValue) * easedProgress;

      setDisplayValue(Math.round(nextValue));

      if (progress < 1) {
        frameRef.current = window.requestAnimationFrame(animate);
      }
    };

    if (frameRef.current !== null) {
      window.cancelAnimationFrame(frameRef.current);
    }

    frameRef.current = window.requestAnimationFrame(animate);

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [value, duration]);

  return (
    <span className={cn(className)}>
      {new Intl.NumberFormat("en-US").format(displayValue)}
    </span>
  );
}