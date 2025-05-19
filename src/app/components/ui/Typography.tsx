import React from 'react';
import { motion } from 'framer-motion';

// Animation variants
const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
};

interface TypographyProps {
    children: React.ReactNode;
    className?: string;
}

export const SectionHeading: React.FC<TypographyProps> = ({ children, className }) => (
    <motion.h2
        variants={itemVariants}
        className={`text-4xl font-bold text-purple-400 dark:text-purple-300 mb-6 flex items-center justify-center ${className}`}
    >
        {children}
    </motion.h2>
);

export const SubHeading: React.FC<TypographyProps> = ({ children, className }) => (
    <motion.h3
        variants={itemVariants}
        className={`text-2xl font-semibold text-gray-200 dark:text-gray-100 mb-4 ${className}`}
    >
        {children}
    </motion.h3>
);

export const Paragraph: React.FC<TypographyProps> = ({ children, className }) => (
    <motion.p
        variants={itemVariants}
        className={`text-gray-300 dark:text-gray-400 mb-6 leading-relaxed text-lg ${className}`}
    >
        {children}
    </motion.p>
);

export const SkillBadge: React.FC<TypographyProps> = ({ children, className }) => (
    <motion.span
        variants={itemVariants}
        className={`inline-block bg-purple-800 dark:bg-purple-900 text-purple-200 dark:text-purple-100 px-4 py-2 rounded-full text-sm font-semibold mr-3 mb-3 transition-all duration-300 hover:scale-105 shadow-md border border-purple-700 dark:border-purple-600 ${className}`}
    >
        {children}
    </motion.span>
);