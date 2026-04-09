"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* 🌈 Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(203,108,230,0.12),_transparent_60%)]" />

      <div className="relative z-10 flex flex-col items-center gap-8">

        {/* 🔥 Loader System */}
        <div className="relative w-20 h-20 flex items-center justify-center">

          {/* Outer Pulse Ring */}
          <motion.div
            className="absolute w-full h-full rounded-full border border-purple-500/20"
            animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Rotating Gradient Ring */}
          <motion.div
            className="absolute w-full h-full rounded-full border-t-2 border-purple-500 border-r-2 border-pink-500"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          />

          {/* Inner Glow Core */}
          <motion.div
            className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-[0_0_20px_rgba(203,108,230,0.8)]"
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />

        </div>

        {/* 💻 Loading Text */}
        <motion.p
          className="text-white/60 text-sm tracking-widest font-mono"
        >
          {"Initializing system"}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            ...
          </motion.span>
        </motion.p>

      </div>
    </div>
  );
}