"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Home, Mail } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">

      {/* 🌈 Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(203,108,230,0.15),_transparent_60%)]" />

      {/* ✨ Floating Code Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] text-white text-5xl font-mono whitespace-nowrap animate-[scroll_25s_linear_infinite]">
        {"<404 /> route_not_found(); handleError(); redirect();"}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center max-w-xl"
      >
        {/* 🔥 Big 404 */}
        <h1 className="text-7xl md:text-8xl font-bold text-white mb-4 tracking-tight">
          404
        </h1>

        {/* ✨ Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 
          bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 
          bg-clip-text text-transparent">
          Lost in the code?
        </h2>

        {/* 💬 Message */}
        <p className="text-white/60 text-lg mb-8 leading-relaxed">
          The page you’re looking for doesn’t exist or might have been moved.
          Let’s get you back on track.
        </p>

        {/* 🔥 Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">

          {/* Home */}
          <button
            onClick={() => (window.location.href = "/")}
            className="flex items-center gap-2 px-6 py-3 rounded-full 
            bg-gradient-to-r from-purple-600 to-pink-500 text-white 
            shadow-lg hover:scale-105 transition"
          >
            <Home className="w-5 h-5" />
            Go Home
          </button>

          {/* Back */}
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-6 py-3 rounded-full 
            border border-white/20 text-white hover:bg-white/10 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>


        </div>

        {/* 💻 Code Line */}
        <div className="mt-10 text-white/30 text-sm font-mono">
          {"if (!page) return <Redirect to='/' />;"}
        </div>
      </motion.div>
    </section>
  );
}