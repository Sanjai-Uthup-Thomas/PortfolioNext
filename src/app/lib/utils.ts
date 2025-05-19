import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class names or class value objects into a single class string.
 * Uses clsx for conditional class joining and tailwind-merge to handle Tailwind CSS conflicts.
 * 
 * @param inputs - Class values to be merged
 * @returns A string of merged class names
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}