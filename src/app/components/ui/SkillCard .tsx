"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export const SkillCard = ({ skill }: any) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 6;
    const rotateY = ((x - centerX) / centerX) * -6;

    ref.current!.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.08)`;
  };

  const reset = () => {
    ref.current!.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      className="group relative flex items-center gap-3 px-6 py-3 mx-4 rounded-2xl 
      bg-white/5 backdrop-blur-xl border border-white/10 
      transition-transform duration-200 will-change-transform cursor-pointer"
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r 
      from-purple-600/20 to-pink-500/20 opacity-0
      blur-xl transition duration-500" />
      <Image src={skill.logo} alt={skill.name} className="z-10" width={25} height={25} />

      <span className="text-white font-medium z-10 whitespace-nowrap">
        {skill.name}
      </span>
    </div>
  );
};