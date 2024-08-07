import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1400px",
    },
    fontFamily: {
      roboto: "var(--font-roboto)",
      oswald: "var(--font-oswald)",
    },
    extend: {
      fontFamily: {
        playpen: ["Playpen Sans", "cursive"],
      },
      colors: {
        primary: {
          DEFAULT: "#1E3A8A",
          light: "#3B82F6",
        },
        secondary: {
          dark: "#64748B",
          light: "#E5E7EB",
        },
        accent: {
          green: "#10B981",
          yellow: "#F59E0B",
        },
      },

      backgroundImage: {
        hero: "url(/hero.jpg)",
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
