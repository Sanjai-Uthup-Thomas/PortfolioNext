import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // 🔥 ADD THIS PART
      animation: {
        marquee: "marquee 25s linear infinite",
        "marquee-reverse": "marquee-reverse 25s linear infinite",
        particle: "particleMove linear infinite",
      },

      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        particleMove: {
          "0%": { transform: "translateY(0px)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateY(-100vh)", opacity: "0" },
        },
      },

      // 💎 OPTIONAL (for extra premium feel)
      boxShadow: {
        glow: "0 0 20px rgba(203, 108, 230, 0.4)",
      },

      colors: {
        neonPurple: "#cb6ce6",
        neonPink: "#ff66c4",
      },
    },
  },
  plugins: [],
};
export default config;
