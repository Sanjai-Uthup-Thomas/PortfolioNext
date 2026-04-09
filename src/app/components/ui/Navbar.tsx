"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/app/lib/utils";
import LOGO from '../../../../public/logo_1.png';
import { motion } from "framer-motion";

const sections = [
    "home",
    "about",
    "skills",
    "experience",
    "projects",
    "contact",
];

const Navbar = () => {
    const [active, setActive] = useState("home");
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const scrollY = window.scrollY;

            sections.forEach((id) => {
                const el = document.getElementById(id);
                if (!el) return;

                const top = el.offsetTop - 120;
                const bottom = top + el.offsetHeight;

                if (scrollY >= top && scrollY < bottom) {
                    setActive(id);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    // 🔥 Scroll Logic
    useEffect(() => {
        let lastScroll = 0;

        const handleScroll = () => {
            const scrollY = window.scrollY;

            const height =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            setScrollProgress((scrollY / height) * 100);

            // active section
            sections.forEach((id) => {
                const el = document.getElementById(id);
                if (!el) return;

                const top = el.offsetTop - 120;
                const bottom = top + el.offsetHeight;

                if (scrollY >= top && scrollY < bottom) {
                    setActive(id);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        setOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            {/* 🔥 Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-[2px] z-[60]">
                <div
                    className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 transition-all duration-200"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>
            {/* 🔥 Floating Navbar */}
            <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl">

                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl rounded-full opacity-60" />

                <div className="relative flex items-center justify-between px-6 py-3 rounded-full 
          bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] shadow-xl">

                    {/* Logo */}
                    <div
                        onClick={() => scrollTo("home")}
                        className="text-white font-semibold cursor-pointer pt-1"
                    >
                        <Image width={220} height={50} src={LOGO} alt="Logo" />
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-3 relative">

                        {sections.map((sec) => (
                            <button
                                key={sec}
                                onClick={() => scrollTo(sec)}
                                className={cn(
                                    "relative px-4 py-2 text-sm capitalize rounded-full transition-all duration-300",
                                    "hover:text-white hover:scale-[1.05]",
                                    active === sec
                                        ? "text-white"
                                        : "text-white/50"
                                )}
                            >
                                {/* 🔥 Active Pill (Glass + Glow) */}
                                {active === sec && (
                                    <motion.span
                                        layoutId="active-pill"
                                        className="absolute inset-0 rounded-full 
          bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20
          border border-white/10
          shadow-[0_0_20px_rgba(203,108,230,0.4)]
          backdrop-blur-md"
                                        transition={{ type: "spring", stiffness: 280, damping: 25 }}
                                    />
                                )}

                                {/* ✨ Hover Glow */}
                                <span
                                    className={cn(
                                        "absolute inset-0 rounded-full opacity-0 transition duration-300",
                                        "bg-white/5 blur-md",
                                        "group-hover:opacity-100"
                                    )}
                                />

                                {/* Text */}
                                <span className="relative z-10 tracking-wide">
                                    {sec}
                                </span>
                            </button>
                        ))}

                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-white"
                    >
                        {open ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* 📱 Mobile Menu */}
            {open && (
                <div className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center gap-8 text-xl">
                    {sections.map((sec) => (
                        <div
                            key={sec}
                            onClick={() => scrollTo(sec)}
                            className="text-white/70 hover:text-white capitalize cursor-pointer transition"
                        >
                            {sec}
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default Navbar;