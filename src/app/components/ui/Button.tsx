import React from 'react';
import { cn } from '@/app/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
    // const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 disabled:opacity-50 disabled:pointer-events-none";
    const baseStyles =
      "inline-flex items-center justify-center rounded-full font-medium " +
      "transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 " +
      "disabled:opacity-50 disabled:pointer-events-none active:scale-95";
    const variants = {
      default:
        "relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-500 text-white " +
        "shadow-[0_0_20px_rgba(203,108,230,0.4)] " +
        "hover:shadow-[0_0_35px_rgba(203,108,230,0.7)] " +
        "transition-all duration-300",
      outline: "border border-purple-200 bg-transparent hover:bg-purple-100 text-purple-700",
      secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
      ghost: "bg-transparent hover:bg-gray-100 hover:text-gray-900 text-gray-700",
      link: "bg-transparent underline-offset-4 hover:underline text-purple-600 hover:bg-transparent",
    };

    const sizes = {
      default: "h-10 py-2 px-4",
      sm: "h-8 px-3 text-xs",
      lg: "h-12 px-8 text-lg",
      icon: "h-10 w-10",
    };

    return (
      <button
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";