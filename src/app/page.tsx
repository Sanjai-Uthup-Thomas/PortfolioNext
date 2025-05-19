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
import Image from 'next/image';

// Form schema using Zod
const contactFormSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
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

// Reusable components
const SectionHeading = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <motion.h2
        variants={itemVariants}
        className={`text-4xl font-bold text-purple-400 dark:text-purple-300 mb-6 flex items-center justify-center ${className}`}
    >
        {children}
    </motion.h2>
);

const SubHeading = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <motion.h3
        variants={itemVariants}
        className={`text-2xl font-semibold text-gray-200 dark:text-gray-100 mb-4 ${className}`}
    >
        {children}
    </motion.h3>
);

const Paragraph = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <motion.p
        variants={itemVariants}
        className={`text-gray-300 dark:text-gray-400 mb-6 leading-relaxed text-lg ${className}`}
    >
        {children}
    </motion.p>
);

const SkillBadge = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <motion.span
        variants={itemVariants}
        className={`inline-block bg-purple-800 dark:bg-purple-900 text-purple-200 dark:text-purple-100 px-4 py-2 rounded-full text-sm font-semibold mr-3 mb-3 transition-all duration-300 hover:scale-105 shadow-md border border-purple-700 dark:border-purple-600 ${className}`}
    >
        {children}
    </motion.span>
);

const ProjectCard = ({
    title,
    technologies,
    description,
    githubLink,
    imageUrl
}: {
    title: string;
    technologies: string[];
    description: string;
    githubLink: string;
    imageUrl?: string;
}) => (
    <motion.div
        variants={itemVariants}
        className="bg-gray-900 dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-gray-800 dark:border-gray-700 group backdrop-blur-md bg-opacity-80"
    >
        <div className="relative overflow-hidden rounded-md mb-4">
            {imageUrl && (
                <Image
                    width={100}
                    height={100}
                    src={imageUrl}
                    alt={title}
                    className="rounded-md w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110 brightness-75"
                />
            )}
            <div className="absolute inset-0 bg-black bg-opacity-0 rounded-md flex items-center justify-center transition-all duration-500 group-hover:bg-opacity-50">
                <h3 className="text-2xl font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {title}
                </h3>
            </div>
        </div>
        <div className="flex flex-wrap mb-3">
            {technologies.map((tech) => (
                <span
                    key={tech}
                    className="bg-gray-800 dark:bg-gray-700 text-gray-300 dark:text-gray-400 px-3 py-1 rounded-full text-xs font-medium mr-2 mb-1 border border-gray-700"
                >
                    {tech}
                </span>
            ))}
        </div>
        <p className="text-gray-400 dark:text-gray-300 mb-4 leading-relaxed">{description}</p>
        <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 dark:text-purple-300 hover:underline flex items-center transition-colors duration-200"
        >
            <Github className="mr-2 w-5 h-5" />
            <span className='text-lg'>GitHub</span>
        </a>
    </motion.div>
);

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

        try {
            // Replace this with your actual API call
            await new Promise((resolve) => setTimeout(resolve, 2000));
            console.log("Email sent successfully");
            reset(); // Reset the form after successful submission
        } catch (error) {
            console.error("Failed to send email:", error);
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
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen overflow-x-hidden relative">
            {/* Background Image */}
            <div className="absolute inset-0 bg-fixed bg-center bg-cover opacity-10 z-0"
                style={{ backgroundImage: `url(${BGImage})` }}
            />

            <div className="container mx-auto px-4 py-10 relative z-10">
                <motion.div
                    ref={introRef}
                    className="text-center mb-16 flex flex-col items-center justify-center"
                    initial="hidden"
                    variants={containerVariants}
                    animate="visible"
                >
                    <motion.div variants={itemVariants}>
                        <Image
                            width={100}
                            height={100}
                            src={PROFILE_IMAGE}
                            alt="Sanjai Uthup Thomas"
                            className="rounded-full w-48 h-48 border-4 border-purple-500 dark:border-purple-600 shadow-xl mb-6 mx-auto"
                        />
                        <h1 className="text-5xl font-bold text-white mb-4">
                            Sanjai Uthup Thomas
                        </h1>
                        <p className="text-2xl text-gray-300 mb-6">
                            Full Stack Developer
                        </p>
                        <div className="flex justify-center gap-8 flex-wrap">
                            <a
                                href="mailto:sanjaiuthupthomas@gmail.com"
                                className="text-purple-400 dark:text-purple-300 hover:underline flex items-center transition-colors duration-200 text-lg"
                            >
                                <Mail className="mr-2 w-6 h-6" />
                                <span>Email</span>
                            </a>
                            <a
                                href="https://linkedin.com/in/sanjai-uthup-thomas-781407131"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-400 dark:text-purple-300 hover:underline flex items-center transition-colors duration-200 text-lg"
                            >
                                <Linkedin className="mr-2 w-6 h-6" />
                                <span>LinkedIn</span>
                            </a>
                            <a
                                href="https://github.com/Sanjai-Uthup-Thomas"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-400 dark:text-purple-300 hover:underline flex items-center transition-colors duration-200 text-lg"
                            >
                                <Github className="mr-2 w-6 h-6" />
                                <span>GitHub</span>
                            </a>
                            <a
                                href="https://sanjaiuthupthomas.in"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-400 dark:text-purple-300 hover:underline flex items-center transition-colors duration-200 text-lg"
                            >
                                <Link className="mr-2 w-6 h-6" />
                                <span>Portfolio</span>
                            </a>
                        </div>
                    </motion.div>
                    <motion.div variants={itemVariants} className="mt-12">
                        <Button
                            variant="outline"
                            size="lg"
                            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold text-lg flex items-center border-2 border-purple-500 dark:border-purple-400"
                            onClick={() => {
                                setIsLoading(true);
                                setTimeout(() => {
                                    setIsLoading(false);
                                    const aboutSection = document.getElementById('about');
                                    if (aboutSection) {
                                        aboutSection.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }, 1500);
                            }}
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                                    Loading...
                                </>
                            ) : (
                                <>
                                    About Me <ArrowRight className="ml-2 w-6 h-6" />
                                </>
                            )}
                        </Button>
                    </motion.div>
                </motion.div>

                <section id="about">
                    <SectionHeading className="text-4xl">
                        <Users className="mr-3 w-8 h-8 text-purple-400" />
                        About Me
                    </SectionHeading>
                    <div className="max-w-6xl mx-auto px-4 lg:px-0">
                        <Paragraph className="text-lg mb-6">
                            I&apos;m a Full Stack Developer with a passion for creating high-performance web and mobile applications. I specialize in building scalable backend systems, REST/gRPC APIs, and microservices using Node.js, Express.js, and NestJS. With a strong foundation in TypeScript and modern backend architecture, I&apos;m dedicated to crafting clean, efficient, and maintainable code.
                        </Paragraph>

                        <Paragraph className="text-lg mb-6">
                            My frontend expertise lies in developing intuitive user interfaces using React.js and React Native. I focus on performance optimization, form validation (React Hook Form), and state management (Redux) to deliver seamless user experiences. I&apos;m also experienced in containerizing services with Docker, setting up CI/CD pipelines, and deploying production-ready applications.
                        </Paragraph>

                        <Paragraph className="text-lg">
                            I&apos;m passionate about taking complete ownership of full-stack projects, from the initial concept to the final launch. I thrive on solving complex problems, collaborating with cross-functional teams, and continuously learning and adapting to new technologies.
                        </Paragraph>

                    </div>

                </section>

                <section id="skills">
                    <SectionHeading className="text-4xl">
                        <Code className="mr-3 w-8 h-8 text-purple-400" />
                        Technical Skills
                    </SectionHeading>
                    <div className=" max-w-6xl mx-auto px-4 lg:px-0 flex flex-wrap justify-center">
                        <SkillBadge className="text-lg">JavaScript</SkillBadge>
                        <SkillBadge className="text-lg">TypeScript</SkillBadge>
                        <SkillBadge className="text-lg">React.js</SkillBadge>
                        <SkillBadge className="text-lg">React Native</SkillBadge>
                        <SkillBadge className="text-lg">HTML</SkillBadge>
                        <SkillBadge className="text-lg">CSS</SkillBadge>
                        <SkillBadge className="text-lg">Tailwind</SkillBadge>
                        <SkillBadge className="text-lg">Bootstrap</SkillBadge>
                        <SkillBadge className="text-lg">Node.js</SkillBadge>
                        <SkillBadge className="text-lg">Express.js</SkillBadge>
                        <SkillBadge className="text-lg">NestJS</SkillBadge>
                        <SkillBadge className="text-lg">REST APIs</SkillBadge>
                        <SkillBadge className="text-lg">gRPC</SkillBadge>
                        <SkillBadge className="text-lg">JWT</SkillBadge>
                        <SkillBadge className="text-lg">OAuth2</SkillBadge>
                        <SkillBadge className="text-lg">MongoDB</SkillBadge>
                        <SkillBadge className="text-lg">PostgreSQL</SkillBadge>
                        <SkillBadge className="text-lg">MySQL</SkillBadge>
                        <SkillBadge className="text-lg">Mongoose</SkillBadge>
                        <SkillBadge className="text-lg">TypeORM</SkillBadge>
                        <SkillBadge className="text-lg">Sequelize</SkillBadge>
                        <SkillBadge className="text-lg">Google</SkillBadge>
                        <SkillBadge className="text-lg">Facebook</SkillBadge>
                        <SkillBadge className="text-lg">Apple Sign-in</SkillBadge>
                        <SkillBadge className="text-lg">Stripe</SkillBadge>
                        <SkillBadge className="text-lg">Razorpay</SkillBadge>
                        <SkillBadge className="text-lg">PayPal</SkillBadge>
                        <SkillBadge className="text-lg">Microservices</SkillBadge>
                        <SkillBadge className="text-lg">MVC</SkillBadge>
                        <SkillBadge className="text-lg">Docker</SkillBadge>
                        <SkillBadge className="text-lg">GitHub Actions</SkillBadge>
                        <SkillBadge className="text-lg">Nginx</SkillBadge>
                        <SkillBadge className="text-lg">Git</SkillBadge>
                        <SkillBadge className="text-lg">Postman</SkillBadge>
                        <SkillBadge className="text-lg">AWS</SkillBadge>
                        <SkillBadge className="text-lg">Firebase</SkillBadge>
                        <SkillBadge className="text-lg">Netlify</SkillBadge>
                        <SkillBadge className="text-lg">Render</SkillBadge>
                    </div>
                </section>

                <section id="experience" className="py-12 bg-gray-950 text-white">
                    <div className="max-w-4xl mx-auto px-4">
                        <SectionHeading className="text-4xl mb-10 flex items-center">
                            <Briefcase className="mr-3 w-8 h-8 text-purple-400" />
                            Experience
                        </SectionHeading>

                        {/* Job 1 */}
                        <div className="bg-gray-900 rounded-2xl p-6 shadow-lg mb-8 transition-all hover:scale-[1.01] hover:shadow-purple-500/20">
                            <SubHeading className="text-2xl font-semibold text-purple-300 mb-1">
                                Software Engineer
                            </SubHeading>
                            <p className="text-gray-400 text-lg mb-4">NewAgeSMB, Kochi (2023 – Present)</p>
                            <ul className="space-y-3">
                                {[
                                    "Led development of cross-platform mobile apps using React Native, focusing on performance and user experience.",
                                    "Contributed to web applications using React.js and Next.js, with responsive UI built using Tailwind CSS and Bootstrap.",
                                    "Developed scalable backend services and APIs using Node.js, Express.js, and NestJS.",
                                    "Integrated third-party APIs, social login (Google, Facebook), and secure payment gateways.",
                                    "Collaborated with designers, testers, and backend teams to deliver production-ready features across platforms.",
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start text-gray-300 text-base">
                                        <CheckCircle className="w-5 h-5 text-purple-400 mr-3 mt-[2px]" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Job 2 */}
                        <div className="bg-gray-900 rounded-2xl p-6 shadow-lg transition-all hover:scale-[1.01] hover:shadow-purple-500/20">
                            <SubHeading className="text-2xl font-semibold text-purple-300 mb-1">
                                Freelance Web Developer
                            </SubHeading>
                            <p className="text-gray-400 text-lg mb-4">Kochi (Self-employed) (2019 – 2022)</p>
                            <ul className="space-y-3">
                                {[
                                    "Delivered mobile-friendly websites using HTML, CSS, JavaScript, and React.",
                                    "Handled UI/UX design, backend APIs, and basic deployment for local businesses.",
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start text-gray-300 text-base">
                                        <CheckCircle className="w-5 h-5 text-purple-400 mr-3 mt-[2px]" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>



                <section id="projects">
                    <SectionHeading className="text-4xl">
                        <Laptop className="mr-3 w-8 h-8 text-purple-400" />
                        Projects
                    </SectionHeading>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ProjectCard
                            title="DevX API Suite (ongoing)"
                            technologies={[
                                'NestJS',
                                'TypeScript',
                                'PostgreSQL',
                                'gRPC',
                                'Docker',
                                'CI/CD',
                                'GitHub Actions',
                                'Swagger',
                            ]}
                            description="Architecting a scalable, production-ready backend system using modern microservice principles. Highlights: Built modular microservices for Auth, User, and Notification systems with inter-service communication via gRPC. Leveraged NestJS for its modular structure, dependency injection, and maintainability. Used PostgreSQL with TypeORM for relational data modeling and efficient queries. Containerized each service using Docker with isolated dev environments and service orchestration. Set up CI/CD pipelines with GitHub Actions for automated builds, testing, and deployments. Integrated Swagger for real-time API documentation and easier developer collaboration. Designed with scalability, observability, and long-term maintainability in mind."
                            githubLink="https://github.com/Sanjai-Uthup-Thomas/Chat-Backend"
                            imageUrl={DEVX_PROJECT_IMAGE}
                        />

                        <ProjectCard
                            title="Social Media App"
                            technologies={[
                                'React',
                                'Redux',
                                'Node.js',
                                'Socket.io',
                                'MongoDB',
                                'JWT',
                                'React Hook Form',
                            ]}
                            description="Built a feature-rich social media platform with real-time interactivity and a modern frontend. Highlights: Developed a responsive frontend using React and global state management with Redux. Used React Hook Form for efficient and scalable form validation across login, signup, and post modules. Enabled real-time chat and notifications using Socket.io and MongoDB change streams. Implemented role-based authentication using JWT and protected API routes. Designed a custom feed algorithm for trending posts and user suggestions based on hashtags and interests. Features include: user profiles, posts with likes/comments, follow system, and search by tags. Optimized backend APIs for scalability and deployed cloud-ready architecture."
                            githubLink="https://github.com/Sanjai-Uthup-Thomas/Social-media"
                            imageUrl={SOCIAL_MEDIA_PROJECT_IMAGE}
                        />

                        <ProjectCard
                            title="Watchmen – E-commerce App"
                            technologies={[
                                'Node.js',
                                'Express',
                                'MongoDB',
                                'Twilio',
                                'Razorpay',
                                'PayPal',
                            ]}
                            description="Developed a full-featured e-commerce platform with an admin dashboard and customer-facing website. Key features include: OTP verification system using Twilio SMS API for secure user authentication. Custom Admin panel to manage products, categories, coupons, users, and orders. Multiple payment gateways integrated: Razorpay, and PayPal. Dynamic coupon engine with expiry dates, usage limits, and discount strategies. Referral system enabling user-to-user invite rewards and tracking. Complete Order lifecycle management with cancellation, return, and status updates. Automated email notifications for order updates, success, and failure cases. Clean RESTful API structure."
                            githubLink="https://github.com/Sanjai-Uthup-Thomas/Watchmen"
                            imageUrl={WATCHMEN_PROJECT_IMAGE}
                        />
                    </div>
                </section>
                <section id="contact" className="py-12 text-white">
                    <div className="max-w-6xl mx-auto px-4">
                        <SectionHeading className="text-4xl mb-10 flex items-center justify-center">
                            <Mail className="mr-3 w-8 h-8 text-purple-400" />
                            Contact Me
                        </SectionHeading>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Contact Form */}
                            <div className="relative rounded-xl bg-gray-900 dark:bg-gray-800 shadow-xl p-8 backdrop-blur-md bg-opacity-80 border border-purple-500/20">
                                <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                                    <Mail className="mr-3 w-8 h-8 text-purple-400 animate-pulse" /> Send a Message
                                </h3>
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    {/* Name */}
                                    <div className="group relative">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-1">
                                            Name
                                        </label>
                                        <Controller
                                            name="name"
                                            control={control}
                                            render={({ field }) => (
                                                <Input
                                                    {...field}
                                                    placeholder="Your Name"
                                                    className={cn(
                                                        "w-full bg-gray-800 text-white border border-gray-700 rounded-md px-4 py-3 transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 placeholder-gray-500",
                                                        errors.name && "border-red-500 focus:ring-red-500"
                                                    )}
                                                    disabled={isSubmitting}
                                                />
                                            )}
                                        />
                                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                                    </div>

                                    {/* Email */}
                                    <div className="group relative">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
                                            Email
                                        </label>
                                        <Controller
                                            name="email"
                                            control={control}
                                            render={({ field }) => (
                                                <Input
                                                    {...field}
                                                    type="email"
                                                    placeholder="Your Email"
                                                    className={cn(
                                                        "w-full bg-gray-800 text-white border border-gray-700 rounded-md px-4 py-3 transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 placeholder-gray-500",
                                                        errors.email && "border-red-500 focus:ring-red-500"
                                                    )}
                                                    disabled={isSubmitting}
                                                />
                                            )}
                                        />
                                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                                    </div>

                                    {/* Subject */}
                                    <div className="group relative">
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-200 mb-1">
                                            Subject
                                        </label>
                                        <Controller
                                            name="subject"
                                            control={control}
                                            render={({ field }) => (
                                                <Input
                                                    {...field}
                                                    placeholder="Subject"
                                                    className={cn(
                                                        "w-full bg-gray-800 text-white border border-gray-700 rounded-md px-4 py-3 transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 placeholder-gray-500",
                                                        errors.subject && "border-red-500 focus:ring-red-500"
                                                    )}
                                                    disabled={isSubmitting}
                                                />
                                            )}
                                        />
                                        {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
                                    </div>

                                    {/* Message */}
                                    <div className="group relative">
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-1">
                                            Message
                                        </label>
                                        <Controller
                                            name="message"
                                            control={control}
                                            render={({ field }) => (
                                                <Textarea
                                                    {...field}
                                                    placeholder="Your Message"
                                                    className={cn(
                                                        "w-full bg-gray-800 text-white border border-gray-700 rounded-md px-4 py-3 min-h-[120px] transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 placeholder-gray-500",
                                                        errors.message && "border-red-500 focus:ring-red-500"
                                                    )}
                                                    disabled={isSubmitting}
                                                />
                                            )}
                                        />
                                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                                    </div>

                                    {/* Submit Button */}
                                    <Button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-full shadow-md hover:shadow-xl hover:scale-[1.03] active:scale-100 transition-all duration-300 font-semibold text-lg"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                                                Sending...
                                            </>
                                        ) : isSubmitSuccessful ? (
                                            "Message Sent!"
                                        ) : (
                                            "Send Message"
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


                            {/* Contact Info */}
                            <div className="bg-gray-900 dark:bg-gray-800 rounded-xl shadow-2xl p-8 backdrop-blur-md bg-opacity-80 border border-purple-500/20">
                                <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                                    <Mail className="mr-3 w-8 h-8 text-purple-400 animate-pulse" />
                                    Contact Information
                                </h3>
                                <div className="space-y-6">
                                    {[
                                        {
                                            icon: <Phone className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />,
                                            text: '+91 9048856828',
                                        },
                                        {
                                            icon: <Mail className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />,
                                            text: 'sanjaiuthupthomas@gmail.com',
                                        },
                                        {
                                            icon: <MapPin className="w-6 h-6 text-purple-400 group-hover:text-purple-300 mt-1" />,
                                            text: 'Kochi, Kerala, India',
                                            isMultiLine: true,
                                        },
                                        {
                                            icon: <Linkedin className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />,
                                            text: 'LinkedIn',
                                            link: 'https://linkedin.com/in/sanjai-uthup-thomas-781407131',
                                        },
                                        {
                                            icon: <Github className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />,
                                            text: 'GitHub',
                                            link: 'https://github.com/Sanjai-Uthup-Thomas',
                                        },
                                    ].map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-start group transition-all duration-300 hover:scale-[1.02] hover:bg-gray-800/50 p-3 rounded-lg"
                                        >
                                            <div className="mr-4">{item.icon}</div>
                                            {item.link ? (
                                                <a
                                                    href={item.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-purple-400 dark:text-purple-300 hover:underline text-lg transition-colors"
                                                >
                                                    {item.text}
                                                </a>
                                            ) : (
                                                <span className="text-gray-300 dark:text-gray-400 text-lg">{item.text}</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default SanjaiPortfolio;
