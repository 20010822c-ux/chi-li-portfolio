"use client";

import type { CSSProperties, MouseEvent, ReactNode } from "react";
import { useRef } from "react";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
};

export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.08)",
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;

    if (!card) {
      return;
    }

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }

  return (
    <div
      ref={cardRef}
      className={`card-spotlight ${className}`}
      onMouseMove={handleMouseMove}
      style={{ "--spotlight-color": spotlightColor } as CSSProperties}
    >
      {children}
    </div>
  );
}
