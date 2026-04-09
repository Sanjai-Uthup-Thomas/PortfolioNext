"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { RefreshCcw, Home } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">

      {/* 🌈 Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(203,108,230,0.15),_transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center max-w-xl"
      >
        {/* 🔥 Code Style */}
        <h1 className="text-6xl font-bold text-white mb-4">
          500
        </h1>

        <h2 className="text-2xl font-semibold mb-4 
        bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Something went wrong
        </h2>

        <p className="text-white/60 mb-8">
          An unexpected error occurred. Don’t worry — you can try again or return home.
        </p>

        {/* 🔥 Actions */}
        <div className="flex justify-center gap-4 flex-wrap">

          <button
            onClick={() => reset()}
            className="flex items-center gap-2 px-6 py-3 rounded-full 
            bg-gradient-to-r from-purple-600 to-pink-500 text-white 
            hover:scale-105 transition"
          >
            <RefreshCcw className="w-5 h-5" />
            Try Again
          </button>

          <button
            onClick={() => (window.location.href = "/")}
            className="flex items-center gap-2 px-6 py-3 rounded-full 
            border border-white/20 text-white hover:bg-white/10 transition"
          >
            <Home className="w-5 h-5" />
            Go Home
          </button>

        </div>

        {/* 💻 Dev Touch */}
        <div className="mt-10 text-white/30 text-sm font-mono">
          {"throw new Error('Something broke 😅')"}
        </div>
      </motion.div>
    </section>
  );
}