"use client";

import Image from "next/image";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import LOGO from '../../../../public/logo_1.png';
const Footer = () => {
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative mt-32">

            {/* 🌈 Animated Top Line */}
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-70" />

            {/* 🧊 Glow Background */}
            <div className="absolute inset-0  pointer-events-none" />

            <div className="relative max-w-6xl mx-auto px-4 py-12">

                {/* 🔥 Main Grid */}
                <div className="grid md:grid-cols-3 gap-10 items-center">

                    {/* 🧠 Brand */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left "    >
                        <Image width={270} height={50} src={LOGO} alt="Logo" className="absolute top-3  right-15" />

                        <p className="text-white/50 text-sm max-w-xs leading-relaxed ml-2">
                            Building scalable full-stack applications with clean architecture,
                            performance, and real-world impact.
                        </p>
                    </div>

                    {/* 🔗 Navigation */}
                    <div className="flex justify-center flex-wrap gap-6 text-sm text-white/50">
                        {["home", "about", "skills", "experience", "projects", "contact"].map((sec) => (
                            <button
                                key={sec}
                                onClick={() => scrollTo(sec)}
                                className="capitalize hover:text-white transition relative group"
                            >
                                {sec}

                                {/* ✨ Underline */}
                                <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-purple-400 transition-all group-hover:w-full" />
                            </button>
                        ))}
                    </div>

                    {/* 🌐 Social */}
                    <div className="flex justify-center md:justify-end gap-4">

                        <a
                            href="mailto:sanjaiuthupthomas@gmail.com"
                            className="p-2 rounded-full bg-white/[0.04] border border-white/10 text-white/60 hover:text-white hover:bg-white/[0.08] transition"
                        >
                            <Mail className="w-5 h-5" />
                        </a>

                        <a
                            href="https://github.com/Sanjai-Uthup-Thomas"
                            target="_blank"
                            className="p-2 rounded-full bg-white/[0.04] border border-white/10 text-white/60 hover:text-white hover:bg-white/[0.08] transition"
                        >
                            <Github className="w-5 h-5" />
                        </a>

                        <a
                            href="https://linkedin.com/in/sanjai-uthup-thomas-781407131"
                            target="_blank"
                            className="p-2 rounded-full bg-white/[0.04] border border-white/10 text-white/60 hover:text-white hover:bg-white/[0.08] transition"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>

                    </div>
                </div>

                {/* ⚡ Divider */}
                <div className="my-10 h-px bg-white/10" />

                {/* 💎 Bottom */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">

                    <p>
                        © {new Date().getFullYear()} Sanjai Uthup Thomas
                    </p>

                    <p className="text-white/30" onClick={() => { throw new Error("Test"); }}>
                        Designed & Built with ❤️ using Next.js
                    </p>

                </div>
            </div>

            {/* 🔝 Back To Top Button */}
            <button
                onClick={scrollTop}
                className="fixed bottom-6 right-6 p-3 rounded-full 
        bg-gradient-to-r from-purple-600 to-pink-500 text-white 
        shadow-lg hover:scale-110 transition z-50"
            >
                <ArrowUp className="w-5 h-5" />
            </button>

        </footer>
    );
};

export default Footer;