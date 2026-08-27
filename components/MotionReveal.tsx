"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type MotionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  scale?: number;
  once?: boolean;
};

export default function MotionReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.85,
  y = 32,
  scale = 0.98,
  once = true,
}: MotionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [once]);

  const style = {
    "--reveal-delay": `${delay}s`,
    "--reveal-duration": `${duration}s`,
    "--reveal-y": `${y}px`,
    "--reveal-scale": scale,
  } as CSSProperties;

  return (
    <div ref={ref} className={`motion-reveal ${isVisible ? "motion-reveal-visible" : ""} ${className}`} style={style}>
      {children}
    </div>
  );
}
