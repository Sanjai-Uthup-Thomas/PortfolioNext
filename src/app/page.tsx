'use client'
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Code,
    Laptop,
    Users,
    Briefcase,
    GraduationCap,
    Heart,
    Mail,
    Linkedin,
    Github,
    Link,
    ChevronDown,
    ArrowRight,
    Loader2,
    Phone,
    MapPin
} from 'lucide-react';
import { Button } from '@/app/components/ui/Button';
import { cn } from '@/app/lib/utils';
import { Input } from '@/app/components/ui/Input';
import { Textarea } from '@/app/components/ui/Textarea';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import BGImage from '../../public/BGimage.avif';
import DEVX_PROJECT_IMAGE from '../../public/API.avif';
import SOCIAL_MEDIA_PROJECT_IMAGE from '../../public/social-media.avif';
import WATCHMEN_PROJECT_IMAGE from '../../public/ecom.jpg';
import PROFILE_IMAGE from '../../public/profile-image.jpg';
import { CheckCircle } from "lucide-react";
import Image, { StaticImageData } from 'next/image';
import toast, { Toaster } from 'react-hot-toast';
import SkillsSection from './components/ui/SkillsSection';
import Particles from './components/ui/Particles';
import FloatingContact from './components/ui/FloatingContact';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';
// Form schema using Zod
const contactFormSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z
        .string()
        .trim()
        .toLowerCase()
        .min(1, { message: "Email is required" })
        .email({ message: "Enter a valid email address" })
        .refine(
            (email) => !["tempmail.com", "mailinator.com"].some((d) => email.endsWith(d)),
            { message: "Temporary emails are not allowed" }
        ),
    subject: z.string().min(1, { message: "Subject is required." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
};
const SanjaiPortfolio = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const introRef = useRef<HTMLDivElement>(null);

    // Form setup
    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
        reset,
        setValue
    } = useForm<z.infer<typeof contactFormSchema>>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    // Function to handle form submission
    const onSubmit = async (data: z.infer<typeof contactFormSchema>) => {
        console.log("Form data:", data); // Log the form data
        const toastId = toast.loading('Sending your message...');
        try {
            // Replace this with your actual API call
            const res = await fetch('/api/contactMe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (res.ok) {
                toast.success('Message sent successfully!', { id: toastId });
            } else {
                toast.error('Failed to send message.', { id: toastId });
            }
            console.log("Email sent successfully");
            setTimeout(() => {
                reset();
            }, 2000)
        } catch (error) {
            console.error("Failed to send email:", error);
            toast.error('Something went wrong.', { id: toastId });
        } finally {
        }
    };

    // Function to handle scroll and set active section
    const handleScroll = useCallback(() => {
        const scrollY = window.scrollY;
        const introTop = introRef.current?.offsetTop || 0;
        const introHeight = introRef.current?.offsetHeight || 0;

        if (scrollY >= introTop && scrollY < introTop + introHeight) {
            setActiveSection('home');
        }
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);


    return (

        <div id="home" className="bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen overflow-x-hidden relative">
            {/* Background Image */}
            <Navbar />
            <div className="absolute inset-0 bg-fixed bg-center bg-cover opacity-10 z-0"
                style={{ backgroundImage: `url(${BGImage})` }}
            />

            <div className="container mx-auto px-4 py-2 relative z-10">
                <Particles />
                <section
                    id="home"
                    className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20 md:pt-7"
                >
                    {/* 🌈 Background Glow */}
                    <div className="absolute inset-0" />

                    <motion.div
                        className="relative z-10 text-center max-w-3xl pt-10"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        {/* 👤 PROFILE IMAGE */}
                        <motion.div variants={itemVariants} className="mb-8 flex justify-center">
                            <div className="relative group">

                                {/* Glow */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-xl opacity-40 group-hover:opacity-60 transition duration-300" />

                                {/* Image */}
                                <Image
                                    src={PROFILE_IMAGE}
                                    alt="Sanjai Uthup Thomas"
                                    width={160}
                                    height={160}
                                    className="relative w-36 h-36 md:w-40 md:h-40 object-cover rounded-full 
          border border-white/10 shadow-2xl transition duration-300 group-hover:scale-105"
                                />

                                {/* Subtle Overlay */}
                                <div className="absolute inset-0 rounded-full bg-black/20" />
                            </div>
                        </motion.div>

                        {/* 🔥 AVAILABILITY */}
                        <motion.div
                            variants={itemVariants}
                            className="mb-4 inline-flex items-center gap-2 text-sm text-green-400"
                        >
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            Available for work
                        </motion.div>

                        {/* 🧠 HEADLINE */}
                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight"
                        >
                             Hi, I&apos;m Sanjai
                        </motion.h1>

                        {/* ✨ ROLE */}
                        <motion.p
                            variants={itemVariants}
                            className="text-xl text-purple-400 mb-6"
                        >
                            Full Stack Developer
                        </motion.p>

                        {/* 💬 DESCRIPTION */}
                        <motion.p
                            variants={itemVariants}
                            className="text-white/60 text-lg leading-relaxed mb-10"
                        >
                            I build scalable full-stack applications with clean architecture,
                            focusing on performance, reliability, and real-world impact.
                        </motion.p>

                        {/* 🔥 CTA */}
                        <motion.div
                            variants={itemVariants}
                            className="flex justify-center gap-4 flex-wrap"
                        >
                            <Button
                                className="bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-3 rounded-full shadow-lg hover:scale-105 transition"
                                onClick={() =>
                                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                                }
                            >
                                View Projects →
                            </Button>

                            <Button
                                variant="outline"
                                className="px-8 py-3 rounded-full border-white/20 hover:bg-white/10"
                                onClick={() =>
                                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                                }
                            >
                                Contact Me
                            </Button>
                        </motion.div>

                        {/* 🔗 SOCIAL */}
                        <motion.div
                            variants={itemVariants}
                            className="mt-7 flex justify-center gap-6 text-white/40"
                        >
                            <a href="mailto:sanjaiuthupthomas@gmail.com" className="hover:text-white transition">
                                <Mail className="w-5 h-5" />
                            </a>
                            <a href="https://linkedin.com/in/sanjai-uthup-thomas-781407131" target="_blank" className="hover:text-white transition">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="https://github.com/Sanjai-Uthup-Thomas" target="_blank" className="hover:text-white transition">
                                <Github className="w-5 h-5" />
                            </a>
                        </motion.div>
                    </motion.div>
                </section>
                <section id="about" className="pt-20 md:pt-32 relative overflow-hidden">
                    {/* Subtle Background */}
                    <div className="absolute inset-0 -z-10" />

                    {/* Soft Glow */}
                    <div className="absolute inset-0 " />

                    {/* Heading */}
                    {/* Heading */}
                    <div className="text-center mb-8 relative z-10">
                        <h2 className="text-6xl font-bold bg-gradient-to-r from-purple-800 via-pink-400 to-purple-800 bg-clip-text text-transparent tracking-tight">
                            About Me
                        </h2>
                        <p className="text-white/40 mt-4 text-sm tracking-widest">
                            WHO I AM & WHAT I DO
                        </p>
                    </div>

                    {/* Content */}
                    <div className="max-w-4xl mx-auto px-4 text-center">

                        <p className="text-white/80 text-lg leading-relaxed">
                            I’m a <span className="text-white font-semibold">Full Stack Developer</span> focused on building
                            <span className="text-purple-400 font-medium"> scalable backend systems</span> and
                            high-performance applications. I specialize in
                            <span className="text-purple-400 font-medium"> Node.js, NestJS, and microservices architecture</span>,
                            with a strong emphasis on clean code, system design, and performance.
                        </p>

                        <p className="text-white/60 text-lg leading-relaxed mt-6">
                            On the frontend, I create intuitive user experiences using
                            <span className="text-pink-400 font-medium"> React.js and React Native</span>, ensuring smooth performance
                            and maintainable architecture across applications.
                        </p>

                        <p className="text-white/50 text-base leading-relaxed mt-6">
                            I enjoy taking ownership of projects end-to-end — from design to deployment —
                            continuously learning and building systems that are reliable, efficient, and production-ready.
                        </p>

                    </div>
                </section>
                <SkillsSection />
                <section id="experience" className="pt-20 md:pt-32 relative overflow-hidden">

                    {/* Background */}
                    <div className="absolute inset-0 -z-10 " />

                    {/* Glow */}
                    <div className="absolute inset-0 " />

                    <div className="max-w-4xl mx-auto px-4 relative z-10">

                        {/* 🔥 Heading (MATCHED STYLE) */}
                        <div className="text-center mb-20">
                            <h2 className="text-6xl font-bold bg-gradient-to-r from-purple-800 via-pink-400 to-purple-800 bg-clip-text text-transparent tracking-tight">
                                Experience
                            </h2>
                            <p className="text-white/40 mt-4 text-sm tracking-widest">
                                WHERE I’VE WORKED & WHAT I BUILT
                            </p>
                        </div>

                        {/* 🧊 Experience Container */}
                        <div className="space-y-16">

                            {/* Job 1 */}
                            <div className="group">

                                {/* Role */}
                                <h3 className="text-3xl font-semibold text-white tracking-tight">
                                    Software Engineer
                                </h3>

                                {/* Company + Duration */}
                                <p className="text-purple-400 mt-2 text-sm tracking-wide">
                                    NewAgeSMB • Kochi • 2023 – 2025
                                </p>

                                {/* Divider */}
                                <div className="w-16 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 mt-4 mb-6" />

                                {/* Description */}
                                <div className="space-y-4 text-white/70 leading-relaxed text-[15px]">
                                    <p>
                                        Led development of cross-platform mobile applications using React Native,
                                        focusing on performance, scalability, and seamless user experience.
                                    </p>

                                    <p>
                                        Designed and built scalable backend services and APIs using Node.js,
                                        Express.js, and NestJS with clean architecture principles.
                                    </p>

                                    <p>
                                        Developed responsive web applications using React.js, Next.js, and Tailwind CSS.
                                    </p>

                                    <p>
                                        Integrated third-party APIs, authentication systems, and secure payment gateways.
                                    </p>

                                    <p>
                                        Collaborated closely with cross-functional teams to deliver production-ready features
                                        and maintain high code quality.
                                    </p>
                                </div>

                            </div>

                            {/* Job 2 */}
                            <div className="group">

                                {/* Role */}
                                <h3 className="text-3xl font-semibold text-white tracking-tight">
                                    Freelance Web Developer
                                </h3>

                                {/* Company + Duration */}
                                <p className="text-purple-400 mt-2 text-sm tracking-wide">
                                    Self-employed • Kochi • 2019 – Present
                                </p>

                                {/* Divider */}
                                <div className="w-16 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 mt-4 mb-6" />

                                {/* Description */}
                                <div className="space-y-4 text-white/70 leading-relaxed text-[15px]">
                                    <p>
                                        Built responsive and modern websites using JavaScript and React,
                                        focusing on performance and usability.
                                    </p>

                                    <p>
                                        Managed end-to-end project delivery including UI/UX design, backend development,
                                        and deployment for multiple clients.
                                    </p>
                                </div>

                            </div>

                        </div>
                    </div>
                </section>
                <section id="projects" className="pt-20 md:pt-32 relative overflow-hidden">

                    {/* Heading */}
                    <div className="text-center mb-12 md:mb-32">
                        <h2 className="text-6xl font-bold bg-gradient-to-r from-purple-800 via-pink-400 to-purple-800 bg-clip-text text-transparent tracking-tight">
                            Projects
                        </h2>
                        <p className="text-white/40 mt-4 text-sm tracking-widest">
                            SELECTED WORK & SYSTEMS I’VE BUILT
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto px-4 space-y-28">

                        {/* 🔥 Project 1 */}
                        <div className="group grid md:grid-cols-2 gap-10 items-stretch">
                            {/* LEFT */}
                            <div className="flex flex-col justify-center">
                                <h3 className="text-3xl font-semibold text-white">
                                    DevX API Suite <span className="text-white/40 text-lg">(Ongoing)</span>
                                </h3>

                                <p className="text-purple-400 text-sm mt-2">
                                    NestJS • PostgreSQL • gRPC • Docker • CI/CD
                                </p>

                                <div className="w-16 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 mt-4 mb-6" />

                                <p className="text-white/80 leading-relaxed">
                                    Designed and building a production-ready microservices architecture with modular services
                                    for authentication, users, and notifications.
                                </p>

                                <div className="mt-6 space-y-2 text-white/60 text-sm">
                                    <p>• gRPC-based inter-service communication</p>
                                    <p>• Dockerized services</p>
                                    <p>• CI/CD pipelines</p>
                                </div>

                                {/* CTA */}
                                <div className="flex items-center gap-6 mt-6">
                                    <a
                                        href="https://github.com/Sanjai-Uthup-Thomas/Chat-Backend"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-purple-400 hover:text-pink-400 transition"
                                    >
                                        View Code →
                                    </a>

                                    {/* ✅ FIX: Use real link OR hide if not available */}
                                    <a
                                        href="#"
                                        onClick={(e) => e.preventDefault()}
                                        className="text-sm text-white/40 cursor-not-allowed"
                                    >
                                        Live Demo (Coming Soon)
                                    </a>
                                </div>

                            </div>

                            {/* RIGHT (AUTO HEIGHT IMAGE) */}
                            <div className="relative w-full h-full min-h-[250px]">
                                <Image
                                    src={DEVX_PROJECT_IMAGE}
                                    alt="DevX Project"
                                    fill
                                    className="rounded-2xl object-cover transition duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                />
                            </div>

                        </div>

                        {/* 🔥 Project 2 */}
                        <div className="group grid md:grid-cols-2 gap-10 items-stretch">

                            <div className="flex flex-col justify-center">
                                <h3 className="text-3xl font-semibold text-white">
                                    Social Media App
                                </h3>

                                <p className="text-purple-400 text-sm mt-2">
                                    React • Node.js • Socket.io • MongoDB • JWT
                                </p>

                                <div className="w-16 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 mt-4 mb-6" />

                                <p className="text-white/80 leading-relaxed">
                                    Built a real-time social platform with chat and notifications.
                                </p>

                                <div className="mt-6 space-y-2 text-white/60 text-sm">
                                    <p>• Real-time messaging</p>
                                    <p>• JWT authentication</p>
                                    <p>• Feed optimization</p>
                                </div>

                                <div className="flex items-center gap-6 mt-6">
                                    <a
                                        href="https://github.com/Sanjai-Uthup-Thomas/Social-media"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-purple-400 hover:text-pink-400 transition"
                                    >
                                        View Code →
                                    </a>

                                    {/* ✅ FIX: Use real link OR hide if not available */}
                                    <a
                                        href="#"
                                        onClick={(e) => e.preventDefault()}
                                        className="text-sm text-white/40 cursor-not-allowed"
                                    >
                                        Live Demo (Not working)
                                    </a>
                                </div>

                            </div>

                            <div className="relative w-full h-full min-h-[250px]">
                                <Image
                                    src={SOCIAL_MEDIA_PROJECT_IMAGE}
                                    alt="Social Media"
                                    fill
                                    className="rounded-2xl object-cover transition duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                />
                            </div>

                        </div>

                        {/* 🔥 Project 3 */}
                        <div className="group grid md:grid-cols-2 gap-10 items-stretch">

                            <div className="flex flex-col justify-center">
                                <h3 className="text-3xl font-semibold text-white">
                                    Watchmen – E-commerce
                                </h3>

                                <p className="text-purple-400 text-sm mt-2">
                                    Node.js • MongoDB • Razorpay • PayPal • Twilio
                                </p>

                                <div className="w-16 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 mt-4 mb-6" />

                                <p className="text-white/80 leading-relaxed">
                                    Developed a full-featured e-commerce platform with payments and admin dashboard.
                                </p>

                                <div className="mt-6 space-y-2 text-white/60 text-sm">
                                    <p>• Multi-payment integration</p>
                                    <p>• OTP authentication</p>
                                    <p>• Coupon system</p>
                                </div>

                                <div className="flex items-center gap-6 mt-6">

                                    <a
                                        href="https://github.com/Sanjai-Uthup-Thomas/Watchmen"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-purple-400 hover:text-pink-400 transition"
                                    >
                                        View Code →
                                    </a>

                                    {/* ✅ FIX: Use real link OR hide if not available */}
                                    <a
                                        href="#"
                                        onClick={(e) => e.preventDefault()}
                                        className="text-sm text-white/40 cursor-not-allowed"
                                    >
                                        Live Demo (Not Working)
                                    </a>
                                </div>

                            </div>

                            <div className="relative w-full h-full min-h-[250px]">
                                <Image
                                    src={WATCHMEN_PROJECT_IMAGE}
                                    alt="Watchmen"
                                    fill
                                    className="rounded-2xl object-cover transition duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                />
                            </div>

                        </div>

                    </div>
                </section>
                <section id="contact" className="pt-20 md:pt-32 relative overflow-hidden text-white">

                    {/* Background */}
                    <div className="absolute inset-0 -z-10 " />
                    <div className="absolute inset-0 " />

                    <div className="max-w-6xl mx-auto px-4">

                        {/* Heading */}
                        <div className="text-center mb-24">
                            <h2 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent tracking-tight">
                                Let’s Work Together
                            </h2>
                            <p className="text-white/40 mt-4 text-sm tracking-widest">
                                BACKEND • FREELANCE • COLLABORATION
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            {/* LEFT SIDE (REDUCED) */}
                            <div className="space-y-1">

                                <div className="space-y-4 max-w-lg">
                                    <p className="text-xs tracking-widest text-purple-400 uppercase">
                                        Full Stack Developer • Building Scalable Systems
                                    </p>

                                    <p className="text-white/80 leading-relaxed text-lg">
                                        I build <span className="text-white font-medium">high-performance full-stack applications</span> —
                                        combining <span className="text-purple-400">scalable backend systems</span>,
                                        clean architecture, and intuitive user interfaces to create reliable, production-ready solutions.
                                    </p>

                                    <p className="text-white/50 text-sm">
                                        From designing systems to deploying them in production, I focus on performance, maintainability, and real-world impact.
                                        Let’s connect and build something meaningful.
                                    </p>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full 
    bg-green-500/10 border border-green-500/20 text-green-400 text-xs tracking-wide">

                                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                        Available for work
                                    </div>

                                </div>

                                <div className="p-8  relative z-10">
                                    <div className="space-y-6">
                                        <div className="space-y-4 pt-4 text-white/70">

                                            <a href="mailto:sanjaiuthupthomas@gmail.com" className="flex items-center gap-3 hover:text-white transition">
                                                <Mail className="w-5 h-5 text-purple-400" />
                                                sanjaiuthupthomas@gmail.com
                                            </a>

                                            <a href="tel:+919048856828" className="flex items-center gap-3 hover:text-white transition">
                                                <Phone className="w-5 h-5 text-purple-400" />
                                                +91 9048856828
                                            </a>

                                            <div className="flex items-center gap-3 text-white/50">
                                                <MapPin className="w-5 h-5 text-purple-400" />
                                                Kochi, India
                                            </div>

                                        </div>
                                        {/* Social */}
                                        <div className="flex gap-6 pt-4 text-sm text-white/60">

                                            <a
                                                href="https://github.com/Sanjai-Uthup-Thomas"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group flex items-center gap-2 hover:text-white transition"
                                            >
                                                <Github className="w-5 h-5 transition group-hover:scale-110" />
                                                GitHub →
                                            </a>

                                            <a
                                                href="https://linkedin.com/in/sanjai-uthup-thomas-781407131"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group flex items-center gap-2 hover:text-white transition"
                                            >
                                                <Linkedin className="w-5 h-5 transition group-hover:scale-110" />
                                                LinkedIn →
                                            </a>

                                        </div>
                                    </div>
                                </div>

                            </div>



                            {/* RIGHT SIDE FORM (IMPROVED UX) */}
                            <div className="relative px-10 z-10">
                                <div className="pb-4 text-center">

                                    {/* ✨ Small Tag */}
                                    <p className="text-xs tracking-widest text-purple-400 mb-3">
                                        GET IN TOUCH
                                    </p>
                                    {/* 💬 Subtitle */}
                                    <p className="text-white/50 text-sm md:text-base max-w-md mx-auto leading-relaxed">
                                        Have a project, idea, or opportunity? Feel free to reach out — I’ll get back to you soon.
                                    </p>    

                                </div>
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    {/* Name */}
                                    <div className="relative group">

                                        <Controller
                                            name="name"
                                            control={control}
                                            render={({ field }) => (
                                                <>
                                                    <Input
                                                        {...field}
                                                        placeholder=" "
                                                        className={cn(
                                                            "peer w-full bg-white/[0.02] text-white border border-white/[0.08] rounded-lg px-4 py-7 transition-all duration-300",
                                                            "focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30",
                                                            errors.name && "border-red-500 focus:ring-red-500/30"
                                                        )}
                                                        disabled={isSubmitting}
                                                    />

                                                    {/* Floating Label */}
                                                    <label
                                                        htmlFor="name"
                                                        className={cn(
                                                            "absolute left-4 text-sm transition-all duration-300 pointer-events-none top-1/2 ",

                                                            // 🧠 If has value OR focused → float
                                                            field.value
                                                                ? "top-2 -translate-y-1/2 text-transparent peer-focus:top-2"
                                                                : "top-1/2 -translate-y-1/2 text-white/40 peer-focus:top-2",

                                                            // Focus color
                                                            "peer-focus:top-2 peer-focus:text-xs peer-focus:text-purple-400",

                                                            // 🔴 Error override
                                                            errors.name && "top-2 text-xs text-red-500 peer-focus:top-2"
                                                        )}
                                                    >
                                                        Name
                                                    </label>
                                                </>
                                            )}
                                        />

                                        {/* Error */}
                                        {errors.name && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.name.message}
                                            </p>
                                        )}

                                    </div>
                                    {/* Email */}
                                    <div className="relative group">

                                        <Controller
                                            name="email"
                                            control={control}
                                            render={({ field }) => (
                                                <>
                                                    <Input
                                                        {...field}
                                                        type="email"
                                                        placeholder=" "
                                                        className={cn(
                                                            "peer w-full bg-white/[0.02] text-white border border-white/[0.08] rounded-lg px-4 py-7 transition-all duration-300",
                                                            "focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30",
                                                            errors.email && "border-red-500 focus:ring-red-500/30"
                                                        )}
                                                        disabled={isSubmitting}
                                                    />

                                                    {/* Floating Label */}
                                                    <label
                                                        htmlFor="email"
                                                        className={cn(
                                                            "absolute left-4 text-sm transition-all duration-300 pointer-events-none top-1/2 ",

                                                            // 🧠 If has value OR focused → float
                                                            field.value
                                                                ? "top-2 -translate-y-1/2 text-transparent peer-focus:top-2"
                                                                : "top-1/2 -translate-y-1/2 text-white/40 peer-focus:top-2",

                                                            // Focus color
                                                            "peer-focus:top-2 peer-focus:text-xs peer-focus:text-purple-400",

                                                            // 🔴 Error override
                                                            errors.email && "top-2 text-xs text-red-500 peer-focus:top-2"
                                                        )}
                                                    >
                                                        Email
                                                    </label>
                                                </>
                                            )}
                                        />

                                        {/* Error */}
                                        {errors.email && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.email.message}
                                            </p>
                                        )}

                                    </div>
                                    {/* Subject */}
                                    <div className="relative group">

                                        <Controller
                                            name="subject"
                                            control={control}
                                            render={({ field }) => (
                                                <>
                                                    <Input
                                                        {...field}
                                                        placeholder=" "
                                                        className={cn(
                                                            "peer w-full bg-white/[0.02] text-white border border-white/[0.08] rounded-lg px-4 py-7 transition-all duration-300",
                                                            "focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30",
                                                            errors.subject && "border-red-500 focus:ring-red-500/30"
                                                        )}
                                                        disabled={isSubmitting}
                                                    />

                                                    {/* Floating Label */}
                                                    <label
                                                        htmlFor="subject"
                                                        className={cn(
                                                            "absolute left-4 text-sm transition-all duration-300 pointer-events-none top-1/2 ",

                                                            // 🧠 If has value OR focused → float
                                                            field.value
                                                                ? "top-2 -translate-y-1/2 text-transparent peer-focus:top-2"
                                                                : "top-1/2 -translate-y-1/2 text-white/40 peer-focus:top-2",

                                                            // Focus color
                                                            "peer-focus:top-2 peer-focus:text-xs peer-focus:text-purple-400",

                                                            // 🔴 Error override
                                                            errors.subject && "top-2 text-xs text-red-500 peer-focus:top-2"
                                                        )}
                                                    >
                                                        Subject
                                                    </label>
                                                </>
                                            )}
                                        />

                                        {/* Error */}
                                        {errors.subject && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.subject.message}
                                            </p>
                                        )}

                                    </div>
                                    {/* Message */}
                                    <div className="relative group">

                                        <Controller
                                            name="message"
                                            control={control}
                                            render={({ field }) => (
                                                <>
                                                    <Textarea
                                                        {...field}
                                                        placeholder=" "
                                                        className={cn(
                                                            "peer w-full bg-white/[0.02] text-white border border-white/[0.08] rounded-lg px-4 pt-6 pb-3 min-h-[140px] resize-none transition-all duration-300",
                                                            "focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30",
                                                            errors.message && "border-red-500 focus:ring-red-500/30"
                                                        )}
                                                        disabled={isSubmitting}
                                                    />

                                                    {/* Floating Label */}
                                                    <label
                                                        htmlFor="message"
                                                        className={cn(
                                                            "absolute left-4 text-sm transition-all duration-300 pointer-events-none",

                                                            // 🧠 Default position (top for textarea)
                                                            field.value
                                                                ? "top-2 text-transparent peer-focus:top-2"
                                                                : "top-3 text-white/40",

                                                            // Focus state
                                                            "peer-focus:top-2 peer-focus:text-xs peer-focus:text-purple-400",

                                                            // 🔴 Error state
                                                            errors.message && "top-2 text-xs text-red-500"
                                                        )}
                                                    >
                                                        Message
                                                    </label>
                                                </>
                                            )}
                                        />

                                        {/* Error */}
                                        {errors.message && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.message.message}
                                            </p>
                                        )}

                                    </div>
                                    {/* Submit Button */}
                                    <Button
                                        type="submit"
                                        className="w-full py-4 text-lg font-semibold tracking-wide"
                                        disabled={isSubmitting}
                                    >
                                        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%]" />
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                                Sending...
                                            </>
                                        ) : isSubmitSuccessful ? (
                                            "Message Sent ✓"
                                        ) : (
                                            "Send Message →"
                                        )}
                                    </Button>

                                    {/* Success Message */}
                                    {isSubmitSuccessful && (
                                        <div className="mt-4 text-green-400 text-center flex items-center justify-center gap-2">
                                            ✅ Message sent successfully!
                                        </div>
                                    )}
                                </form>
                            </div>

                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
            <FloatingContact />
        </div>

    );
};

export default SanjaiPortfolio;

