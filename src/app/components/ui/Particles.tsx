"use client";

import { useMemo } from "react";

const Particles = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 45 }).map(() => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        duration: 8 + Math.random() * 10,
        size: Math.random() * 2 + 8,
      })),
    []
  );

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white/30 animate-particle"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Particles;